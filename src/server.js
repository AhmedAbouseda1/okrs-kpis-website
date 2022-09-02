const path = require('path');
const express = require('express');
const app = express();


// config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: '/config/config.env'});
} else {

    const PORT = process.env.PORT || 3000;

    const buildPath = path.join(__dirname, '..', 'build');

    app.use(express.static(buildPath));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
    });


    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
    });
}