//step 0: write functions that will make the given tests pass

const get_yield_for_plant = crop => crop.yield;

const get_yield_for_crop = input => get_yield_for_plant(input.crop) * input.num_crops;

const get_total_yield = ({crops}) => {
    yieldFromAllCrops = crops.map(crop => get_yield_for_crop(crop));
    return yieldFromAllCrops.reduce((acc, value) => acc + value)
};

//step 1: calculate costs for a crop: get_costs_for_crop

const get_costs_for_crop = input => input.crop.cost * input.num_crops;

//step 2: calculate revenue for a crop (without accounting for environment factors): get_revenue_for_crop

const get_revenue_for_crop = input => get_yield_for_crop(input) * input.crop.sale_price;

//module exports

module.exports = {
    get_yield_for_plant: get_yield_for_plant,
    get_yield_for_crop: get_yield_for_crop,
    get_total_yield: get_total_yield,
    get_costs_for_crop: get_costs_for_crop,
    get_revenue_for_crop: get_revenue_for_crop,
};