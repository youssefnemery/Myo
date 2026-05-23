function enter() {
    document.getElementById("overlay").style.display = "none";

    let song = document.getElementById("song");
    song.play();
}


function moveBtn() {
    let btn = document.getElementById("no");
    btn.style.transform = `translate(${(1 + Math.random() * 100) + 10}px, ${(1 + Math.random() * 300) - 10}px)`;
}



let years = 0;
let months = 0;
let days = 0;


let targetYears = 21;
let targetMonths = 21 * 12;
let targetDays = 21 * 365; 

function updateCounter() {
    if (days < targetDays) {
        days++;
        months = Math.min(targetMonths, Math.floor(days / 30));
        years = Math.min(targetYears, Math.floor(months / 12));
    }

    document.getElementById("counter").innerHTML = `${years} Year <br> ${months} Month <br> ${days} Day`;


    if (days === targetDays) {
        clearInterval(counterInterval);
    }
}
let counterInterval = setInterval(updateCounter, 1);



function toggleTranslation() {
    let text_ar = document.getElementById("arabicText");

    if (text_ar.style.display === "none") {
        text_ar.style.display = "block";
    }
    else {
        text_ar.style.display = "none";
    }
}

function toggleTranslation2() {
    let text_ar = document.getElementById("arabicText2");

    if (text_ar.style.display === "none") {
        text_ar.style.display = "block";
    }
    else {
        text_ar.style.display = "none";
    }
}





let images = [
    { src: "Bb.jpeg", desc: "Today is the day my world was born 🥳♥️♥️♥️" },
    { src: "Ff.jpeg", desc: "اول عيد واول عيديه كان العيد الصغير 2023 مع انها كانت وقفه 10دقايق ف الشارع لاكنها كانت عيد لوحدو♥️🙈" },
    { src: "Aa.jpeg", desc: "اول ديت لينا ف \"اسكتو\" بعد 37 يوم بالظبط من كلامنا بتاريخ 8/11 عن طريق ال12ساعه لمطروح😔♥️♥️♥️" },
    { src: "Cc.jpeg", desc: "نسيت اقولك ان بابا بيسلم عليكي وبيقولك متركبيش العربيه تاني" },
    { src: "Gg.png", desc: "اول اكل من ايد المدام ربنا ما يقطعها عاده 😔♥️" },
    { src: "Dd.jpeg", desc: "اول لقاء يجمع فتايات القوه والبروفيسير🤚🏻" },
    { src: "Ee.jpeg", desc: "وفي النهاية انا مستني اليوم بفارغ الصبر الي الصوره دي متبقاش AI وتبقي حقيقه😔" },
    
];

let i = 0;

function changeImage(newIndex) {
    let card = document.querySelector(".card1");

    // fade out
    card.style.opacity = "0";
    card.style.transform = "scale(0.95)";

    setTimeout(() => {
        i = newIndex;

        document.getElementById("img").src = images[i].src;
        document.getElementById("desc").innerText = images[i].desc;

        // مهم جدًا: force reflow
        card.offsetHeight;

        // fade in
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
    }, 200);
}

function next() {
    let newIndex = (i + 1) % images.length;
    changeImage(newIndex);
}

function prev() {
    let newIndex = (i - 1 + images.length) % images.length;
    changeImage(newIndex);
}



function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if(username == "Myo" && password == "262005"){

        document.getElementById("loginBox")
        .style.display = "none";

        document.getElementById("website")
        .style.display = "block";

    }else{

        document.getElementById("errorMsg")
        .innerText = "Wrong username or password";

    }
}

