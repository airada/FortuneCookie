const dotenv = require("dotenv");
dotenv.config();

const mongoose = require('mongoose');
const Quotation = require('./models/quotationModel');

const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/quotation', async(req, res) =>{
    try {
        const quotation = await Quotation.find({}).sort({id: 1});
        res.status(200).json(quotation);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.get('/quotation/:id', async(req, res) =>{
    try {
        let quotation_id = Number(req.params.id);
        console.log(quotation_id);

        const quotation = await Quotation.findOne({id: quotation_id});

        res.status(200).json(quotation);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.post('/quotation', async(req, res) => {
    try {
        const quotation = await Quotation.create(req.body)
        res.status(200).json(quotation);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.put('/quotation/:id', async(req, res) => {
    try {
        let quotation_id = Number(req.params.id);
        console.log(quotation_id);

        const quotation = await Quotation.findOneAndUpdate({id: quotation_id}, req.body);

        if(!quotation){
            return res.status(404).json({message: `Cannot find any quotation with ID ${quotation_id}`})
        }

        const new_quotation = await Quotation.find({id: quotation_id});
        res.status(200).json(new_quotation);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

const port = process.env.PORT || 3000;

mongoose.set("strictQuery", false);
mongoose.set('debug', true);
mongoose.
connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(port, ()=> {
        console.log(`Server listening on port ${port}`);
        console.log(`Connection Status: `+ mongoose.connection.readyState);
    });
}).catch((error) => {
    console.log(error);
})
