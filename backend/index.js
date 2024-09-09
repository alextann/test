const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());


async function main() {
  await mongoose.connect('mongodb+srv://puthitamungmee2547:ammy2547@veggify-react-app.nmvep.mongodb.net/?retryWrites=true&w=majority&appName=veggify-react-app');

  app.get('/', (req, res) => {
    res.send('Veggify Recipe App Sever is running!')
  })
  
}

main().then(() => console.log("Mongodb Connected Succeffuly!")).catch(err => console.log(err));

//routes
const ItemRoutes = require("./src/routes/itemRoute");

app.use('/api',ItemRoutes)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})