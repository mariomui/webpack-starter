const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { urlencoded, json } = bodyParser;

const app = express();

app.use(morgan('tiny'));
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(express.static('public'));
app.use(cors())


// app.get('/', (req, res) => {
//   res.send('hi')
// })
const port = 4900
app.listen(port, () => {
  console.log(`you've got connected`, port)
});

