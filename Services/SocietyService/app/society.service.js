const SocietyModel = require("./society.model");

class SocietyService {
    constructor() {
        this.model = new SocietyModel();
    }

    async Adds(data) {
        if (data.society_name === "") {
            throw new Error("Society name is required");
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
module.exports = SocietyService;