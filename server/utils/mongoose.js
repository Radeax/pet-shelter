const mongoose = require('mongoose'),
            fs = require('fs'),
          path = require('path'),
   models_path = path.join(__dirname, "../models")  // Simplify reuse of path
        models = fs.readdirSync(models_path);   // Run once at startup - Give a list of files in models

module.exports = function(DB_NAME) {
    mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);
    for (let model of models) {
        if (model.endsWith('.js')) {
            require(path.join(models_path, model));
        }
    }
}