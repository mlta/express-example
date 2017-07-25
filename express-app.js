const express = require('express')
const mustacheExpress = require('mustache-express')

const app = express()

// Use the middleware (i.e plugin) for static files
// and tell express they are in the 'public' folder
app.use(express.static('public'))

app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')

// app.get is similar to our old friend addEventListener
// except we are listening for requests from a
// browser
//
// document.addEventListener('click', (event) => {
//
// })

app.get('/jason.json', (request, response) => {
  const data = {
    name: 'Jason',
    when: new Date(),
    what: 'loves fooberries'
  }

  response.json(data)
})

app.get('/jason', (request, response) => {
  response.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <p>Jason loves fooberries at ${new Date()}</p>
        <p>
           <a href="/">Home</a>
         </p>
      </body>
    </html>
  `)
})

app.get('/', (request, response) => {
  const data = {
    currentTime: new Date(),
    favoriteColor: 'Purple',
    friends: [{ name: 'Jason' }, { name: 'Gavin' }, { name: 'Toni' }]
  }
  response.render('home', data)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
