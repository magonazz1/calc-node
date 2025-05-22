const express = require('express');
const app = express();
const port = 3000;

app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        res.status(400).send({ error: 'Cannot divide by zero' });
        return;
      }
      result = num1 / num2;
      break;
    default;
res.status(400).send({ error: 'Invalid Operation' });
      return;
  }
  res.send({ result });
});

app.listen(port, () => {
  console.log(`Calculator App listening on port ${port}`);
});
