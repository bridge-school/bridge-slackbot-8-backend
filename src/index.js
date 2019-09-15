<<<<<<< HEAD

// require('dotenv').config()
=======
require('dotenv').config()
>>>>>>> [Feature][201] Fetch channels (#4)

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const router = require('./api')
const { logger } = require('./utils/logger')
const { errorHandler } = require('./middleware/error-handler')
const bodyParser = require('body-parser');


// Create a new express application instance
const app = express()

// The port the express app will listen on
const port = process.env.PORT || 8081

// Set cors origin based on environment
const origin =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : `http://${process.env.PROJECT_NAME}-frontend.bridgeschoolapp.io`

<<<<<<< HEAD

=======
>>>>>>> [Feature][201] Fetch channels (#6)
logger.info('🤖 Initializing middleware')

// This piece of middleware creates the logs that you see when
// you hit an endpoint in your terminal. It's here to help you debug.
app.use(morgan('tiny', { stream: logger.stream }))
<<<<<<< HEAD

app.use(bodyParser())
app.use(cors({ origin }))

=======
app.use(cors({ origin }))
>>>>>>> [Feature][201] Fetch channels (#6)
app.use('/', router)
app.use(errorHandler)

// Serve the application at the given port
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    logger.info(`🎧 Listening at http://localhost:${port}/`)
  })
}

module.exports = {
  app
}
