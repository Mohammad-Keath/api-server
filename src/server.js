const express = require('express');
const app = express();
const ClothesRoute = require('./routes/clothes.route');
const foodsRoute = require('./routes/foods.route');
const pageNotFound = require('./error-handlers/404');
const errorHandler= require('./error-handlers/500')




app.use(express.json());
app.use(ClothesRoute);
app.use(foodsRoute);

app.use(errorHandler);
app.use('*',pageNotFound)
function start(port){
app.listen(port,()=>{
    console.log(`The website is up and listen on port ${port}`);
})}
module.exports= {
    app : app,
    start : start,
}