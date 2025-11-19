console.log("✅ card_customizations.js loaded!");
    function applyCardCustomizations() {
        const cards = document.querySelectorAll('.card-wrapper');
            
            cards.forEach(cardWrapper => {
                
                // Check if the card contains a city tile 

                const numberElement = cardWrapper.querySelector('.card-number');
                const number = numberElement ? numberElement.textContent.trim() : null;

                const resource_container = cardWrapper.querySelector('.resource-container');
                const description = cardWrapper.querySelector('.description');
                const production_icon_container = cardWrapper.querySelector('.production-icon-container');

                const description_container_1 = cardWrapper.querySelector('.description-container-1');
                const description_container_2 = cardWrapper.querySelector('.description-container-2');
                const description_container_3 = cardWrapper.querySelector('.description-container-3');
                const description_container_4 = cardWrapper.querySelector('.description-container-4');
                const description_container_5 = cardWrapper.querySelector('.description-container-5');
                const description_container_6 = cardWrapper.querySelector('.description-container-6');
                const description_container_7 = cardWrapper.querySelector('.description-container-7');
                const description_container_8 = cardWrapper.querySelector('.description-container-8');
                const description_container_9 = cardWrapper.querySelector('.description-container-9');

                const globals_box_container = cardWrapper.querySelector('.globals-box-container')

                const party_delegate = cardWrapper.querySelector('.party-delegate');
                const second = cardWrapper.querySelector('.party.second');
                
                const default_box_2 = cardWrapper.querySelector('.default-box-2');
                const default_box_3 = cardWrapper.querySelector('.default-box-3');

                const default_box = cardWrapper.querySelector('.default-box');
                const production_box_size1a = cardWrapper.querySelector('.production-box-size1a');
                const production_box_size2 = cardWrapper.querySelector('.production-box-size2');
                const production_box_size2a = cardWrapper.querySelector('.production-box-size2a');
                const production_box_size3 = cardWrapper.querySelector('.production-box-size3');
                const production_box_size3a = cardWrapper.querySelector('.production-box-size3a');
                const production_box_size4 = cardWrapper.querySelector('.production-box-size4');
                const production_box_size4a = cardWrapper.querySelector('.production-box-size4a')

                const money_icon = cardWrapper.querySelector('.money-resource-container-1');

                const animal_resource_container_1 = cardWrapper.querySelector('.animal-resource-container-1');
                const animal_resource_container_2 = cardWrapper.querySelector('.animal-resource-container-2');

                const ball_resource_container_1 = cardWrapper.querySelector('.ball-resource-container-1')

                const trade_tile_container = cardWrapper.querySelector('.trade-tile-container')
                const colony_tile_container = cardWrapper.querySelector('.colony-tile-container')
                const fleet_tile_container = cardWrapper.querySelector('.fleet-tile-container')

                const tag_event_resource_container_1 = cardWrapper.querySelector('.tag-event-resource-container-1')

                const tag_earth_resource_container_1 = cardWrapper.querySelector('.tag-earth-resource-container-1')

                const tag_money_resource_container_1 = cardWrapper.querySelector('.tag-money-resource-container-1')

                const empty_resource_container_1 = cardWrapper.querySelector('.empty-resource-container-1')

                const card_resource_container_1 = cardWrapper.querySelector('.card-resource-container-1');
                const card_resource_container_2 = cardWrapper.querySelector('.card-resource-container-2');
                const card_resource_container_3 = cardWrapper.querySelector('.card-resource-container-3');
                const card_resource_container_4 = cardWrapper.querySelector('.card-resource-container-4');
                const card_resource_container_5 = cardWrapper.querySelector('.card-resource-container-5');

                const tag_city_resource_container_1 = cardWrapper.querySelector('.tag-city-resource-container-1')

                const black_resource_container_1 = cardWrapper.querySelector('.black-resource-container-1')
                const black_resource_container_2 = cardWrapper.querySelector('.black-resource-container-2')

                const yellow_resource_container_1 = cardWrapper.querySelector('.yellow-resource-container-1')
                const yellow_resource_container_2 = cardWrapper.querySelector('.yellow-resource-container-2')

                const skyblue_resource_container_1 = cardWrapper.querySelector('.skyblue-resource-container-1')

                const asteroid_resource_container_1 = cardWrapper.querySelector('.asteroid-resource-container-1')
                const asteroid_resource_container_2 = cardWrapper.querySelector('.asteroid-resource-container-2')
                const asteroid_resource_container_3 = cardWrapper.querySelector('.asteroid-resource-container-3')
                const asteroid_resource_container_4 = cardWrapper.querySelector('.asteroid-resource-container-4')

                const money_resource_container_1 = cardWrapper.querySelector('.money-resource-container-1');
                const money_resource_container_2 = cardWrapper.querySelector('.money-resource-container-2');
                const money_resource_container_3 = cardWrapper.querySelector('.money-resource-container-3');

                const energy_resource_container_1 = cardWrapper.querySelector('.energy-resource-container-1')

                const floater_resource_container_1 = cardWrapper.querySelector('.floater-resource-container-1')
                const floater_resource_container_2 = cardWrapper.querySelector('.floater-resource-container-2')
                const floater_resource_container_3 = cardWrapper.querySelector('.floater-resource-container-3')
                const floater_resource_container_4 = cardWrapper.querySelector('.floater-resource-container-4')
                const floater_resource_container_5 = cardWrapper.querySelector('.floater-resource-container-5')
                const floater_resource_container_6 = cardWrapper.querySelector('.floater-resource-container-6')

                const steel_resource_container_1 = cardWrapper.querySelector('.steel-resource-container-1');
                const steel_resource_container_2 = cardWrapper.querySelector('.steel-resource-container-2');
                const steel_resource_container_3 = cardWrapper.querySelector('.steel-resource-container-3');

                const delegate_resource_container_1 = cardWrapper.querySelector('.delegate-resource-container-1')
                const delegate_resource_container_2 = cardWrapper.querySelector('.delegate-resource-container-2')

                const influence_resource_container_1 = cardWrapper.querySelector('.influence-resource-container-1')

                const variable_resource_container_1 = cardWrapper.querySelector('.variable-resource-container-1');
                const variable_resource_container_2 = cardWrapper.querySelector('.variable-resource-container-2');
                const variable_resource_container_3 = cardWrapper.querySelector('.variable-resource-container-3');
                const variable_resource_container_4 = cardWrapper.querySelector('.variable-resource-container-4');
                const variable_resource_container_5 = cardWrapper.querySelector('.variable-resource-container-5');

                const heat_resource_container_1 = cardWrapper.querySelector('.heat-resource-container-1');
                const heat_resource_container_2 = cardWrapper.querySelector('.heat-resource-container-2');
                const heat_resource_container_3 = cardWrapper.querySelector('.heat-resource-container-3');

                const plant_resource_container_1 = cardWrapper.querySelector('.plant-resource-container-1');
                const plant_resource_container_2 = cardWrapper.querySelector('.plant-resource-container-2');
                const plant_resource_container_3 = cardWrapper.querySelector('.plant-resource-container-3');
                const plant_resource_container_4 = cardWrapper.querySelector('.plant-resource-container-4');

                const microbe_resource_container_1 = cardWrapper.querySelector('.microbe-resource-container-1');
                const microbe_resource_container_2 = cardWrapper.querySelector('.microbe-resource-container-2');
                const microbe_resource_container_3 = cardWrapper.querySelector('.microbe-resource-container-3');
                const microbe_resource_container_4 = cardWrapper.querySelector('.microbe-resource-container-4');
                const microbe_resource_container_5 = cardWrapper.querySelector('.microbe-resource-container-5');

                const card_icon_small_1 = cardWrapper.querySelector('.card-icon-small-1')
                const card_icon_small_2 = cardWrapper.querySelector('.card-icon-small-2')
                const card_icon_small_3 = cardWrapper.querySelector('.card-icon-small-3')
                const card_icon_small_4 = cardWrapper.querySelector('.card-icon-small-4')

                const red_arrow_resource_container_1 = cardWrapper.querySelector('.red-arrow-resource-container-1');
                const red_arrow_resource_container_2 = cardWrapper.querySelector('.red-arrow-resource-container-2');

                const minus_resource_container_1 = cardWrapper.querySelector('.minus-resource-container-1');
                const minus_resource_container_2 = cardWrapper.querySelector('.minus-resource-container-2');

                const plus_resource_container_1 = cardWrapper.querySelector('.plus-resource-container-1')
                const plus_resource_container_2 = cardWrapper.querySelector('.plus-resource-container-2')

                const tag_plant_resource_container_1 = cardWrapper.querySelector('.tag-plant-resource-container-1');

                const tag_building_resource_container_1 = cardWrapper.querySelector('.tag-building-resource-container-1');

                const tag_space_resource_container_1 = cardWrapper.querySelector('.tag-space-resource-container-1');

                const tag_jovian_resource_container_1 = cardWrapper.querySelector('.tag-jovian-resource-container-1');

                const wild_resource_container_1 = cardWrapper.querySelector('.wild-resource-container-1')

                const tag_venus_resource_container_1 = cardWrapper.querySelector('.tag-venus-resource-container-1')
                const tag_venus_resource_container_2 = cardWrapper.querySelector('.tag-venus-resource-container-2')
                const tag_venus_resource_container_3 = cardWrapper.querySelector('.tag-venus-resource-container-3')

                const tag_venus_1_resource_container_1 = cardWrapper.querySelector('.tag-venus-1-resource-container-1')
                const tag_venus_2_resource_container_1 = cardWrapper.querySelector('.tag-venus-2-resource-container-1')
                const tag_venus_3_resource_container_1 = cardWrapper.querySelector('.tag-venus-3-resource-container-1')

                const rating_container = cardWrapper.querySelector('.rating-container');
                const rating_1_container = cardWrapper.querySelector('.rating-1-container');
                const rating_2_container = cardWrapper.querySelector('.rating-2-container');
                const rating_3_container = cardWrapper.querySelector('.rating-3-container');
                
                const titanium_resource_container_1 = cardWrapper.querySelector('.titanium-resource-container-1');
                const titanium_resource_container_2 = cardWrapper.querySelector('.titanium-resource-container-2');

                const ocean_tile_1_container = cardWrapper.querySelector('.ocean-tile-1-container');
                const ocean_tile_2_container = cardWrapper.querySelector('.ocean-tile-2-container');

                const temperature_tile_1_container = cardWrapper.querySelector('.temperature-tile-1-container');
                const temperature_tile_2_container = cardWrapper.querySelector('.temperature-tile-2-container');
                const temperature_tile_3_container = cardWrapper.querySelector('.temperature-tile-3-container');

                const city_tile_1_container = cardWrapper.querySelector('.city-tile-1-container')
                const city_tile_2_container = cardWrapper.querySelector('.city-tile-2-container')

                const oxygen_tile_1_container = cardWrapper.querySelector('.oxygen-tile-1-container')
                const oxygen_tile_2_container = cardWrapper.querySelector('.oxygen-tile-2-container')

                const science_resource_container_1 = cardWrapper.querySelector('.science-resource-container-1');
                const science_resource_container_2 = cardWrapper.querySelector('.science-resource-container-2');
                const tag_science_resource_container_1 = cardWrapper.querySelector('.tag-science-resource-container-1');
                const tag_science_resource_container_2 = cardWrapper.querySelector('.tag-science-resource-container-2');
                const tag_science_resource_container_3 = cardWrapper.querySelector('.tag-science-resource-container-3');

                const venus_tile_1_container = cardWrapper.querySelector('.venus-tile-1-container')
                const venus_tile_2_container = cardWrapper.querySelector('.venus-tile-2-container')
                const venus_tile_3_container = cardWrapper.querySelector('.venus-tile-3-container')

                const temperature_tile_container = cardWrapper.querySelector('.temperature-tile-container');
                const oxygen_tile_container = cardWrapper.querySelector('.oxygen-tile-container');
                const special_tile_container = cardWrapper.querySelector('.special-tile-container');
                const city_tile_small_container = cardWrapper.querySelector('.city-tile-small-container');
                const city_tile_container = cardWrapper.querySelector('.city-tile-container');
                const ocean_tile_container = cardWrapper.querySelector('.ocean-tile-container');
                const greenery_tile_container = cardWrapper.querySelector('.greenery-tile-container');
                const venus_tile_container = cardWrapper.querySelector('.venus-tile-container')
                


                if (number === "#002") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '116px';
  production_box_size1a.style.left = '80px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '196px';
  description_container_1.style.left = '0px';

}

if (number === "#003") {
  default_box.style.position = 'absolute';
  default_box.style.top = '92px';
  default_box.style.left = '79px';

  temperature_tile_container.style.position = 'absolute';
  temperature_tile_container.style.top = '93px';
  temperature_tile_container.style.left = '138px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '145px';
  description_container_1.style.left = '0px';

}

if (number === "#004") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '116px';
  production_box_size2a.style.left = '60px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '198px';
  description_container_1.style.left = '0px';

}

                if (number === "#005") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '117px';
  resource_container.style.left = '33px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '149px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '213px';
  description_container_2.style.left = '0px';

}

            
if (number === "#006") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '114px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '84px';
  resource_container.style.left = '42px';

}

if (number === "#007") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '83px';
  resource_container.style.left = '8px';

  city_tile_small_container.style.position = 'absolute';
  city_tile_small_container.style.top = '83px';
  city_tile_small_container.style.left = '147px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '0px';
  variable_resource_container_2.style.left = '167px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '122px';
  description_container_1.style.left = '1px';

}

if (number === "#008") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '118px';
  production_box_size2a.style.left = '28px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '151px';
  city_tile_container.style.left = '144px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '200px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '271px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '283px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

  description_container_4.style.position = 'absolute';
  description_container_4.style.top = '296px';
  description_container_4.style.left = '0px';
  description_container_4.style.textAlign = 'left';

}

if (number === "#009") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '148px';
  resource_container.style.left = '42px';

  temperature_tile_container.style.position = 'absolute';
  temperature_tile_container.style.top = '92px';
  temperature_tile_container.style.left = '105px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '225px';
  description_container_1.style.left = '0px';

  minus_resource_container_1.style.position = 'absolute';
  minus_resource_container_1.style.top = '41px';
  minus_resource_container_1.style.left = '0px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '40px';
  plant_resource_container_1.style.left = '27px';

  plant_resource_container_3.style.position = 'absolute';
  plant_resource_container_3.style.top = '40px';
  plant_resource_container_3.style.left = '95px';

  plant_resource_container_2.style.position = 'absolute';
  plant_resource_container_2.style.top = '40px';
  plant_resource_container_2.style.left = '61px';

  titanium_resource_container_2.style.position = 'absolute';
  titanium_resource_container_2.style.top = '0px';
  titanium_resource_container_2.style.left = '73px';

  titanium_resource_container_1.style.position = 'absolute';
  titanium_resource_container_1.style.top = '0px';
  titanium_resource_container_1.style.left = '39px';

}


if (number === "#010") {
  temperature_tile_container.style.position = 'absolute';
  temperature_tile_container.style.top = '87px';
  temperature_tile_container.style.left = '88px';

  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '88px';
  ocean_tile_container.style.left = '113px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '154px';
  resource_container.style.left = '38px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '187px';
  description_container_1.style.left = '0px';

}

if (number === "#011") {
  temperature_tile_2_container.style.position = 'absolute';
  temperature_tile_2_container.style.top = '91px';
  temperature_tile_2_container.style.left = '115px';

  temperature_tile_1_container.style.position = 'absolute';
  temperature_tile_1_container.style.top = '91px';
  temperature_tile_1_container.style.left = '91px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '151px';
  resource_container.style.left = '29px';

  minus_resource_container_1.style.position = 'absolute';
  minus_resource_container_1.style.top = '34px';
  minus_resource_container_1.style.left = '2px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '33px';
  plant_resource_container_1.style.left = '37px';

  plant_resource_container_2.style.position = 'absolute';
  plant_resource_container_2.style.top = '33px';
  plant_resource_container_2.style.left = '70px';

  plant_resource_container_3.style.position = 'absolute';
  plant_resource_container_3.style.top = '33px';
  plant_resource_container_3.style.left = '106px';

  plant_resource_container_4.style.position = 'absolute';
  plant_resource_container_4.style.top = '33px';
  plant_resource_container_4.style.left = '140px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '222px';
  description_container_1.style.left = '0px';

}


if (number === "#012") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '93px';
  resource_container.style.left = '11px';

  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '86px';
  ocean_tile_container.style.left = '140px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '193px';
  description_container_2.style.left = '22px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '132px';
  description_container_1.style.left = '0px';

}


if (number === "#013") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '115px';
  description_container_1.style.left = '23px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '82px';
  resource_container.style.left = '40px';

  default_box.style.position = 'absolute';
  default_box.style.top = '155px';
  default_box.style.left = '96px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '212px';
  description_container_2.style.left = '0px';

}

if (number === "#014") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '92px';
  resource_container.style.left = '41px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '130px';
  description_container_1.style.left = '0px';

}

if (number === "#015") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '86px';
  production_box_size1a.style.left = '31px';

  rating_container.style.position = 'absolute';
  rating_container.style.top = '84px';
  rating_container.style.left = '149px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '45px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '135px';
  description_container_1.style.left = '0px';

}

if (number === "#016") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '114px';
  production_box_size1a.style.left = '39px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '150px';
  city_tile_container.style.left = '128px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '205px';
  resource_container.style.left = '34px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '232px';
  description_container_1.style.left = '0px';
  description_container_1.style.textAlign = 'left';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '269px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '281px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

  description_container_4.style.position = 'absolute';
  description_container_4.style.top = '295px';
  description_container_4.style.left = '0px';
  description_container_4.style.textAlign = 'left';

}

if (number === "#017") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '86px';
  production_box_size1a.style.left = '51px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '119px';
  city_tile_container.style.left = '137px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '173px';
  description_container_1.style.left = '0px';

}
if (number === "#018") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '118px';
  production_box_size2.style.left = '73px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '200px';
  description_container_1.style.left = '0px';

}

if (number === "#019") {
  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '135px';
  ocean_tile_container.style.left = '93px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '180px';
  description_container_1.style.left = '0px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '0px';
  variable_resource_container_2.style.left = '57px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '88px';
  resource_container.style.left = '21px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '0px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '0px';
  plant_resource_container_1.style.left = '11px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '0px';
  microbe_resource_container_1.style.left = '87px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '0px';
  variable_resource_container_3.style.left = '138px';

  animal_resource_container_1.style.position = 'absolute';
  animal_resource_container_1.style.top = '0px';
  animal_resource_container_1.style.left = '176px';

  variable_resource_container_4.style.position = 'absolute';
  variable_resource_container_4.style.top = '1px';
  variable_resource_container_4.style.left = '205px';

}


if (number === "#020") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '89px';
  resource_container.style.left = '39px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '120px';
  description_container_1.style.left = '0px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '177px';
  city_tile_container.style.left = '95px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '239px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

}

if (number === "#021") {
  default_box.style.position = 'absolute';
  default_box.style.top = '93px';
  default_box.style.left = '65px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '95px';
  city_tile_container.style.left = '126px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '145px';
  description_container_1.style.left = '0px';

}

if (number === "#022") {
  production_box_size3a.style.position = 'absolute';
  production_box_size3a.style.top = '88px';
  production_box_size3a.style.left = '25px';

  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '123px';
  ocean_tile_container.style.left = '177px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

}

if (number === "#023") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '130px';
  resource_container.style.left = '71px';

  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '124px';
  ocean_tile_container.style.left = '61px';

  plant_resource_container_3.style.position = 'absolute';
  plant_resource_container_3.style.top = '87px';
  plant_resource_container_3.style.left = '33px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '170px';
  description_container_1.style.left = '2px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '253px';
  description_container_2.style.left = '2px';

}



if (number === "#024") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '117px';
  resource_container.style.left = '37px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '145px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '201px';
  description_container_2.style.left = '0px';

}

if (number === "#025") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '38px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '130px';
  description_container_1.style.left = '0px';

}

if (number === "#026") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '122px';
  resource_container.style.left = '39px';

  default_box.style.position = 'absolute';
  default_box.style.top = '161px';
  default_box.style.left = '98px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '207px';
  description_container_1.style.left = '0px';

}

if (number === "#028") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '95px';
  resource_container.style.left = '43px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '174px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '124px';
  description_container_1.style.left = '0px';

}


if (number === "#029") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '117px';
  production_box_size1a.style.left = '37px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '150px';
  city_tile_container.style.left = '118px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '204px';
  description_container_1.style.left = '0px';

}

if (number === "#030") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '86px';
  production_box_size2a.style.left = '65px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '206px';
  description_container_1.style.left = '0px';

}

if (number === "#031") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '84px';
  resource_container.style.left = '8px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '117px';
  description_container_1.style.left = '0px';

  heat_resource_container_3.style.position = 'absolute';
  heat_resource_container_3.style.top = '0px';
  heat_resource_container_3.style.left = '154px';

  heat_resource_container_2.style.position = 'absolute';
  heat_resource_container_2.style.top = '0px';
  heat_resource_container_2.style.left = '186px';

}

if (number === "#032") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '91px';
  production_box_size2a.style.left = '37px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '125px';
  city_tile_container.style.left = '154px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '181px';
  description_container_1.style.left = '0px';

}

if (number === "#033") {
  oxygen_tile_container.style.position = 'absolute';
  oxygen_tile_container.style.top = '134px';
  oxygen_tile_container.style.left = '159px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '92px';
  resource_container.style.left = '43px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '51px';
  variable_resource_container_1.style.left = '1px';

  microbe_resource_container_2.style.position = 'absolute';
  microbe_resource_container_2.style.top = '52px';
  microbe_resource_container_2.style.left = '23px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '50px';
  red_arrow_resource_container_2.style.left = '89px';

  microbe_resource_container_3.style.position = 'absolute';
  microbe_resource_container_3.style.top = '51px';
  microbe_resource_container_3.style.left = '55px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '0px';
  microbe_resource_container_1.style.left = '87px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '49px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '191px';
  description_container_1.style.left = '0px';

}

if (number === "#034") {
  temperature_tile_container.style.position = 'absolute';
  temperature_tile_container.style.top = '157px';
  temperature_tile_container.style.left = '184px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '121px';
  resource_container.style.left = '53px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '45px';
  variable_resource_container_1.style.left = '0px';

  microbe_resource_container_2.style.position = 'absolute';
  microbe_resource_container_2.style.top = '46px';
  microbe_resource_container_2.style.left = '22px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '46px';
  red_arrow_resource_container_2.style.left = '92px';

  microbe_resource_container_3.style.position = 'absolute';
  microbe_resource_container_3.style.top = '46px';
  microbe_resource_container_3.style.left = '56px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '0px';
  microbe_resource_container_1.style.left = '71px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '37px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '210px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '276px';
  description_container_2.style.left = '50px';

}

if (number === "#035") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '118px';
  resource_container.style.left = '41px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '151px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '198px';
  description_container_2.style.left = '0px';

}

if (number === "#036") {
  rating_2_container.style.position = 'absolute';
  rating_2_container.style.top = '96px';
  rating_2_container.style.left = '127px';

  rating_1_container.style.position = 'absolute';
  rating_1_container.style.top = '96px';
  rating_1_container.style.left = '67px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '138px';
  description_container_1.style.left = '25px';

}

if (number === "#037") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '87px';
  production_box_size3.style.left = '60px';
  production_box_size3.style.height = '67px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '96px';
  resource_container.style.left = '40px';

  rating_1_container.style.position = 'absolute';
  rating_1_container.style.top = '178px';
  rating_1_container.style.left = '55px';

  rating_2_container.style.position = 'absolute';
  rating_2_container.style.top = '178px';
  rating_2_container.style.left = '108px';

  temperature_tile_container.style.position = 'absolute';
  temperature_tile_container.style.top = '175px';
  temperature_tile_container.style.left = '168px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '34px';
  plant_resource_container_1.style.left = '99px';

  tag_plant_resource_container_1.style.position = 'absolute';
  tag_plant_resource_container_1.style.top = '35px';
  tag_plant_resource_container_1.style.left = '37px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '35px';
  variable_resource_container_2.style.left = '23px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '107px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '34px';
  variable_resource_container_3.style.left = '77px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '221px';
  description_container_1.style.left = '0px';

}

if (number === "#038") {
  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '85px';
  city_tile_container.style.left = '69px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '66px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '130px';
  description_container_1.style.left = '0px';

}

if (number === "#039") {
  temperature_tile_1_container.style.position = 'absolute';
  temperature_tile_1_container.style.top = '95px';
  temperature_tile_1_container.style.left = '87px';

  temperature_tile_2_container.style.position = 'absolute';
  temperature_tile_2_container.style.top = '95px';
  temperature_tile_2_container.style.left = '109px';

  temperature_tile_3_container.style.position = 'absolute';
  temperature_tile_3_container.style.top = '95px';
  temperature_tile_3_container.style.left = '131px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '156px';
  resource_container.style.left = '37px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '41px';
  plant_resource_container_1.style.left = '91px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '39px';
  variable_resource_container_1.style.left = '78px';

  minus_resource_container_1.style.position = 'absolute';
  minus_resource_container_1.style.top = '40px';
  minus_resource_container_1.style.left = '46px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '231px';
  description_container_1.style.left = '0px';

}

if (number === "#040") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '87px';
  production_box_size2.style.left = '73px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '137px';
  description_container_1.style.left = '0px';

}

if (number === "#041") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '86px';
  production_box_size1a.style.left = '84px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '167px';
  description_container_1.style.left = '0px';

}

if (number === "#042") {
  default_box.style.position = 'absolute';
  default_box.style.top = '119px';
  default_box.style.left = '91px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '167px';
  description_container_1.style.left = '0px';

}

if (number === "#043") {
  production_box_size3a.style.position = 'absolute';
  production_box_size3a.style.top = '87px';
  production_box_size3a.style.left = '48px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

}

if (number === "#044") {
  default_box.style.position = 'absolute';
  default_box.style.top = '120px';
  default_box.style.left = '51px';

  special_tile_container.style.position = 'absolute';
  special_tile_container.style.top = '119px';
  special_tile_container.style.left = '109px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '127px';
  resource_container.style.left = '80px';
  resource_container.style.textAlign = 'left';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '166px';
  description_container_1.style.left = '0px';

}

if (number === "#045") {
  production_box_size3a.style.position = 'absolute';
  production_box_size3a.style.top = '89px';
  production_box_size3a.style.left = '44px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '166px';
  description_container_1.style.left = '0px';

}

if (number === "#046") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '117px';
  production_box_size2.style.left = '67px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '163px';
  description_container_1.style.left = '0px';

}

if (number === "#047") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '117px';
  production_box_size2.style.left = '42px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '126px';
  resource_container.style.left = '80px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '168px';
  description_container_1.style.left = '0px';

}

if (number === "#048") {
  default_box.style.position = 'absolute';
  default_box.style.top = '86px';
  default_box.style.left = '97px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '131px';
  description_container_1.style.left = '0px';

}

if (number === "#049") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '85px';
  resource_container.style.left = '38px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '114px';
  description_container_1.style.left = '20px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '147px';
  description_container_2.style.left = '20px';

}

if (number === "#050") {
  minus_resource_container_1.style.position = 'absolute';
  minus_resource_container_1.style.top = '1px';
  minus_resource_container_1.style.left = '5px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '17px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '122px';
  description_container_1.style.left = '0px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '0px';
  plant_resource_container_1.style.left = '154px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '0px';
  variable_resource_container_3.style.left = '136px';

  minus_resource_container_2.style.position = 'absolute';
  minus_resource_container_2.style.top = '8px';
  minus_resource_container_2.style.left = '122px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '0px';
  variable_resource_container_2.style.left = '90px';

  animal_resource_container_1.style.position = 'absolute';
  animal_resource_container_1.style.top = '0px';
  animal_resource_container_1.style.left = '48px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '1px';
  variable_resource_container_1.style.left = '34px';

}

if (number === "#051") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '85px';
  production_box_size2a.style.left = '64px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '136px';
  description_container_1.style.left = '0px';

}

if (number === "#052") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '119px';
  resource_container.style.left = '37px';

  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '187px';
  production_box_size1a.style.left = '89px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '150px';
  description_container_1.style.left = '0px';

  description_container_4.style.position = 'absolute';
  description_container_4.style.top = '285px';
  description_container_4.style.left = '0px';
  description_container_4.style.textAlign = 'left';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '272px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '244px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

}

if (number === "#053") {
  ocean_tile_1_container.style.position = 'absolute';
  ocean_tile_1_container.style.top = '117px';
  ocean_tile_1_container.style.left = '74px';

  ocean_tile_2_container.style.position = 'absolute';
  ocean_tile_2_container.style.top = '118px';
  ocean_tile_2_container.style.left = '118px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '166px';
  description_container_1.style.left = '0px';

}

if (number === "#054") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '120px';
  resource_container.style.left = '31px';

  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '187px';
  production_box_size1a.style.left = '83px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '154px';
  description_container_1.style.left = '0px';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '270px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

  description_container_4.style.position = 'absolute';
  description_container_4.style.top = '283px';
  description_container_4.style.left = '0px';
  description_container_4.style.textAlign = 'left';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '243px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

}

if (number === "#055") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '166px';
  resource_container.style.left = '80px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '0px';
  plant_resource_container_1.style.left = '101px';

  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '120px';
  production_box_size3.style.left = '16px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '202px';
  description_container_1.style.left = '0px';

}

if (number === "#056") {
  default_box.style.position = 'absolute';
  default_box.style.top = '86px';
  default_box.style.left = '95px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '131px';
  description_container_1.style.left = '15px';

}

if (number === "#057") {
  default_box.style.position = 'absolute';
  default_box.style.top = '86px';
  default_box.style.left = '95px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '131px';
  description_container_1.style.left = '15px';

}

if (number === "#058") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '120px';
  production_box_size3.style.left = '56px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '199px';
  description_container_1.style.left = '0px';

}

if (number === "#059") {
  greenery_tile_container.style.position = 'absolute';
  greenery_tile_container.style.top = '118px';
  greenery_tile_container.style.left = '89px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '167px';
  description_container_1.style.left = '0px';

}

if (number === "#060") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '119px';
  production_box_size3.style.left = '17px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '126px';
  resource_container.style.left = '80px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '5px';
  plant_resource_container_1.style.left = '77px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

}

if (number === "#061") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '119px';
  production_box_size1a.style.left = '79px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '202px';
  description_container_1.style.left = '0px';

}

if (number === "#062") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '123px';
  description_container_1.style.left = '78px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '94px';
  resource_container.style.left = '41px';

}

if (number === "#063") {
  oxygen_tile_container.style.position = 'absolute';
  oxygen_tile_container.style.top = '81px';
  oxygen_tile_container.style.left = '92px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '135px';
  resource_container.style.left = '37px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

}

if (number === "#064") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '139px';
  production_box_size3.style.left = '62px';
  production_box_size3.style.color = 'black'
  production_box_size3.style.fontWeight = 'bold'

  special_tile_container.style.position = 'absolute';
  special_tile_container.style.top = '83px';
  special_tile_container.style.left = '95px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '88px';
  resource_container.style.left = '75px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '64px';
  variable_resource_container_2.style.left = '111px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '186px';
  description_container_1.style.left = '0px';

}

if (number === "#065") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '86px';
  production_box_size2a.style.left = '66px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '170px';
  description_container_1.style.left = '0px';

}

if (number === "#066") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '81px';
  description_container_1.style.left = '0px';

}

if (number === "#067") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '139px';
  production_box_size3.style.left = '62px';
  production_box_size3.style.color = 'black'
  production_box_size3.style.fontWeight = 'bold'

  special_tile_container.style.position = 'absolute';
  special_tile_container.style.top = '83px';
  special_tile_container.style.left = '95px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '88px';
  resource_container.style.left = '75px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '64px';
  variable_resource_container_2.style.left = '111px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '186px';
  description_container_1.style.left = '0px';

}

if (number === "#068") {
  default_box.style.position = 'absolute';
  default_box.style.top = '88px';
  default_box.style.left = '95px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '133px';
  description_container_1.style.left = '20px';

}

if (number === "#069") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '120px';
  resource_container.style.left = '36px';

  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '191px';
  production_box_size1a.style.left = '84px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '148px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '243px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

}

if (number === "#070") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '92px';
  resource_container.style.left = '43px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '121px';
  description_container_1.style.left = '0px';

}

if (number === "#071") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '162px';
  description_container_1.style.left = '0px';

  titanium_resource_container_1.style.position = 'absolute';
  titanium_resource_container_1.style.top = '0px';
  titanium_resource_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '83px';
  resource_container.style.left = '68px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '1px';
  money_resource_container_1.style.left = '62px';

  steel_resource_container_1.style.position = 'absolute';
  steel_resource_container_1.style.top = '43px';
  steel_resource_container_1.style.left = '1px';

  money_resource_container_2.style.position = 'absolute';
  money_resource_container_2.style.top = '41px';
  money_resource_container_2.style.left = '63px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '42px';
  variable_resource_container_2.style.left = '39px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '43px';

}

if (number === "#072") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '118px';
  resource_container.style.left = '41px';

  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '178px';
  production_box_size2a.style.left = '67px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '150px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '230px';
  description_container_2.style.left = '0px';

}

if (number === "#073") {
  tag_science_resource_container_1.style.position = 'absolute';
  tag_science_resource_container_1.style.top = '5px';
  tag_science_resource_container_1.style.left = '12px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '87px';
  resource_container.style.left = '44px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '5px';
  variable_resource_container_1.style.left = '49px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '5px';
  card_resource_container_1.style.left = '62px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '5px';
  variable_resource_container_2.style.left = '96px';

  card_resource_container_2.style.position = 'absolute';
  card_resource_container_2.style.top = '0px';
  card_resource_container_2.style.left = '114px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '130px';
  description_container_1.style.left = '1px';

}

if (number === "#074") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '81px';
  resource_container.style.left = '41px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '147px';
  description_container_1.style.left = '0px';

}

if (number === "#075") {
  oxygen_tile_container.style.position = 'absolute';
  oxygen_tile_container.style.top = '90px';
  oxygen_tile_container.style.left = '71px';

  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '88px';
  ocean_tile_container.style.left = '121px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '144px';
  resource_container.style.left = '42px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '174px';
  description_container_1.style.left = '0px';

}

if (number === "#076") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '93px';
  resource_container.style.left = '13px';

  default_box.style.position = 'absolute';
  default_box.style.top = '89px';
  default_box.style.left = '129px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '131px';
  description_container_1.style.left = '0px';

}

if (number === "#077") {
  default_box.style.position = 'absolute';
  default_box.style.top = '84px';
  default_box.style.left = '94px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '136px';
  resource_container.style.left = '40px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '167px';
  description_container_1.style.left = '0px';

}

if (number === "#078") {
  ocean_tile_2_container.style.position = 'absolute';
  ocean_tile_2_container.style.top = '94px';
  ocean_tile_2_container.style.left = '118px';

  ocean_tile_1_container.style.position = 'absolute';
  ocean_tile_1_container.style.top = '94px';
  ocean_tile_1_container.style.left = '74px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '142px';
  description_container_1.style.left = '55px';

}

if (number === "#079") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '198px';
  production_box_size1a.style.left = '83px';  
  production_box_size1a.style.color = 'black';
  production_box_size1a.style.fontWeight = 'bold';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '121px';
  resource_container.style.left = '33px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '151px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '256px';
  description_container_2.style.left = '0px';

}

if (number === "#080") {
  ocean_tile_2_container.style.position = 'absolute';
  ocean_tile_2_container.style.top = '154px';
  ocean_tile_2_container.style.left = '118px';

  ocean_tile_1_container.style.position = 'absolute';
  ocean_tile_1_container.style.top = '154px';
  ocean_tile_1_container.style.left = '71px';

  temperature_tile_2_container.style.position = 'absolute';
  temperature_tile_2_container.style.top = '95px';
  temperature_tile_2_container.style.left = '116px';

  temperature_tile_1_container.style.position = 'absolute';
  temperature_tile_1_container.style.top = '95px';
  temperature_tile_1_container.style.left = '93px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '212px';
  resource_container.style.left = '27px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '248px';
  description_container_1.style.left = '0px';

}

if (number === "#081") {
  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '92px';
  city_tile_container.style.left = '79px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '101px';
  resource_container.style.left = '63px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '137px';
  description_container_1.style.left = '0px';

}

if (number === "#082") {
  default_box.style.position = 'absolute';
  default_box.style.top = '87px';
  default_box.style.left = '95px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '132px';
  description_container_1.style.left = '0px';

}

if (number === "#083") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '88px';
  production_box_size3.style.left = '57px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '138px';
  description_container_1.style.left = '0px';

}

if (number === "#085") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '89px';
  production_box_size1a.style.left = '84px';

  special_tile_container.style.position = 'absolute';
  special_tile_container.style.top = '214px';
  special_tile_container.style.left = '95px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '167px';
  description_container_1.style.left = '0px';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '279px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '267px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

}

if (number === "#086") {
  default_box.style.position = 'absolute';
  default_box.style.top = '91px';
  default_box.style.left = '130px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '100px';
  resource_container.style.left = '1px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '137px';
  description_container_1.style.left = '0px';

}

if (number === "#087") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '122px';
  resource_container.style.left = '72px';

  default_box.style.position = 'absolute';
  default_box.style.top = '115px';
  default_box.style.left = '36px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '162px';
  description_container_1.style.left = '0px';

}

if (number === "#088") {
  default_box.style.position = 'absolute';
  default_box.style.top = '118px';
  default_box.style.left = '63px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '126px';
  resource_container.style.left = '71px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '164px';
  description_container_1.style.left = '0px';

}

if (number === "#089") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '87px';
  production_box_size2a.style.left = '63px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '170px';
  description_container_1.style.left = '0px';

}

if (number === "#090") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '87px';
  resource_container.style.left = '37px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '128px';
  description_container_1.style.left = '0px';

}

if (number === "#091") {
  default_box.style.position = 'absolute';
  default_box.style.top = '120px';
  default_box.style.left = '90px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '162px';
  description_container_1.style.left = '0px';

}

if (number === "#092") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '87px';
  production_box_size3.style.left = '54px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '134px';
  description_container_1.style.left = '0px';

}

if (number === "#093") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '122px';
  production_box_size2.style.left = '23px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '130px';
  resource_container.style.left = '80px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '172px';
  description_container_1.style.left = '0px';

}

if (number === "#094") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '195px';
  production_box_size1a.style.left = '84px';
  production_box_size1a.style.fontWeight = 'bold';
  production_box_size1a.style.color = 'black';

  production_icon_container.style.width = '10px'
  production_icon_container.style.left = '-8px'

  resource_container.style.position = 'absolute';
  resource_container.style.top = '121px';
  resource_container.style.left = '36px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '150px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '249px';
  description_container_2.style.left = '0px';

}

if (number === "#095") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '90px';
  resource_container.style.left = '38px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '120px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '221px';
  description_container_2.style.left = '0px';

}

if (number === "#096") {
  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '94px';
  city_tile_container.style.left = '124px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '100px';
  resource_container.style.left = '24px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '152px';
  description_container_1.style.left = '20px';

}

if (number === "#097") {
  special_tile_container.style.position = 'absolute';
  special_tile_container.style.top = '94px';
  special_tile_container.style.left = '92px';

  temperature_tile_1_container.style.position = 'absolute';
  temperature_tile_1_container.style.top = '150px';
  temperature_tile_1_container.style.left = '97px';

  temperature_tile_2_container.style.position = 'absolute';
  temperature_tile_2_container.style.top = '150px';
  temperature_tile_2_container.style.left = '118px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '205px';
  description_container_1.style.left = '0px';

}

if (number === "#098") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '90px';
  production_box_size2a.style.left = '65px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '172px';
  description_container_1.style.left = '0px';

}

if (number === "#099") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '87px';
  production_box_size2a.style.left = '64px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '136px';
  description_container_1.style.left = '0px';

}

if (number === "#100") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '89px';
  production_box_size1a.style.left = '81px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '170px';
  description_container_1.style.left = '0px';

}

if (number === "#101") {
  oxygen_tile_container.style.position = 'absolute';
  oxygen_tile_container.style.top = '87px';
  oxygen_tile_container.style.left = '147px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '96px';
  resource_container.style.left = '15px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '142px';
  description_container_1.style.left = '0px';

}

if (number === "#102") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '86px';
  production_box_size2a.style.left = '62px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '135px';
  description_container_1.style.left = '0px';

}

if (number === "#103") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '89px';
  resource_container.style.left = '16px';

  oxygen_tile_container.style.position = 'absolute';
  oxygen_tile_container.style.top = '81px';
  oxygen_tile_container.style.left = '164px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '121px';
  description_container_1.style.left = '0px';

}

if (number === "#104") {
  oxygen_tile_container.style.position = 'absolute';
  oxygen_tile_container.style.top = '86px';
  oxygen_tile_container.style.left = '156px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '94px';
  resource_container.style.left = '19px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '136px';
  description_container_1.style.left = '0px';

}

if (number === "#105") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '122px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '42px';

}

if (number === "#106") {
  default_box.style.position = 'absolute';
  default_box.style.top = '91px';
  default_box.style.left = '95px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '134px';
  description_container_1.style.left = '0px';

}

if (number === "#107") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '124px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '93px';
  resource_container.style.left = '44px';

}

if (number === "#108") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '114px';
  production_box_size1a.style.left = '34px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '148px';
  city_tile_container.style.left = '123px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '203px';
  resource_container.style.left = '27px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '235px';
  description_container_1.style.left = '0px';
  description_container_1.style.textAlign = 'left';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '271px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '283px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

  description_container_4.style.position = 'absolute';
  description_container_4.style.top = '294px';
  description_container_4.style.left = '0px';
  description_container_4.style.textAlign = 'left';

}

if (number === "#109") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '39px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '122px';
  description_container_1.style.left = '0px';

}
if (number === "#110") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '86px';
  resource_container.style.left = '40px';

  default_box.style.position = 'absolute';
  default_box.style.top = '164px';
  default_box.style.left = '98px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '210px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '118px';
  description_container_2.style.left = '0px';

}

if (number === "#111") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '97px';
  description_container_1.style.left = '0px';

}

if (number === "#112") {
  rating_1_container.style.position = 'absolute';
  rating_1_container.style.top = '94px';
  rating_1_container.style.left = '62px';

  rating_2_container.style.position = 'absolute';
  rating_2_container.style.top = '94px';
  rating_2_container.style.left = '118px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '136px';
  description_container_1.style.left = '45px';

}

if (number === "#113") {
  default_box.style.position = 'absolute';
  default_box.style.top = '86px';
  default_box.style.left = '92px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '130px';
  description_container_1.style.left = '0px';

}

if (number === "#115") {
  production_box_size4.style.position = 'absolute';
  production_box_size4.style.top = '83px';
  production_box_size4.style.left = '39px';
  production_box_size4.style.color = 'black';
  production_box_size4.style.fontWeight = 'bold';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '132px';
  description_container_1.style.left = '0px';

}

if (number === "#116") {
  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '122px';
  ocean_tile_container.style.left = '93px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '168px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '128px';
  resource_container.style.left = '66px';

}
if (number === "#117") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '86px';
  production_box_size2.style.left = '76px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '135px';
  description_container_1.style.left = '0px';

}

if (number === "#118") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '119px';
  production_box_size2.style.left = '42px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '163px';
  resource_container.style.left = '80px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '0px';
  plant_resource_container_1.style.left = '61px';

  plant_resource_container_2.style.position = 'absolute';
  plant_resource_container_2.style.top = '0px';
  plant_resource_container_2.style.left = '96px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '200px';
  description_container_1.style.left = '0px';

}

if (number === "#120") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '89px';
  production_box_size1a.style.left = '61px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '126px';
  city_tile_container.style.left = '138px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '176px';
  description_container_1.style.left = '0px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '57px';
  variable_resource_container_1.style.left = '197px';

}

if (number === "#121") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '92px';
  resource_container.style.left = '7px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '124px';
  description_container_1.style.left = '0px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '189px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '0px';
  variable_resource_container_3.style.left = '156px';

  steel_resource_container_1.style.position = 'absolute';
  steel_resource_container_1.style.top = '0px';
  steel_resource_container_1.style.left = '111px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '0px';
  variable_resource_container_2.style.left = '74px';

  titanium_resource_container_1.style.position = 'absolute';
  titanium_resource_container_1.style.top = '0px';
  titanium_resource_container_1.style.left = '25px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '8px';

}



if (number === "#122") {
  default_box.style.position = 'absolute';
  default_box.style.top = '121px';
  default_box.style.left = '54px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '129px';
  resource_container.style.left = '65px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '165px';
  description_container_1.style.left = '0px';

}

if (number === "#123") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '96px';
  resource_container.style.left = '15px';

  default_box.style.position = 'absolute';
  default_box.style.top = '92px';
  default_box.style.left = '131px';

  special_tile_container.style.position = 'absolute';
  special_tile_container.style.top = '190px';
  special_tile_container.style.left = '87px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '136px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '247px';
  description_container_2.style.left = '20px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '101px';
  variable_resource_container_1.style.left = '124px';

}

if (number === "#124") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '83px';
  resource_container.style.left = '65px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '161px';
  description_container_1.style.left = '0px';

  steel_resource_container_1.style.position = 'absolute';
  steel_resource_container_1.style.top = '1px';
  steel_resource_container_1.style.left = '82px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '37px';
  money_resource_container_1.style.left = '83px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '36px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '39px';
  variable_resource_container_2.style.left = '26px';

}
if (number === "#125") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '88px';
  production_box_size2a.style.left = '63px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '168px';
  description_container_1.style.left = '0px';

}

if (number === "#126") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '89px';
  production_box_size1a.style.left = '86px';
  production_box_size1a.style.color = 'black'
  production_box_size1a.style.fontWeight = 'bold'

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '174px';
  description_container_1.style.left = '0px';

}

if (number === "#127") {
  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '87px';
  ocean_tile_container.style.left = '94px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '132px';
  description_container_1.style.left = '50px';

}

if (number === "#128") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '127px';
  resource_container.style.left = '31px';

  special_tile_container.style.position = 'absolute';
  special_tile_container.style.top = '212px';
  special_tile_container.style.left = '190px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '154px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '200px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '239px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

}

if (number === "#129") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '120px';
  production_box_size2a.style.left = '61px';
  production_box_size2a.style.color = 'black'

  city_tile_small_container.style.position = 'absolute';
  city_tile_small_container.style.top = '129px';
  city_tile_small_container.style.left = '131px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '174px';
  description_container_1.style.left = '0px';

}

if (number === "#130") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '120px';
  production_box_size3.style.left = '54px';
  production_box_size3.style.fontWeight = 'bold'
  production_box_size3.style.color = 'black'

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '166px';
  description_container_1.style.left = '0px';

}

if (number === "#131") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '116px';
  resource_container.style.left = '23px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '2px';
  microbe_resource_container_1.style.left = '152px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '148px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '210px';
  description_container_2.style.left = '0px';

}

if (number === "#132") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '118px';
  production_box_size3.style.left = '55px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '167px';
  description_container_1.style.left = '0px';

}

if (number === "#133") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '123px';
  resource_container.style.left = '34px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '188px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '153px';
  description_container_1.style.left = '0px';

}

if (number === "#134") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '120px';
  resource_container.style.left = '59px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '202px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '256px';
  description_container_2.style.left = '40px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '39px';
  red_arrow_resource_container_2.style.left = '21px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '40px';
  variable_resource_container_1.style.left = '0px';

  microbe_resource_container_2.style.position = 'absolute';
  microbe_resource_container_2.style.top = '39px';
  microbe_resource_container_2.style.left = '53px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '39px';
  microbe_resource_container_1.style.left = '87px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '0px';
  plant_resource_container_1.style.left = '62px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '29px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '38px';
  variable_resource_container_2.style.left = '118px';

}

if (number === "#136") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '119px';
  production_box_size2.style.left = '75px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '166px';
  description_container_1.style.left = '0px';

}

if (number === "#137") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '86px';
  production_box_size2a.style.left = '64px';
  production_box_size2a.style.fontWeight = 'bold'
  production_box_size2a.style.color = 'black'

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '134px';
  description_container_1.style.left = '0px';

}

if (number === "#138") {
  oxygen_tile_2_container.style.position = 'absolute';
  oxygen_tile_2_container.style.top = '173px';
  oxygen_tile_2_container.style.left = '121px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '218px';
  description_container_1.style.left = '0px';

  oxygen_tile_1_container.style.position = 'absolute';
  oxygen_tile_1_container.style.top = '173px';
  oxygen_tile_1_container.style.left = '70px';

  production_box_size3a.style.position = 'absolute';
  production_box_size3a.style.top = '88px';
  production_box_size3a.style.left = '47px';

}

if (number === "#139") {
  default_box.style.position = 'absolute';
  default_box.style.top = '119px';
  default_box.style.left = '93px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '161px';
  description_container_1.style.left = '0px';

}

if (number === "#140") {
  temperature_tile_1_container.style.position = 'absolute';
  temperature_tile_1_container.style.top = '94px';
  temperature_tile_1_container.style.left = '94px';

  temperature_tile_2_container.style.position = 'absolute';
  temperature_tile_2_container.style.top = '95px';
  temperature_tile_2_container.style.left = '117px';

  special_tile_container.style.position = 'absolute';
  special_tile_container.style.top = '154px';
  special_tile_container.style.left = '90px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '206px';
  description_container_1.style.left = '0px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '83px';
  variable_resource_container_1.style.left = '141px';

}

if (number === "#141") {
  default_box.style.position = 'absolute';
  default_box.style.top = '87px';
  default_box.style.left = '94px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '131px';
  description_container_1.style.left = '0px';

}

if (number === "#142") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '88px';
  production_box_size1a.style.left = '84px';
  production_box_size1a.style.fontWeight = 'bold'
  production_box_size1a.style.color = 'black'

  special_tile_container.style.position = 'absolute';
  special_tile_container.style.top = '141px';
  special_tile_container.style.left = '88px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '183px';
  description_container_1.style.left = '0px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '74px';
  variable_resource_container_1.style.left = '139px';
}

if (number === "#143") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '70px';

  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '86px';
  ocean_tile_container.style.left = '58px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '47px';
  plant_resource_container_1.style.left = '12px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '47px';
  variable_resource_container_1.style.left = '0px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '47px';
  variable_resource_container_2.style.left = '61px';

  animal_resource_container_1.style.position = 'absolute';
  animal_resource_container_1.style.top = '48px';
  animal_resource_container_1.style.left = '95px';

  card_resource_container_2.style.position = 'absolute';
  card_resource_container_2.style.top = '0px';
  card_resource_container_2.style.left = '72px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '5px';
  card_resource_container_1.style.left = '40px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '170px';
  description_container_1.style.left = '0px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '47px';
  variable_resource_container_3.style.left = '126px';

}


if (number === "#144") {
  default_box.style.position = 'absolute';
  default_box.style.top = '89px';
  default_box.style.left = '95px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '132px';
  description_container_1.style.left = '0px';

}

if (number === "#145") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '119px';
  production_box_size3.style.left = '57px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '166px';
  description_container_1.style.left = '0px';

}

if (number === "#146") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '122px';
  production_box_size2.style.left = '24px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '132px';
  resource_container.style.left = '80px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

}

if (number === "#147") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '193px';
  production_box_size1a.style.left = '156px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '240px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '252px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

  description_container_4.style.position = 'absolute';
  description_container_4.style.top = '263px';
  description_container_4.style.left = '0px';
  description_container_4.style.textAlign = 'left';

  description_container_5.style.position = 'absolute';
  description_container_5.style.top = '274px';
  description_container_5.style.left = '0px';
  description_container_5.style.textAlign = 'left';

  description_container_6.style.position = 'absolute';
  description_container_6.style.top = '285px';
  description_container_6.style.left = '0px';
  description_container_6.style.textAlign = 'left';

  greenery_tile_container.style.position = 'absolute';
  greenery_tile_container.style.top = '108px';
  greenery_tile_container.style.left = '61px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '121px';
  resource_container.style.left = '67px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '150px';
  description_container_1.style.left = '0px';

  animal_resource_container_2.style.position = 'absolute';
  animal_resource_container_2.style.top = '82px';
  animal_resource_container_2.style.left = '52px';

}

if (number === "#148") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '121px';
  production_box_size2a.style.left = '57px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

}

if (number === "#150") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '120px';
  resource_container.style.left = '32px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '151px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '236px';
  description_container_2.style.left = '40px';

}

if (number === "#151") {
  default_box.style.position = 'absolute';
  default_box.style.top = '94px';
  default_box.style.left = '58px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '102px';
  resource_container.style.left = '72px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '145px';
  description_container_1.style.left = '0px';

}

if (number === "#152") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '84px';
  production_box_size3.style.left = '42px';
  production_box_size3.style.width = '140px'
  production_box_size3.style.color = 'black'
  production_box_size3.style.fontWeight = 'bold'

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '134px';
  description_container_1.style.left = '0px';

}

if (number === "#153") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '106px';
  resource_container.style.left = '80px';

  globals_box_container.style.position = 'absolute';
  globals_box_container.style.top = '72px';
  globals_box_container.style.left = '0px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '90px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '114px';
  description_container_2.style.left = '38px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '143px';
  description_container_1.style.left = '0px';

}

if (number === "#154") {
  rating_1_container.style.position = 'absolute';
  rating_1_container.style.top = '122px';
  rating_1_container.style.left = '136px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '127px';
  resource_container.style.left = '13px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '161px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '219px';
  description_container_2.style.left = '50px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '1px';
  variable_resource_container_1.style.left = '37px';

}


if (number === "#155") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '119px';
  production_box_size2.style.left = '72px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '167px';
  description_container_1.style.left = '0px';

}

if (number === "#156") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '104px';
  resource_container.style.left = '80px';

  globals_box_container.style.position = 'absolute';
  globals_box_container.style.top = '73px';
  globals_box_container.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '145px';
  description_container_1.style.left = '0px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '89px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '78px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '114px';
  description_container_2.style.left = '40px';

}

if (number === "#157") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '287px';
  description_container_2.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '96px';
  resource_container.style.left = '48px';

  microbe_resource_container_3.style.position = 'absolute';
  microbe_resource_container_3.style.top = '151px';
  microbe_resource_container_3.style.left = '27px';

  microbe_resource_container_4.style.position = 'absolute';
  microbe_resource_container_4.style.top = '151px';
  microbe_resource_container_4.style.left = '60px';

  microbe_resource_container_5.style.position = 'absolute';
  microbe_resource_container_5.style.top = '151px';
  microbe_resource_container_5.style.left = '92px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '46px';
  variable_resource_container_1.style.left = '0px';

  microbe_resource_container_2.style.position = 'absolute';
  microbe_resource_container_2.style.top = '46px';
  microbe_resource_container_2.style.left = '28px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '46px';
  red_arrow_resource_container_2.style.left = '64px';

  rating_container.style.position = 'absolute';
  rating_container.style.top = '138px';
  rating_container.style.left = '148px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '0px';
  microbe_resource_container_1.style.left = '75px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '37px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '181px';
  description_container_1.style.left = '0px';

}

if (number === "#158") {
  default_box.style.position = 'absolute';
  default_box.style.top = '87px';
  default_box.style.left = '90px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

}

if (number === "#159") {
  default_box.style.position = 'absolute';
  default_box.style.top = '118px';
  default_box.style.left = '97px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '168px';
  description_container_1.style.left = '0px';

}

if (number === "#160") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '120px';
  production_box_size1a.style.left = '77px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '201px';
  description_container_1.style.left = '0px';

}

if (number === "#161") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '100px';
  resource_container.style.left = '61px';

  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '91px';
  ocean_tile_container.style.left = '66px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '144px';
  description_container_1.style.left = '0px';

}

if (number === "#162") {
  default_box.style.position = 'absolute';
  default_box.style.top = '91px';
  default_box.style.left = '40px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '98px';
  resource_container.style.left = '77px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '137px';
  description_container_1.style.left = '0px';

}

if (number === "#163") {
  rating_container.style.position = 'absolute';
  rating_container.style.top = '91px';
  rating_container.style.left = '11px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '97px';
  resource_container.style.left = '67px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '2px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '153px';
  description_container_1.style.left = '0px';

}

if (number === "#164") {
  default_box.style.position = 'absolute';
  default_box.style.top = '89px';
  default_box.style.left = '94px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '134px';
  description_container_1.style.left = '20px';

}

if (number === "#165") {
  rating_3_container.style.position = 'absolute';
  rating_3_container.style.top = '188px';
  rating_3_container.style.left = '152px';

  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '90px';
  production_box_size2a.style.left = '63px';
  production_box_size2a.style.fontWeight = 'bold'
  production_box_size2a.style.color = 'black'

  rating_2_container.style.position = 'absolute';
  rating_2_container.style.top = '188px';
  rating_2_container.style.left = '93px';

  rating_1_container.style.position = 'absolute';
  rating_1_container.style.top = '188px';
  rating_1_container.style.left = '33px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '230px';
  description_container_1.style.left = '0px';

}

if (number === "#166") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '226px';
  production_box_size1a.style.left = '5px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '120px';
  resource_container.style.left = '32px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '151px';
  description_container_1.style.left = '0px';
  description_container_1.style.textAlign = 'left';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '198px';
  description_container_2.style.left = '0px';

}

if (number === "#167") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '90px';
  production_box_size2.style.left = '72px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '141px';
  description_container_1.style.left = '20px';

}

if (number === "#168") {
  default_box.style.position = 'absolute';
  default_box.style.top = '118px';
  default_box.style.left = '93px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '168px';
  description_container_1.style.left = '0px';

}

if (number === "#169") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '117px';
  production_box_size2.style.left = '52px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '127px';
  resource_container.style.left = '80px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '165px';
  description_container_1.style.left = '0px';

}

if (number === "#170") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '89px';
  production_box_size3.style.left = '59px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '211px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '181px';
  resource_container.style.left = '44px';

}

if (number === "#171") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '93px';
  production_box_size2a.style.left = '17px';

  rating_container.style.position = 'absolute';
  rating_container.style.top = '130px';
  rating_container.style.left = '149px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '178px';
  description_container_1.style.left = '0px';

}

if (number === "#172") {
  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '281px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '268px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '177px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '90px';
  resource_container.style.left = '80px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '37px';
  variable_resource_container_1.style.left = '33px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '55px';
  variable_resource_container_2.style.left = '29px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '72px';
  variable_resource_container_3.style.left = '35px';

  city_tile_small_container.style.position = 'absolute';
  city_tile_small_container.style.top = '92px';
  city_tile_small_container.style.left = '80px';

  variable_resource_container_4.style.position = 'absolute';
  variable_resource_container_4.style.top = '0px';
  variable_resource_container_4.style.left = '33px';

  animal_resource_container_1.style.position = 'absolute';
  animal_resource_container_1.style.top = '0px';
  animal_resource_container_1.style.left = '48px';

  animal_resource_container_2.style.position = 'absolute';
  animal_resource_container_2.style.top = '135px';
  animal_resource_container_2.style.left = '21px';

}

if (number === "#173") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '87px';
  resource_container.style.left = '57px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '17px';
  variable_resource_container_2.style.left = '57px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '62px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '51px';
  plant_resource_container_1.style.left = '16px';

  animal_resource_container_1.style.position = 'absolute';
  animal_resource_container_1.style.top = '51px';
  animal_resource_container_1.style.left = '52px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '51px';
  microbe_resource_container_1.style.left = '86px';

}

if (number === "#174") {
  default_box.style.position = 'absolute';
  default_box.style.top = '94px';
  default_box.style.left = '55px';

  greenery_tile_container.style.position = 'absolute';
  greenery_tile_container.style.top = '93px';
  greenery_tile_container.style.left = '128px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '103px';
  resource_container.style.left = '35px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '157px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '149px';
  description_container_1.style.left = '0px';

}

if (number === "#175") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '88px';
  production_box_size2a.style.left = '67px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '133px';
  description_container_1.style.left = '0px';

}

if (number === "#176") {
  default_box.style.position = 'absolute';
  default_box.style.top = '120px';
  default_box.style.left = '52px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '131px';
  resource_container.style.left = '72px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '171px';
  description_container_1.style.left = '0px';

}

if (number === "#177") {
  oxygen_tile_container.style.position = 'absolute';
  oxygen_tile_container.style.top = '123px';
  oxygen_tile_container.style.left = '161px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '131px';
  resource_container.style.left = '15px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '171px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '229px';
  description_container_2.style.left = '50px';

}

if (number === "#178") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '92px';
  production_box_size2a.style.left = '63px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '173px';
  description_container_1.style.left = '0px';

}

if (number === "#179") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '91px';
  production_box_size1a.style.left = '82px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '175px';
  description_container_1.style.left = '0px';

}

if (number === "#180") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '92px';
  production_box_size2a.style.left = '66px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '174px';
  description_container_1.style.left = '0px';

}

if (number === "#181") {
  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '124px';
  ocean_tile_container.style.left = '96px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

}

if (number === "#182") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '90px';
  production_box_size1a.style.left = '57px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '122px';
  city_tile_container.style.left = '139px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '176px';
  description_container_1.style.left = '0px';

}

if (number === "#183") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '120px';
  production_box_size2a.style.left = '63px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '200px';
  description_container_1.style.left = '0px';

}

if (number === "#184") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '226px';
  production_box_size1a.style.left = '5px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '123px';
  resource_container.style.left = '33px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '154px';
  description_container_1.style.left = '20px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '187px';
  description_container_2.style.left = '0px';

}

if (number === "#185") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '90px';
  resource_container.style.left = '20px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '0px';
  card_resource_container_1.style.left = '162px';

  science_resource_container_2.style.position = 'absolute';
  science_resource_container_2.style.top = '0px';
  science_resource_container_2.style.left = '115px';

  science_resource_container_1.style.position = 'absolute';
  science_resource_container_1.style.top = '0px';
  science_resource_container_1.style.left = '43px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '0px';
  variable_resource_container_3.style.left = '145px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '125px';
  description_container_1.style.left = '1px';

  tag_science_resource_container_1.style.position = 'absolute';
  tag_science_resource_container_1.style.top = '0px';
  tag_science_resource_container_1.style.left = '0px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '33px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '1px';
  variable_resource_container_2.style.left = '88px';

}

if (number === "#186") {
  default_box.style.position = 'absolute';
  default_box.style.top = '120px';
  default_box.style.left = '88px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

}

if (number === "#187") {
  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '86px';
  ocean_tile_container.style.left = '140px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '95px';
  resource_container.style.left = '9px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '128px';
  description_container_1.style.left = '0px';

}

if (number === "#188") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '101px';
  resource_container.style.left = '68px';

  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '92px';
  ocean_tile_container.style.left = '53px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '139px';
  description_container_1.style.left = '0px';

}

if (number === "#189") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '83px';
  production_box_size2a.style.left = '59px';
  production_box_size2a.style.color = 'black'

  city_tile_small_container.style.position = 'absolute';
  city_tile_small_container.style.top = '92px';
  city_tile_small_container.style.left = '133px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '129px';
  description_container_1.style.left = '0px';

}

if (number === "#190") {
  variable_resource_container_4.style.position = 'absolute';
  variable_resource_container_4.style.top = '0px';
  variable_resource_container_4.style.left = '197px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '96px';
  resource_container.style.left = '15px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '131px';
  description_container_1.style.left = '0px';

  animal_resource_container_1.style.position = 'absolute';
  animal_resource_container_1.style.top = '0px';
  animal_resource_container_1.style.left = '164px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '0px';
  variable_resource_container_3.style.left = '126px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '0px';
  plant_resource_container_1.style.left = '80px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '0px';
  variable_resource_container_2.style.left = '55px';
  variable_resource_container_2.style.textAlign = 'left';

  heat_resource_container_1.style.position = 'absolute';
  heat_resource_container_1.style.top = '0px';
  heat_resource_container_1.style.left = '15px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '0px';

}

if (number === "#191") {
  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '119px';
  ocean_tile_container.style.left = '91px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '165px';
  description_container_1.style.left = '0px';

}

if (number === "#192") {
  variable_resource_container_4.style.position = 'absolute';
  variable_resource_container_4.style.top = '55px';
  variable_resource_container_4.style.left = '73px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '80px';
  resource_container.style.left = '43px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '36px';
  variable_resource_container_3.style.left = '75px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '17px';
  variable_resource_container_2.style.left = '71px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '78px';

  variable_resource_container_5.style.position = 'absolute';
  variable_resource_container_5.style.top = '74px';
  variable_resource_container_5.style.left = '75px';

}

if (number === "#193") {
  greenery_tile_container.style.position = 'absolute';
  greenery_tile_container.style.top = '119px';
  greenery_tile_container.style.left = '87px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

}

if (number === "#194") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '97px';
  resource_container.style.left = '40px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '130px';
  description_container_1.style.left = '0px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '20px';

}

if (number === "#195") {
  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '143px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '17px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '119px';
  description_container_1.style.left = '0px';

}

if (number === "#196") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '93px';
  resource_container.style.left = '39px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '129px';
  description_container_1.style.left = '80px';

}

if (number === "#197") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '96px';
  resource_container.style.left = '60px';

  rating_container.style.position = 'absolute';
  rating_container.style.top = '89px';
  rating_container.style.left = '63px';

  tag_jovian_resource_container_1.style.position = 'absolute';
  tag_jovian_resource_container_1.style.top = '0px';
  tag_jovian_resource_container_1.style.left = '74px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '60px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '128px';
  description_container_1.style.left = '0px';

}

if (number === "#198") {
  default_box.style.position = 'absolute';
  default_box.style.top = '91px';
  default_box.style.left = '92px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '137px';
  description_container_1.style.left = '0px';

}

if (number === "#199") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '94px';
  resource_container.style.left = '38px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '131px';
  description_container_1.style.left = '20px';

  special_tile_container.style.position = 'absolute';
  special_tile_container.style.top = '168px';
  special_tile_container.style.left = '97px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '236px';
  description_container_2.style.left = '50px';

}

if (number === "#200") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '198px';
  production_box_size2a.style.left = '21px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '96px';
  resource_container.style.left = '33px';

  default_box.style.position = 'absolute';
  default_box.style.top = '92px';
  default_box.style.left = '125px';

  city_tile_1_container.style.position = 'absolute';
  city_tile_1_container.style.top = '90px';
  city_tile_1_container.style.left = '49px';

  city_tile_2_container.style.position = 'absolute';
  city_tile_2_container.style.top = '198px';
  city_tile_2_container.style.left = '133px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '139px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '257px';
  description_container_2.style.left = '0px';

}

if (number === "#201") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '88px';
  production_box_size1a.style.left = '81px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '172px';
  description_container_1.style.left = '0px';

}

if (number === "#202") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '93px';
  production_box_size2.style.left = '118px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '97px';
  resource_container.style.left = '2px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '140px';
  description_container_1.style.left = '0px';

}

if (number === "#203") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '86px';
  production_box_size1a.style.left = '81px';
  production_box_size1a.style.fontWeight = 'bold'
  production_box_size1a.style.color = 'black'

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '134px';
  description_container_1.style.left = '20px';

}
if (number === "#204") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '37px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '127px';
  description_container_1.style.left = '70px';

}

if (number === "#205") {
  rating_2_container.style.position = 'absolute';
  rating_2_container.style.top = '148px';
  rating_2_container.style.left = '123px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '190px';
  description_container_1.style.left = '0px';

  rating_1_container.style.position = 'absolute';
  rating_1_container.style.top = '148px';
  rating_1_container.style.left = '67px';

  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '92px';
  production_box_size1a.style.left = '83px';

}

if (number === "#206") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '107px';
  resource_container.style.left = '80px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '145px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '115px';
  description_container_2.style.left = '40px';
  description_container_2.style.textAlign = 'left';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '93px';

}

if (number === "#207") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '92px';
  production_box_size3.style.left = '62px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '141px';
  description_container_1.style.left = '0px';

}

if (number === "#208") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '185px';
  production_box_size1a.style.left = '82px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '116px';
  resource_container.style.left = '26px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '154px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '233px';
  description_container_2.style.left = '0px';

}

if (number === "#209") {
  temperature_tile_container.style.position = 'absolute';
  temperature_tile_container.style.top = '87px';
  temperature_tile_container.style.left = '109px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '181px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '147px';
  resource_container.style.left = '34px';

}

if (number === "#210") {
  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '271px';
  description_container_3.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '166px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '101px';
  resource_container.style.left = '15px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '32px';
  red_arrow_resource_container_1.style.left = '15px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '31px';
  card_resource_container_1.style.left = '44px';

  tag_building_resource_container_1.style.position = 'absolute';
  tag_building_resource_container_1.style.top = '17px';
  tag_building_resource_container_1.style.left = '83px';

  tag_space_resource_container_1.style.position = 'absolute';
  tag_space_resource_container_1.style.top = '17px';
  tag_space_resource_container_1.style.left = '62px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '33px';
  variable_resource_container_2.style.left = '160px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '34px';
  variable_resource_container_1.style.left = '103px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '32px';
  red_arrow_resource_container_2.style.left = '126px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '231px';
  description_container_2.style.left = '0px';

}

if (number === "#211") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '119px';
  production_box_size2.style.left = '75px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '164px';
  description_container_1.style.left = '0px';

}

if (number === "#212") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '215px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '157px';
  description_container_1.style.left = '25px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '126px';
  resource_container.style.left = '33px';

}

if (number === "#213") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '134px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '98px';
  resource_container.style.left = '15px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '0px';
  card_resource_container_1.style.left = '180px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '0px';
  red_arrow_resource_container_2.style.left = '145px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '0px';
  floater_resource_container_2.style.left = '112px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '0px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '0px';
  floater_resource_container_1.style.left = '34px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '83px';

}

if (number === "#214") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '121px';
  resource_container.style.left = '13px';

  city_tile_small_container.style.position = 'absolute';
  city_tile_small_container.style.top = '119px';
  city_tile_small_container.style.left = '119px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '154px';
  description_container_1.style.left = '0px';

}

if (number === "#215") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '145px';
  description_container_1.style.left = '0px';

  venus_tile_container.style.position = 'absolute';
  venus_tile_container.style.top = '92px';
  venus_tile_container.style.left = '20px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '86px';
  resource_container.style.left = '77px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '18px';
  floater_resource_container_1.style.left = '18px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '20px';
  floater_resource_container_2.style.left = '53px';

  floater_resource_container_3.style.position = 'absolute';
  floater_resource_container_3.style.top = '19px';
  floater_resource_container_3.style.left = '86px';

  card_icon_small_3.style.position = 'absolute';
  card_icon_small_3.style.top = '10px';
  card_icon_small_3.style.left = '104px';

  card_icon_small_2.style.position = 'absolute';
  card_icon_small_2.style.top = '10px';
  card_icon_small_2.style.left = '68px';

  card_icon_small_1.style.position = 'absolute';
  card_icon_small_1.style.top = '10px';
  card_icon_small_1.style.left = '36px';

}

if (number === "#216") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '120px';
  resource_container.style.left = '36px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '158px';
  description_container_1.style.left = '10px';

}

if (number === "#217") {
  temperature_tile_1_container.style.position = 'absolute';
  temperature_tile_1_container.style.top = '120px';
  temperature_tile_1_container.style.left = '17px';

  temperature_tile_2_container.style.position = 'absolute';
  temperature_tile_2_container.style.top = '120px';
  temperature_tile_2_container.style.left = '40px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '119px';
  resource_container.style.left = '40px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '68px';
  floater_resource_container_1.style.left = '109px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '68px';
  floater_resource_container_2.style.left = '144px';

  venus_tile_1_container.style.position = 'absolute';
  venus_tile_1_container.style.top = '114px';
  venus_tile_1_container.style.left = '100px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '65px';
  variable_resource_container_2.style.left = '177px';

  venus_tile_2_container.style.position = 'absolute';
  venus_tile_2_container.style.top = '114px';
  venus_tile_2_container.style.left = '165px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '199px';
  description_container_1.style.left = '0px';
  description_container_1.style.textAlign = 'left';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '222px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '234px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

  description_container_4.style.position = 'absolute';
  description_container_4.style.top = '246px';
  description_container_4.style.left = '0px';
  description_container_4.style.textAlign = 'left';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '12px';
  variable_resource_container_1.style.left = '33px';

}

if (number === "#218") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '87px';
  resource_container.style.left = '40px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '14px';
  money_resource_container_1.style.left = '98px';

  tag_venus_resource_container_1.style.position = 'absolute';
  tag_venus_resource_container_1.style.top = '5px';
  tag_venus_resource_container_1.style.left = '117px';

  venus_tile_container.style.position = 'absolute';
  venus_tile_container.style.top = '88px';
  venus_tile_container.style.left = '44px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '13px';
  variable_resource_container_1.style.left = '86px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '134px';
  description_container_1.style.left = '0px';

}

if (number === "#219") {
  tag_venus_resource_container_1.style.position = 'absolute';
  tag_venus_resource_container_1.style.top = '2px';
  tag_venus_resource_container_1.style.left = '85px';

  default_box.style.position = 'absolute';
  default_box.style.top = '94px';
  default_box.style.left = '65px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '93px';
  resource_container.style.left = '69px';

  wild_resource_container_1.style.position = 'absolute';
  wild_resource_container_1.style.top = '11px';
  wild_resource_container_1.style.left = '65px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '138px';
  description_container_1.style.left = '0px';

}

if (number === "#220") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '116px';
  production_box_size1a.style.left = '47px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '150px';
  city_tile_container.style.left = '124px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '8px';
  variable_resource_container_1.style.left = '187px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '147px';
  resource_container.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '195px';
  description_container_1.style.left = '0px';

}

if (number === "#221") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '42px';

  default_box.style.position = 'absolute';
  default_box.style.top = '134px';
  default_box.style.left = '152px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '178px';
  description_container_1.style.left = '0px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '49px';
  floater_resource_container_1.style.left = '38px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '50px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '0px';
  floater_resource_container_2.style.left = '84px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '51px';
  variable_resource_container_1.style.left = '15px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '49px';
  red_arrow_resource_container_2.style.left = '74px';

}

if (number === "#222") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '87px';
  resource_container.style.left = '37px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '204px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '170px';
  description_container_1.style.left = '30px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '49px';
  money_resource_container_1.style.left = '123px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '50px';
  variable_resource_container_3.style.left = '103px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '51px';
  floater_resource_container_2.style.left = '69px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '50px';
  variable_resource_container_2.style.left = '49px';

  tag_venus_resource_container_1.style.position = 'absolute';
  tag_venus_resource_container_1.style.top = '51px';
  tag_venus_resource_container_1.style.left = '15px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '9px';
  variable_resource_container_1.style.left = '105px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '8px';
  floater_resource_container_1.style.left = '68px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '9px';
  red_arrow_resource_container_1.style.left = '32px';

}

if (number === "#223") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '97px';
  resource_container.style.left = '37px';

  venus_tile_container.style.position = 'absolute';
  venus_tile_container.style.top = '139px';
  venus_tile_container.style.left = '167px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '274px';
  description_container_2.style.left = '40px';

  floater_resource_container_4.style.position = 'absolute';
  floater_resource_container_4.style.top = '141px';
  floater_resource_container_4.style.left = '34px';

  floater_resource_container_5.style.position = 'absolute';
  floater_resource_container_5.style.top = '141px';
  floater_resource_container_5.style.left = '70px';

  floater_resource_container_6.style.position = 'absolute';
  floater_resource_container_6.style.top = '141px';
  floater_resource_container_6.style.left = '106px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '50px';
  red_arrow_resource_container_2.style.left = '94px';

  floater_resource_container_3.style.position = 'absolute';
  floater_resource_container_3.style.top = '51px';
  floater_resource_container_3.style.left = '59px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '51px';
  floater_resource_container_2.style.left = '25px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '52px';
  variable_resource_container_1.style.left = '2px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '0px';
  floater_resource_container_1.style.left = '81px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '45px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '180px';
  description_container_1.style.left = '0px';

}

if (number === "#224") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '202px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '153px';
  description_container_1.style.left = '20px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '125px';
  resource_container.style.left = '32px';

}

if (number === "#225") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '214px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '151px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '121px';
  resource_container.style.left = '38px';

}

if (number === "#226") {
  venus_tile_container.style.position = 'absolute';
  venus_tile_container.style.top = '124px';
  venus_tile_container.style.left = '160px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '94px';
  resource_container.style.left = '20px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '48px';
  red_arrow_resource_container_2.style.left = '105px';

  floater_resource_container_3.style.position = 'absolute';
  floater_resource_container_3.style.top = '49px';
  floater_resource_container_3.style.left = '70px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '49px';
  floater_resource_container_2.style.left = '36px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '51px';
  variable_resource_container_1.style.left = '14px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '2px';
  floater_resource_container_1.style.left = '120px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '2px';
  red_arrow_resource_container_1.style.left = '87px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '2px';
  money_resource_container_1.style.left = '51px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '175px';
  description_container_1.style.left = '0px';

}

if (number === "#227") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '111px';
  resource_container.style.left = '12px';

  animal_resource_container_2.style.position = 'absolute';
  animal_resource_container_2.style.top = '5px';
  animal_resource_container_2.style.left = '167px';

  animal_resource_container_1.style.position = 'absolute';
  animal_resource_container_1.style.top = '5px';
  animal_resource_container_1.style.left = '133px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '5px';
  microbe_resource_container_1.style.left = '9px';

  microbe_resource_container_2.style.position = 'absolute';
  microbe_resource_container_2.style.top = '5px';
  microbe_resource_container_2.style.left = '45px';

  card_icon_small_4.style.position = 'absolute';
  card_icon_small_4.style.top = '0px';
  card_icon_small_4.style.left = '28px';

  card_icon_small_3.style.position = 'absolute';
  card_icon_small_3.style.top = '0px';
  card_icon_small_3.style.left = '188px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '100px';

  card_icon_small_2.style.position = 'absolute';
  card_icon_small_2.style.top = '0px';
  card_icon_small_2.style.left = '63px';

  card_icon_small_1.style.position = 'absolute';
  card_icon_small_1.style.top = '0px';
  card_icon_small_1.style.left = '152px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '149px';
  description_container_1.style.left = '0px';
  description_container_1.style.textAlign = 'left';

  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '220px';
  production_box_size1a.style.left = '64px';

}

if (number === "#228") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '95px';
  production_box_size3.style.left = '96px';

  venus_tile_container.style.position = 'absolute';
  venus_tile_container.style.top = '93px';
  venus_tile_container.style.left = '27px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '151px';
  description_container_1.style.left = '0px';

}

if (number === "#229") {
  venus_tile_1_container.style.position = 'absolute';
  venus_tile_1_container.style.top = '87px';
  venus_tile_1_container.style.left = '27px';

  venus_tile_2_container.style.position = 'absolute';
  venus_tile_2_container.style.top = '87px';
  venus_tile_2_container.style.left = '90px';

  venus_tile_3_container.style.position = 'absolute';
  venus_tile_3_container.style.top = '87px';
  venus_tile_3_container.style.left = '152px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '132px';
  description_container_1.style.left = '50px';

}

if (number === "#230") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '95px';
  production_box_size3.style.left = '34px';
  production_box_size3.style.height = '102px'

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '165px';
  city_tile_container.style.left = '155px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '216px';
  description_container_1.style.left = '0px';

}

if (number === "#231") {
  venus_tile_container.style.position = 'absolute';
  venus_tile_container.style.top = '86px';
  venus_tile_container.style.left = '89px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '208px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '160px';
  resource_container.style.left = '31px';

  card_icon_small_1.style.position = 'absolute';
  card_icon_small_1.style.top = '0px';
  card_icon_small_1.style.left = '64px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '6px';
  floater_resource_container_1.style.left = '44px';

  tag_jovian_resource_container_1.style.position = 'absolute';
  tag_jovian_resource_container_1.style.top = '6px';
  tag_jovian_resource_container_1.style.left = '103px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '9px';
  variable_resource_container_1.style.left = '86px';

}

if (number === "#232") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '195px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '83px';
  resource_container.style.left = '20px';

  card_resource_container_2.style.position = 'absolute';
  card_resource_container_2.style.top = '69px';
  card_resource_container_2.style.left = '107px';

  card_resource_container_3.style.position = 'absolute';
  card_resource_container_3.style.top = '69px';
  card_resource_container_3.style.left = '138px';

  card_resource_container_4.style.position = 'absolute';
  card_resource_container_4.style.top = '69px';
  card_resource_container_4.style.left = '168px';

  tag_venus_1_resource_container_1.style.position = 'absolute';
  tag_venus_1_resource_container_1.style.top = '75px';
  tag_venus_1_resource_container_1.style.left = '22px';

  tag_venus_2_resource_container_1.style.position = 'absolute';
  tag_venus_2_resource_container_1.style.top = '75px';
  tag_venus_2_resource_container_1.style.left = '40px';

  tag_venus_3_resource_container_1.style.position = 'absolute';
  tag_venus_3_resource_container_1.style.top = '75px';
  tag_venus_3_resource_container_1.style.left = '56px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '75px';
  variable_resource_container_2.style.left = '91px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '16px';
  variable_resource_container_1.style.left = '107px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '15px';
  card_resource_container_1.style.left = '62px';

}

if (number === "#233") {
  default_box.style.position = 'absolute';
  default_box.style.top = '118px';
  default_box.style.left = '87px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '167px';
  description_container_1.style.left = '0px';

}

if (number === "#234") {
  venus_tile_container.style.position = 'absolute';
  venus_tile_container.style.top = '134px';
  venus_tile_container.style.left = '167px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '101px';
  resource_container.style.left = '34px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '48px';
  variable_resource_container_1.style.left = '0px';

  floater_resource_container_3.style.position = 'absolute';
  floater_resource_container_3.style.top = '47px';
  floater_resource_container_3.style.left = '23px';

  floater_resource_container_4.style.position = 'absolute';
  floater_resource_container_4.style.top = '47px';
  floater_resource_container_4.style.left = '59px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '48px';
  red_arrow_resource_container_2.style.left = '96px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '187px';
  description_container_1.style.left = '0px';

  titanium_resource_container_1.style.position = 'absolute';
  titanium_resource_container_1.style.top = '0px';
  titanium_resource_container_1.style.left = '11px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '44px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '0px';
  floater_resource_container_1.style.left = '77px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '0px';
  floater_resource_container_2.style.left = '110px';

}

if (number === "#235") {
  default_box.style.position = 'absolute';
  default_box.style.top = '128px';
  default_box.style.left = '150px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '180px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '90px';
  resource_container.style.left = '26px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '49px';
  variable_resource_container_1.style.left = '27px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '47px';
  floater_resource_container_2.style.left = '50px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '48px';
  red_arrow_resource_container_2.style.left = '89px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '0px';
  floater_resource_container_1.style.left = '96px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '61px';

}

if (number === "#236") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '94px';
  production_box_size2a.style.left = '31px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '95px';
  city_tile_container.style.left = '149px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '208px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '103px';
  resource_container.style.left = '1px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '149px';
  description_container_1.style.left = '0px';

}

if (number === "#238") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '195px';
  production_box_size1a.style.left = '38px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '104px';
  resource_container.style.left = '37px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '17px';
  red_arrow_resource_container_1.style.left = '30px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '195px';
  city_tile_container.style.left = '119px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '98px';
  variable_resource_container_1.style.left = '146px';

  wild_resource_container_1.style.position = 'absolute';
  wild_resource_container_1.style.top = '17px';
  wild_resource_container_1.style.left = '65px';

  tag_venus_resource_container_1.style.position = 'absolute';
  tag_venus_resource_container_1.style.top = '11px';
  tag_venus_resource_container_1.style.left = '86px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '149px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '245px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '270px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

  description_container_4.style.position = 'absolute';
  description_container_4.style.top = '286px';
  description_container_4.style.left = '0px';
  description_container_4.style.textAlign = 'left';

}

if (number === "#239") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '121px';
  production_box_size2.style.left = '71px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '168px';
  description_container_1.style.left = '0px';

}

if (number === "#240") {
  venus_tile_container.style.position = 'absolute';
  venus_tile_container.style.top = '114px';
  venus_tile_container.style.left = '87px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '163px';
  description_container_1.style.left = '0px';

}

if (number === "#241") {
  rating_1_container.style.position = 'absolute';
  rating_1_container.style.top = '121px';
  rating_1_container.style.left = '59px';

  rating_2_container.style.position = 'absolute';
  rating_2_container.style.top = '121px';
  rating_2_container.style.left = '115px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '157px';
  description_container_1.style.left = '0px';

}

if (number === "#242") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '150px';
  production_box_size2.style.left = '75px';

  venus_tile_1_container.style.position = 'absolute';
  venus_tile_1_container.style.top = '86px';
  venus_tile_1_container.style.left = '53px';

  venus_tile_2_container.style.position = 'absolute';
  venus_tile_2_container.style.top = '86px';
  venus_tile_2_container.style.left = '117px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '197px';
  description_container_1.style.left = '0px';

}

if (number === "#243") {
  venus_tile_container.style.position = 'absolute';
  venus_tile_container.style.top = '159px';
  venus_tile_container.style.left = '132px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '124px';
  resource_container.style.left = '33px';

  asteroid_resource_container_2.style.position = 'absolute';
  asteroid_resource_container_2.style.top = '50px';
  asteroid_resource_container_2.style.left = '26px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '50px';
  variable_resource_container_1.style.left = '5px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '50px';
  red_arrow_resource_container_2.style.left = '62px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '206px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '282px';
  description_container_2.style.left = '30px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '11px';

  titanium_resource_container_1.style.position = 'absolute';
  titanium_resource_container_1.style.top = '0px';
  titanium_resource_container_1.style.left = '44px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '77px';

  asteroid_resource_container_1.style.position = 'absolute';
  asteroid_resource_container_1.style.top = '0px';
  asteroid_resource_container_1.style.left = '110px';

}

if (number === "#244") {
  default_box.style.position = 'absolute';
  default_box.style.top = '123px';
  default_box.style.left = '92px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '171px';
  description_container_1.style.left = '0px';

}

if (number === "#245") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '121px';
  resource_container.style.left = '32px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '163px';
  description_container_1.style.left = '0px';

}

if (number === "#246") {
  venus_tile_1_container.style.position = 'absolute';
  venus_tile_1_container.style.top = '116px';
  venus_tile_1_container.style.left = '55px';

  venus_tile_2_container.style.position = 'absolute';
  venus_tile_2_container.style.top = '117px';
  venus_tile_2_container.style.left = '119px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '160px';
  description_container_1.style.left = '0px';

}

if (number === "#247") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '92px';
  resource_container.style.left = '26px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '177px';
  description_container_1.style.left = '0px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '3px';
  card_resource_container_1.style.left = '81px';

  card_resource_container_2.style.position = 'absolute';
  card_resource_container_2.style.top = '45px';
  card_resource_container_2.style.left = '15px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '51px';
  variable_resource_container_2.style.left = '0px';

  variable_resource_container_4.style.position = 'absolute';
  variable_resource_container_4.style.top = '52px';
  variable_resource_container_4.style.left = '168px';

  card_resource_container_5.style.position = 'absolute';
  card_resource_container_5.style.top = '45px';
  card_resource_container_5.style.left = '136px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '51px';
  variable_resource_container_3.style.left = '114px';

  card_resource_container_3.style.position = 'absolute';
  card_resource_container_3.style.top = '45px';
  card_resource_container_3.style.left = '47px';

  card_resource_container_4.style.position = 'absolute';
  card_resource_container_4.style.top = '45px';
  card_resource_container_4.style.left = '79px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '2px';
  variable_resource_container_1.style.left = '69px';

}

if (number === "#248") {
  default_box.style.position = 'absolute';
  default_box.style.top = '185px';
  default_box.style.left = '118px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '113px';
  resource_container.style.left = '32px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '184px';
  city_tile_container.style.left = '163px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '145px';
  description_container_1.style.left = '0px';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '207px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

  description_container_6.style.position = 'absolute';
  description_container_6.style.top = '245px';
  description_container_6.style.left = '0px';
  description_container_6.style.textAlign = 'left';

  description_container_9.style.position = 'absolute';
  description_container_9.style.top = '282px';
  description_container_9.style.left = '0px';
  description_container_9.style.textAlign = 'left';

  tag_venus_resource_container_2.style.position = 'absolute';
  tag_venus_resource_container_2.style.top = '0px';
  tag_venus_resource_container_2.style.left = '77px';

  tag_venus_resource_container_1.style.position = 'absolute';
  tag_venus_resource_container_1.style.top = '0px';
  tag_venus_resource_container_1.style.left = '113px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '11px';
  red_arrow_resource_container_1.style.left = '27px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '10px';
  floater_resource_container_1.style.left = '59px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '10px';
  floater_resource_container_2.style.left = '93px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '83px';
  variable_resource_container_1.style.left = '187px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '196px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

  description_container_4.style.position = 'absolute';
  description_container_4.style.top = '220px';
  description_container_4.style.left = '0px';
  description_container_4.style.textAlign = 'left';

  description_container_5.style.position = 'absolute';
  description_container_5.style.top = '232px';
  description_container_5.style.left = '0px';
  description_container_5.style.textAlign = 'left';

  description_container_7.style.position = 'absolute';
  description_container_7.style.top = '258px';
  description_container_7.style.left = '0px';
  description_container_7.style.textAlign = 'left';

  description_container_8.style.position = 'absolute';
  description_container_8.style.top = '269px';
  description_container_8.style.left = '0px';
  description_container_8.style.textAlign = 'left';

}

if (number === "#249") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '121px';
  resource_container.style.left = '26px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '215px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '146px';
  description_container_1.style.left = '20px';

  minus_resource_container_1.style.position = 'absolute';
  minus_resource_container_1.style.top = '53px';
  minus_resource_container_1.style.left = '55px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '53px';
  floater_resource_container_1.style.left = '81px';

  animal_resource_container_1.style.position = 'absolute';
  animal_resource_container_1.style.top = '0px';
  animal_resource_container_1.style.left = '87px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '53px';

}

if (number === "#250") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '134px';
  production_box_size2a.style.left = '63px';

  venus_tile_container.style.position = 'absolute';
  venus_tile_container.style.top = '79px';
  venus_tile_container.style.left = '87px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '182px';
  description_container_1.style.left = '0px';

}

if (number === "#251") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '122px';
  resource_container.style.left = '34px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '263px';
  description_container_2.style.left = '60px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '200px';
  description_container_1.style.left = '0px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '48px';
  money_resource_container_1.style.left = '137px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '47px';
  red_arrow_resource_container_2.style.left = '104px';

  microbe_resource_container_2.style.position = 'absolute';
  microbe_resource_container_2.style.top = '47px';
  microbe_resource_container_2.style.left = '70px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '47px';
  variable_resource_container_1.style.left = '39px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '0px';
  microbe_resource_container_1.style.left = '91px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '56px';

}

if (number === "#252") {
  default_box.style.position = 'absolute';
  default_box.style.top = '121px';
  default_box.style.left = '90px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '171px';
  description_container_1.style.left = '0px';

}


if (number === "#253") {
  venus_tile_container.style.position = 'absolute';
  venus_tile_container.style.top = '153px';
  venus_tile_container.style.left = '169px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '113px';
  resource_container.style.left = '4px';

  card_icon_small_1.style.position = 'absolute';
  card_icon_small_1.style.top = '0px';
  card_icon_small_1.style.left = '128px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '55px';
  red_arrow_resource_container_2.style.left = '131px';

  microbe_resource_container_2.style.position = 'absolute';
  microbe_resource_container_2.style.top = '55px';
  microbe_resource_container_2.style.left = '63px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '57px';
  variable_resource_container_1.style.left = '40px';

  microbe_resource_container_3.style.position = 'absolute';
  microbe_resource_container_3.style.top = '55px';
  microbe_resource_container_3.style.left = '96px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '8px';
  microbe_resource_container_1.style.left = '109px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '9px';
  red_arrow_resource_container_1.style.left = '76px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '198px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '260px';
  description_container_2.style.left = '0px';

}

if (number === "#254") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '135px';
  description_container_1.style.left = '60px';

  venus_tile_container.style.position = 'absolute';
  venus_tile_container.style.top = '82px';
  venus_tile_container.style.left = '91px';

}

if (number === "#255") {
  default_box.style.position = 'absolute';
  default_box.style.top = '121px';
  default_box.style.left = '90px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

}

if (number === "#256") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '126px';
  production_box_size1a.style.left = '29px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '135px';
  resource_container.style.left = '42px';

  venus_tile_container.style.position = 'absolute';
  venus_tile_container.style.top = '123px';
  venus_tile_container.style.left = '144px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '65px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '216px';
  description_container_2.style.left = '60px';

}

if (number === "#257") {
  venus_tile_container.style.position = 'absolute';
  venus_tile_container.style.top = '86px';
  venus_tile_container.style.left = '85px';

  default_box.style.position = 'absolute';
  default_box.style.top = '150px';
  default_box.style.left = '44px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '157px';
  resource_container.style.left = '70px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '197px';
  description_container_1.style.left = '0px';

}

if (number === "#258") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '94px';
  resource_container.style.left = '42px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '123px';
  description_container_1.style.left = '0px';

}

if (number === "#259") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '121px';
  resource_container.style.left = '34px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '149px';
  description_container_1.style.left = '0px';

}

if (number === "#260") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '121px';
  resource_container.style.left = '36px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '189px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '149px';
  description_container_1.style.left = '20px';

}

if (number === "#261") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '198px';
  description_container_1.style.left = '0px';

  venus_tile_container.style.position = 'absolute';
  venus_tile_container.style.top = '115px';
  venus_tile_container.style.left = '85px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '163px';
  resource_container.style.left = '28px';

  card_icon_small_2.style.position = 'absolute';
  card_icon_small_2.style.top = '0px';
  card_icon_small_2.style.left = '123px';

  card_icon_small_1.style.position = 'absolute';
  card_icon_small_1.style.top = '0px';
  card_icon_small_1.style.left = '53px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '7px';
  microbe_resource_container_1.style.left = '32px';

  animal_resource_container_1.style.position = 'absolute';
  animal_resource_container_1.style.top = '7px';
  animal_resource_container_1.style.left = '103px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '9px';
  variable_resource_container_1.style.left = '79px';

}

if (number === "#P36") {
  default_box.style.position = 'absolute';
  default_box.style.top = '89px';
  default_box.style.left = '94px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '136px';
  description_container_1.style.left = '0px';

}

if (number === "#P37") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '88px';
  production_box_size1a.style.left = '82px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '184px';
  city_tile_container.style.left = '76px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '194px';
  resource_container.style.left = '57px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '224px';
  description_container_1.style.left = '0px';

}

if (number === "#P38") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '123px';
  resource_container.style.left = '37px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '164px';
  description_container_1.style.left = '0px';

}

if (number === "#P39") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '116px';
  resource_container.style.left = '32px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '47px';
  money_resource_container_1.style.left = '124px';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '263px';
  description_container_3.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '228px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '190px';
  description_container_1.style.left = '20px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '47px';
  variable_resource_container_2.style.left = '102px';

  microbe_resource_container_2.style.position = 'absolute';
  microbe_resource_container_2.style.top = '47px';
  microbe_resource_container_2.style.left = '63px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '47px';
  variable_resource_container_1.style.left = '49px';

  tag_plant_resource_container_1.style.position = 'absolute';
  tag_plant_resource_container_1.style.top = '47px';
  tag_plant_resource_container_1.style.left = '12px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '0px';
  microbe_resource_container_1.style.left = '78px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '44px';

}

if (number === "#P40") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '90px';
  description_container_1.style.left = '0px';

}

if (number === "#P41") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '92px';
  resource_container.style.left = '37px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '127px';
  description_container_1.style.left = '70px';

}

if (number === "#P42") {
  default_box.style.position = 'absolute';
  default_box.style.top = '121px';
  default_box.style.left = '89px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

}

if (number === "#C01") {
  default_box.style.position = 'absolute';
  default_box.style.top = '121px';
  default_box.style.left = '89px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '179px';
  resource_container.style.left = '40px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '209px';
  description_container_1.style.left = '0px';

}

if (number === "#C02") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '121px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '12px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '157px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '3px';
  variable_resource_container_1.style.left = '117px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '0px';
  floater_resource_container_1.style.left = '44px';

  minus_resource_container_1.style.position = 'absolute';
  minus_resource_container_1.style.top = '0px';
  minus_resource_container_1.style.left = '17px';

}

if (number === "#C03") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '293px';
  description_container_2.style.left = '50px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '185px';
  description_container_1.style.left = '0px';

  variable_resource_container_5.style.position = 'absolute';
  variable_resource_container_5.style.top = '177px';
  variable_resource_container_5.style.left = '143px';

  floater_resource_container_3.style.position = 'absolute';
  floater_resource_container_3.style.top = '177px';
  floater_resource_container_3.style.left = '75px';

  floater_resource_container_4.style.position = 'absolute';
  floater_resource_container_4.style.top = '176px';
  floater_resource_container_4.style.left = '110px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '81px';
  resource_container.style.left = '15px';

  heat_resource_container_1.style.position = 'absolute';
  heat_resource_container_1.style.top = '47px';
  heat_resource_container_1.style.left = '183px';

  variable_resource_container_4.style.position = 'absolute';
  variable_resource_container_4.style.top = '47px';
  variable_resource_container_4.style.left = '166px';

  energy_resource_container_1.style.position = 'absolute';
  energy_resource_container_1.style.top = '47px';
  energy_resource_container_1.style.left = '132px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '48px';
  variable_resource_container_3.style.left = '114px';

  titanium_resource_container_1.style.position = 'absolute';
  titanium_resource_container_1.style.top = '48px';
  titanium_resource_container_1.style.left = '79px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '48px';
  variable_resource_container_2.style.left = '63px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '48px';
  red_arrow_resource_container_2.style.left = '33px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '47px';
  floater_resource_container_2.style.left = '0px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '10px';
  variable_resource_container_1.style.left = '152px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '9px';
  floater_resource_container_1.style.left = '93px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '9px';
  red_arrow_resource_container_1.style.left = '60px';

}

if (number === "#C04") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '99px';
  resource_container.style.left = '61px';

  ball_resource_container_1.style.position = 'absolute';
  ball_resource_container_1.style.top = '0px';
  ball_resource_container_1.style.left = '56px';

  default_box.style.position = 'absolute';
  default_box.style.top = '94px';
  default_box.style.left = '47px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '3px';
  variable_resource_container_1.style.left = '69px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '2px';
  variable_resource_container_2.style.left = '39px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '2px';
  variable_resource_container_3.style.left = '91px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '140px';
  description_container_1.style.left = '0px';

}

if (number === "#C05") {
  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '145px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '125px';
  resource_container.style.left = '37px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '158px';
  description_container_1.style.left = '0px';

}

if (number === "#C06") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '121px';
  production_box_size1a.style.left = '75px';
  production_box_size1a.style.fontWeight = 'bold';
  production_box_size1a.style.color = 'black';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

}

if (number === "#C07") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '101px';
  resource_container.style.left = '74px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '3px';
  variable_resource_container_2.style.left = '64px';

  empty_resource_container_1.style.position = 'absolute';
  empty_resource_container_1.style.top = '0px';
  empty_resource_container_1.style.left = '56px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '1px';
  variable_resource_container_1.style.left = '43px';

  trade_tile_container.style.position = 'absolute';
  trade_tile_container.style.top = '95px';
  trade_tile_container.style.left = '50px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '152px';
  description_container_1.style.left = '0px';

}

if (number === "#C08") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '94px';
  production_box_size3.style.left = '60px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '145px';
  description_container_1.style.left = '10px';

}

if (number === "#C09") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '180px';
  description_container_1.style.left = '0px';

  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '90px';
  production_box_size2a.style.left = '66px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '149px';
  resource_container.style.left = '15px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '0px';
  variable_resource_container_2.style.left = '169px';

  microbe_resource_container_2.style.position = 'absolute';
  microbe_resource_container_2.style.top = '0px';
  microbe_resource_container_2.style.left = '138px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '0px';
  microbe_resource_container_1.style.left = '104px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '73px';

  animal_resource_container_1.style.position = 'absolute';
  animal_resource_container_1.style.top = '0px';
  animal_resource_container_1.style.left = '38px';

}

if (number === "#C10") {
  default_box.style.position = 'absolute';
  default_box.style.top = '95px';
  default_box.style.left = '57px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '105px';
  resource_container.style.left = '57px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '0px';
  floater_resource_container_1.style.left = '80px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '60px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '144px';
  description_container_1.style.left = '0px';

}

if (number === "#C11") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '132px';
  description_container_1.style.left = '30px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '97px';
  resource_container.style.left = '40px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '112px';

}

if (number === "#C12") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '131px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '96px';
  resource_container.style.left = '36px';

}

if (number === "#C13") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '91px';
  production_box_size2a.style.left = '64px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '139px';
  description_container_1.style.left = '0px';

}

if (number === "#C14") {
  default_box.style.position = 'absolute';
  default_box.style.top = '123px';
  default_box.style.left = '70px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '131px';
  resource_container.style.left = '72px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

}

if (number === "#C15") {
  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '91px';
  ocean_tile_container.style.left = '127px';

  colony_tile_container.style.position = 'absolute';
  colony_tile_container.style.top = '89px';
  colony_tile_container.style.left = '49px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '147px';
  description_container_1.style.left = '30px';

}

if (number === "#C16") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '196px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '120px';
  resource_container.style.left = '20px';

  heat_resource_container_1.style.position = 'absolute';
  heat_resource_container_1.style.top = '0px';
  heat_resource_container_1.style.left = '85px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '68px';

  minus_resource_container_1.style.position = 'absolute';
  minus_resource_container_1.style.top = '42px';
  minus_resource_container_1.style.left = '38px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '42px';
  plant_resource_container_1.style.left = '68px';

  plant_resource_container_2.style.position = 'absolute';
  plant_resource_container_2.style.top = '42px';
  plant_resource_container_2.style.left = '103px';

}

if (number === "#C17") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '149px';
  description_container_1.style.left = '70px';

  colony_tile_container.style.position = 'absolute';
  colony_tile_container.style.top = '100px';
  colony_tile_container.style.left = '80px';

}

if (number === "#C18") {
  rating_container.style.position = 'absolute';
  rating_container.style.top = '188px';
  rating_container.style.left = '47px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '121px';
  resource_container.style.left = '27px';

  floater_resource_container_3.style.position = 'absolute';
  floater_resource_container_3.style.top = '74px';
  floater_resource_container_3.style.left = '74px';

  floater_resource_container_4.style.position = 'absolute';
  floater_resource_container_4.style.top = '74px';
  floater_resource_container_4.style.left = '108px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '75px';
  variable_resource_container_1.style.left = '144px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '150px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '236px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '263px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

}

if (number === "#C19") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '246px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '199px';
  description_container_1.style.left = '0px';
  description_container_1.style.textAlign = 'left';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '116px';
  resource_container.style.left = '19px';

  variable_resource_container_4.style.position = 'absolute';
  variable_resource_container_4.style.top = '46px';
  variable_resource_container_4.style.left = '152px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '48px';
  variable_resource_container_3.style.left = '113px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '47px';
  floater_resource_container_2.style.left = '81px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '47px';
  variable_resource_container_2.style.left = '63px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '47px';
  money_resource_container_1.style.left = '32px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '47px';
  red_arrow_resource_container_2.style.left = '0px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '10px';
  variable_resource_container_1.style.left = '116px';

  card_icon_small_1.style.position = 'absolute';
  card_icon_small_1.style.top = '0px';
  card_icon_small_1.style.left = '84px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '8px';
  floater_resource_container_1.style.left = '63px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '8px';
  red_arrow_resource_container_1.style.left = '31px';

}

if (number === "#C20") {
  default_box.style.position = 'absolute';
  default_box.style.top = '122px';
  default_box.style.left = '92px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '171px';
  description_container_1.style.left = '0px';

}

if (number === "#C21") {
  production_box_size4.style.position = 'absolute';
  production_box_size4.style.top = '90px';
  production_box_size4.style.left = '39px';
  production_box_size4.style.fontWeight = 'bold';
  production_box_size4.style.color = 'black';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '139px';
  description_container_1.style.left = '0px';

}

if (number === "#C22") {
  production_box_size3.style.position = 'absolute';
  production_box_size3.style.top = '91px';
  production_box_size3.style.left = '60px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '140px';
  description_container_1.style.left = '0px';

}

if (number === "#C23") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '82px';
  description_container_1.style.left = '0px';

}

if (number === "#C24") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '119px';
  resource_container.style.left = '23px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '193px';
  description_container_1.style.left = '0px';

  description_container_4.style.position = 'absolute';
  description_container_4.style.top = '282px';
  description_container_4.style.left = '0px';
  description_container_4.style.textAlign = 'left';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '268px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '238px';
  description_container_2.style.left = '0px';

  animal_resource_container_2.style.position = 'absolute';
  animal_resource_container_2.style.top = '44px';
  animal_resource_container_2.style.left = '116px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '44px';
  variable_resource_container_2.style.left = '99px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '44px';
  money_resource_container_1.style.left = '67px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '44px';
  red_arrow_resource_container_1.style.left = '33px';

  animal_resource_container_1.style.position = 'absolute';
  animal_resource_container_1.style.top = '3px';
  animal_resource_container_1.style.left = '102px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '1px';
  variable_resource_container_1.style.left = '91px';

  tag_earth_resource_container_1.style.position = 'absolute';
  tag_earth_resource_container_1.style.top = '3px';
  tag_earth_resource_container_1.style.left = '57px';

}

if (number === "#C25") {
  colony_tile_container.style.position = 'absolute';
  colony_tile_container.style.top = '92px';
  colony_tile_container.style.left = '107px';

  default_box.style.position = 'absolute';
  default_box.style.top = '93px';
  default_box.style.left = '55px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '150px';
  description_container_1.style.left = '0px';

}

if (number === "#C26") {
  colony_tile_container.style.position = 'absolute';
  colony_tile_container.style.top = '91px';
  colony_tile_container.style.left = '111px';

  default_box.style.position = 'absolute';
  default_box.style.top = '91px';
  default_box.style.left = '62px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '148px';
  description_container_1.style.left = '0px';

}

if (number === "#C27") {
  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '94px';
  city_tile_container.style.left = '114px';

  colony_tile_container.style.position = 'absolute';
  colony_tile_container.style.top = '148px';
  colony_tile_container.style.left = '108px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '28px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '102px';
  resource_container.style.left = '47px';

  money_resource_container_2.style.position = 'absolute';
  money_resource_container_2.style.top = '62px';
  money_resource_container_2.style.left = '27px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '62px';
  variable_resource_container_2.style.left = '59px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '1px';
  variable_resource_container_1.style.left = '64px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '199px';
  description_container_1.style.left = '20px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '226px';
  description_container_2.style.left = '20px';

}

if (number === "#C28") {

  resource_container.style.position = 'absolute';
  resource_container.style.top = '93px';
  resource_container.style.left = '57px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '8px';
  floater_resource_container_2.style.left = '114px';

  card_icon_small_2.style.position = 'absolute';
  card_icon_small_2.style.top = '0px';
  card_icon_small_2.style.left = '134px';

  card_icon_small_1.style.position = 'absolute';
  card_icon_small_1.style.top = '0px';
  card_icon_small_1.style.left = '97px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '8px';
  floater_resource_container_1.style.left = '78px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '138px';
  description_container_1.style.left = '0px';

  rating_1_container.style.position = 'absolute';
  rating_1_container.style.top = '95px';
  rating_1_container.style.left = '17px';

  rating_2_container.style.position = 'absolute';
  rating_2_container.style.top = '95px';
  rating_2_container.style.left = '71px';

}

if (number === "#C29") {
  colony_tile_container.style.position = 'absolute';
  colony_tile_container.style.top = '123px';
  colony_tile_container.style.left = '102px';

  default_box.style.position = 'absolute';
  default_box.style.top = '122px';
  default_box.style.left = '58px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '170px';
  description_container_1.style.left = '0px';

}

if (number === "#C30") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '94px';
  description_container_1.style.left = '10px';

}

if (number === "#C31") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '122px';
  production_box_size2a.style.left = '56px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '172px';
  description_container_1.style.left = '0px';

}

if (number === "#C32") {
  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '259px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '247px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '158px';
  description_container_1.style.left = '0px';

  card_resource_container_3.style.position = 'absolute';
  card_resource_container_3.style.top = '75px';
  card_resource_container_3.style.left = '118px';

  card_resource_container_2.style.position = 'absolute';
  card_resource_container_2.style.top = '75px';
  card_resource_container_2.style.left = '81px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '1px';
  card_resource_container_1.style.left = '180px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '126px';
  resource_container.style.left = '8px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '0px';
  red_arrow_resource_container_2.style.left = '147px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '13px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '0px';
  floater_resource_container_1.style.left = '46px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '0px';
  floater_resource_container_2.style.left = '113px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '89px';

}

if (number === "#C33") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '97px';
  production_box_size1a.style.left = '40px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '103px';
  resource_container.style.left = '71px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '146px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '197px';
  description_container_2.style.left = '0px';

}

if (number === "#C34") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '95px';
  resource_container.style.left = '59px';

  colony_tile_container.style.position = 'absolute';
  colony_tile_container.style.top = '89px';
  colony_tile_container.style.left = '27px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '5px';
  variable_resource_container_1.style.left = '39px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '5px';
  card_resource_container_1.style.left = '51px';

  card_resource_container_2.style.position = 'absolute';
  card_resource_container_2.style.top = '1px';
  card_resource_container_2.style.left = '84px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '137px';
  description_container_1.style.left = '0px';

}

if (number === "#C35") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '99px';
  resource_container.style.left = '53px';

  trade_tile_container.style.position = 'absolute';
  trade_tile_container.style.top = '87px';
  trade_tile_container.style.left = '51px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '3px';
  variable_resource_container_1.style.left = '91px';

  empty_resource_container_1.style.position = 'absolute';
  empty_resource_container_1.style.top = '0px';
  empty_resource_container_1.style.left = '78px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '1px';
  variable_resource_container_2.style.left = '61px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '141px';
  description_container_1.style.left = '0px';

}

if (number === "#C36") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '119px';
  resource_container.style.left = '33px';

  fleet_tile_container.style.position = 'absolute';
  fleet_tile_container.style.top = '187px';
  fleet_tile_container.style.left = '77px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '149px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '241px';
  description_container_2.style.left = '0px';

}

if (number === "#C37") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '135px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '92px';
  resource_container.style.left = '50px';

  tag_science_resource_container_2.style.position = 'absolute';
  tag_science_resource_container_2.style.top = '0px';
  tag_science_resource_container_2.style.left = '56px';

  tag_science_resource_container_1.style.position = 'absolute';
  tag_science_resource_container_1.style.top = '0px';
  tag_science_resource_container_1.style.left = '96px';

  tag_science_resource_container_3.style.position = 'absolute';
  tag_science_resource_container_3.style.top = '0px';
  tag_science_resource_container_3.style.left = '77px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '0px';
  card_resource_container_1.style.left = '9px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '43px';

}

if (number === "#C38") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '87px';
  production_box_size1a.style.left = '77px';
  production_box_size1a.style.fontWeight = 'bold';
  production_box_size1a.style.color = 'black';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '135px';
  description_container_1.style.left = '20px';

}

if (number === "#C39") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '119px';
  production_box_size1a.style.left = '23px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '156px';
  city_tile_container.style.left = '101px';

  fleet_tile_container.style.position = 'absolute';
  fleet_tile_container.style.top = '154px';
  fleet_tile_container.style.left = '147px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '208px';
  description_container_1.style.left = '0px';

}

if (number === "#C40") {
  colony_tile_container.style.position = 'absolute';
  colony_tile_container.style.top = '126px';
  colony_tile_container.style.left = '37px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '139px';
  resource_container.style.left = '32px';

  fleet_tile_container.style.position = 'absolute';
  fleet_tile_container.style.top = '125px';
  fleet_tile_container.style.left = '119px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '177px';
  description_container_1.style.left = '20px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '201px';
  description_container_2.style.left = '0px';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '229px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

}

if (number === "#C41") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '103px';
  resource_container.style.left = '41px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '138px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '268px';
  description_container_2.style.left = '20px';

  default_box.style.position = 'absolute';
  default_box.style.top = '205px';
  default_box.style.left = '99px';

}

if (number === "#C42") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '128px';
  resource_container.style.left = '28px';

  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '191px';
  production_box_size1a.style.left = '87px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '155px';
  description_container_1.style.left = '30px';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '270px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '243px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

}

if (number === "#C43") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '92px';
  resource_container.style.left = '41px';

  rating_container.style.position = 'absolute';
  rating_container.style.top = '140px';
  rating_container.style.left = '175px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '55px';
  variable_resource_container_1.style.left = '0px';

  floater_resource_container_3.style.position = 'absolute';
  floater_resource_container_3.style.top = '54px';
  floater_resource_container_3.style.left = '23px';

  floater_resource_container_4.style.position = 'absolute';
  floater_resource_container_4.style.top = '54px';
  floater_resource_container_4.style.left = '58px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '52px';
  red_arrow_resource_container_2.style.left = '96px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '188px';
  description_container_1.style.left = '0px';

}

if (number === "#C44") {
  trade_tile_container.style.position = 'absolute';
  trade_tile_container.style.top = '129px';
  trade_tile_container.style.left = '139px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '86px';
  resource_container.style.left = '27px';

  card_icon_small_3.style.position = 'absolute';
  card_icon_small_3.style.top = '177px';
  card_icon_small_3.style.left = '20px';

  card_icon_small_2.style.position = 'absolute';
  card_icon_small_2.style.top = '178px';
  card_icon_small_2.style.left = '59px';

  card_icon_small_1.style.position = 'absolute';
  card_icon_small_1.style.top = '0px';
  card_icon_small_1.style.left = '107px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '186px';
  floater_resource_container_2.style.left = '40px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '55px';
  variable_resource_container_1.style.left = '32px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '8px';
  floater_resource_container_1.style.left = '85px';

  floater_resource_container_3.style.position = 'absolute';
  floater_resource_container_3.style.top = '55px';
  floater_resource_container_3.style.left = '57px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '8px';
  red_arrow_resource_container_1.style.left = '50px';

  floater_resource_container_4.style.position = 'absolute';
  floater_resource_container_4.style.top = '187px';
  floater_resource_container_4.style.left = '0px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '55px';
  red_arrow_resource_container_2.style.left = '93px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '237px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '183px';
  description_container_1.style.left = '0px';

}

if (number === "#C45") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '185px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '42px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '8px';
  floater_resource_container_2.style.left = '88px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '59px';
  variable_resource_container_1.style.left = '0px';

  floater_resource_container_3.style.position = 'absolute';
  floater_resource_container_3.style.top = '57px';
  floater_resource_container_3.style.left = '30px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '58px';
  red_arrow_resource_container_2.style.left = '66px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '58px';
  variable_resource_container_2.style.left = '102px';

  titanium_resource_container_1.style.position = 'absolute';
  titanium_resource_container_1.style.top = '59px';
  titanium_resource_container_1.style.left = '117px';

  card_icon_small_2.style.position = 'absolute';
  card_icon_small_2.style.top = '0px';
  card_icon_small_2.style.left = '108px';

  card_icon_small_1.style.position = 'absolute';
  card_icon_small_1.style.top = '0px';
  card_icon_small_1.style.left = '73px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '9px';
  floater_resource_container_1.style.left = '53px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '9px';
  red_arrow_resource_container_1.style.left = '19px';

}

if (number === "#C46") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '144px';
  description_container_1.style.left = '0px';

  trade_tile_container.style.position = 'absolute';
  trade_tile_container.style.top = '91px';
  trade_tile_container.style.left = '58px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '102px';
  resource_container.style.left = '67px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '1px';
  variable_resource_container_1.style.left = '60px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '1px';
  variable_resource_container_2.style.left = '74px';

}

if (number === "#C47") {
  trade_tile_container.style.position = 'absolute';
  trade_tile_container.style.top = '91px';
  trade_tile_container.style.left = '66px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '102px';
  resource_container.style.left = '68px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '64px';

  colony_tile_container.style.position = 'absolute';
  colony_tile_container.style.top = '197px';
  colony_tile_container.style.left = '84px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '143px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '251px';
  description_container_2.style.left = '75px';

}

if (number === "#C48") {
  default_box.style.position = 'absolute';
  default_box.style.top = '121px';
  default_box.style.left = '44px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '130px';
  resource_container.style.left = '70px';

}

if (number === "#C49") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '213px';
  description_container_2.style.left = '45px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '157px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '124px';
  resource_container.style.left = '35px';

}

if (number === "#T01") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '140px';
  production_box_size2.style.left = '130px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '147px';
  resource_container.style.left = '0px';

  minus_resource_container_1.style.position = 'absolute';
  minus_resource_container_1.style.top = '0px';
  minus_resource_container_1.style.left = '21px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '0px';
  plant_resource_container_1.style.left = '52px';

  plant_resource_container_2.style.position = 'absolute';
  plant_resource_container_2.style.top = '0px';
  plant_resource_container_2.style.left = '89px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '184px';
  description_container_1.style.left = '0px';

}

if (number === "#T02") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '161px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '128px';
  resource_container.style.left = '32px';

}

if (number === "#T03") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '133px';
  production_box_size1a.style.left = '21px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '182px';
  resource_container.style.left = '80px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '169px';
  city_tile_container.style.left = '98px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '216px';
  description_container_1.style.left = '0px';

  delegate_resource_container_2.style.position = 'absolute';
  delegate_resource_container_2.style.top = '0px';
  delegate_resource_container_2.style.left = '115px';

  delegate_resource_container_1.style.position = 'absolute';
  delegate_resource_container_1.style.top = '0px';
  delegate_resource_container_1.style.left = '82px';

}

if (number === "#T04") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '165px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '131px';
  resource_container.style.left = '27px';

  tag_jovian_resource_container_1.style.position = 'absolute';
  tag_jovian_resource_container_1.style.top = '0px';
  tag_jovian_resource_container_1.style.left = '99px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '85px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '52px';

}

if (number === "#T05") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '212px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '171px';
  description_container_1.style.left = '30px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '138px';
  resource_container.style.left = '26px';

  influence_resource_container_1.style.position = 'absolute';
  influence_resource_container_1.style.top = '2px';
  influence_resource_container_1.style.left = '81px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '65px';

}

if (number === "#T06") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '127px';
  resource_container.style.left = '23px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '150px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '217px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '170px';
  description_container_1.style.left = '0px';

}

if (number === "#T07") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '132px';
  resource_container.style.left = '34px';

  default_box.style.position = 'absolute';
  default_box.style.top = '203px';
  default_box.style.left = '93px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '257px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '161px';
  description_container_1.style.left = '0px';

}

if (number === "#T08") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '183px';
  description_container_1.style.left = '0px';

  production_box_size4a.style.position = 'absolute';
  production_box_size4a.style.top = '133px';
  production_box_size4a.style.left = '27px';
  production_box_size4a.style.fontWeight = 'bold';
  production_box_size4a.style.color = 'black';

}

if (number === "#T09") {
  rating_container.style.position = 'absolute';
  rating_container.style.top = '125px';
  rating_container.style.left = '90px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '178px';
  resource_container.style.left = '38px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '206px';
  description_container_1.style.left = '0px';

}

if (number === "#T11") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '131px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '32px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '1px';
  variable_resource_container_1.style.left = '76px';

  minus_resource_container_1.style.position = 'absolute';
  minus_resource_container_1.style.top = '0px';
  minus_resource_container_1.style.left = '17px';

  delegate_resource_container_1.style.position = 'absolute';
  delegate_resource_container_1.style.top = '0px';
  delegate_resource_container_1.style.left = '44px';

  delegate_resource_container_2.style.position = 'absolute';
  delegate_resource_container_2.style.top = '0px';
  delegate_resource_container_2.style.left = '112px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '0px';
  variable_resource_container_2.style.left = '100px';

}

if (number === "#T12") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '163px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '128px';
  resource_container.style.left = '33px';

}

if (number === "#T13") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '139px';
  production_box_size2.style.left = '72px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '185px';
  description_container_1.style.left = '0px';

}

if (number === "#T14") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '141px';
  resource_container.style.left = '36px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '179px';
  description_container_1.style.left = '0px';

}

if (number === "#T15") {
  greenery_tile_container.style.position = 'absolute';
  greenery_tile_container.style.top = '128px';
  greenery_tile_container.style.left = '88px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '173px';
  description_container_1.style.left = '0px';

}

if (number === "#T16") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '125px';
  resource_container.style.left = '27px';

  rating_container.style.position = 'absolute';
  rating_container.style.top = '172px';
  rating_container.style.left = '94px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '210px';
  description_container_1.style.left = '0px';

}

if (number === "#X01") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '157px';
  resource_container.style.left = '72px';

  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '120px';
  production_box_size1a.style.left = '29px';

  titanium_resource_container_1.style.position = 'absolute';
  titanium_resource_container_1.style.top = '0px';
  titanium_resource_container_1.style.left = '73px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '61px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '206px';
  description_container_1.style.left = '0px';

}

if (number === "#X03") {
  default_box.style.position = 'absolute';
  default_box.style.top = '134px';
  default_box.style.left = '83px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '92px';
  resource_container.style.left = '47px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '51px';
  variable_resource_container_2.style.left = '7px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '7px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '40px';

  energy_resource_container_1.style.position = 'absolute';
  energy_resource_container_1.style.top = '0px';
  energy_resource_container_1.style.left = '92px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '80px';

  money_resource_container_2.style.position = 'absolute';
  money_resource_container_2.style.top = '49px';
  money_resource_container_2.style.left = '123px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '48px';
  red_arrow_resource_container_2.style.left = '89px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '180px';
  description_container_1.style.left = '0px';

}

if (number === "#X04") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '132px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '93px';
  resource_container.style.left = '39px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '7px';

  energy_resource_container_1.style.position = 'absolute';
  energy_resource_container_1.style.top = '0px';
  energy_resource_container_1.style.left = '18px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '51px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '0px';
  variable_resource_container_2.style.left = '87px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '0px';
  card_resource_container_1.style.left = '100px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '0px';
  variable_resource_container_3.style.left = '130px';

}

if (number === "#X05") {
  default_box.style.position = 'absolute';
  default_box.style.top = '93px';
  default_box.style.left = '69px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '103px';
  resource_container.style.left = '67px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '140px';
  description_container_1.style.left = '0px';

}

if (number === "#X06") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '127px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '92px';
  resource_container.style.left = '46px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '1px';
  money_resource_container_1.style.left = '85px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '1px';
  variable_resource_container_2.style.left = '115px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '43px';

}

if (number === "#X07") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '122px';
  resource_container.style.left = '35px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '204px';
  description_container_2.style.left = '50px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '152px';
  description_container_1.style.left = '0px';

}

if (number === "#X08") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '89px';
  resource_container.style.left = '34px';

  default_box.style.position = 'absolute';
  default_box.style.top = '173px';
  default_box.style.left = '92px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '123px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '232px';
  description_container_2.style.left = '10px';

}

if (number === "#X09") {
  rating_container.style.position = 'absolute';
  rating_container.style.top = '129px';
  rating_container.style.left = '100px';

  party_delegate.style.left = '42px';
  second.style.marginLeft = '65px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

}

if (number === "#X10") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '125px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '89px';
  resource_container.style.left = '38px';

}

if (number === "#X11") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '230px';
  description_container_2.style.left = '0px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '102px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '125px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '90px';
  resource_container.style.left = '13px';

  tag_earth_resource_container_1.style.position = 'absolute';
  tag_earth_resource_container_1.style.top = '104px';
  tag_earth_resource_container_1.style.left = '114px';

  floater_resource_container_3.style.position = 'absolute';
  floater_resource_container_3.style.top = '103px';
  floater_resource_container_3.style.left = '64px';

  variable_resource_container_4.style.position = 'absolute';
  variable_resource_container_4.style.top = '103px';
  variable_resource_container_4.style.left = '97px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '2px';
  variable_resource_container_3.style.left = '182px';

  floater_resource_container_1.style.position = 'absolute';
  floater_resource_container_1.style.top = '0px';
  floater_resource_container_1.style.left = '2px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '36px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '70px';

  floater_resource_container_2.style.position = 'absolute';
  floater_resource_container_2.style.top = '0px';
  floater_resource_container_2.style.left = '112px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '0px';
  variable_resource_container_2.style.left = '144px';

}

if (number === "#X12") {
  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '89px';
  city_tile_container.style.left = '74px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '97px';
  resource_container.style.left = '57px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '140px';
  description_container_1.style.left = '0px';

}

if (number === "#X13") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '145px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '89px';
  resource_container.style.left = '22px';

  default_box.style.position = 'absolute';
  default_box.style.top = '95px';
  default_box.style.left = '128px';

  tag_money_resource_container_1.style.position = 'absolute';
  tag_money_resource_container_1.style.top = '0px';
  tag_money_resource_container_1.style.left = '48px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '11px';
  card_resource_container_1.style.left = '57px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '12px';
  variable_resource_container_1.style.left = '92px';

}

if (number === "#X14") {
  production_box_size1a.style.position = 'absolute';
  production_box_size1a.style.top = '255px';
  production_box_size1a.style.left = '15px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '27px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '90px';
  variable_resource_container_3.style.left = '88px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '124px';
  description_container_1.style.left = '0px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '2px';

  asteroid_resource_container_1.style.position = 'absolute';
  asteroid_resource_container_1.style.top = '0px';
  asteroid_resource_container_1.style.left = '150px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '0px';
  variable_resource_container_2.style.left = '133px';

  tag_space_resource_container_1.style.position = 'absolute';
  tag_space_resource_container_1.style.top = '0px';
  tag_space_resource_container_1.style.left = '102px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '224px';
  description_container_2.style.left = '0px';
  description_container_2.style.textAlign = 'left';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '0px';
  card_resource_container_1.style.left = '34px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '65px';

}

if (number === "#X15") {
  default_box.style.position = 'absolute';
  default_box.style.top = '87px';
  default_box.style.left = '151px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '96px';
  resource_container.style.left = '14px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '134px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '204px';
  description_container_2.style.left = '20px';

}

if (number === "#X16") {
  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '55px';
  variable_resource_container_2.style.left = '13px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '90px';
  resource_container.style.left = '41px';

  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '138px';
  ocean_tile_container.style.left = '144px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '55px';
  red_arrow_resource_container_2.style.left = '70px';

  asteroid_resource_container_2.style.position = 'absolute';
  asteroid_resource_container_2.style.top = '55px';
  asteroid_resource_container_2.style.left = '37px';

  titanium_resource_container_1.style.position = 'absolute';
  titanium_resource_container_1.style.top = '1px';
  titanium_resource_container_1.style.left = '22px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '1px';
  red_arrow_resource_container_1.style.left = '57px';

  asteroid_resource_container_1.style.position = 'absolute';
  asteroid_resource_container_1.style.top = '2px';
  asteroid_resource_container_1.style.left = '92px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '1px';
  variable_resource_container_1.style.left = '127px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '186px';
  description_container_1.style.left = '0px';

}

if (number === "#X17") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '122px';
  resource_container.style.left = '46px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '154px';
  description_container_1.style.left = '0px';

  titanium_resource_container_1.style.position = 'absolute';
  titanium_resource_container_1.style.top = '0px';
  titanium_resource_container_1.style.left = '17px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '61px';

  steel_resource_container_2.style.position = 'absolute';
  steel_resource_container_2.style.top = '0px';
  steel_resource_container_2.style.left = '119px';

  steel_resource_container_1.style.position = 'absolute';
  steel_resource_container_1.style.top = '0px';
  steel_resource_container_1.style.left = '84px';

}

if (number === "#X18") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '93px';
  resource_container.style.left = '39px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '128px';
  description_container_1.style.left = '0px';

}

if (number === "#X19") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '42px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '56px';
  variable_resource_container_2.style.left = '24px';

  temperature_tile_container.style.position = 'absolute';
  temperature_tile_container.style.top = '136px';
  temperature_tile_container.style.left = '158px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '2px';

  titanium_resource_container_1.style.position = 'absolute';
  titanium_resource_container_1.style.top = '0px';
  titanium_resource_container_1.style.left = '36px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '70px';

  asteroid_resource_container_1.style.position = 'absolute';
  asteroid_resource_container_1.style.top = '0px';
  asteroid_resource_container_1.style.left = '104px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '138px';

  asteroid_resource_container_2.style.position = 'absolute';
  asteroid_resource_container_2.style.top = '57px';
  asteroid_resource_container_2.style.left = '49px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '57px';
  red_arrow_resource_container_2.style.left = '82px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '192px';
  description_container_1.style.left = '0px';

}

if (number === "#X20") {
  rating_container.style.position = 'absolute';
  rating_container.style.top = '120px';
  rating_container.style.left = '100px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '167px';
  description_container_1.style.left = '0px';

}

if (number === "#X21") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '89px';
  production_box_size2.style.left = '75px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '151px';
  city_tile_container.style.left = '135px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '160px';
  resource_container.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '200px';
  description_container_1.style.left = '0px';

}
if (number === "#X22") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '127px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '89px';
  resource_container.style.left = '30px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '35px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '0px';
  plant_resource_container_1.style.left = '46px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '0px';
  microbe_resource_container_1.style.left = '118px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '0px';
  variable_resource_container_2.style.left = '104px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '0px';
  variable_resource_container_3.style.left = '147px';

}

if (number === "#X23") {
  rating_container.style.position = 'absolute';
  rating_container.style.top = '88px';
  rating_container.style.left = '92px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '129px';
  description_container_1.style.left = '50px';

}

if (number === "#X24") {
  rating_container.style.position = 'absolute';
  rating_container.style.top = '119px';
  rating_container.style.left = '108px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '124px';
  resource_container.style.left = '19px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '160px';
  description_container_1.style.left = '0px';

}

if (number === "#X25") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '124px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '30px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '99px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '84px';

  animal_resource_container_1.style.position = 'absolute';
  animal_resource_container_1.style.top = '0px';
  animal_resource_container_1.style.left = '47px';

}

if (number === "#X26") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '126px';
  description_container_1.style.left = '20px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '88px';
  resource_container.style.left = '26px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '9px';

  heat_resource_container_1.style.position = 'absolute';
  heat_resource_container_1.style.top = '0px';
  heat_resource_container_1.style.left = '20px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '53px';

  steel_resource_container_1.style.position = 'absolute';
  steel_resource_container_1.style.top = '0px';
  steel_resource_container_1.style.left = '86px';

  steel_resource_container_2.style.position = 'absolute';
  steel_resource_container_2.style.top = '0px';
  steel_resource_container_2.style.left = '119px';

  steel_resource_container_3.style.position = 'absolute';
  steel_resource_container_3.style.top = '0px';
  steel_resource_container_3.style.left = '152px';

}

if (number === "#X27") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '36px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '111px';
  plant_resource_container_1.style.left = '0px';

  plant_resource_container_2.style.position = 'absolute';
  plant_resource_container_2.style.top = '111px';
  plant_resource_container_2.style.left = '34px';

  plant_resource_container_3.style.position = 'absolute';
  plant_resource_container_3.style.top = '111px';
  plant_resource_container_3.style.left = '68px';

  animal_resource_container_1.style.position = 'absolute';
  animal_resource_container_1.style.top = '0px';
  animal_resource_container_1.style.left = '120px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '0px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '0px';
  microbe_resource_container_1.style.left = '31px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '0px';
  variable_resource_container_2.style.left = '89px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '66px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '0px';
  variable_resource_container_3.style.left = '151px';

  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '192px';
  ocean_tile_container.style.left = '171px';

  temperature_tile_container.style.position = 'absolute';
  temperature_tile_container.style.top = '190px';
  temperature_tile_container.style.left = '145px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '119px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '246px';
  description_container_2.style.left = '0px';

}

if (number === "#X28") {
  default_box.style.position = 'absolute';
  default_box.style.top = '136px';
  default_box.style.left = '98px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '93px';
  resource_container.style.left = '33px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '182px';
  description_container_1.style.left = '0px';

}

if (number === "#X29") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '224px';
  description_container_2.style.left = '50px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '164px';
  description_container_1.style.left = '60px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '129px';
  resource_container.style.left = '34px';

}

if (number === "#X30") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '226px';
  description_container_2.style.left = '60px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '120px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '92px';
  resource_container.style.left = '53px';

  plant_resource_container_3.style.position = 'absolute';
  plant_resource_container_3.style.top = '91px';
  plant_resource_container_3.style.left = '12px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '91px';
  plant_resource_container_1.style.left = '46px';

  plant_resource_container_2.style.position = 'absolute';
  plant_resource_container_2.style.top = '91px';
  plant_resource_container_2.style.left = '80px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '71px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '58px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '0px';
  microbe_resource_container_1.style.left = '21px';

}

if (number === "#X31") {
  temperature_tile_1_container.style.position = 'absolute';
  temperature_tile_1_container.style.top = '93px';
  temperature_tile_1_container.style.left = '80px';

  temperature_tile_2_container.style.position = 'absolute';
  temperature_tile_2_container.style.top = '93px';
  temperature_tile_2_container.style.left = '104px';

  temperature_tile_3_container.style.position = 'absolute';
  temperature_tile_3_container.style.top = '93px';
  temperature_tile_3_container.style.left = '128px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '155px';
  resource_container.style.left = '55px';

  special_tile_container.style.position = 'absolute';
  special_tile_container.style.top = '146px';
  special_tile_container.style.left = '20px';

  minus_resource_container_1.style.position = 'absolute';
  minus_resource_container_1.style.top = '36px';
  minus_resource_container_1.style.left = '16px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '38px';
  variable_resource_container_2.style.left = '44px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '38px';
  plant_resource_container_1.style.left = '62px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '223px';
  description_container_1.style.left = '0px';

}

if (number === "#X32") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '125px';
  production_box_size2.style.left = '39px';

  special_tile_container.style.position = 'absolute';
  special_tile_container.style.top = '126px';
  special_tile_container.style.left = '131px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '137px';
  resource_container.style.left = '80px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '101px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '176px';
  description_container_1.style.left = '0px';

}

if (number === "#X33") {
  production_box_size2a.style.position = 'absolute';
  production_box_size2a.style.top = '89px';
  production_box_size2a.style.left = '36px';
  production_box_size2a.style.fontWeight = 'bold';
  production_box_size2a.style.color = 'black';

  special_tile_container.style.position = 'absolute';
  special_tile_container.style.top = '124px';
  special_tile_container.style.left = '160px';

  rating_3_container.style.position = 'absolute';
  rating_3_container.style.top = '183px';
  rating_3_container.style.left = '147px';

  rating_2_container.style.position = 'absolute';
  rating_2_container.style.top = '183px';
  rating_2_container.style.left = '89px';

  rating_1_container.style.position = 'absolute';
  rating_1_container.style.top = '183px';
  rating_1_container.style.left = '31px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '227px';
  description_container_1.style.left = '0px';

}

if (number === "#X34") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '288px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '178px';
  description_container_1.style.left = '0px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '80px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '85px';
  resource_container.style.left = '11px';

  asteroid_resource_container_4.style.position = 'absolute';
  asteroid_resource_container_4.style.top = '162px';
  asteroid_resource_container_4.style.left = '74px';

  asteroid_resource_container_3.style.position = 'absolute';
  asteroid_resource_container_3.style.top = '162px';
  asteroid_resource_container_3.style.left = '108px';

  titanium_resource_container_2.style.position = 'absolute';
  titanium_resource_container_2.style.top = '53px';
  titanium_resource_container_2.style.left = '192px';

  titanium_resource_container_1.style.position = 'absolute';
  titanium_resource_container_1.style.top = '53px';
  titanium_resource_container_1.style.left = '158px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '54px';
  variable_resource_container_2.style.left = '134px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '52px';
  red_arrow_resource_container_2.style.left = '38px';

  asteroid_resource_container_2.style.position = 'absolute';
  asteroid_resource_container_2.style.top = '52px';
  asteroid_resource_container_2.style.left = '4px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '45px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '156px';

  asteroid_resource_container_1.style.position = 'absolute';
  asteroid_resource_container_1.style.top = '0px';
  asteroid_resource_container_1.style.left = '120px';

  default_box.style.position = 'absolute';
  default_box.style.top = '131px';
  default_box.style.left = '85px';

}

if (number === "#X35") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '175px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '92px';
  resource_container.style.left = '44px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '0px';
  card_resource_container_1.style.left = '59px';

  microbe_resource_container_1.style.position = 'absolute';
  microbe_resource_container_1.style.top = '49px';
  microbe_resource_container_1.style.left = '35px';

  tag_science_resource_container_1.style.position = 'absolute';
  tag_science_resource_container_1.style.top = '48px';
  tag_science_resource_container_1.style.left = '92px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '47px';
  variable_resource_container_1.style.left = '75px';

}

if (number === "#X36") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '87px';
  resource_container.style.left = '53px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '169px';
  description_container_1.style.left = '0px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '53px';
  plant_resource_container_1.style.left = '0px';

  plant_resource_container_2.style.position = 'absolute';
  plant_resource_container_2.style.top = '53px';
  plant_resource_container_2.style.left = '34px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '52px';
  variable_resource_container_1.style.left = '78px';

  animal_resource_container_1.style.position = 'absolute';
  animal_resource_container_1.style.top = '53px';
  animal_resource_container_1.style.left = '100px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '52px';
  variable_resource_container_2.style.left = '131px';

}

if (number === "#X37") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '155px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '123px';
  resource_container.style.left = '42px';

}

if (number === "#X38") {
  default_box.style.position = 'absolute';
  default_box.style.top = '122px';
  default_box.style.left = '94px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '170px';
  description_container_1.style.left = '0px';

}

if (number === "#X44") {
  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '90px';
  production_box_size2.style.left = '73px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '177px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '147px';
  resource_container.style.left = '37px';

}

if (number === "#X45") {
  default_box.style.position = 'absolute';
  default_box.style.top = '122px';
  default_box.style.left = '98px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '213px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '181px';
  resource_container.style.left = '40px';

}

if (number === "#X46") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '78px';
  description_container_1.style.left = '0px';

  default_box.style.position = 'absolute';
  default_box.style.top = '149px';
  default_box.style.left = '93px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '210px';
  description_container_2.style.left = '30px';

}

if (number === "#X47") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '178px';
  description_container_1.style.left = '0px';

  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '136px';
  ocean_tile_container.style.left = '137px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '91px';
  resource_container.style.left = '15px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '51px';
  variable_resource_container_2.style.left = '167px';

  asteroid_resource_container_2.style.position = 'absolute';
  asteroid_resource_container_2.style.top = '0px';
  asteroid_resource_container_2.style.left = '149px';

  asteroid_resource_container_3.style.position = 'absolute';
  asteroid_resource_container_3.style.top = '52px';
  asteroid_resource_container_3.style.left = '58px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '53px';
  variable_resource_container_1.style.left = '36px';

  red_arrow_resource_container_2.style.position = 'absolute';
  red_arrow_resource_container_2.style.top = '52px';
  red_arrow_resource_container_2.style.left = '92px';

}

if (number === "#X48") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '170px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '78px';
  resource_container.style.left = '28px';

  plant_resource_container_2.style.position = 'absolute';
  plant_resource_container_2.style.top = '62px';
  plant_resource_container_2.style.left = '94px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '63px';
  variable_resource_container_2.style.left = '68px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '62px';
  money_resource_container_1.style.left = '27px';

  plant_resource_container_1.style.position = 'absolute';
  plant_resource_container_1.style.top = '62px';
  plant_resource_container_1.style.left = '126px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '11px';
  red_arrow_resource_container_1.style.left = '92px';

  heat_resource_container_1.style.position = 'absolute';
  heat_resource_container_1.style.top = '11px';
  heat_resource_container_1.style.left = '59px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '11px';
  variable_resource_container_1.style.left = '47px';

}

if (number === "#X50") {
  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '166px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '117px';
  resource_container.style.left = '32px';

  card_icon_small_3.style.position = 'absolute';
  card_icon_small_3.style.top = '0px';
  card_icon_small_3.style.left = '49px';

  card_icon_small_2.style.position = 'absolute';
  card_icon_small_2.style.top = '0px';
  card_icon_small_2.style.left = '118px';

  card_icon_small_1.style.position = 'absolute';
  card_icon_small_1.style.top = '0px';
  card_icon_small_1.style.left = '83px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '12px';
  card_resource_container_1.style.left = '31px';

  card_resource_container_2.style.position = 'absolute';
  card_resource_container_2.style.top = '7px';
  card_resource_container_2.style.left = '65px';

  card_resource_container_3.style.position = 'absolute';
  card_resource_container_3.style.top = '7px';
  card_resource_container_3.style.left = '98px';

}

if (number === "#X51") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '87px';
  resource_container.style.left = '39px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '135px';
  description_container_1.style.left = '0px';

  card_icon_small_2.style.position = 'absolute';
  card_icon_small_2.style.top = '0px';
  card_icon_small_2.style.left = '63px';

  card_icon_small_1.style.position = 'absolute';
  card_icon_small_1.style.top = '0px';
  card_icon_small_1.style.left = '95px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '11px';
  card_resource_container_1.style.left = '44px';

  card_resource_container_2.style.position = 'absolute';
  card_resource_container_2.style.top = '6px';
  card_resource_container_2.style.left = '78px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '16px';
  variable_resource_container_1.style.left = '115px';

}

if (number === "#X52") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '212px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '111px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '75px';
  resource_container.style.left = '26px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '96px';
  money_resource_container_1.style.left = '144px';

  variable_resource_container_4.style.position = 'absolute';
  variable_resource_container_4.style.top = '97px';
  variable_resource_container_4.style.left = '125px';

  black_resource_container_2.style.position = 'absolute';
  black_resource_container_2.style.top = '97px';
  black_resource_container_2.style.left = '92px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '96px';
  variable_resource_container_3.style.left = '78px';

  tag_city_resource_container_1.style.position = 'absolute';
  tag_city_resource_container_1.style.top = '96px';
  tag_city_resource_container_1.style.left = '47px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '97px';
  variable_resource_container_2.style.left = '31px';

  tag_space_resource_container_1.style.position = 'absolute';
  tag_space_resource_container_1.style.top = '96px';
  tag_space_resource_container_1.style.left = '0px';

  black_resource_container_1.style.position = 'absolute';
  black_resource_container_1.style.top = '10px';
  black_resource_container_1.style.left = '93px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '9px';
  variable_resource_container_1.style.left = '82px';

  tag_science_resource_container_1.style.position = 'absolute';
  tag_science_resource_container_1.style.top = '9px';
  tag_science_resource_container_1.style.left = '48px';

}

if (number === "#X53") {
  default_box_2.style.position = 'absolute';
  default_box_2.style.top = '150px';
  default_box_2.style.left = '135px';

  default_box_3.style.position = 'absolute';
  default_box_3.style.top = '150px';
  default_box_3.style.left = '76px';

  default_box.style.position = 'absolute';
  default_box.style.top = '91px';
  default_box.style.left = '86px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '197px';
  description_container_1.style.left = '0px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '90px';
  variable_resource_container_1.style.left = '35px';

}

if (number === "#X56") {
  default_box.style.position = 'absolute';
  default_box.style.top = '119px';
  default_box.style.left = '98px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '213px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '180px';
  resource_container.style.left = '43px';

}

if (number === "#X57") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '102px';
  resource_container.style.left = '62px';

  production_box_size2.style.position = 'absolute';
  production_box_size2.style.top = '191px';
  production_box_size2.style.left = '79px';

  temperature_tile_container.style.position = 'absolute';
  temperature_tile_container.style.top = '92px';
  temperature_tile_container.style.left = '82px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '1px';
  variable_resource_container_1.style.left = '46px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '59px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '139px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '247px';
  description_container_2.style.left = '10px';

}

if (number === "#X58") {
  default_box.style.position = 'absolute';
  default_box.style.top = '88px';
  default_box.style.left = '63px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '0px';
  card_resource_container_1.style.left = '112px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '97px';
  resource_container.style.left = '20px';

  minus_resource_container_1.style.position = 'absolute';
  minus_resource_container_1.style.top = '65px';
  minus_resource_container_1.style.left = '11px';

  greenery_tile_container.style.position = 'absolute';
  greenery_tile_container.style.top = '154px';
  greenery_tile_container.style.left = '53px';

  city_tile_container.style.position = 'absolute';
  city_tile_container.style.top = '156px';
  city_tile_container.style.left = '126px';

  plus_resource_container_1.style.position = 'absolute';
  plus_resource_container_1.style.top = '65px';
  plus_resource_container_1.style.left = '90px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '67px';
  variable_resource_container_1.style.left = '164px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '205px';
  description_container_1.style.left = '0px';

}

if (number === "#X60") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '256px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '117px';
  description_container_1.style.left = '0px';

  yellow_resource_container_2.style.position = 'absolute';
  yellow_resource_container_2.style.top = '131px';
  yellow_resource_container_2.style.left = '74px';

  variable_resource_container_3.style.position = 'absolute';
  variable_resource_container_3.style.top = '130px';
  variable_resource_container_3.style.left = '105px';

  yellow_resource_container_1.style.position = 'absolute';
  yellow_resource_container_1.style.top = '0px';
  yellow_resource_container_1.style.left = '133px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '88px';
  resource_container.style.left = '22px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '0px';
  variable_resource_container_2.style.left = '163px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '1px';
  variable_resource_container_1.style.left = '96px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '37px';

}

if (number === "#X61") {
  default_box.style.position = 'absolute';
  default_box.style.top = '136px';
  default_box.style.left = '86px';

  steel_resource_container_1.style.position = 'absolute';
  steel_resource_container_1.style.top = '0px';
  steel_resource_container_1.style.left = '94px';

  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '88px';
  ocean_tile_container.style.left = '36px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '25px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '96px';
  resource_container.style.left = '57px';

  minus_resource_container_1.style.position = 'absolute';
  minus_resource_container_1.style.top = '0px';
  minus_resource_container_1.style.left = '30px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '60px';

  skyblue_resource_container_1.style.position = 'absolute';
  skyblue_resource_container_1.style.top = '66px';
  skyblue_resource_container_1.style.left = '103px';

  plus_resource_container_1.style.position = 'absolute';
  plus_resource_container_1.style.top = '51px';
  plus_resource_container_1.style.left = '0px';

  plus_resource_container_2.style.position = 'absolute';
  plus_resource_container_2.style.top = '52px';
  plus_resource_container_2.style.left = '77px';

  skyblue_resource_container_1.style.position = 'absolute';
  skyblue_resource_container_1.style.top = '52px';
  skyblue_resource_container_1.style.left = '108px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '182px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '244px';
  description_container_2.style.left = '1px';

}

if (number === "#X62") {
  resource_container.style.position = 'absolute';
  resource_container.style.top = '122px';
  resource_container.style.left = '39px';

  default_box.style.position = 'absolute';
  default_box.style.top = '202px';
  default_box.style.left = '93px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '255px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '151px';
  description_container_1.style.left = '0px';

}

if (number === "#X63") {
  ocean_tile_container.style.position = 'absolute';
  ocean_tile_container.style.top = '125px';
  ocean_tile_container.style.left = '160px';

  special_tile_container.style.position = 'absolute';
  special_tile_container.style.top = '125px';
  special_tile_container.style.left = '115px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '134px';
  resource_container.style.left = '0px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '0px';
  variable_resource_container_2.style.left = '204px';

  red_arrow_resource_container_1.style.position = 'absolute';
  red_arrow_resource_container_1.style.top = '0px';
  red_arrow_resource_container_1.style.left = '36px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '67px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '103px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '173px';
  description_container_1.style.left = '0px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '240px';
  description_container_2.style.left = '35px';

}

if (number === "#X64") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '201px';
  description_container_2.style.left = '0px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '110px';
  description_container_1.style.left = '0px';

  description_container_3.style.position = 'absolute';
  description_container_3.style.top = '274px';
  description_container_3.style.left = '0px';
  description_container_3.style.textAlign = 'left';

  titanium_resource_container_1.style.position = 'absolute';
  titanium_resource_container_1.style.top = '150px';
  titanium_resource_container_1.style.left = '27px';

  titanium_resource_container_2.style.position = 'absolute';
  titanium_resource_container_2.style.top = '150px';
  titanium_resource_container_2.style.left = '61px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '86px';
  resource_container.style.left = '37px';

  tag_space_resource_container_1.style.position = 'absolute';
  tag_space_resource_container_1.style.top = '75px';
  tag_space_resource_container_1.style.left = '27px';

  tag_event_resource_container_1.style.position = 'absolute';
  tag_event_resource_container_1.style.top = '75px';
  tag_event_resource_container_1.style.left = '63px';

  variable_resource_container_2.style.position = 'absolute';
  variable_resource_container_2.style.top = '75px';
  variable_resource_container_2.style.left = '98px';

  card_resource_container_1.style.position = 'absolute';
  card_resource_container_1.style.top = '77px';
  card_resource_container_1.style.left = '115px';

  money_resource_container_1.style.position = 'absolute';
  money_resource_container_1.style.top = '0px';
  money_resource_container_1.style.left = '85px';

  variable_resource_container_1.style.position = 'absolute';
  variable_resource_container_1.style.top = '0px';
  variable_resource_container_1.style.left = '74px';

  tag_earth_resource_container_1.style.position = 'absolute';
  tag_earth_resource_container_1.style.top = '0px';
  tag_earth_resource_container_1.style.left = '42px';

}

if (number === "#X65") {
  default_box.style.position = 'absolute';
  default_box.style.top = '91px';
  default_box.style.left = '37px';

  default_box_2.style.position = 'absolute';
  default_box_2.style.top = '91px';
  default_box_2.style.left = '131px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '144px';
  description_container_1.style.left = '0px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '100px';
  resource_container.style.left = '29px';

  rating_container.style.position = 'absolute';
  rating_container.style.top = '205px';
  rating_container.style.left = '90px';

  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '254px';
  description_container_2.style.left = '50px';

}

if (number === "#X65.1") {
  description_container_2.style.position = 'absolute';
  description_container_2.style.top = '199px';
  description_container_2.style.left = '40px';

  resource_container.style.position = 'absolute';
  resource_container.style.top = '88px';
  resource_container.style.left = '38px';

  description_container_1.style.position = 'absolute';
  description_container_1.style.top = '121px';
  description_container_1.style.left = '0px';

}


            });

            // Hide loading message if cards are present
            const loadingElement = document.getElementById('loading');
            if (loadingElement && document.querySelectorAll('.card').length > 0) {
                loadingElement.style.display = 'none';
            }
    
        }
        // Automatically run when the main page (index.html) loads
        document.addEventListener('DOMContentLoaded', () => {
            applyCardCustomizations();
        });

        window.addEventListener("load", applyCardCustomizations);    