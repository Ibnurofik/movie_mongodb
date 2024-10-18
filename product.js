const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/ShopApp")
  .then((result) => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//   },
// });

const Product = mongoose.model("Product", productSchema);

// const tshirt = new Product({
//   name: "T Shirt Raglan",
//   price: 50000,
//   color: "hitam",
// });

// tshirt
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
const productSchema = mongoose.Schema({
  name: {
    type: string,
    required: true,
  },
  brand: {
    type: string,
    required: true,
  },
  price: {
    type: number,
    required: true,
    min: 0,
  },
  color: {
    type: string,
    required: true,
  },
  size: [
    {
      type: string,
      required: true,
    },
  ],
  description: {
    type: string,
    required: true,
    maxLength: 150,
  },
  condition: {
    type: string,
    enum: ["baru", "bekas"],
    defaul: "baru",
  },
  stock: {
    type: number,
    required: true,
    min: 0,
  },
  availability: {
    online: {
      type: bolean,
      required: true,
    },
    offline: {
      type: bolean,
      required: true,
    },
  },
});
