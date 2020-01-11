exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Tasks").insert([
        {
          id: 1,
          Contents: "Study For 1 Hour",
          Notes: "Study Guide Practice",
          Task_Completion: false,
          Project_Id: 1
        },
        {
          id: 2,
          Contents: "Go To Tutor",
          Notes: "Tutor Session is 1 Hour",
          Task_Completion: false,
          Project_Id: 1
        },
        {
          id: 3,
          Contents: "Practice Javascript",
          Notes: "Make Sure You Code as well as read",
          Task_Completion: false,
          Project_Id: 2
        }
      ]);
    });
};
