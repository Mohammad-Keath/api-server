
class Collection {
    constructor(model){
        this.model = model;
    }
async read(data_id) {
        let records = null;
        if (data_id) {
            records = await this.model.findOne({ where: { id: data_id } });

        } else {
            records = await this.model.findAll();
        }
        return records;
    }
async create(ReqBody){
        let record = await this.model.create(ReqBody);
        return record
    }
async update(id,ReqBody){
        let record = await this.model.findOne({where:{id:id}})
        let result = await record.update(ReqBody)
        return result
    }
async delete(id){
        let record = await this.model.destroy({where:{id:id}})
        return record
    }
async deleteRelation(id){
        let record = await this.model.destroy({where:{clotheId:id}})
        return record
    }
async readForCustomer(id,model) {
          let  records = await this.model.findAll({ where: { clothesCustomerId: id },
            // include:{
            //     model: model,
            // }
        });
          return records
    }
async readForCloth(id,model) {
        let  records = await this.model.findAll({ where: { clotheId: id },
            // include:{
            //     model: model,
            // } 
        });
        return records
  }
  async readForfoodCustomer(id,model) {
    let  records = await this.model.findAll({ where: { clothesCustomerId: id },
      // include:{
      //     model: model,
      // }
  });
    return records
}
async readForFood(id,model) {
    let  records = await this.model.findAll({ where: { clotheId: id },
        // include:{
        //     model: model,
        // } 
    });
    return records
}
}
module.exports = Collection