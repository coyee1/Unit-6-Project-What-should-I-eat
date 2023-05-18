// Declare your genre arrays here

// Make sure to declare your HTML elements as variables! 
let flavor=document.querySelector(".input1");
let dish = document.querySelector(".input2");
let p = document.querySelector(".p");
// Submit Button 
let sweet = ["https://insanelygoodrecipes.com/wp-content/uploads/2022/05/Chocolate-Ice-Cream-Cake-with-Cookies-and-Chocolate-Brittles-683x1024.webp", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/220px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg","https://publish.purewow.net/wp-content/uploads/sites/2/2021/10/giant-cookie-trend-explainer.jpeg?fit=728%2C921"];
let salty=["https://robbreport.com/wp-content/uploads/2021/07/burger.jpg?w=1000", "https://nationaltoday.com/wp-content/uploads/2019/07/national-fried-chicken-day-1200x834.jpg.webp","https://insanelygoodrecipes.com/wp-content/uploads/2022/10/Loaded-Nachos-with-Salsa-Cheese-and-Jalapenos-683x1024.webp"];
let spicy=["https://www.recipetineats.com/wp-content/uploads/2019/01/Baked-Buffalo-Wings_0.jpg?resize=650,910","https://www.panningtheglobe.com/wp-content/uploads/2017/10/eddies-chili-main-web.jpg","https://media-cldnry.s-nbcnews.com/image/upload/newscms/2015_21/564831/bbq-ribs-today-150520-tease.jpg"];
let submitButton = document.querySelector("button"); 
submitButton.onclick = function() {
	let input1 =flavor.value;
    if (input1 === "sweet"){
        for (let item of sweet){
   p.insertAdjacentHTML("afterEnd", + "<img src=" + item + ">");
    if (input1 === "salty"){
        for (let item of salty){
   p.insertAdjacentHTML("afterEnd", + "<img src=" + item + ">");
        }
        }
        }
    }
    }; 

