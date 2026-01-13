const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Elephant-style pipeline!');
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}