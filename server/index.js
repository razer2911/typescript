const express = require('express');
const router = express.Router();
const app = express();

app.use(express.static('public'));

app.use('/', router);

// app.get('/', (req, res) => {
//     res.send('An alligator approaches!');
// });

app.listen(3000, () => console.log('Gator app listening on port 3000!'));