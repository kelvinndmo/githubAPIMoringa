const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/GithubApp'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/GithubApp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);



// 3.
// copy these from devdependencies to dependeicis
// "@angular/cli": "~9.0.5",
// "@angular/compiler-cli": "~9.0.5",

// 4.
// "start": "node server.js",
    // "start:dev": "ng serve",