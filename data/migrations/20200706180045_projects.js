exports.up = async function (knex) {
    await knex.schema.createTable("resources", table => {
        table.increments("id");
        table.text("name").notNullable();
        table.text("description").notNullable();
    });
    await knex.schema.createTable("tasks", table => {
        table.increments("id");
        table.integer("project_id").references("id").inTable("projects");
        table.text("description").notNullable();
        table.text("notes").nullable();
        table.boolean("is_completed").notNullable().defaultTo(false);
    });
    await knex.schema.createTable("projects", table => {
        table.increments("id");
        table.text("name").notNullable();
        table.text("description");
        table.boolean("is_completed").notNullable().defaultTo(false);
    });
    await knex.schema.createTable("projects_resources", table => {
        table.integer("project_id").references("id").inTable("projects");
        table.integer("resource_id").references("id").inTable("resources");
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("projects_resources");
    await knex.schema.dropTableIfExists("projects");
    await knex.schema.dropTableIfExists("tasks");
    await knex.schema.dropTableIfExists("resources");
};
