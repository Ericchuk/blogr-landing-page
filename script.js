let hamburger = document.querySelector('.hamburger');
let close = document.querySelector('.close');
let hamburgerContent = document.querySelector('.hamburger-content');
let product = document.querySelector('.product');
let company = document.querySelector('.company');
let connect = document.querySelector('.connect');
let content1 = document.querySelector('.content1');
let content2 = document.querySelector('.content2');
let content3 = document.querySelector('.content3');
let arrow = document.querySelector('.arrow1');
let arrow1 = document.querySelector('.arrow2');
let arrow2 = document.querySelector('.arrow3');
let arrowlight = document.querySelector('.arrowlight');
let arrowlight1 = document.querySelector('.arrowlight2');
let arrowlight2 = document.querySelector('.arrowlight3');

console.log(hamburger ,close,hamburgerContent,product,connect,company,  content1,content2);

function openHamburger(){
    if(hamburgerContent.style.visibility === "visible"){
        hamburgerContent.style.visibility = "hidden",
        hamburger.style.display ="block",
        close.style.display = "none"
    }else(hamburgerContent.style.visibility = "visible",
            hamburger.style.display ="none",
            close.style.display = "block"  
          )
}

hamburger.addEventListener("click", openHamburger);
close.addEventListener("click", openHamburger);

function openDropDown(){
    if(content1.style.display === "block"){
        content1.style.display = "none";
        arrow.style.transform ="rotate(0deg)"
        arrowlight.style.transform ="rotate(0deg)"
    }else(
        content1.style.display = "block",
        arrow.style.transform ="rotate(-180deg)",
        arrowlight.style.transform ="rotate(-180deg)"
    )
}

product.addEventListener("click", openDropDown);

function openDropdown2(){
    if(content2.style.display === "block"){
        content2.style.display = "none";
        arrow1.style.transform ="rotate(0deg)";
        arrowlight1.style.transform ="rotate(0deg)"
    }else{
        content2.style.display = "block",
        arrow1.style.transform ="rotate(-180deg)",
        arrowlight1.style.transform ="rotate(-180deg)"
    }
};

company.addEventListener("click", openDropdown2);

function openDropdown3(){
    if(content3.style.display === "block"){
        content3.style.display = "none";
        arrow2.style.transform ="rotate(0deg)";
        arrowlight2.style.transform ="rotate(0deg)"
    }else{
        content3.style.display = "block",
        arrow2.style.transform ="rotate(-180deg)"
        arrowlight2.style.transform ="rotate(-180deg)"
    }
};

connect.addEventListener("click", openDropdown3);