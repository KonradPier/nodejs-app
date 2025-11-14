const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({ 
        message: 'Hello, World! V4' ,
        status: 'success',
        hostname: req.hostname,
        timestamp: new Date().toISOString()


    });
});

app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

let server = null;
if (require.main === module) {
    server = app.listen(port, '0.0.0.0', () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}

module.exports = { app, server };



