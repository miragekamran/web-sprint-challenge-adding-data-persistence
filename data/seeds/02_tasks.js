exports.seed = async function (knex) {
    await knex("tasks").insert([
        {
            project_id: 1,
            description: "join lambda to learn new skills for a job",
            notes: "",
            is_completed: true
        },
        {
            project_id: 1,
            description: "finish lambda to get a job",
            notes: "apply for skill based jobs after",
            is_completed: true
        },
        {
            project_id: 2,
            description: "need a car I like to pay for",
            notes: "mustang",
            is_completed: true
        },
        {
            project_id: 2,
            description: "save money to buy the car I want",
            notes: "",
            is_completed: false
        },
        {
            project_id: 3,
            description: "gotta date to get a girl",
            notes: "",
            is_completed: false
        },
        {
            project_id: 3,
            description: "if you don't ask you cant get married",
            notes: "you can do this!",
            is_completed: false
        }
    ]);
}