const express = require('express');
const PORT = 3300;

const app = express();

app.get('/',(req,res)=>{
  const user = {name:"Roman", age:48}
  const webPage = '<h1>Hello World</h1>'

  res.send(webPage);
})


app.listen(PORT);