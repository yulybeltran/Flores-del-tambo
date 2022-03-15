// import dotenv for local variables
const dotenv = require('dotenv').config();

// export this module to use it on index
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'local_development',
    URI: process.env.URI || 'mongodb://127.0.0.1/todolist',
    PORT: process.env.PORT || 3030
}