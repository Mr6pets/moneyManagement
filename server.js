const express = require('express');
const app = express();

/**设置一个访问路由*/
app.get('/', (req,res) => {
  res.send("hello world")
})

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`serve is running on port ${port}`)
})