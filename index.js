const app = require('./routes')
const PORT = process.env.PORT || 5000


app.listen(PORT, () => console.log(`Listening on PORT: ${ PORT }`))


console.log(process.env.OBISPADO);
  