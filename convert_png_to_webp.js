// convert_png_to_webp.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "static", "cards_png");
const outputDir = path.join(__dirname, "static", "cards_webp");

// Make sure output folder exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function convertAll() {
    const files = fs.readdirSync(inputDir).filter(f => f.endsWith(".png"));

    if (files.length === 0) {
        console.log("❌ No PNG files found in:", inputDir);
        return;
    }

    console.log(`🔄 Converting ${files.length} PNGs to lossless WebP...\n`);

    for (const file of files) {
        const input = path.join(inputDir, file);
        const output = path.join(outputDir, file.replace(".png", ".webp"));

        try {
            await sharp(input)
                .webp({ lossless: true })
                .toFile(output);

            console.log(`✔ Converted: ${file} → ${path.basename(output)}`);
        } catch (err) {
            console.error(`❌ Error converting ${file}:`, err);
        }
    }

    console.log("\n🎉 Done! All PNG cards converted to lossless WebP.");
}

convertAll();
