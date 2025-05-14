const cheap = idSelector('#cheap');
const good = idSelector('#good');
const fast = idSelector('#fast');
const toggleClass = document.querySelectorAll('.toggle');


toggleClass.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
        trick(e.target);
    })
})


function trick(clickedOne){
    if (good.checked && cheap.checked && fast.checked){
        if (good === clickedOne){
            fast.checked =false;
        }
        if (cheap === clickedOne){
            good.checked = false;
        }
        if (fast ===clickedOne){
            cheap.checked = false;
        }
    }
}


function idSelector(selector) {
    return document.querySelector(selector);
}