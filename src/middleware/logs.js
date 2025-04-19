const logRequest = (req, res, next) => {
    console.log('terjadi requset ke path: ', req.path)
    next()
}

module.exports = logRequest