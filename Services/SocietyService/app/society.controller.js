const SocietyService = require("./society.service");
class SocietyController {
    constructor() {
        this.service = new SocietyService();
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
    async view(_,res){
        try{
            const result = await this.service.Views();
            if(result.rows.length>0){
                return res.status(200).send({message:result.rows});
            }else{
                return res.status(500).send({message:err});
            }
        }catch(err){
            console.log(err);
            return res.status(500).send({message:err});
        }
    }
}
module.exports = SocietyController;

