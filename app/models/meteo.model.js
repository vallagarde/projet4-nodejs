module.exports = mongoose => {
    const Meteo = mongoose.model(
      "meteo",
      mongoose.Schema(
        {

            data: { type : Array , "default" : [] },
            city_name: String,
            lon : Number,
            timezone : String,
            lat : Number,
            country_code : String,
            state_code : String

        },
        { timestamps: false }
      )
    );
    return Meteo;
  };