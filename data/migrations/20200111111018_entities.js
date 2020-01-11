exports.up = function(knex) {
  return knex.schema
    .createTable("Projects", tbl => {
      tbl.increments();
      tbl
        .text("Name", 128)
        .unique()
        .notNullable();
      tbl
        .text("Description", 128)
        .unique()
        .notNullable();
      tbl
        .boolean("Completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("Resources", tbl => {
      tbl.increments();
      tbl
        .text("Name")
        .notNullable()
        .unique();
      tbl.text("Description");
    })
    .createTable("Tasks", tbl => {
      tbl.increments();
      tbl.text("Contents", 128).notNullable();
      tbl.text("Notes");
      tbl
        .boolean("Task_Completion")
        .notNullable()
        .defaultTo(false);
      tbl
        .integer("Project_Id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Projects")
        .onDelete("CASCADE");
    })
    .createTable("Resources_Map", tbl => {
      tbl
        .integer("Resources_Id")
        .notNullable()
        .references("id")
        .inTable("Resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("Projects_Id")
        .notNullable()
        .references("id")
        .inTable("Projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.primary(["Resources_Id", "Projects_Id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Resources_Map")
    .dropTableIfExists("Projects")
    .dropTableIfExists("Resources")
    .dropTableIfExists("Tasks");
};
