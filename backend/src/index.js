const express = require('express');
const cors = require('cors');
const routes = require("./routes");

const port = process.env.PORT || 3333;

const app = express();

app.use(express.urlencoded({
     limit: '50mb', 
     extended: true 
}))

app.use(cors());

app.use(express.json({  
    limit: '50mb', extended: true
}));

app.use(routes);


app.listen(port, () => console.log(`server is running on port ${port}`));