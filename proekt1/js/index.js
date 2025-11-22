let Isdark = true;
let lunesunNode = document.querySelector(`#night_day`);
let pageNode = document.querySelector(`body`);

let ratchet_imgNode = document.querySelector(`#ratchet_chgimg`);
let ratchet_img_newNode = document.querySelector(`#ratchet_curr_img`)
let curr_img_ratchet = 1;

let clank_imgNode = document.querySelector(`#clank_chgimg`);
let clank_img_newNode = document.querySelector(`#clank_curr_img`)
let curr_img_clank = 1;

let qwark_imgNode = document.querySelector(`#qwark_chgimg`);
let qwark_img_newNode = document.querySelector(`#qwark_curr_img`)
let curr_img_qwark = 1;

let nefarious_imgNode = document.querySelector(`#nefarious_chgimg`);
let nefarious_img_newNode = document.querySelector(`#nefarious_curr_img`)
let curr_img_nefarious = 1;

let rivet_imgNode = document.querySelector(`#rivet_chgimg`);
let rivet_img_newNode = document.querySelector(`#rivet_curr_img`)
let curr_img_rivet = 1;


lunesunNode.addEventListener(`click`, function () { 
    if (Isdark == true) {
        lunesunNode.innerHTML = `<img class = "background_theme_day" src="assets/sun.png">`;
        pageNode.classList.add(`day`);
        pageNode.classList.remove(`night`);
        Isdark = false;
    }
    else {
        lunesunNode.innerHTML = `<img class = "background_theme_night" src="assets/lune.png">`;
        pageNode.classList.add(`night`);
        pageNode.classList.remove(`day`);
        Isdark = true;
    }
});


ratchet_imgNode.addEventListener(`click`, function () {
    if (curr_img_ratchet == 3) {
        ratchet_img_newNode.innerHTML = `<img class = "ratchet_img1" src = "assets/Ratchet1.png">`;
        curr_img_ratchet = 1;
    }
    else if (curr_img_ratchet == 1) {
        ratchet_img_newNode.innerHTML = `<img class = "ratchet_img2" src = "assets/ratchet2.png">`;
        curr_img_ratchet = 2;
    }
    else if (curr_img_ratchet == 2) {
        ratchet_img_newNode.innerHTML = `<img class = "ratchet_img3" src = "assets/ratchet3.png">`;
        curr_img_ratchet = 3;
    }
});

clank_imgNode.addEventListener(`click`, function () {
    if (curr_img_clank == 2) {
        clank_img_newNode.innerHTML = `<img class = "clank_img1" src = "assets/Clank1.png">`;
        curr_img_clank = 1;
    }
    else if (curr_img_clank == 1) {
        clank_img_newNode.innerHTML = `<img class = "clank_img2" src = "assets/clank2.png">`;
        curr_img_clank = 2;
    }
});

qwark_imgNode.addEventListener(`click`, function () {
    if (curr_img_qwark == 2) {
        qwark_img_newNode.innerHTML = `<img class = "qwark_img1" src = "assets/qwark.png">`;
        curr_img_qwark = 1;
    }
    else if (curr_img_qwark == 1) {
        qwark_img_newNode.innerHTML = `<img class = "qwark_img2" src = "assets/qwark2.png">`;
        curr_img_qwark = 2;
    }
});

nefarious_imgNode.addEventListener(`click`, function () {
    if (curr_img_nefarious == 2) {
        nefarious_img_newNode.innerHTML = `<img class = "nefarious_img1" src = "assets/nefarius.png">`;
        curr_img_nefarious = 1;
    }
    else if (curr_img_nefarious == 1) {
        nefarious_img_newNode.innerHTML = `<img class = "nefarious_img2" src = "assets/nefarious2.png">`;
        curr_img_nefarious = 2;
    }
});

rivet_imgNode.addEventListener(`click`, function () {
    if (curr_img_rivet == 2) {
        rivet_img_newNode.innerHTML = `<img class = "rivet_img1" src = "assets/rivet.png">`;
        curr_img_rivet = 1;
    }
    else if (curr_img_rivet == 1) {
        rivet_img_newNode.innerHTML = `<img class = "rivet_img2" src = "assets/rivet2.png">`;
        curr_img_rivet = 2;
    }
});
