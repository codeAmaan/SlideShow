let photo = document.getElementById("pic");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let heading = document.getElementById("hhh");
let description = document.getElementById("desc");

let changeDesc = [
  "The Ferrari F8 Tributo is a mid-engine sports car that embodies the pinnacle of Ferrari's two-seater berlinetta heritage",
  "The McLaren Artura is a British-made hybrid supercar that combines blistering performance with eco-conscious technology.",
  "The Lamborghini Huracán Evo is the evolution of the Lamborghini brand most successful V10 engine sports car. It's known for its exceptional performance, driver-centric design, and technological advancements that put the driver in control of an exhilarating experience",
  "The McLaren 720S is a high-performance, mid-engine supercar designed for both exhilarating thrills and long-distance comfort.",
  "The Lamborghini Revuelto is a mid-engine plug-in hybrid (PHEV) sports car, the successor to the Lamborghini Aventador.",
];

let imgArr = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
];
let title = [
  "The Ferrari F8",
  "The McLaren Artura",
  "The Lamborghini Huracán Evo",
  "The McLaren 720S",
  "The Lamborghini Revuelto",
];

let i = 0;

function slideShow() {
  i++;
  if (i >= imgArr.length) {
    i = 0;
  }
  photo.src = imgArr[i];
  heading.innerHTML = title[i];
  description.innerHTML = changeDesc[i];
}

setInterval(slideShow, 2000);
