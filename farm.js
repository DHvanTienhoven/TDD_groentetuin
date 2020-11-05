//step 0: write functions that will make the given tests pass

const get_yield_for_plant_simple = crop => crop.yield;

const get_yield_for_crop_simple = input => get_yield_for_plant_simple(input.crop) * input.num_crops;

const get_total_yield_simple = ({ crops }) => {
    yieldFromAllCrops = crops.map(crop => get_yield_for_crop_simple(crop));
    return yieldFromAllCrops.reduce((acc, value) => acc + value)
};

//step 1: calculate costs for a crop: get_costs_for_crop_simple

const get_costs_for_crop_simple = input => input.crop.cost * input.num_crops;

//step 2: calculate revenue for a crop (without accounting for environmental factors): get_revenue_for_crop_simple

const get_revenue_for_crop_simple = input => get_yield_for_crop_simple(input) * input.crop.sale_price;

//step 3: calculate the profit for a crop (without accounting for environmental factors): get_profit_for_crop_simple

const get_profit_for_crop_simple = input => get_revenue_for_crop_simple(input) - get_costs_for_crop_simple(input);

//step 4: calculate the profit for multiple crops (without accounting for environmental factors): get_total_profit_simple

const get_total_profit_simple = ({ crops }) => {
    const profitFromAllCrops = crops.map(crop => get_profit_for_crop_simple(crop));
    return profitFromAllCrops.reduce((acc, val) => acc + val)
};

//step 5: Take environmental factors into account in calculating the yield of a plant: get_yield_for_plant
//step 6: Take this step with multiple environmental factors
//step 7: Write the function of step 6, but make sure it will work for crops if one or more environmental factors are not relevant

const get_yield_for_plant = (crop, environment) => {
    const sunPercentage = "sun" in crop.factors ? crop.factors.sun[environment.sun] || 0 : 0;
    const windPercentage = "wind" in crop.factors ? crop.factors.wind[environment.wind] || 0 : 0;
    const soilPercentage = "soil" in crop.factors ? crop.factors.soil[environment.soil] || 0 : 0;
    const percentages = [sunPercentage, windPercentage, soilPercentage];
    multiplyFactors = percentages.map(percentage => percentage / 100 + 1);
    return Math.floor(multiplyFactors.reduce((acc, curr) => acc * curr, get_yield_for_plant_simple(crop)))
};

//step 8 write function get_yield_for_crop

const get_yield_for_crop = (input, environment) => get_yield_for_plant(input.crop, environment) * input.num_crops;

//step 9 write function get_profit_for_crop

const get_profit_for_crop = (input, environment) => get_yield_for_crop(input, environment) * input.crop.sale_price - input.crop.cost * input.num_crops;

//step 10 write function get_total_profit

const get_total_profit = ({ crops }, environment) => {
    const profitFromAllCrops = crops.map(crop => get_profit_for_crop(crop, environment));
    return profitFromAllCrops.reduce((acc, val) => acc + val)
};

//module exports

module.exports = {
    get_yield_for_plant_simple,
    get_yield_for_crop_simple,
    get_total_yield_simple,
    get_costs_for_crop_simple,
    get_revenue_for_crop_simple,
    get_profit_for_crop_simple,
    get_total_profit_simple,
    get_yield_for_plant,
    get_yield_for_crop,
    get_profit_for_crop,
    get_total_profit,
};