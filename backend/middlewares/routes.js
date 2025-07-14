const {
    readFileSync
} = require('fs');
const path = require('path');


const index = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'..','..','public','index.html'));
}

const about = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'..','..','public','pages','about.html'));
}
const contact = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'..','..','public','pages','contact.html'));
}

const random = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'..','..','public','pages','random.html'));
}

module.exports = {
    index,about,contact,random
};
