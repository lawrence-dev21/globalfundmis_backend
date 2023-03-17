'use strict'
async function up(knex) {
    await knex("grades").insert(
      [1,2,3,4,5,6,7,8,9,10,11,12].map(grade => {
        return { 
          name: `Grade ${grade}`,
          created_at: Date.now(),
          updated_at: Date.now(),
          published_at: Date.now()
        }
      })
    );
}

module.exports = { up };

