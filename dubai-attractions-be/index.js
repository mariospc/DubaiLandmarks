require("dotenv").config();

const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');
const Parse = require('parse/node').Parse;
const path = require('path');
const { router } = require('./apis');
const db = require('./db');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');

const SWAGGER_API_FILE = './apis/swagger/spec.yaml';

const api = new ParseServer({
  databaseURI: process.env.DB_URI,
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY, 
  serverURL: process.env.SERVER_URL,
  fileKey: process.env.FILE_KEY
});


const options = { allowInsecureHTTP: false };


const dashboard = new ParseDashboard(
  {
    apps: [
      {
        serverURL: `${process.env.SERVER_URL}`,
        appId: process.env.APP_ID,
        masterKey: process.env.MASTER_KEY,
        appName: process.env.APP_NAME
      }
    ],
    users: [
      {
        user: process.env.APP_USER,
        pass: process.env.APP_PASS
      }
    ]
  },
  options
);
const app = express();
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({extended:true,limit: '50mb'}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(yaml.load(SWAGGER_API_FILE)));

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('I dream of being a website.  Please star the parse-server repo on GitHub!');
});

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/test', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

const port = process.env.PORT || 5000;
const httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('parse-server-example running on port ' + port + '.');
});

app.locals.share = {
  db
}

app.use('/dashboard', dashboard);

app.use('/api', router);

Parse.initialize(process.env.APP_ID);
Parse.masterKey =  process.env.MASTER_KEY

Parse.serverURL = `${process.env.SERVER_URL}`
