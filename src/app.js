const express = require('express');
require("dotenv").config();
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/users.routes')

initModels();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

db.sync()
    .then(() => {console.log('base de datos sincronizada')
})
.catch((error) => console.log(error))

app.get('/', (req, res) => {
    res.send('servidor ok');
});


app.use(userRoutes)

app.listen(PORT, () => {
    console.log(`servidor escuchando en ${PORT} `);
})