const express = require('express');
app = express();
const productionExpressRoute = express.Router();
let ProductionSchema = require('../model/production_02');

productionExpressRoute.get('/list2', async (req, res) => {

    try {
        const data = await ProductionSchema.find({});
        // select * from table
        res.json(data);
    } catch (err) {
        throw err;
    }
});

productionExpressRoute.get('/list-one2', async (req, res) => {

    try {
        const data = await ProductionSchema.find({}).limit(1).sort({ $natural: -1 });
        // select * from table
        res.json(data);
        
    } catch (err) {
        throw err;
    }
});

productionExpressRoute.get('/cat2/:id', async (req, res) => {

    try {
        id = req.params.id
        const data = await ProductionSchema.findById(id);
        //Ex: select * from abc where id = 2
        res.json(data);

    } catch (err) {
        throw err;
    }
});

productionExpressRoute.post('/add-cat2/', async (req, res) => {

    const data = new ProductionSchema({
        U_DEFEITUOSA_W : req.body.U_DEFEITUOSA_W,
        date: req.body.date,
        INICIO_PROCESS_B: req.body.INICIO_PROCESS_B,
        FIM_PROCESS_B: req.body.FIM_PROCESS_B,
        TEMPERATURA_W: req.body.TEMPERATURA_W,
        V_INICIO_PROCESS_W: req.body.V_INICIO_PROCESS_W,
        TOTAL_W: req.body.TOTAL_W,
        T_PARADO_W: req.body.T_PARADO_W,
        P_REALIZDA_W: req.body.P_REALIZDA_W,
        id: req.body.id,
        MAQ_LIG_DES_B: req.body.MAQ_LIG_DES_B,
        time: req.body.time,
        T_PLANEJADO_W: req.body.T_PLANEJADO_W,
        V_FIM_PROCESS_W: req.body.V_FIM_PROCESS_W,
        V_PRODUCAO_W: req.body.V_PRODUCAO_W,
    })

    try {
        const datas = await data.save();
        res.status(200).json(datas);

    } catch (err) {
        res.status(400).json({ Message: err.message });
    }
});
productionExpressRoute.delete('/cat-del2/:id', async (req, res) => {

    try {
        id = req.params.id
        const data = await ProductionSchema.findByIdAndDelete(id);
        //Ex: select * from abc where id = 2
        res.send(`Document with ${data.id} has been deleted!`);

    } catch (err) {
        throw err;
    }
});
productionExpressRoute.put('/cat-update2/:id', async (req, res) => {

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