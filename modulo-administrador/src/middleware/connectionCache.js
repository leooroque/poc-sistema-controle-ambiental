module.exports = client => (req, res, next) => {
        req.clientCache = client;
        next();
        res.on('finish', () => {});
};