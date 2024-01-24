const express = require('express');
const app = express();
app.use(express.json());

import user from './routes/UserRoute'
app.use('/', user);

app.listen(5000, () => {
    console.log('Server is running on port 5000..........!');
});