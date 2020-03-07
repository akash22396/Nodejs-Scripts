const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: "./folderName/",
    filename: function (req, file, cb) {
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storageie,
    limits: { fileSize: 1000000 },  //file size 10mb
}).single("imageName");



app.post("/image",  function (req, res) {
    // console.log(req.body)
    upload(req, res, function (err) {
        // res.send(req.file.filename)
        if (err) {
            res.send('err')
        }else{
            res.send('image upload successfully!')
        }

    })
})
