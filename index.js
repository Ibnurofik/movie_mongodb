const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movie_db")
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  director: String,
  rating: Number,
});

const Movie = mongoose.model("Movie", movieSchema);
//find mpvie berdasarkan tahun

// const getMovie = Movie.findOne({ year: { $gte: 2018 }, genre: "Drama" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.findById("67113eb6033c9c8d5003a1dd")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Update One
// Movie.updateMany({ year: { $lt: 2019 } }, { rating: 8.0 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Movie.findByIdAndUpdate(
  "67113e963d0435b8f21290d9",
  { rating: 10 },
  { new: true }
)
  .then((result) => {
    consol.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
