var express = require('express');
var router = express.Router();

var desktop = null;

router.get('/', function(req, res, next) {
  res.send('api server works');
});

router.get('/401', function(req, res, next) {
  res.status(401).end()
});

router.get('/user-header', function(req, res, next) {
	console.log(JSON.stringify(req.body));
	res.cookie('time', new Date().getTime())
	res.json(require('./mock/user-header'));
})

router.get('/desktop', function(req, res, next) {
	console.log(JSON.stringify(req.body));
	var data = desktop || require('./mock/desktop')
	res.json(data);
})

router.post('/save-desktop', function(req, res, next) {
	desktop = req.body
	res.json( {ok: true, 'cookie-time': req.cookies.time} );
})

router.post('/fn-list', function(req, res, next) {
	console.log(JSON.stringify(req.body));
	res.json(require('./mock/fn-list'));
})

router.post('/table-body', function(req, res, next) {
	console.log(JSON.stringify(req.body));
	
	var tableBody = require('./mock/table-body')
	var pageNo = parseInt(req.body.pageNo);
	var perPageNum = parseInt(req.body.perPageNum);
	var pageData = tableBody.slice((pageNo-1)*perPageNum, (pageNo)*perPageNum);
	res.json({
		tableBody: pageData,
		totalPageNum: 1 + Math.floor(Math.random()*20)
	});
})


router.post('/table-header', function(req, res, next) {
	res.json(require('./mock/table-header'));
})

router.post('/table-config', function(req, res, next) {
	console.log(JSON.stringify(req.body));
	res.json(require('./mock/table-config'));
})

router.post('/search-condition', function(req, res, next) {
	console.log(JSON.stringify(req.body));
	res.json(require('./mock/search-condition'));
})















module.exports = router;
