document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#nav-menu-top").addEventListener("click", function (event) {
        event.preventDefault();
        let merk_href = event.target.getAttribute("href").substring(1);
        let merk_elem = document.getElementById(merk_href);

        if (merk_elem) {
            let nav_izm = document.querySelector("nav").offsetHeight;
            let elem_poz = merk_elem.getBoundingClientRect().top + window.scrollY;
            let beig_poz = elem_poz - nav_izm;

            window.scrollTo({
                top: beig_poz,
                behavior: "smooth"
            });

            if (merk_href === "sakums") {
                merk_elem.style.marginTop = 0;
            }
            else {
                merk_elem.style.marginTop = 20 + "px";
            }
        }
    });
});

window.addEventListener('DOMContentLoaded', (event) => {
    check.onclick = function() {
        var password = document.getElementById('password').value;
        var login = document.getElementById('login').value;
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

    function tab_atvr(elem){
        let izvel = elem.target.value;
        if (izvel === "os") {
            document.querySelector('.table-oper').style.display = "flex";
            document.querySelector('.table-aup').style.display = "none";
        }

        if (izvel === "aup") {
            document.querySelector('.table-oper').style.display = "none";
            document.querySelector('.table-aup').style.display = "flex";
        }

        if (izvel === "none") {
            document.querySelector('.table-oper, .table-aup').style.display = "none";
            document.querySelector('.table-oper').style.display = "none";
            document.querySelector('.table-aup').style.display = "none";
        }
    }
      
    const list = document.getElementById('list'); 
    list.addEventListener('change', function(elem) {  
        tab_atvr(elem)
    });
});

function passShow() {
    var pass = document.getElementById("password");
    if (pass.type === "password") {
      pass.type = "text";
    } 
    else {
      pass.type = "password";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let tagad_slide = 0;
    const slides_mas = document.querySelectorAll(".slideshow img");
    const kopa_slides = slides_mas.length;
    const indicatorCont = document.getElementById("indicators");
    const textCont = document.getElementById("text");
    let interval;

    function slide_att(index) {
        slides_mas.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        }); 
        indicators_upd(index);
        text_upd(index);
    }

    function nak_slide() {
        tagad_slide = (tagad_slide + 1) % kopa_slides;
        slide_att(tagad_slide);
    }

    function indicators_upd(index) {
        const indicators = Array.from(indicatorCont.children);
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });
    }


    function text_upd(index) {
        const newSub = slides_mas[index].alt;
        textCont.style.animation = "none";
        textCont.offsetHeight;
        textCont.style.animation = null;
        textCont.style.animation = "fadeInOut 1s ease-in-out";
        textCont.textContent = newSub;
    }


    function Indic() {
        for (let i = 0; i < kopa_slides; i++) {
            const indicator = document.createElement("div");
            indicator.classList.add("indicator");
            indicator.addEventListener("click", () => {
                clearInterval(interval);
                tagad_slide = i;
                slide_att(tagad_slide);
                interval_start();
            });
            indicatorCont.appendChild(indicator);
        }
        indicatorCont.children[0].classList.add("active");
    }

    function interval_start() {
        interval = setInterval(nak_slide, 3000);
    }

    slide_att(tagad_slide);

    interval_start();
    Indic();
});

function mobileNav() {
    var mob_nav = document.getElementById("nav-menu-top");
    if (mob_nav.className === "menu-center") {
        mob_nav.className += " responsive";
    } else {
        mob_nav.className = "menu-center";
    }
    document.querySelectorAll('.menu-top a').forEach(function (item) {
        item.addEventListener('click', function () {
            var mob_nav = document.getElementById("nav-menu-top");
            mob_nav.className = "menu-center";
        });
    });
}