var express = require('express')
var multer  = require('multer')

// 参考 https://github.com/amor520/nodejs-file-upload-multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });

var app = express();

app.post('/', upload.single('uploadimg'), function (req, res, next) {
  // res.set('Access-Control-Allow-Origin', '*');
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any

  res.setHeader('Access-Control-Allow-Origin', '*');
  if(req.file){
    // res.sendStatus(200).send('上传成功');
    res.send('上传成功');

  }
});

app.listen(9999);
