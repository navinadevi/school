const apiRoutes = function(app){
    //api routes
    app.use("/api/admin",require("./api/admin"));
    app.use("/api/teacher",require("./api/teacher"));
    app.use("/api/school",require("./api/school"));

}

module.exports = {
    apiRoutes
}