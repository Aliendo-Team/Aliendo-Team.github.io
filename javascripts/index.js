var i = 1;
document.getElementById("news-img").src = `../images/${i}.png`;


var computer_meun = document.querySelector('#computer-menu')
var mobile_meun = document.querySelector('.hamburger-icon')

var mobile_navbar = document.querySelector('.navbar')
var hamburger_checkbox = document.querySelector('#hamburger-checkbox')
function handleSelect(elm) {
   window.location = "./SelectHtmls" + "/" + elm.value + ".html";
}

//最新活動資訊在這裡改
var title = ['R冷屁股', 'R冷非常帥', '沒有騙人', 'ee']
var info = ['超級香?', '2', '3', '4']
var img_count = 4//這是總共有幾個活動就寫多少
/*記住!! 圖片的名稱要以 1.png 2.png 3.png以此類推
路徑在/public/images
*/
var t_img_count = 3

document.getElementById('news-title').innerHTML = title[0]
document.getElementById('news-info').innerHTML = info[0]

function nextIMG() {
   if (i === img_count) {
      i = 1
   } else {
      i++
   }

   document.getElementById("news-img").src = `../images/${i}.png`;
   var arr = i - 1
   document.getElementById('news-title').innerHTML = title[arr]
   document.getElementById('news-info').innerHTML = info[arr]
}
var i = 1;
var imgElement = document.getElementById("t-img");

function t_nextIMG() {
   if (!imgElement) return;

   // 滑出左邊的動畫
   imgElement.style.animation = "slideOutLeft 0.3s forwards";

   setTimeout(function () {
      if (i === t_img_count) {
         i = 1;
      } else {
         i++;
      }
      imgElement.src = `images/banner${i}.jpg`;

      // 立即重置動畫
      imgElement.style.animation = "none";
      imgElement.offsetHeight; // 強制瀏覽器重新渲染，立即應用新的CSS樣式
      imgElement.style.animation = "slideInRight 0.3s forwards";
   }, 300);
}

function t_pastIMG() {
   if (!imgElement) return;

   if (i === 1) {
      i = t_img_count;
   } else {
      i--;
   }

   // 滑出右邊的動畫
   imgElement.style.animation = "slideOutRight 0.3s forwards";

   setTimeout(function () {
      imgElement.src = `images/banner${i}.jpg`;

      // 立即重置動畫
      imgElement.style.animation = "none";
      imgElement.offsetHeight; // 強制瀏覽器重新渲染，立即應用新的CSS樣式
      imgElement.style.animation = "slideInLeft 0.3s forwards";
   }, 300);
}
var i = 1;
var imgElement = document.getElementById("t-img");

function t_nextIMG() {
   if (!imgElement) return;

   // 滑出左邊的動畫
   imgElement.style.animation = "slideOutLeft 0.5s forwards";

   setTimeout(function () {
      if (i === t_img_count) {
         i = 1;
      } else {
         i++;
      }
      imgElement.src = `images/banner${i}.jpg`;

      // 立即重置動畫
      imgElement.style.animation = "none";
      imgElement.offsetHeight; // 強制瀏覽器重新渲染，立即應用新的CSS樣式
      imgElement.style.animation = "slideInRight 0.1s forwards";
   }, 100);
}

function t_pastIMG() {
   if (!imgElement) return;

   if (i === 1) {
      i = t_img_count;
   } else {
      i--;
   }

   // 滑出右邊的動畫
   imgElement.style.animation = "slideOutLeft 0.1s forwards";

   setTimeout(function () {
      imgElement.src = `images/banner${i}.jpg`;

      // 立即重置動畫
      imgElement.style.animation = "none";
      imgElement.offsetHeight; // 強制瀏覽器重新渲染，立即應用新的CSS樣式
      imgElement.style.animation = "slideInRight 0.1s forwards";
   }, 100);
}
setInterval(() => {
   t_nextIMG()
}, 3000);

//console.log(window.screen.width)
setInterval(() => {
   if (window.screen.width < 943) {
      computer_meun.style.display = "none"
      mobile_meun.style.display = "block"

      if (hamburger_checkbox.checked) {
         mobile_navbar.style.display = "flex"
      } else {
         mobile_navbar.style.display = "none"
      }

   } else {
      computer_meun.style.display = "flex"
      mobile_meun.style.display = "none"
      mobile_navbar.style.display = "none"
   }

}, 0.5);



