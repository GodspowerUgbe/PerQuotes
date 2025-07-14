const Quotes = require('../model/Quotes');

const  getQuoteByAuthor = async (req,res)=>{
    const {id} = req.params;
    const match = await Quotes.findOne({author:{$regex:id,$options:'i'}},{quote:1,category:1,_id:0});
    res.status(200).json(match);
}

const  getQuotesByCategory = async (req,res)=>{
    const {id} = req.params;
    const match = await Quotes.find({category:{$regex:id,$options:'i'}},{quote:1,author:1,_id:0});
    res.status(200).json(match);
};

const  getRandomQuotes = async (req,res)=>{
    const match = await Quotes.aggregate([
        {$sample:{size:10}},
        {
            $project:{
                _id:0,
                quote:1,
                author:1,
                category:1
            }
        }
    ]);
    res.status(200).json(match);
};


module.exports = {
    getQuoteByAuthor,
    getQuotesByCategory,
    getRandomQuotes
}