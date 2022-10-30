!function () {
  let express = require("express"),
    history = require('connect-history-api-fallback'),
    port = parseInt(process.argv[2] || 49160, 10);

  let app = express()
    .use(history())
    .use(express.static('web'));

  app.listen(port, () => {
    console.log(`Static file server running at \n => http://localhost:${port} \nCTRL + C to shutdown`);
  });
}();