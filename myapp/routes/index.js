var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const url = require('url');
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

  // new URL object
  const current_url = new URL(fullUrl);

  // get access to URLSearchParams object
  const search_params = current_url.searchParams;

  // get url parameters
  const hash = search_params.get('hash');

  const cp = new URL(hash);
  const p = cp.searchParams;

  const title = p.get('title');
  const desc = p.get('desc');
  const image = p.get('image');
  const link = p.get('url');

  // const type = search_params.get('type');

  res.render('index', { title: hash, desc: desc, image: image, link: link });
});

module.exports = router;
