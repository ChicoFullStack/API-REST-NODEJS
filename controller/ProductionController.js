const express = require('express');
app = express();
const productionExpressRoute = express.Router();
let ProductionSchema = require('../model/production');

productionExpressRoute.get('/list', async (req, res) => {

    try {
        const data = await ProductionSchema.find({});
        // select * from table
        res.json(data);
    } catch (err) {
        throw err;
    }
});

productionExpressRoute.get('/list-one', async (req, res) => {

    try {
        const data = await ProductionSchema.find({}).limit(1).sort({ $natural: -1 });
        // select * from table
        res.json(data);
        
    } catch (err) {
        throw err;
    }
});

productionExpressRoute.get('/cat/:id', async (req, res) => {

    try {
        id = req.params.id
        const data = await ProductionSchema.findById(id);
        //Ex: select * from abc where id = 2
        res.json(data);

    } catch (err) {
        throw err;
    }
});

productionExpressRoute.post('/add-cat/', async (req, res) => {

    const data = new ProductionSchema({
        TEMPERATURA : req.body.TEMPERATURA,
        date: req.body.date,
        INICIO_PROCESS_W: req.body.INICIO_PROCESS_W,
        PRODUCAO: req.body.PRODUCAO,
        MAQ_LIG_DES_B: req.body.MAQ_LIG_DES_B,
        FIM_PROCESS_B: req.body.FIM_PROCESS_B,
        INICIO_PROCESS_B: req.body.INICIO_PROCESS_B,
        id: req.body.id,
        time: req.body.time,
        FIM_PROCESS_W: req.body.FIM_PROCESS_W,
        MAQ_LIG_DES_W: req.body.MAQ_LIG_DES_W
    })

    try {
        const datas = await data.save();
        res.status(200).json(datas);

    } catch (err) {
        res.status(400).json({ Message: err.message });
    }
});
productionExpressRoute.delete('/cat-del/:id', async (req, res) => {

    try {
        id = req.params.id
        const data = await ProductionSchema.findByIdAndDelete(id);
        //Ex: select * from abc where id = 2
        res.send(`Document with ${data.id} has been deleted!`);

    } catch (err) {
        throw err;
    }
});
productionExpressRoute.put('/cat-update/:id', async (req, res) => {

    try {
        id = req.params.id
        const updateData = req.body;
        const options = { new: true };

        const result = await ProductionSchema.findByIdAndUpdate(
            id, updateData, options
            );
            
            res.send(result)        

    } catch (err) {
        res.status(400).json({ Message: err.message });
    }
});


module.exports = productionExpressRoute;