// ? Récupérer les éléments BUTTON du HTML
const BTN_1 = document.getElementById("1");
const BTN_2 = document.getElementById("2");
const BTN_3 = document.getElementById("3");
const BTN_4 = document.getElementById("4");
const BTN_5 = document.getElementById("5");
const BTN_6 = document.getElementById("6");
const BTN_7 = document.getElementById("7");
const BTN_8 = document.getElementById("8");
const BTN_9 = document.getElementById("9");

const STOCK_1 = document.getElementById("stock1");
const STOCK_2 = document.getElementById("stock2");
const STOCK_3 = document.getElementById("stock3");
const STOCK_4 = document.getElementById("stock4");
const STOCK_5 = document.getElementById("stock5");
const STOCK_6 = document.getElementById("stock6");

const SELECTION_INFO = document.getElementById("selection_info");
const DRINK_IMG = document.getElementById("drinkImg");

const VALIDER = document.getElementById("valider");
const RESET = document.getElementById("reset");

BTN_1.addEventListener("click", () => {
   SELECTION_INFO.innerText = "1";
});

BTN_2.addEventListener("click", () => {
   SELECTION_INFO.innerText = "2";
});

BTN_3.addEventListener("click", () => {
   SELECTION_INFO.innerText = "3";
});

BTN_4.addEventListener("click", () => {
   SELECTION_INFO.innerText = "4";
});

BTN_5.addEventListener("click", () => {
   SELECTION_INFO.innerText = "5";
});

BTN_6.addEventListener("click", () => {
   SELECTION_INFO.innerText = "6";
});

BTN_7.addEventListener("click", () => {
   SELECTION_INFO.innerText = "7";
});

BTN_8.addEventListener("click", () => {
   SELECTION_INFO.innerText = "8";
});

BTN_9.addEventListener("click", () => {
   SELECTION_INFO.innerText = "9";
});

VALIDER.addEventListener("click", () => {
   const CODE = SELECTION_INFO.innerText;

   switch (CODE) {
      case "1":
         DRINK_IMG.src = "./images/Coca.png";
         let stock1 = parseInt(STOCK_1.innerText);
         if (stock1 > 0) {
            stock1--;
            STOCK_1.innerText = stock1;
         } else {
            STOCK_1.classList.add("empty");
         }
         break;
      case "2":
         DRINK_IMG.src = "./images/diet_coke.png";
         let stock2 = parseInt(STOCK_2.innerText);
         if (stock2 > 0) {
            stock2--;
            STOCK_2.innerText = stock2;
         } else {
            STOCK_2.classList.add("empty");
         }
         break;
      case "3":
         DRINK_IMG.src = "./images/sprite.png";
         let stock3 = parseInt(STOCK_3.innerText);
         if (stock3 > 0) {
            stock3--;
            STOCK_3.innerText = stock3;
         } else {
            STOCK_3.classList.add("empty");
         }
         break;
      case "4":
         DRINK_IMG.src = "./images/minute.png";
         let stock4 = parseInt(STOCK_4.innerText);
         if (stock4 > 0) {
            stock4--;
            STOCK_4.innerText = stock4;
         } else {
            STOCK_4.classList.add("empty");
         }
         break;
      case "5":
         DRINK_IMG.src = "./images/fanta.png";
         let stock5 = parseInt(STOCK_5.innerText);
         if (stock5 > 0) {
            stock5--;
            STOCK_5.innerText = stock5;
         } else {
            STOCK_5.classList.add("empty");
         }
         break;
      case "6":
         DRINK_IMG.src = "./images/fuzze.png";
         let stock6 = parseInt(STOCK_6.innerText);
         if (stock6 > 0) {
            stock6--;
            STOCK_6.innerText = stock6;
         } else {
            STOCK_6.classList.add("empty");
         }
         break;
      default:
         DRINK_IMG.src = "";
         SELECTION_INFO.innerText = "🤷‍♀️";
         break;
   }
});

RESET.addEventListener("click", () => {
   SELECTION_INFO.innerText = "";
});
