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
var title = ['R冷屁股', 'R冷非常帥', '沒有騙人','ee']
var info = ['超級香?','2','3','4']
var img_count = 4//這是總共有幾個活動就寫多少
/*記住!! 圖片的名稱要以 1.png 2.png 3.png以此類推
路徑在/public/images
*/


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
function pastIMG() {
   if (i === 1) {
      i = img_count

   } else { 
      i--
   }
   document.getElementById("news-img").src = `../images/${i}.png`;
   var arr = i - 1 
   document.getElementById('news-info').innerHTML = info[arr]
   document.getElementById('news-title').innerHTML = title[arr]
}
//console.log(window.screen.width)
setInterval(() => {
   if(window.screen.width < 943){
      computer_meun.style.display = "none"
      mobile_meun.style.display ="block"

      if(hamburger_checkbox.checked){
         mobile_navbar.style.display = "flex"
      }else{
         mobile_navbar.style.display = "none"
      }

   }else{
      computer_meun.style.display = "flex"
      mobile_meun.style.display = "none"
      mobile_navbar.style.display = "none"
   }

}, 0.5);



