const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('../routes/api');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use('/photos', express.static(path.join(__dirname, '../uploads')));

app.use(bodyParser.json());
app.use(cors());
app.use(apiRoutes);

async function startServer() {
    try {
        await mongoose.connect(
            'mongodb+srv://sofia_guseva:0q1w2e3r4t5y@cluster0-2wjfx.mongodb.net/restApi_fullStack',
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }
        );

        app.listen(PORT, () => {
            console.log(`Start server. Backend. ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

startServer();