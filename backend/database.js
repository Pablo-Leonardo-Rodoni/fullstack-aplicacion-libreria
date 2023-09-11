const mongoose = require('mongoose')

/*para iniciar el servidor por consola: mongod*/

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))