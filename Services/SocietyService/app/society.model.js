const pool = require("./society.config")

class SocietyModel {

    async create(data) {
        const sql = "INSERT INTO society(society_name,address,city,state,pin_code,contact_email,contact_phone,total_blocks,total_flats,maintenance_charges) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *";
        const sdata = [
            data.society_name,
            data.address,
            data.city,
            data.state,
            data.pin_code,
            data.contact_email,
            data.contact_phone,
            data.total_blocks,
            data.total_flats,
            data.maintenance_charges,
        ]
        const result = await pool.query(sql, sdata);
        return result;
    }
    async view() {
        const sql = "SELECT * FROM society";
        const result = await pool.query(sql);
        return result;
    }

    async search(name) {
        const sql = "SELECT * FROM society WHERE society_name = $1";
        const result = await pool.query(sql, [name]);
        return result;
    }
    async delete(id) {
        const sql = "UPDATE society SET is_delete = true WHERE society_id = ?";
        const result = await pool.query(sql, [id]);
        return result;
    }

}
module.exports = SocietyModel;