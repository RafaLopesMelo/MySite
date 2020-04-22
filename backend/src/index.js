const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const VerifyJWT = require('./controllers/AuthController')

const port = process.env.PORT || 3333;

const app = express();

require('dotenv-safe').config({ path: '.env' });

app.use(express.urlencoded({
     limit: '50mb', 
     extended: true 
}))

app.use(cors());

app.use('/admin', VerifyJWT)

app.use(express.json({  
    limit: '50mb', extended: true
}));

app.use(routes);

app.listen(port, () => console.log(`server is running on port ${port}`));