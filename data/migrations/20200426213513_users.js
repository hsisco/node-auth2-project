
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.varchar("name", 128).notNullable().unique();
    tbl.varchar("password", 128).notNullable();
    tbl.text("department", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users")
};
