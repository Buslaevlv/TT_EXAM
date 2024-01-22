
function myFunction() {
    var x = document.getElementById("nav-menu-top");
    if (x.className === "menu-center") {
      x.className += " responsive";
    } else {
      x.className = "menu-center";
    }
    document.querySelectorAll('.menu-top a').forEach(function (item) {
        item.addEventListener('click', function () {
            var x = document.getElementById("nav-menu-top");
            x.className = "menu-center";
        });
    });
  }


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#nav-menu-top").addEventListener("click", function (event) {
        event.preventDefault();
        let targetId = event.target.getAttribute("href").substring(1);
        let targetElement = document.getElementById(targetId);

        if (targetElement) {
            let headerHeight = document.querySelector("nav").offsetHeight;
            let elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            let offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            if (targetId === "sakums") {
                targetElement.style.marginTop = 0;
            }
            else {
                targetElement.style.marginTop = 20 + "px";
            }
        }
    });
});



window.addEventListener('DOMContentLoaded', (event) => {

    check.onclick = function() {
        var password = document.getElementById('password').value;
        var login = document.getElementById('login').value;

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;

        if ((password === "lu1234567") && (/^[a-z]{2}\d{5}$/.test(login))) {
            document.getElementById('list').style.display = "flex";
            document.querySelector('.info-login-true').style.display = "none";
            document.querySelector('.info-pass-true').style.display = "none";
        }

        else if ((password === "lu1234567") && (!/^[a-z]{2}\d{5}$/.test(login))) {
            document.querySelector('.table-oper').style.display = "none";
            document.querySelector('.table-aup').style.display = "none";
            document.getElementById('list').style.display = "none";
            document.querySelector('.info-login-true').style.display = "flex";
            document.querySelector('.info-pass-true').style.display = "none";
        }

        else if ((password != "lu1234567") && (/^[a-z]{2}\d{5}$/.test(login))) {
            document.querySelector('.table-oper').style.display = "none";
            document.querySelector('.table-aup').style.display = "none";
            document.getElementById('list').style.display = "none";
            document.querySelector('.info-login-true').style.display = "none";
            document.querySelector('.info-pass-true').style.display = "flex";
        }

        else if ((password != "lu1234567") && (!/^[a-z]{2}\d{5}$/.test(login))) {
            document.querySelector('.table-oper').style.display = "none";
            document.querySelector('.table-aup').style.display = "none";
            document.getElementById('list').style.display = "none";
            document.querySelector('.info-login-true').style.display = "flex";
            document.querySelector('.info-pass-true').style.display = "none";
        }
    }

    function getSelectValue(e){
        let selectedValue = e.target.value;
        
        if (selectedValue === "os") {
            document.querySelector('.table-oper, .table-aup').style.display = "flex";
            document.querySelector('.table-oper').style.display = "flex";
            document.querySelector('.table-aup').style.display = "none";
            
        }

        if (selectedValue === "aup") {
            document.querySelector('.table-oper, .table-aup').style.display = "flex";
            document.querySelector('.table-oper').style.display = "none";
            document.querySelector('.table-aup').style.display = "flex";
        }

        if (selectedValue === "none") {
            document.querySelector('.table-oper, .table-aup').style.display = "none";
            document.querySelector('.table-oper').style.display = "none";
            document.querySelector('.table-aup').style.display = "none";
        }
      }
      
      const list = document.getElementById('list');
      
    list.addEventListener('change', function(e) {  
    getSelectValue(e)
    });
    
    submit.onclick = function() {
        if (/[^a-zA-Z0-9]/.test(name)) {
            document.querySelector('.name-true').style.display = "flex";
        }
    }

});

function passShow() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } 
    else {
      x.type = "password";
    }
}




document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slideshow img");
    const totalSlides = slides.length;
    const indicatorsContainer = document.getElementById("indicators");
    const textContainer = document.getElementById("text");
    let intervalId;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        }); 
        updateIndicators(index);
        updateText(index);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function updateIndicators(index) {
        const indicators = Array.from(indicatorsContainer.children);
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });
    }


    function updateText(index) {
        const newCaption = slides[index].alt;
        textContainer.style.animation = "none";
        textContainer.offsetHeight; /* Освежение элемента */
        textContainer.style.animation = null;
        textContainer.style.animation = "fadeInOut 1s ease-in-out";
        textContainer.textContent = newCaption;
    }


    function createIndicators() {
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement("div");
            indicator.classList.add("indicator");
            indicator.addEventListener("click", () => {
                clearInterval(intervalId); // Очищаем интервал перед установкой нового слайда
                currentSlide = i;
                showSlide(currentSlide);
                startInterval();
            });
            indicatorsContainer.appendChild(indicator);
        }
        indicatorsContainer.children[0].classList.add("active");
    }

    function startInterval() {
        intervalId = setInterval(nextSlide, 3000);
    }

    // Начать слайд-шоу с первого слайда
    showSlide(currentSlide);

    // Запустить слайд-шоу с интервалом в 3 секунды (3000 миллисекунд)
    startInterval();

    // Создать индикаторы
    createIndicators();

});