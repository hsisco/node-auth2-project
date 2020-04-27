
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {      
    // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Val', password: 'qwerty', department: 'Performative Wokeness'},
        {id: 2, name: 'Shawn', password: 'qwerty', department: 'Toxic Masculinity'},
        {id: 3, name: 'Chris', password: 'qwerty', department: 'Children’s Dance Recital'},
        {id: 4, name: 'Janet', password: 'qwerty', department: 'Children’s Dance Recital'},
        {id: 5, name: 'Trevor', password: 'qwerty', department: 'Performative Wokeness'}
      ]);
    });
};