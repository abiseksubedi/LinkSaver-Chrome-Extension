const e = document.getElementById("main");
const ulel = document.getElementById('ul-el');
let myleads = [];
const listsFLS = JSON.parse(localStorage.getItem("lists"));
const tabBtn = document.getElementById("tabbtn");



inp = () => {
    leads = "";
    for (i = 0; i < myleads.length; i++) {
        leads += `<li>
        <a target="_blank" href="${myleads[i]}">
        ${myleads[i]}
        </li>`
    }
    ulel.innerHTML = leads;
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function() {
        myleads.push(tab[0].url);
        localStorage.setItem("lists", JSON.stringify('myleads'))
        inp();
    })
})

if (listsFLS) {
    myleads = listsFLS;
    inp();
}

savebtn.addEventListener("click", function() {
    myleads.push(e.value);
    e.value = "";
    localStorage.setItem("lists", JSON.stringify(myleads))
    inp();
})

deletebtn.addEventListener('dblclick', function() {
    ulel.innerHTML = "";
    localStorage.clear()
    myleads = [];
})

document.getElementById("main").addEventListener("keyup", function() {
    if (event.keyCode === 13) {
        document.getElementById("savebtn").click();
    }

})
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener('click', function() {
    let hexC = '#';
    for (i = 0; i < 6; i++) {
        R = Math.floor(Math.random() * 16);
        hexC += hex[R];

    }
    // tabBtn.style.color = hexC;
    // savebtn.style.color = hexC;
    document.getElementById('btn').style.color = hexC;
})

function laro() {
    document.getElementById("btn").click();
    console.log('clicked tri')
}
setInterval(laro, 400)