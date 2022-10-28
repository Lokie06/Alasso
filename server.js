const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const cors = require('cors');

const app = express()
const viewsPath = path.join(__dirname, './resources/views')
const layoutsPath = path.join(__dirname, './resources/views/layouts/layout.ejs')

// For Database
// mongoose
//   .connect('mongodb://localhost:27017/alasso', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log('Database Connected'))
//   .catch(e => console.log(e))
  
app.use(cors());
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('views', viewsPath)
app.set('layout', layoutsPath)

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
require('./routes/web')(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server Connected to port ${PORT}`)
})
