const Quotes = require('../model/Quotes.js');

async function store(name) {
  const query = encodeURIComponent(name);
    const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_kEY}&cx=${process.env.CX}&searchType=image&q=${query}&num=5`;
    
    for(let i=0;i<10;i++){

        try {
            const res = await fetch('https://api.api-ninjas.com/v1/quotes',{
                headers: { 
                    'X-Api-Key': process.env.API_NINJAS_KEY
    
                } 
            });
    
            const [data] = await res.json();
            const {quote,author,category} = data;
            let duplicates = await Quotes.findOne({quote});
            if(duplicates) {
                console.error('error: quote already in db',quote);
                continue;
            };
            const newQuote = new Quotes({
                quote,author,category
            });
            console.log(newQuote);
            await newQuote.save();
        } catch (err) {
            console.log(err);
        }
    }

//   try {
//     const res = await fetch(url);
//     const data = await res.json();

//     if (data.items) {
//       const imageUrls = data.items.map(item => item.link);
//       return imageUrls;
//     } else {
//       console.warn('No images found:', data);
//       return [];
//     }
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     return [];
//   }
}

// Example usage
// searchPersonImages('Angela Merkel').then(images => {
//   console.log('Found image URLs:', images);
// });


module.exports = store;