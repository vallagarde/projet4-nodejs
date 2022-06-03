const db = require("../models");
const Meteo = db.meteo;

// Retrieve all Meteos from the database.
exports.findAll = (req, res) => {
    const city_name = req.query.city_name;
    var condition = city_name ? { city_name: { $regex: new RegExp(city_name), $options: "i" } } : {};
    Meteo.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving meteos."
        });
      });
  };
// Find a single Meteo with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Meteo.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Meteo with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Meteo with id=" + id });
      });
  };
// Update a Meteo by the id in the request

// Delete a Meteo with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Meteo.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Meteo with id=${id}. Maybe Meteo was not found!`
          });
        } else {
          res.send({
            message: "Meteo was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Meteo with id=" + id
        });
      });
  };
// Delete all Meteos from the database.
exports.deleteAll = (req, res) => {
    Meteo.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Meteos were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all meteos."
        });
      });
  };
// Find all published Meteos
//exports.findAllPublished = (req, res) => {
//  
//};