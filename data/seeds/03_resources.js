exports.seed = async function (knex) {
    await knex("resources").insert([
        { name: "computer", description: "" },
        { name: "school", description: "" },
        { name: "pens", description: "" },
        { name: "ring", description: "ring to propose" },
        { name: "money", description: "money for dinners" }
    ]);
};
