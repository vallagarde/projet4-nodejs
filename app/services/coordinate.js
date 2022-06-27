const myjsonCities = require('../../cities.json');



    function degs2rad(angle){ // permet de transformer des degrés en radiant
       return (angle*Math.PI)/180;
    };

    function rad2degs(angle){ //permet de transformer des radiants en degrés
        return (angle*180)/Math.PI;
    };

    function findNearestPoint(latitude, longitude) { // permet de trouver le couple de latitude et longitude le plus proche de celui des données envoyées.

        var jsStringCities =JSON.stringify(myjsonCities);
        var ArrayCities = JSON.parse(jsStringCities);
        var distances = [];

        for (let city of ArrayCities){ // on stocke dans le tableau distances l'ensemble des distances au point cherché

            let theta = longitude - city.long;
            let distance = Math.sin(degs2rad(latitude)) * Math.sin(degs2rad(city.lat)) + Math.cos(degs2rad(latitude))* Math.cos(degs2rad(city.lat))*Math.cos(degs2rad(theta));

            distance= Math.acos(distance);
            distance = rad2degs(distance);
            distance= distance*60*1.1515*1.609344;

            distances.push(distance);
        }

        const min= Math.min(...distances);
        const index = distances.indexOf(min);

        console.log(index);

        return [ArrayCities[index].lat, ArrayCities[index].long];
    }

    module.exports= findNearestPoint