const ciudadesEsp = [
  { 
    provincia: "Álava", 
    capital: "Vitoria-Gasteiz", 
    distanciaMadridKm: 360, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Alicante", 
    capital: "Alicante", 
    distanciaMadridKm: 420, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 70, 
    puertoBaseCercano: "Puerto de Valencia" 
  },
  { 
    provincia: "Almería", 
    capital: "Almería", 
    distanciaMadridKm: 540, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 520, 
    puertoBaseCercano: "Puerto de Valencia" 
  },
  { 
    provincia: "Asturias", 
    capital: "Oviedo", 
    distanciaMadridKm: 470, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 470, 
    puertoBaseCercano: "Puerto de A Coruña" 
  },
  { 
    provincia: "Ávila", 
    capital: "Ávila", 
    distanciaMadridKm: 110, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Barcelona", 
    capital: "Barcelona", 
    distanciaMadridKm: 620, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 0, 
    puertoBaseCercano: "Puerto de Barcelona" 
  },
  { 
    provincia: "Badajoz", 
    capital: "Badajoz", 
    distanciaMadridKm: 410, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Albacete", 
    capital: "Albacete", 
    distanciaMadridKm: 250, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Burgos", 
    capital: "Burgos", 
    distanciaMadridKm: 240, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Cáceres", 
    capital: "Cáceres", 
    distanciaMadridKm: 300, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Cádiz", 
    capital: "Cádiz", 
    distanciaMadridKm: 630, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 70, 
    puertoBaseCercano: "Puerto de Huelva" 
  },
  { 
    provincia: "Cantabria", 
    capital: "Santander", 
    distanciaMadridKm: 430, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 430, 
    puertoBaseCercano: "Puerto de A Coruña" 
  },
  { 
    provincia: "Castellón", 
    capital: "Castellón de la Plana", 
    distanciaMadridKm: 440, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 30, 
    puertoBaseCercano: "Puerto de Valencia" 
  },
  { 
    provincia: "Ciudad Real", 
    capital: "Ciudad Real", 
    distanciaMadridKm: 160, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Córdoba", 
    capital: "Córdoba", 
    distanciaMadridKm: 400, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Cuenca", 
    capital: "Cuenca", 
    distanciaMadridKm: 170, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Girona", 
    capital: "Girona", 
    distanciaMadridKm: 700, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 130, 
    puertoBaseCercano: "Puerto de Barcelona" 
  },
  { 
    provincia: "Granada", 
    capital: "Granada", 
    distanciaMadridKm: 420, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Guadalajara", 
    capital: "Guadalajara", 
    distanciaMadridKm: 60, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Gipuzkoa", 
    capital: "San Sebastián", 
    distanciaMadridKm: 450, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 350, 
    puertoBaseCercano: "Puerto de A Coruña" 
  },
  { 
    provincia: "Huelva", 
    capital: "Huelva", 
    distanciaMadridKm: 530, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 0, 
    puertoBaseCercano: "Puerto de Huelva" 
  },
  { 
    provincia: "Huesca", 
    capital: "Huesca", 
    distanciaMadridKm: 460, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Illes Balears", 
    capital: "Palma", 
    distanciaMadridKm: null, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 215, 
    puertoBaseCercano: "Puerto de Valencia" 
  },
  { 
    provincia: "Jaén", 
    capital: "Jaén", 
    distanciaMadridKm: 330, 
    accesoMaritimo: false 
  },
  { 
    provincia: "León", 
    capital: "León", 
    distanciaMadridKm: 320, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Lleida", 
    capital: "Lleida", 
    distanciaMadridKm: 550, 
    accesoMaritimo: false 
  },
  { 
    provincia: "La Rioja", 
    capital: "Logroño", 
    distanciaMadridKm: 320, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Lugo", 
    capital: "Lugo", 
    distanciaMadridKm: 560, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 60, 
    puertoBaseCercano: "Puerto de A Coruña" 
  },
  { 
    provincia: "Madrid", 
    capital: "Madrid", 
    distanciaMadridKm: 0, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Málaga", 
    capital: "Málaga", 
    distanciaMadridKm: 540, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 600, 
    puertoBaseCercano: "Puerto de Valencia" 
  },
  { 
    provincia: "Murcia", 
    capital: "Murcia", 
    distanciaMadridKm: 400, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 140, 
    puertoBaseCercano: "Puerto de Valencia" 
  },
  { 
    provincia: "Navarra", 
    capital: "Pamplona", 
    distanciaMadridKm: 450, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Ourense", 
    capital: "Ourense", 
    distanciaMadridKm: 490, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Palencia", 
    capital: "Palencia", 
    distanciaMadridKm: 210, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Pontevedra", 
    capital: "Pontevedra", 
    distanciaMadridKm: 590, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 100, 
    puertoBaseCercano: "Puerto de A Coruña" 
  },
  { 
    provincia: "Salamanca", 
    capital: "Salamanca", 
    distanciaMadridKm: 210, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Santa Cruz de Tenerife", 
    capital: "Santa Cruz de Tenerife", 
    distanciaMadridKm: null, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 950, 
    puertoBaseCercano: "Puerto de Huelva" 
  },
  { 
    provincia: "Segovia", 
    capital: "Segovia", 
    distanciaMadridKm: 90, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Sevilla", 
    capital: "Sevilla", 
    distanciaMadridKm: 530, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 70, 
    puertoBaseCercano: "Puerto de Huelva" 
  },
  { 
    provincia: "Soria", 
    capital: "Soria", 
    distanciaMadridKm: 230, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Tarragona", 
    capital: "Tarragona", 
    distanciaMadridKm: 600, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 100, 
    puertoBaseCercano: "Puerto de Barcelona" 
  },
  { 
    provincia: "Teruel", 
    capital: "Teruel", 
    distanciaMadridKm: 310, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Toledo", 
    capital: "Toledo", 
    distanciaMadridKm: 70, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Valencia", 
    capital: "Valencia", 
    distanciaMadridKm: 350, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 0, 
    puertoBaseCercano: "Puerto de Valencia" 
  },
  { 
    provincia: "Valladolid", 
    capital: "Valladolid", 
    distanciaMadridKm: 190, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Vizcaya", 
    capital: "Bilbao", 
    distanciaMadridKm: 400, 
    accesoMaritimo: true, 
    distanciaPuertoCercanoKm: 360, 
    puertoBaseCercano: "Puerto de A Coruña" 
  },
  { 
    provincia: "Zamora", 
    capital: "Zamora", 
    distanciaMadridKm: 230, 
    accesoMaritimo: false 
  },
  { 
    provincia: "Zaragoza", 
    capital: "Zaragoza", 
    distanciaMadridKm: 320, 
    accesoMaritimo: false 
  },
];

let pruebaCiudad = "Barcelona"


function calcularDistancia (ciudad) {
 for (let i=o; i < ciudadesEsp.lenght; i++){
  if (ciudadesEsp[i].capital === ciudad) {
    console.log("probando for")
  }
 }
}