function setUpEvents() {
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 100) {
            this.document.querySelector("header").classList.add('is-scrolling');
        }
        else {
            this.document.querySelector("header").classList.remove('is-scrolling');
        }
    });
    const menue_btn = document.querySelector('.hamburger');
    const mobile_menue = document.querySelector('.mobile-nav');

    menue_btn.addEventListener('click',function () {
        menue_btn.classList.toggle('is-active');
        mobile_menue.classList.toggle('is-active');
    })
}

window.onload = function() {
   setUpEvents();
}
/*
 window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 100) {
            this.document.querySelector("header").classList.add('is-scrolling');
        }
        else {
            this.document.querySelector("header").classList.remove('is-scrolling');
        }
    });
    const menue_btn = document.querySelector('.hamburger');
    const mobile_menue = document.querySelector('.mobile-nav');

    menue_btn.addEventListener('click',function () {
        menue_btn.classList.toggle('is-active');
        mobile_menue.classList.toggle('is-active');
    })
    */