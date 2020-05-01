
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {      
    // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Val', password: 'qwerty', department: 'Performative Wokeness'},
        {id: 2, username: 'Shawn', password: 'qwerty', department: 'Toxic Masculinity'},
        {id: 3, username: 'Chris', password: 'qwerty', department: 'Children’s Dance Recital'},
        {id: 4, username: 'Janet', password: 'qwerty', department: 'Children’s Dance Recital'},
        {id: 5, username: 'Trevor', password: 'qwerty', department: 'Performative Wokeness'}
      ]);
    });
};