
(function () {
    'use strict';

    let section = document.querySelectorAll(".page-section");
    let sections = {};
    let i = 0;

    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function () {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').parentElement.setAttribute('class', 'active');
            }
        }

        const sponsorship = document.querySelector("a[href='#sponsorship']")
        const sponsorshipSelected = sponsorship.parentElement.classList.contains('active');

        if(sponsorshipSelected){
            document.querySelector('.sidebar a:hover, .sidebar li.active a').style.color= '#E55C5B';
            sponsorship.style.color= '#3427A9';
            sponsorship.parentElement.style.background = "url( './assets/svg/arrow-link-blue.svg' ) no-repeat right";
            sponsorship.parentElement.style.backgroundPositionX = "0px";
        }else{
            sponsorship.style.color= '#E55C5B'
            sponsorship.parentElement.style.background = '';
        }
    };
})();
