const BlockService = require("./blocks.service");
class BlockController {
    constructor() {
        this.service = new BlockService();
    }
    async create(req, res) {
        try {
            const result = await this.service.Adds(req.body);
            if (result.rows.length > 0) {
                return res.status(200).send({ message: "Society register in app" });
            } else {
                return res.status(500).send({ message: "Error while register new society" });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).send({ message: err });
        }
    }
    async view(_, res) {
        try {
            const result = await this.service.Views();
            if (result.rows.length > 0) {
                return res.status(200).send({ message: result.rows });
            } else {
                return res.status(500).send({ message: "No blocks found" });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).send({ message: err });
        }
    }
    async search(req, res) {
        try {
            const result = await this.service.search(req.params.society_name);
            if (result.rows.length > 0) {
                return res.status(200).send({ message: result });
            } else {
                return res.status(500).send({ message: "No society found" });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).send({ message: err });
        }
    }
}
module.exports = BlockController;

