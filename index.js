const express = require('express');
const app = express();
const port = 3000;

const anggota = [
    {
        username: "kanglerian",
        email: "kanglerian@gmail.com"
    },
    {
        username: "sopyan",
        email: "sopyansauri@gmail.com"
    }
];

app.get('/', (req, res) => {
    res.send("Express on Vercel");
});

app.get('/api/anggota', (req, res) => {
    res.json(anggota);
});

app.listen(port, () => console.log(`Apps run on http://localhost:${port}`));

module.express = app;