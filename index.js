//import express, body-parser
const express = require('express');
const bodyParser = require('body-parser');


//create express server instance
const server = express();


//import middlewares
server.use(bodyParser.json());

//Database
const banksDb = [];

//Bank models
class BankModel {
    constructor({name, location, branch, phone, address, accountNumber}){
        this.name = name;
        this.location = location,
        this.branch = branch,
        this.phone = phone,
        this.address = address,
        this.accountNumber = accountNumber
    }

    save(){
        banksDb.push(this);
        return this;
    }

    static all(){
        return banksDb;
    }
}

//controllers
deleteBankController = (req, res) =>{
    //delete bank
}

updateBankController = (req, res) => {
    //update bank
}
createBankController = (req, res) => {
    //create a bank
    const {name, location, branch, phone, address, accountNumber} = req.body;
    const bank = new BankModel({name, location, branch, phone, address, accountNumber})
    bank.save();
    res.json({message: 'create successful', data:bank})
}
listBankController = (req, res) => {
// list all banks
    const banks = BankModel.all();
    res.json({data:banks})
}

//add routes
//view banks - get method
server.get('/bank', listBankController)
//create bank - post method
server.post('/bank', createBankController)
//update bank
server.put('/bank', updateBankController)
//delete bank
server.delete('/bank', deleteBankController)


//start server
server.listen(3000, () => console.log('server is running')) 