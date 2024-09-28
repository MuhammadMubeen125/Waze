const express = require('express');
const mongoose = require('mongoose');
const request = require('request');
const cors = require('cors');

// Create Express app
const app = express();
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/wanderwise', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model for your data
const bookingSchema = new mongoose.Schema({
  placename: String,
  username: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const Booking = mongoose.model('booking', bookingSchema);
const User = mongoose.model('user', userSchema);
const googleApiKey = 'AIzaSyB1TSCiV6L80P0PdYJ0QuYEdLKBpr-AgUk';

// Middleware for parsing JSON body
app.use(express.json());

// Define routes
app.get('/bookings', async (req, res) => {
  try {
    const items = await Booking.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/hotels', (req, res) => {
  const location = req.query.location;

  if (!location) {
    return res.status(400).send({ error: 'Location parameter is required' });
  }

  const formattedCityName = location.split(' ').join('+');
  console.log('this is the formattedCityName: ', formattedCityName);

  const googleApiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${formattedCityName}+lodging&key=${googleApiKey}`;

  request(googleApiUrl, (error, response, body) => {
    if (error) {
      return res
        .status(500)
        .send({ error: 'An error occurred while fetching hotel data' });
    }

    const hotelResults = JSON.parse(body).results;
    if (!hotelResults) {
      return res.status(500).send({ error: 'No results found' });
    }

    let count = 0;
    const hotelData = hotelResults.map((hotel) => {
      count++;
      const photoReference =
        hotel.photos && hotel.photos.length > 0
          ? hotel.photos[0].photo_reference
          : null;
      const rawUrl =
        hotel.photos &&
        hotel.photos.length > 0 &&
        hotel.photos[0].html_attributions.length > 0
          ? hotel.photos[0].html_attributions[0]
          : null;
      console.log(rawUrl);
      const urlRegex = /https?:\/\/[^\"]+/;
      const photosUrl = rawUrl?.match(urlRegex)[0];
      console.log(photosUrl);

      return {
        id: count,
        name: hotel.name,
        rating: hotel.rating,
        location: hotel.geometry.location,
        address: hotel.formatted_address,
        latt: hotel.geometry.location.lat,
        long: hotel.geometry.location.lng,
        img: photoReference ? getPhoto(photoReference) : null,
        imgurl: photosUrl,
        price: Math.floor(Math.random() * (4000 - 3000 + 1)) + 4000,
      };
    });

    // Return hotel data as the API response
    res.send(hotelData);
  });
});

// Define your POST route to fetch image by photoReference
app.post('/api/get-photo', (req, res) => {
  const { photoReference } = req.body;

  if (!photoReference) {
    return res.status(400).send({ error: 'Photo reference is required' });
  }

  // Construct the Google Maps API URL to fetch the image
  const googleApiUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${googleApiKey}`;

  // Fetch the image using request
  request(googleApiUrl, { encoding: null }, (error, response, body) => {
    if (error) {
      console.error('Error fetching image from Google API:', error.message);
      return res
        .status(500)
        .send({ error: 'An error occurred while fetching the image' });
    }

    // Set the appropriate content type
    res.set('Content-Type', 'image/jpeg'); // Adjust if the image is of a different type
    res.send(body);
  });
});

app.get('/api/getPhone', (req, res) => {
  const photoReference = req.query.photoReference;

  if (!photoReference) {
    return res.status(400).send({ error: 'Photo reference is required' });
  }

  // Construct the Google Maps API URL to fetch the image
  const googleApiUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${googleApiKey}`;

  // Fetch the image using request
  request(googleApiUrl, { encoding: null }, (error, response, body) => {
    if (error) {
      console.error('Error fetching image from Google API:', error.message);
      return res
        .status(500)
        .send({ error: 'An error occurred while fetching the image' });
    }

    // Set the appropriate content type
    res.set('Content-Type', 'image/jpeg'); // Adjust if the image is of a different type
    res.send(body);
  });
});

function getPhoto(photoReference) {
  // Replace with the logic to get photo URL from photoReference
  // Example:
  const photoUrl = `/api/getPhone?photoReference=${photoReference}`;
  return photoUrl;
}

app.post('/bookings', async (req, res) => {
  const booking = new Booking({
    username: req.body.name,
    placename: req.body.hotel,
  });

  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post('/users', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post('/users/login', async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(403).json({ msg: 'No such user' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
