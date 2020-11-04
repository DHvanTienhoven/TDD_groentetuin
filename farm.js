//step 0: write functions that will make the given tests pass

const get_yield_for_plant = crop => crop.yield;

const get_yield_for_crop = input => get_yield_for_plant(input.crop) * input.num_crops;

const get_total_yield = ({crops}) => {
    yieldFromAllCrops = crops.map(crop => get_yield_for_crop(crop));
    return yieldFromAllCrops.reduce((acc, value) => acc + value)
};

//step 1: calculate costs for a crop: get_costs_for_crop

const get_costs_for_crop = input => input.crop.cost * input.num_crops;

//step 2: calculate revenue for a crop (without accounting for environmental factors): get_revenue_for_crop

const get_revenue_for_crop = input => get_yield_for_crop(input) * input.crop.sale_price;

//step 3: calculate the profit for a crop (without accounting for environmental factors): get_profit_for_crop

const get_profit_for_crop = input => get_revenue_for_crop(input) - get_costs_for_crop(input);

//step 4: calculate the profit for multiple crops (without accounting for environmental factors): get_total_profit

const get_total_profit = ({crops}) => {
    const profitFromAllCrops = crops.map(crop => get_profit_for_crop(crop));
    return profitFromAllCrops.reduce ((acc, val) => acc+ val)
}

//module exports

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_crop,
    get_revenue_for_crop,
    get_profit_for_crop,
    get_total_profit,
};