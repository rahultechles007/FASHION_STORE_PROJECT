const images = [
  "https://images.pexels.com/photos/7255429/pexels-photo-7255429.jpeg",
  "https://images.pexels.com/photos/26316187/pexels-photo-26316187.jpeg",
  "https://images.pexels.com/photos/1297483/pexels-photo-1297483.jpeg",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
];

let index = 0;
const slider = document.getElementById("slider");

setInterval(() => {
    index = (index + 1) % images.length;
    slider.src = images[index];
}, 3000);