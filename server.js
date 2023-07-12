const dotenv = require("dotenv");
dotenv.config();

const {MongoClient} = require('mongodb');

async function connectToMongoDB() {
    const connection_string = process.env.CONNECTION_STRING;

    const client = new MongoClient(connection_string);

    try {
        await client.connect();

        const document = await getStoredDate(client);
        const count = await getDocumentCount(client);

        let stored_date = document.date;
        let stored_quotation = document.quotation;
        let current_date = new Date();
        current_date.setHours(0,0,0,0);

        let random_quotation = "";

        if (stored_date < current_date) {
            random_int = Math.floor(Math.random()*count);
            let result = await getRandomQuotation(client, random_int, stored_quotation);
            random_quotation = result.quotation;
            await updateStoredDate(client, current_date, random_quotation, result.author);
        } else {
            random_quotation = stored_quotation;
        }

        document.getElementById("quotation").innerHTML = random_quotation;

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function getStoredDate(client) {
    const result = await client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION).findOne({id: 0, type: "ISODate"});

    if (result) {
        return result;
    } else {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        date.setHours(0,0,0,0);

        client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION).insertOne({'id':0,'type':'ISODate', 'date': date,'quotation': "\"Everything you like today, you've tried before.\"", 'author': ""})
        return date;
    }
}

async function getDocumentCount(client) {
    const count = await client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION).find({type: 'quotation'}).count();
    return count;
}

async function getRandomQuotation(client, quotation_id, stored_quotation) {
    const result = await client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION).findOne({id: quotation_id});
    
    if (result) {
        return result;
    } else {
        return stored_quotation;
    }
}

async function updateStoredDate(client, date, quotation, author){
    await client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION).updateOne({id:0},{$set: {date: date, quotation:quotation, author:author}});
}

connectToMongoDB().catch(console.error);