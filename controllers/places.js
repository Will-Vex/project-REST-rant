const router = require('express').Router()


router.get('/', (req, res) => {
    let places = [{
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

module.exports = router