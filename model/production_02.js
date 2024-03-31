const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ProductionSchema2 = Schema({
    U_DEFEITUOSA_W: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    INICIO_PROCESS_B: {
        type: String,
        required: true
    },
    FIM_PROCESS_B: {
        type: String,
        required: true
    },
    TEMPERATURA_W: {
        type: String,
        required: true
    },
    V_INICIO_PROCESS_W: {
        type: String,
        required: true
    },
    TOTAL_W: {
        type: String,
        required: true
    },
    T_PARADO_W: {
        type: String,
        required: true
    },
    P_REALIZDA_W: {
        type: String,
        required: true
    },
    T_PRODUZIDO_W: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    MAQ_LIG_DES_B: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    T_PLANEJADO_W: {
        type: String,
        required: true
    },
    V_FIM_PROCESS_W: {
        type: String,
        required: true
    },
    V_PRODUCAO_W: {
        type: String,
        required: true
    }

},
    {
        collection: 'Production_02'
    });

module.exports = mongoose.model('ProductionSchema2', ProductionSchema2);