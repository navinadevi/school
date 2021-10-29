var composable_middleware = require('composable-middleware');

const checkRole = (role) => {
    return composable_middleware()
        .use(function (req, res, next) {
            if(req.admin.role !== role){
                res.status(403).send("Unathorised");
                return;
            }
            
            next();
        })
}

module.exports = checkRole;