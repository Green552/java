let distance = prompt ("ВВедите растояние доставки в км:");
let weight = prompt ("ВВедите вес груза в кг:");
let cargoType = prompt ("ВВидите тип груза (обыч, хрупкий, опастный):");
let transportType = prompt ("Ввидите тип транспорта (легк, груз, сам):");

//РАсчёт базовой стоимости доставки в зависимости от расстояния

let basePrice;
if (distance <= 50) {
    basePrice = 500;
} else if (distance > 50 && distance <= 100) {
    basePrice = 1000;
} else {
    basePrice = 1500;
}

//доп стоимость  для грузов сбольшим весом
let weightPrice = 0;
if (weight > 10) {
    weightPrice = 500;
}

// теперь разберёмся с типами
let cargoPrice = 0;
switch (cargoType) {
    case "обыч":
        cargoPrice = 0;
        break;
    case "хрупкий":
        cargoPrice = 100;
        break;
    case "опастный":
        cargoPrice = 2000;
        break;
    default:
        console.log ("Неверный тип");
        break;
}

let transportPrice = 0;
switch (transportType) {
    case "легк":
    transportPrice = 500;
        break;
    case "груз":
        transportPrice = 1500;
        break;
    case "сам":
        break;
    default:
        console.log ("неверный тип транспорта");
        break;
}

let totalCoast = basePrice + cargoPrice + transportPrice + weightPrice;
alert (`ВЫ нам длжны почку и ${totalCoast} В ДОЛОРАХ!`);
