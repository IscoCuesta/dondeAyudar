const functions = require('firebase-functions');
const os = require('os')
const path = require('path')
const cors = require('cors')({origin:true});
const Busboy = require('busboy');
const fs = require('fs');

const {Storage} = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'dondeayudar',
  keyFilename: 'dondeayudar-firebase-adminsdk-uiv8i-b4ac86f418.json',
});

exports.uploadLogo = functions.https.onRequest((req, res) => {

  cors(req, res, () => {
    const busboy = new Busboy({ headers: req.headers })
    let uploadData = null
    let uploadName = null

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      const filepath = path.join(os.tmpdir(), filename)
      uploadData = { file: filepath, type: mimetype }
      file.pipe(fs.createWriteStream(filepath))
    });

    busboy.on('field', function(fieldname, val) {
      uploadName = val;
    });

    busboy.on('finish', () => {
      const bucket = storage.bucket('dondeayudar.appspot.com')
      bucket.upload(uploadData.file, {
          uploadType: 'media',
          destination: 'logos/' + uploadName + '.jpg',
          metadata: {
            metadata: {
              contentType: uploadData.type,
            },
          },
        })
        .then(() => {
          res.status(200).json({
            message: 'It worked!',
          })
        })
        .catch(err => {
          res.status(500).json({
            error: err,
          })
        })
    })
    busboy.end(req.rawBody)
  })

});

exports.uploadHeader = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const busboy = new Busboy({ headers: req.headers })
    let uploadData = null
    let uploadName = null

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      const filepath = path.join(os.tmpdir(), filename)
      uploadData = { file: filepath, type: mimetype }
      file.pipe(fs.createWriteStream(filepath))
    })

    busboy.on('field', function(fieldname, val) {
      uploadName = val;
    });

    busboy.on('finish', () => {
      const bucket = storage.bucket('dondeayudar.appspot.com')
      bucket.upload(uploadData.file, {
          uploadType: 'media',
          destination: 'headers/' + uploadName + '.jpg',
          metadata: {
            metadata: {
              contentType: uploadData.type,
            },
          },
        })
        .then(() => {
          res.status(200).json({
            message: 'It worked!',
          })
        })
        .catch(err => {
          res.status(500).json({
            error: err,
          })
        })
    })
    busboy.end(req.rawBody)
  })

});

exports.uploadPostImage = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const busboy = new Busboy({ headers: req.headers })
    let uploadData = null
    let uploadName = null

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      const filepath = path.join(os.tmpdir(), filename)
      uploadData = { file: filepath, type: mimetype }
      file.pipe(fs.createWriteStream(filepath))
    });

    busboy.on('field', function(fieldname, val) {
      uploadName = val;
    });

    busboy.on('finish', () => {
      const bucket = storage.bucket('dondeayudar.appspot.com')
      bucket.upload(uploadData.file, {
          uploadType: 'media',
          destination: 'posts/' + uploadName + '.jpg',
          metadata: {
            metadata: {
              contentType: uploadData.type,
            },
          },
        })
        .then(() => {
          res.status(200).json({
            message: 'It worked!',
          })
        })
        .catch(err => {
          res.status(500).json({
            error: err,
          })
        })
    })
    busboy.end(req.rawBody)
  })

});