exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Resources").insert([
        {
          id: 1,
          Name: "Spanish Book",
          Description: "Get Spanish Book",
          Project_ID: 1
        },
        {
          id: 2,
          Name: "Spanish Tutor",
          Description: "Get spanish Tutor",
          Project_ID: 1
        },
        {
          id: 3,
          Name: "Coding Book",
          Description: "Javascript Study Book",
          Project_ID: 2
        }
      ]);
    });
};
