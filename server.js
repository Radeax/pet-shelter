const express = require('express'),
           bp = require('body-parser'),
         path = require('path'),
      DB_NAME = "pets",
         port = 8000,
          app = express();


app.use(bp.json()); // Uses bp in json mode
app.use(express.static(path.join(__dirname, './client/build')));

require('./server/utils/mongoose')(DB_NAME);
require('./server/utils/routes')(app);

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./client/build/index.html'));
});
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});

