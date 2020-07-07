exports.seed = async function (knex) {
    await knex("projects").insert([
        {
            name: "Get a new job",
            description: "Need a new job to buy a new car",
            is_completed: true
        },
        {
            name: "Buy a new car",
            description: "Need a car to get a around after I have a car",
            is_completed: false
        },
        {
            name: "Get Married",
            description: "Who wants to be alone...",
            is_completed: false
        }
    ]);
}