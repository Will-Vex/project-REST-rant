const router = require('express').Router()
let places = []
router.get('/', (req, res) => {
    places = [{
        name: 'Krusty Krab',
        city: 'Bikini Bottom',
        state: 'The Ocean',
        cuisines: 'Krabby Patty',
        pic: '/images/krusty-krab.webp'
      }, {
        name: 'A literal cat',
        city: 'various',
        state: 'various',
        cuisines: "Don't eat cats!",
        pic: '/images/kitty.jpg'
      }]
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  
  places.push(req.body)
  res.redirect('/places')
})

module.exports = router