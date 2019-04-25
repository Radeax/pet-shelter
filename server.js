const express = require('express'),
           bp = require('body-parser'),
         cors = require('cors'),
         path = require('path'),
      DB_NAME = "pets",
         port = 8000,
          app = express();

app.use(cors()); // uses CORS
app.use(bp.json()); // Uses bp in json mode
app.use(express.static(path.join(__dirname, './client/build')));

// CREATE THESE .js FILES (mongoose.js & routes.js inside utils)
require('./server/utils/mongoose')(DB_NAME);
require('./server/utils/routes')(app);

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./client/build/index.html'));
});
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});

