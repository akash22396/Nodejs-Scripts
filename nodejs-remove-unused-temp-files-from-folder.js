/*******************
Remove unused file from directory using nodejs 
***************************/


setTimeout(() => {

// Get used filename from database
  const sqlQ = `select id,image_name  from images`;
  db.con.query(sqlQ, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err)
    }
    else {
      let usedFile = [];
      let unusedFile= [];
      if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
          usedFile.push(result[i].image_name)
        }
      } else {
        console.log('no data');
      }

      const directoryPath = path.join(__dirname, './imageFolderName/');
      fs.readdir(directoryPath, function (err, files) {
        if (err) {
          return console.log('Unable to scan directory: ' + err);
        }
        files.forEach(function (file) {
          unusedFile.push(file)
        });
        // console.log(usedFile);
        //  console.log(unusedFile);
        for (let i = 0; i < unusedFile.length; i++) {
          if (usedFile.includes(unusedFile[i]) === true) {
            console.log(':)');

          } else {
            fs.unlink(`./imageFolderName/${unusedFile[i]}`, function (err) {
              if (err) return console.log('err', err);
              console.log('file deleted successfully');          
            })
          }
        }
      });
    }
  })


}, 10000)
