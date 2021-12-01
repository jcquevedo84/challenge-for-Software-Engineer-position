const app = require('./app');
const PORT_NUMBER = 8080;

app.listen(PORT_NUMBER, () => {
  console.info(`Server listening @ http://localhost:${PORT_NUMBER}`);
});