var express = require('express');
var router = express.Router();
var formiidable = require("formidable");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/upload",(req,res)=>{
  let form = new formiidable.IncomingForm({
    uploadDir: './upload',
    keepExtensions:true
  });
  form.parse(req,(err,fields, files) =>{
    res.json({
      files
    });

  });
  res.json(req.body);
});
module.exports = router;
