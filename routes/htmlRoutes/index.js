const path = require('path')
const router = require('express').Router();

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/assets/index.html'));;
});

router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/assets/notes.html'));;
});

module.exports = router;