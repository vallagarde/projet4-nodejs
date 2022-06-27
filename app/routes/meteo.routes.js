module.exports = app => {
    const meteo = require("../controllers/meteo.controller.js");
    var router = require("express").Router();
   
    // Retrieve all meteos
    router.get("/", meteo.findAll);
    
    // Retrieve a single Tutorial with id
    router.get("/:id", meteo.findOne);

     // Retrieve a maeteo with a place and a date
    router.get("/one/:date/:city_name", meteo.findByDateAndByCity)

     // Retrieve a maeteo with a place and a date
    router.get("/one/:date/:lat/:long", meteo.findByDateAndCoords)
    
    // Delete a Tutorial with id
    router.delete("/:id", meteo.delete);
    // Create a new Tutorial
    router.delete("/", meteo.deleteAll);

  
   
    app.use('/api/meteo', router);
  };