const router = require("express").Router();

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: '/images/thai.jpg',
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: '/images/coffee-cafe.jpg',
    },
  ];

  res.render("../views/places/index", { places });

module.exports = router;