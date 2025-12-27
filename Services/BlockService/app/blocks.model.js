const pool = require("./blocks.config")

class BlockModel {

    async create(data) {
        const sql = "INSERT INTO blocks(society_id,block_name) VALUES($1,$2) RETURNING *";
        const bdata = [
            data.society_id,
            data.block_name]
        const result = await pool.query(sql, bdata);
        return result;
    }
    async view() {
        const sql = "SELECT * FROM blocks";
        const result = await pool.query(sql);
        return result;
    }
    async delete(id) {
        const sql = "UPDATE blocks SET is_delete = true WHERE block_id = ?";
        const result = await pool.query(sql, [id]);
        return result;
    }

}
module.exports = BlockModel;