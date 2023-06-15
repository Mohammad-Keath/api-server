const express = require('express');
const app = express();
const ClothesRoute = require('./routes/clothes.route');
const clothesCustomersRoute = require('./routes/clothesCustomers.route');
const clothesCustomersRelationRoute = require('./routes/clothesCustomersRelation.route')
const foodsRoute = require('./routes/foods.route');
const foodsCustomersRelationRoute = require('./routes/foodCustomersRelation.route');
const foodCustomersRoute = require('./routes/foodCustomers.route')


const pageNotFound = require('./error-handlers/404');
const errorHandler= require('./error-handlers/500')





app.use(express.json());
app.use(ClothesRoute);
app.use(foodCustomersRoute)
app.use(clothesCustomersRoute);
app.use(clothesCustomersRelationRoute);

app.use(foodsRoute);
app.use(foodsCustomersRelationRoute);

app.get('/',(req,res)=>{
    res.send('Hello to the main page')
})
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