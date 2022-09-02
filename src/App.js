import React from "react";
import "./App.css";
const express = require('express');
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const errorMiddleware = require('./middlewares/error');

import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

import Home from "./Pages/Home";



const app = express();

// config
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: 'config/config.env' });
}
app.use(express.json());

// const user = require('./routes/userRoute');
//
// app.use('/api/v1', user);

// deployment
__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  });
} else {
  app.get('/', (req, res) => {
    res.send('Server is Running! 🚀');
  });
}

// error middleware
app.use(errorMiddleware);

module.exports = app;

// import Router

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
