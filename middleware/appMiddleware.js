


//middleware is a function

const appMidleware = (req, res, next) => {
    console.log('inside application specific middleware');

}

module.exports = appMidleware