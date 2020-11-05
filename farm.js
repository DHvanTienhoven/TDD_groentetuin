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

//step 5: Take environmental factors into account in calculating the yield of a plant: get_adjusted_yield_for_plant

const get_adjusted_yield_for_plant = (crop, environment) => {
    const sunIntensity = environment.sun;
    const yieldPercentage = crop.factors.sun[sunIntensity];
    return get_yield_for_plant(crop) * (yieldPercentage/100 + 1)
}

//step 6: Take this step with multiple environmental factors

const get_adjusted_yield_for_plant2 = (crop, environment) => {
    const yieldPercentageSun = crop.factors.sun[environment.sun];
    const yieldPercentageWind = crop.factors.wind[environment.wind];
    const fromPercentageToMultiplyFactor = percentage => percentage/100 +1;
    return get_yield_for_plant(crop) * fromPercentageToMultiplyFactor(yieldPercentageSun) * fromPercentageToMultiplyFactor(yieldPercentageWind)
}

const get_adjusted_yield_for_plant3 = (crop, environment) => {
    const percentages = [crop.factors.sun[environment.sun], crop.factors.wind[environment.wind]];
    multiplyFactors = percentages.map(percentage => percentage/100 +1 );
    return get_yield_for_plant(crop) * multiplyFactors[0] * multiplyFactors[1];
}

const corn = {
    name: "corn",
    yield: 30,
    factors: {
        sun: {
            low: -50,
            medium: 0,
            high: 50,
        },
        wind: {
            low: 0,
            medium: -20,
            high: -60,
        }
    },
};
const environment_factors = {
    sun: "high",
    wind: "high",
};

console.log(get_adjusted_yield_for_plant3(corn, environment_factors))




//module exports

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_crop,
    get_revenue_for_crop,
    get_profit_for_crop,
    get_total_profit,
    get_adjusted_yield_for_plant,
    get_adjusted_yield_for_plant2,
    get_adjusted_yield_for_plant3
};