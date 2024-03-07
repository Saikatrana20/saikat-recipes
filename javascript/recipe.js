let a = document.getElementById('menu');
// console.log(a);
let mIcon = document.getElementById('menu-Icon');
let cIcon = document.getElementById('close-Icon');


// ....................FUNCTION FOR OPEN MENU....................

function openMenu() {
    a.style.display = 'block';
    cIcon.style.display = 'block';
    mIcon.style.display = 'none';
}
function closeMenu() {
    a.style.display = 'none';
    cIcon.style.display = 'none';
    mIcon.style.display = 'block';
}