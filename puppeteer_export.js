const puppeteer = require("puppeteer");
const fs = require("fs");

async function run() {
    const cardId = process.argv[2];
    const outputPath = process.argv[3];

    if (!cardId || !outputPath) {
        console.error("❌ Missing arguments: cardId or outputPath");
        process.exit(1);
    }

    const url = `http://localhost:5000/render_single_card/${cardId}`;
    console.log("🌐 Rendering URL:", url);

    const browser = await puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-gpu"
        ]
    });

    const page = await browser.newPage();

    // 2× high-res
    await page.setViewport({
        width: 2000,
        height: 2000,
        deviceScaleFactor: 2
    });

    await page.goto(url, { waitUntil: "networkidle0" });

    await page.waitForFunction("window.EXPORT_READY === true", { timeout: 8000 });
    await new Promise(res => setTimeout(res, 200));

    const element = await page.$(".card");
    if (!element) {
        console.error("❌ .card not found");
        await browser.close();
        process.exit(1);
    }

    // Measure final rendered pixel size
    let box = await element.boundingBox();

    // micro-padding for safe cropping
    const pad = 8;  // try 5px instead of 2px

    box = {
        x: Math.max(box.x - pad, 0),
        y: Math.max(box.y - pad, 0),
        width: box.width + pad * 2,
        height: box.height + pad * 2
    };

    await page.screenshot({
        path: outputPath,
        type: "png",
        omitBackground: true,   // <- VERY important
        clip: box
    });


    await browser.close();
    console.log("✅ Saved PNG:", outputPath);
}

run().catch(err => {
    console.error("🔥 Puppeteer error:", err);
    process.exit(1);
});
