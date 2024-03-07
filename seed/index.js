const db = require('../src/config/db')
const genre = require('./genre')
const movie = require('./movie')
const product = require('./products')

db.connect(async (err, client, done) => {
    if (err) {
        console.error(err)
        return
    }

    try {
        await product()
        // await genre()
        // await movie()

        console.log(`seed table success`)
        process.exit(0)
    } catch (error) {
        console.log(error);
    }
})
