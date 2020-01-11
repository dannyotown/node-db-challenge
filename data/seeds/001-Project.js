exports.seed = function(knex) {
  return knex("Projects")
    .truncate()
    .then(function() {
      return knex("Projects").insert([
        { id: 1, Name: "Learning Spanish", Description: "Fluent In Spanish!" },
        { id: 2, Name: "Learning To Code", Description: "Become a coder man!" }
      ]);
    });
};
