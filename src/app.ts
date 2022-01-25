import express from 'express';
const App = express();
App.use(express.json());

App.get('/users',async (req, res) => {});
App.get('/', (req, res) => {
    res.json({ message: 'Hello!' });
});

export = App;