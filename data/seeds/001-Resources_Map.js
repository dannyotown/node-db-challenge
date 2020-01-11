exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Resources_Map")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Resources_Map").insert([
        { Resources_Id: 1, Projects_Id: 1 },
        { Resources_Id: 2, Projects_Id: 1 },
        { Resources_Id: 3, Projects_Id: 2 }
      ]);
    });
};
