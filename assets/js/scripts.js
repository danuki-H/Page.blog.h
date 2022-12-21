/**
 * Remove loader
 */
window.addEventListener('load', function(){
    //document.getElementById('pre-loader').style.display = 'none';
})
/**
 * SCROLL EVENT
 */
let navLinks = document.querySelectorAll(".nav-item a");
function containsClassName(){
    window.requestAnimationFrame(containsClassName);
    navLinks.forEach(navLink => {
        let hash = navLink.hash;
        let section = document.querySelector(hash);
        let position = window.scrollY + 120;
        if(position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)){
            navLink.classList.add('active');
        }else{
            navLink.classList.remove('active');
        }
    });
}
containsClassName();
/** 
 * Nav toggle
*/
document.querySelector('#nav-toggle').addEventListener('click', function(){
    document.querySelector('#nav-btn').classList.toggle('active');
    document.querySelector('#header-container').classList.toggle('active');
});
/**
 * Xóa class name 'active' của header container và nav toggle khi ấn vào nav
 */
navLinks.forEach(navLink => {
    navLink.addEventListener('click',function() {
        document.querySelector('#nav-btn').classList.remove('active');
        document.querySelector('#header-container').classList.remove('active');
    });
});