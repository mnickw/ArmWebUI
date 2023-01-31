var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    if (req.body?.userid === 'root' && req.body?.password === '12345678') {
        console.log('yo, its ok');
        res.json({ data: 'Cool data here from ARM device.' });
    }
    else {
        console.log('yo, its not ok ', req);
        res.status(403).json("Forbidden");
    }
});

module.exports = router;
