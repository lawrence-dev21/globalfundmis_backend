"use strict";
const fs = require("fs");
const data = JSON.parse(
  fs.readFileSync("./database/migrations/provinces.json", "utf8")
);
async function up(knex) {
  try {
    for (let province of data) {
      const [provinceId] = await knex("provinces").insert({
        name: province.name,
        created_at: Date.now(),
        updated_at: Date.now(),
        published_at: Date.now()
      });
      for (let [index, district] of province.districts.entries()) {
        const [districtId] = await knex("districts").insert(
          { 
            name: district,
            created_at: Date.now(),
            updated_at: Date.now(),
            published_at: Date.now(),
           });
        const districtProvinceLink = {
          district_id: districtId,
          province_id: provinceId,
          district_order: index + 1,
        };
        await knex("districts_province_links").insert(districtProvinceLink);
      }
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { up };
