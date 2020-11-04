const {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_crop,
    get_revenue_for_crop,
    get_profit_for_crop,
    get_total_profit,
} = require("./farm.js");

//given tests:

describe("get_yield_for_plant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(get_yield_for_plant(corn)).toBe(30);
    });
});

describe("get_yield_for_crop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            num_crops: 10,
        };
        expect(get_yield_for_crop(input)).toBe(30);
    });
});

describe("get_total_yield", () => {
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
        expect(get_total_yield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, num_crops: 0 }];
        expect(get_total_yield({ crops })).toBe(0);
    });
});

//step 1: write a test that will test the function that will calculate costs for a crop

describe("get_costs_for_crop", () => {
    const corn = {
        name: "corn",
        cost: 1
    };
    const input = {
        crop: corn,
        num_crops: 23,
    };
    test("Get costs for a crop", () => {
        expect(get_costs_for_crop(input)).toBe(23);
    });
});

//step 2 write a test that will test the function that will calculate the revenue for a crop

describe("get_revenue_for_crop", () => {
    const apple = {
        name: "apple",
        yield: 13,
        sale_price: 2,
        };
    const input ={
        crop: apple,
        num_crops: 5
    }

    test("Get revenue for crop", () => {
        expect(get_revenue_for_crop(input)).toBe(130);
    });
});

//step 3 write a test that will test the function that will calculate the profit for a crop

describe("get_profit_for_crop", () => {
    const avocado = {
        name: "avocado",
        cost: 4,
        yield: 8,
        sale_price: 12,
        };
    const input ={
        crop: avocado,
        num_crops: 10
    }

    test("Get profit for crop", () => {
        expect(get_profit_for_crop(input)).toBe(920);
    });
});

//step 4 write a test that will test the function that will calculate the profit for multiple crops

describe("get_total_profit", () => {
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
        { crop: avocado, num_crops: 10},
        { crop: apple, num_crops: 6}
    ];
    test("Get total profit", () => {
        expect(get_total_profit({crops})).toBe(1134);
    });
});