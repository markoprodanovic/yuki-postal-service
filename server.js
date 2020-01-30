const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, firstName: 'Marko', lastName: 'Prodanovic' },
        { id: 2, firstName: 'Hugo', lastName: 'Chan' },
        { id: 3, firstName: 'Seungjin', lastName: 'Kim' }
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));