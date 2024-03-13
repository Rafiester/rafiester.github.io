var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");
let saranArea = document.querySelector(".saran");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

resultContent = document.querySelector(".result-content");
resultText = document.querySelector("#resultText");

var result = document.getElementById("myResult");
var spanResult = document.getElementsByClassName("close-result")[0];

function hitung(){
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `Wajib diisi semua`;
  }else{
    countBmi();
  }
}

// Function for count BMI and checking the age, height, weight, and gender
function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  // Define variable for BMI, hasil & saran
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100); 
  var hasil = '';
  var saran = '';
  

  if(bmi<18.5){
    hasil = 'Kamu Kekurangan Berat Badan';
    saran = 'Kekurangan gizi dapat menyebabkan, pertama selular yakni merusak kemampuan tubuh untuk merespon infeksi, rentan terinfeksi, penyembuhan luka lambat. Kedua fisik mengakibatkan hilangnya massa otot, lemak, mengurangi kemampuan otot nafas, fungsi jantung dan atrofi organ visceral, peningkatan 30% depresi. Ketiga psikologi menyebabkan kelelahan dan apatis.';
     }else if(18.5<=bmi&&bmi<=24.9){
    hasil = 'Kamu Normal (Ideal)';
    saran = 'Tetap pertahankan kondisimu, dengan berat badan yang ideal dapat menghindarkan dari berbagai macam penyakit berbahaya.';
     }else if(25<=bmi&&bmi<=29.9){
    hasil = 'Kamu Kelebihan Berat Badan';
    saran = 'Obesitas dapat meningkatkan risiko kanker rahim, leher rahim, endometrium, ovarium, payudara, usus besar, rektum, kerongkongan, hati, kandung empedu, pankreas, ginjal dan kanker prostat. Jika mengalami obesitas, tipe sel khusus yang berfungsi untuk melawan kanker akan tersumbat oleh lemak sehingga tidak berfungsi.';
     }else if(30<=bmi&&bmi<=34.9){
    hasil = 'Kamu Obesitas';
    saran = 'Obesitas dapat meningkatkan risiko kanker rahim, leher rahim, endometrium, ovarium, payudara, usus besar, rektum, kerongkongan, hati, kandung empedu, pankreas, ginjal dan kanker prostat. Jika mengalami obesitas, tipe sel khusus yang berfungsi untuk melawan kanker akan tersumbat oleh lemak sehingga tidak berfungsi.';
     }else if(35<=bmi){
    hasil = 'Kamu Obesitas Berlebih';
    saran = 'Obesitas dapat meningkatkan risiko kanker rahim, leher rahim, endometrium, ovarium, payudara, usus besar, rektum, kerongkongan, hati, kandung empedu, pankreas, ginjal dan kanker prostat. Jika mengalami obesitas, tipe sel khusus yang berfungsi untuk melawan kanker akan tersumbat oleh lemak sehingga tidak berfungsi.';
}

// Display the 'Result' after count BMI
result.style.display = "block";

// Display the 'Result' after count BMI
resultArea.style.display = "block";

// Display the 'Saran' after count BMI
saranArea.style.display = "block";

// Take query from 'comment' variable
document.querySelector(".comment").innerHTML = `<span id="comment">${hasil}</span>`;

// Take query from 'saran' variable
document.querySelector(".saran").innerHTML = `<span id="saran">${saran}</span>`;

// Take query from 'result' variable
document.querySelector("#resultText").innerHTML = bmi.toFixed(2);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks on <span> (x), close the modal
spanResult.onclick = function() {
  result.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == result) {
    result.style.display = "none";
  }
}