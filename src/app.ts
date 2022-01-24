import express from 'express';
const App = express();

App.get('/users',async (req, res) => {});
App.get('/', (req, res) => {
    res.json({ message: 'Hello!' });
});

export = App;