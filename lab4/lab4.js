//Ejercicio 1
function table(){
  const num = prompt("Ingresa un número:");
  const table = document.getElementById("table");
  for(let i = 1; i <= num; i++){
    table.innerHTML += `<tr><td>${i}</td><td>${i*i}</td><td>${i*i*i}</td></tr>`;
  }
}

//Ejercicio 2
function sum(){
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const sum = num1 + num2;
  const startTime = new Date();
  const userSum = prompt(`¿Cuánto es ${num1} + ${num2}?`);
  const endTime = new Date();
  const timeDiff = endTime - startTime;
  const timeDiffSeconds = timeDiff / 1000;
  if (userSum == sum) {
    alert(`¡Correcto! Te tomó ${timeDiffSeconds} segundos.`);
  } else {
    alert(`¡Incorrecto! La respuesta correcta es ${sum}.`);
  }
}

//Ejercicio 3
function accountant(arr) {
  let negatives = 0;
  let zeros = 0;
  let positives = 0;

  for (let num of arr) {
    if (num < 0) {
      negatives++;
    } else if (num === 0) {
      zeros++;
    } else {
      positives++;
    }
  }

  return [negatives, zeros, positives];
}

function runAccountant() {
  let input = prompt("Ingresa una lista de números separados por comas:");
  let arr = input.split(",").map(Number);

  let results = accountant(arr);

  
  alert(`Tu ingresaste: [${arr}]\nNegativos: ${results[0]}\nCeros: ${results[1]}\nPositivos: ${results[2]}`);
}

//Ejercicio 4
function generateMatrix(numArrays) {
  let matrix = [];
  for (let i = 0; i < numArrays; i++) {
    let array = [];
    for (let j = 0; j < 3; j++) {
      array.push(Math.floor(Math.random() * 101));
    }
    matrix.push(array);
  }
  return matrix;
}

function getAverages(matrix) {
  let averages = [];
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
    let avg = sum / matrix[i].length;
    averages.push(avg.toFixed(2));
  }
  return averages;
}

function displayMatrix(matrix) {
  let tableHtml = "";
  for (let i = 0; i < matrix.length; i++) {
    tableHtml += "<tr>";
    for (let j = 0; j < matrix[i].length; j++) {
      tableHtml += `<td>${matrix[i][j]}</td>`;
    }
    tableHtml += "</tr>";
  }
  document.getElementById("table2").innerHTML = tableHtml;
}

function displayAverages(averages) {
  let listHtml = "<ul>";
  for (let i = 0; i < averages.length; i++) {
    listHtml += `<li>Promedio de fila ${i + 1}: ${averages[i]}</li>`;
  }
  listHtml += "</ul>";
  document.getElementById("averages").innerHTML = listHtml;
}

function run() {
  let numArrays = prompt("Ingresa el número de arreglos:");
  let matrix = generateMatrix(numArrays);
  displayMatrix(matrix);
  let averages = getAverages(matrix);
  displayAverages(averages);
}

//Ejercicio 5 
function reverse() {
  const inputNumber = prompt("Enter a number:");
  const reversedNumber = parseInt(inputNumber.toString().split("").reverse().join(""));
  alert(`Reversed Number: ${reversedNumber}`);
}

//Ejercicio 6
function Song(title, artist, genre, year) {
  this.title = title;
  this.artist = artist;
  this.genre = genre;
  this.year = year;
}

Song.prototype.getInfo = function() {
  return this.title + " by " + this.artist + " (" + this.genre + ", " + this.year + ")";
}

let songs = [
  new Song("Staring", "Tipling Rock", "Pop", 2017),
  new Song("Billie Jean", "Michael Jackson", "Pop", 1983),
  new Song("Hotel California", "The Eagles", "Rock", 1976),
  new Song("Smooth", "Santana ft. Rob Thomas", "Rock", 1999),
  new Song("Shape of You", "Ed Sheeran", "Pop", 2017),
  new Song("Rolling in the Deep", "Adele", "Pop", 2010),
  new Song("Despacito", "Luis Fonsi ft. Daddy Yankee", "Reggaeton", 2017),
  new Song("Tarot", "Bad Bunny", "Reggaeton", 2022),
  new Song("Stairway to Heaven", "Led Zeppelin", "Rock", 1971),
  new Song("Never Gonna Give You Up", "Rick Astley", "Pop", 1987),
  new Song("No Quiero Ser Normal", "Cuarteto de Nos", "Rock", "2004")
];

function generateRecommendation() {
  let randomIndex = Math.floor(Math.random() * songs.length);
  let randomSong = songs[randomIndex];
  let recommendation = "Deberías escuchar - " + randomSong.getInfo();
  document.getElementById("recommendation").innerHTML = recommendation;
}
