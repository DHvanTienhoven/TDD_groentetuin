const {
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
} = require("./farm.js");


//given tests:

describe("get_yield_for_plant_simple", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };
    test("Get yield for plant with no environment factors", () => {
        expect(get_yield_for_plant_simple(corn)).toBe(30);
    });
});

describe("get_yield_for_crop_simple", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            num_crops: 10,
        };
        expect(get_yield_for_crop_simple(input)).toBe(30);
    });
});

describe("get_total_yield_simple", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
        ];
        expect(get_total_yield_simple({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, num_crops: 0 }];
        expect(get_total_yield_simple({ crops })).toBe(0);
    });
});


//step 1: write a test that will test the function that will calculate costs for a crop

describe("get_costs_for_crop_simple", () => {
    const corn = {
        name: "corn",
        cost: 1
    };
    const input = {
        crop: corn,
        num_crops: 23,
    };
    test("Get costs for a crop", () => {
        expect(get_costs_for_crop_simple(input)).toBe(23);
    });
});

//step 2 write a test that will test the function that will calculate the revenue for a crop

describe("get_revenue_for_crop_simple", () => {
    const apple = {
        name: "apple",
        yield: 13,
        sale_price: 2,
    };
    const input = {
        crop: apple,
        num_crops: 5
    }

    test("Get revenue for crop", () => {
        expect(get_revenue_for_crop_simple(input)).toBe(130);
    });
});

//step 3 write a test that will test the function that will calculate the profit for a crop

describe("get_profit_for_crop_simple", () => {
    const avocado = {
        name: "avocado",
        cost: 4,
        yield: 8,
        sale_price: 12,
    };
    const input = {
        crop: avocado,
        num_crops: 10
    }

    test("Get profit for crop", () => {
        expect(get_profit_for_crop_simple(input)).toBe(920);
    });
});

//step 4 write a test that will test the function that will calculate the profit for multiple crops

describe("get_total_profit_simple", () => {
    const avocado = {
        name: "avocado",
        cost: 4,
        yield: 8,
        sale_price: 12,
    };
    const corn = {
        name: "corn",
        cost: 1,
        yield: 3,
        sale_price: 3
    };
    const pumpkin = {
        name: "pumpkin",
        cost: 2,
        yield: 4,
        sale_price: 5
    }
    const apple = {
        name: "apple",
        cost: 3,
        yield: 13,
        sale_price: 2
    }
    const crops = [
        { crop: corn, num_crops: 5 },
        { crop: pumpkin, num_crops: 2 },
        { crop: avocado, num_crops: 10 },
        { crop: apple, num_crops: 6 }
    ];
    test("Get total profit", () => {
        expect(get_total_profit_simple({ crops })).toBe(1134);
    });
});

//step 5: write a test that will test the function that will take environmental factors into account for calculating the yiald of a crop

describe("get_yield_for_plant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        },
    };
    const environment_factors = {
        sun: "low",
    };
    test("Get yield for plant taking environmental factors into account", () => {
        expect(get_yield_for_plant(corn, environment_factors)).toBe(15)
    });
})

//step 6 write a test that will test get_yield_for_plant with multiple environmental factors
//step 7 write a test that will do the same as step 6, but will pass if one or more environmental factors are not relevant for a crop


describe("get_yield_for_plant", () => {
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
            },
            soil: {
                clay: 20,
                sandy_clay: 0,
                sand: -20
            }
        }
    };
    const avocado = {
        name: "avocado",
        cost: 4,
        yield: 8,
        sale_price: 12,
        factors: {
            sun: {
                low: -80,
                medium: 0,
                high: 40,
            },

            soil: {
                clay: -40,
                sandy_clay: 10,
                sand: 20
            }
        }
    };

    const apple = {
        name: "apple",
        cost: 3,
        yield: 13,
        sale_price: 2,
        factors: {
            sun: {
                high: 20,
                medium: -5,
                low: -15
            }
        }
    };

    const environment_factors = {
        sun: "low",
        wind: "high",
        soil: "sandy_clay"
    };
    test("Get yield for plant taking environmental factors into account", () => {
        expect(get_yield_for_plant(corn, environment_factors)).toBe(6)
    });
    test("Get yield for plant taking environmental factors into account", () => {
        expect(get_yield_for_plant(avocado, environment_factors)).toBe(1)
    });
    test("Get yield for plant taking environmental factors into account", () => {
        expect(get_yield_for_plant(apple, environment_factors)).toBe(11)
    });
})

//step 8 write a test that will test the function get_yield_for_crop

describe("get_yield_for_crop", () => {

    const avocado = {
        name: "avocado",
        cost: 4,
        yield: 8,
        sale_price: 12,
        factors: {
            sun: {
                low: -80,
                medium: 0,
                high: 40,
            },

            soil: {
                clay: -40,
                sandy_clay: 10,
                sand: 20
            }
        }
    };

    const environment_factors = {
        sun: "high",
        wind: "medium",
        soil: "sand"
    };

    const input = { crop: avocado, num_crops: 14 }

    test("Get yield for crop taking environmental factors into account", () => {
        expect(get_yield_for_crop(input, environment_factors)).toBe(182)
    });
})

//step 9 write at test that will test get_profit_for_crop

describe("get_profit_for_crop", () => {

    const corn = {
            name: "corn",
            cost: 1,
            sale_price: 3,
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
                },
                soil: {
                    clay: 20,
                    sandy_clay: 0,
                    sand: -20
                }
            }
        };

    const environment_factors = {
        sun: "high",
        wind: "low",
        soil: "clay"
    };

    const input = { crop: corn, num_crops: 10 }

    test("Get yield for crop taking environmental factors into account", () => {
        expect(get_profit_for_crop(input, environment_factors)).toBe(1610)
    });
})