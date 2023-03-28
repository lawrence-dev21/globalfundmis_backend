'use strict';
const fs = require('fs');
const data = JSON.parse(
  fs.readFileSync('./database/migrations/provinces.json', 'utf8')
);

async function up(knex) {
  try {
    const now = new Date(Date.now()).toISOString();
    console.log(now);

    for (let province of data) {
      // Find the province by name
      let [existingProvince] = await knex('provinces')
        .where('name', province.name)
        .select('*');

      // If the province doesn't exist, insert it
      if (!existingProvince) {
        [existingProvince] = await knex('provinces')
          .returning('*')
          .insert({
            name: province.name,
            created_at: now,
            updated_at: now,
            published_at: now
          });
      }

      const { id: provinceId } = existingProvince;

      for (let [index, district] of province.districts.entries()) {
        // Find the district by name
        let [existingDistrict] = await knex('districts')
          .where('name', district)
          .select('*');

        // If the district doesn't exist, insert it
        if (!existingDistrict) {
          [existingDistrict] = await knex('districts')
            .returning('*')
            .insert({
              name: district,
              created_at: now,
              updated_at: now,
              published_at: now
            });
        }
        const { id: districtId } = existingDistrict;

        const districtProvinceLink = {
          district_id: districtId,
          province_id: provinceId,
          district_order: index + 1
        };

        await knex('districts_province_links').insert(districtProvinceLink);
      }
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { up };