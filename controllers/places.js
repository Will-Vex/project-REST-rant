const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Krusty Krab',
        city: 'Bikini Bottom',
        state: 'The Ocean',
        cuisines: 'Krabby Patty',
        pic: 'https://upload.wikimedia.org/wikipedia/en/3/33/Krusty_Krab_230b.png'
      }, {
        name: 'A literal cat',
        city: 'various',
        state: 'various',
        cuisines: "Don't eat cats!",
        pic: 'http://placekitten.com/250/250'
      }]
    res.render('places/index', { places })
})

module.exports = router