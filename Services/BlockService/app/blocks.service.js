const BlockModel = require("./blocks.model");

class BlockService {
    constructor() {
        this.model = new BlockModel();
    }

    async Adds(data) {
        if (data.block_name === "") {
            throw new Error("block name is required");
        } else {
            return await this.model.create(data);
        }
    }
    async Views(){
        return await this.model.view();
    }
    async search(name){
        console.log("service = ",name);
        return await this.model.search(name);
    }
}
module.exports = BlockService;