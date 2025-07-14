const dotenv = require('dotenv');

const app = require('./app.js');
const connectDB = require('./config/dbConfig.js');

dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
    if(err){
        return console.error(`An error occured : ${err}`);
    }
    connectDB();
    console.log(`Server is running at PORT: ${PORT}`);
})