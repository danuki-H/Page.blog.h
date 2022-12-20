let navLinks = document.querySelectorAll(".nav-item a");
function containsClassName(){
    window.requestAnimationFrame(containsClassName);
    navLinks.forEach(navLink => {
        /**
         * SCROLL EVENT
         */
        let hash = navLink.hash;
        let section = document.querySelector(hash);
        let position = window.scrollY + 120;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navLink.classList.add('active');
          } else {
            navLink.classList.remove('active');
          }
        /**
         * Xóa class name 'active' của header container và nav toggle khi ấn vào nav
         */
        navLink.addEventListener('click',function() {
            document.querySelector('#nav-btn').classList.remove('active');
            document.querySelector('#header-container').classList.remove('active');
        })
    });
}
containsClassName();
/*NAV TOGGLE*/
document.querySelector('#nav-toggle').addEventListener('click', function(){
    document.querySelector('#nav-btn').classList.toggle('active');
    document.querySelector('#header-container').classList.toggle('active');
});