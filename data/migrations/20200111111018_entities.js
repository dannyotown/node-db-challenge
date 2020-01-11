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
      tbl
        .integer("Project_Id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Projects")
        .onDelete("CASCADE");
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
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Projects")
    .dropTableIfExists("Resources")
    .dropTableIfExists("Tasks");
};
