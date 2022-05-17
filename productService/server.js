const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");





const productRoutes = require("./api/routes/product.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: ["http://localhost:3004"], credentials: true }));


app.use("/product", productRoutes);

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client


const PORT = process.env.PORT || 3004;
dotenv.config();

mongoose
  .connect(process.env.CONNECTION_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`mongodb synced and listening on port ${PORT}`)
    );
  })
  .catch((error) => {
    console.log(error.message);
  });
app.get("/", (request, response) => {
  response.send("MARVEL FASHION");
});
