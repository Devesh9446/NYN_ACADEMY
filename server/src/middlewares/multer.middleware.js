import multer from 'multer'

console.log('hi');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log(file);
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
export  const upload = multer({ storage: storage })