const app = require('express')();
require('./bootstrap').registerModules(app);
app.listen(3000, () => console.log(`Express app running on port ${3000}!`));