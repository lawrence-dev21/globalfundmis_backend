'use strict';

async function up(knex) {
  try {
    for (let grade of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) {
      // Find the grade by name
      let gradeName = `Grade ${grade}`;
      let [existingGrade] = await knex('grades')
        .where('name', gradeName)
        .select('*');

      // If the grade doesn't exist, insert it
      if (!existingGrade) {
        const now = new Date(Date.now()).toISOString();
        await knex('grades')
          .insert({
            name: gradeName,
            created_at: now,
            updated_at: now,
            published_at: now
          });
      }
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { up };
