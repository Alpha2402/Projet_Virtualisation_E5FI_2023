const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const reminderRoutes = require('./routes'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', reminderRoutes); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
