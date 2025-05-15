import { ciudades } from "./bd.js";
import { numValidator } from "./assets/validador/numValidator.js";
import { isMaxWeight } from "./assets/validador/isMaxWeight.js";
import { calcDistanceTruck } from "./assets/calculators/calcuDistanceTruck.js";
import { calcWeightTruck } from "./assets/calculators/calcuWeightTruck.js";
import { calcExtraWeight } from "./assets/calculators/calcExtraFeeWeight.js";
//console.log(ciudades);

let ciudats = ciudades;
function getNameCity(citys) {
  let arrCityName = [];
  for (const key in citys) {
    let nameCity = citys[key];
    arrCityName.push(nameCity.nombreCiudad);
  }
  arrCityName.sort();
  return arrCityName;
}

function loadNameCitySelect(id, nameCity) {
  for (let i = 0; i < nameCity.length; i++) {
    let etiqueta = document.getElementById(id);
    let newSelect = document.createElement("option");
    newSelect.value = nameCity[i];
    newSelect.text = nameCity[i];
    etiqueta.appendChild(newSelect);
  }
}

let ctys = getNameCity(ciudats);
//console.log(ctys);

loadNameCitySelect("cityName_A", ctys);
loadNameCitySelect("cityName_B", ctys);

function citySelect(idCity) {
  let city = document.getElementById(idCity).value;
  return city;
}

function calcular() {
  let btnCal = document.getElementById("btnCalcular");
  btnCal.addEventListener("click", function (e) {
    let cityA = citySelect("cityName_A");
    let cityB = citySelect("cityName_B");

    let distanceA = getDistanceCity(cityA);
    let distanceB = getDistanceCity(cityB);

    let idPeso = document.getElementById("idPeso").value;

    let isNumPeso = numValidator(idPeso);
    if (isNumPeso) {
      let ismaxWeight = isMaxWeight(idPeso);
      if (!ismaxWeight) {
        let disA = calcDistanceTruck(distanceA);
        let disB = calcDistanceTruck(distanceB);
        let costeDistancia = disA + disB;

        let costePeso = calcWeightTruck(idPeso);
        console.log(`Coste Total: ${Math.round(costePeso + costeDistancia)}`);
      } else {
        console.log("Supera el peso máximo \nSe cobrará un plus");
        let disA = calcDistanceTruck(distanceA);
        let disB = calcDistanceTruck(distanceB);
        let costeDistancia = disA + disB;
        costeDistancia = Math.round(costeDistancia);

        let costePeso = calcWeightTruck(idPeso);

        let costeAdicional = calcExtraWeight(idPeso);
        console.log(
          `Coste Total: ${Math.round(
            costePeso + costeDistancia + costeAdicional
          )}`
        );
      }
    } else {
      console.log("Compruebe que el peso es correcto");
    }
  });
}
calcular();

function getDistanceCity(city) {
  for (const key in ciudades) {
    let distance = ciudades[key];
    if (ciudades[key].nombreCiudad === city) {
      return distance.distanciaAMadrid;
    }
  }
}
