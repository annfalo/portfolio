// ハンバーガーメニュー開閉
$('.nav_btn').click(function () {
    $(this).toggleClass('open');
    $('.gnav-wrapper').toggleClass('open');
});

$(document).click(function (event) {
    if (!$(event.target).closest('.gnav-wrapper, .nav_btn').length) {
        $('.nav_btn').removeClass('open');
        $('.gnav-wrapper').removeClass('open');
    }
});

/////フッター付近でgnav-list上げる
const options = {
    root: null,
    threshold: 0.1
};
const callback = (entries, observer) => {
    entries.forEach(entry => {
        const gNav = document.querySelector('.gnav-list');

        if (entry.isIntersecting) {
            gNav.classList.add('column');

        } else {
            gNav.classList.remove('column');
        }
    });
};

const observer = new IntersectionObserver(callback, options);

const aboutSection = document.querySelector('footer');
observer.observe(aboutSection);


//gsap
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    //ローリングフェイス
    const face = document.querySelector('.rolling-face');
    gsap.to(face, {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
        },
        y: '70vh',
        rotation: 1080,
        ease: "none",
    });

    //冒険くん走る
    const boukenkun = document.querySelector('.boukenkun');
    gsap.to(boukenkun, {
        scrollTrigger: {
            trigger: ".boukenkun",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
        },
        keyframes: [
            { x: "8vw", duration: 0.5, ease: "power1.inOut" },
            { x: "-100vw", duration: 1.5, ease: "power4.in" }
        ],
    });

    //pion
    const pikon = document.querySelector('.pikon');
    gsap.to(pikon, {
        scrollTrigger: {
            trigger: ".home-top",
            start: "top top",
            end: "center top",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
        },
        keyframes: [
            { visibility: "hidden", scale: 1, y: 0, duration: 0.05, ease: "none" },
            { visibility: "visible", scale: 1.3, y: -20, duration: 0.05, ease: "none" },
            { visibility: "hidden", scale: 1, y: 0, duration: 0.05, ease: "none" },
        ]
    });

    // ロゴが出てくるアニメーション
    const uchidalogo = document.querySelector('.uchidalogo');
    gsap.to(uchidalogo, {
        scrollTrigger: {
            trigger: ".profile",
            start: "top bottom",
            end: "top top",
            scrub: 1,
            invalidateOnRefresh: true,
        },
        x: '10%',
    });

    //#webのアンダーラインのみセクショントリガー
    const line = document.querySelector('.Wafter');
    gsap.to(line, {
        scrollTrigger: {
            trigger: "#web",
            start: "top top",
            end: "top center",
            scrub: 1,
            invalidateOnRefresh: true,
        },
        width: '100%',
        duration: 1,
    });

    //タイトルにアンダーライン
    document.querySelectorAll('.after').forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element.closest('.subtitle'),
                start: 'top bottom',
                end: 'center top',
                scrub: 1,
                invalidateOnRefresh: true,
            },
            width: '100%',
            duration: 1,
        });
    });
});//gsap

//ファンシーボックス
$(document).ready(function () {
    $('[data-fancybox]').fancybox({
        loop: true,
        toolbar: false,
        smallBtn: true,
        keyboard: true,
        arrows: true,
        iframe: {
            preload: false
        }
    });
});

//スムーズスクロール一時無効
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.hash) {
        document.documentElement.style.scrollBehavior = "auto";
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = "smooth";
        }, 300);
    }
});

//まばたきインターバル
const buttons = document.querySelectorAll('.item-btn');

setInterval(() => {
    buttons.forEach(button => {
        button.classList.add('mabataki');

        setTimeout(() => {
            button.classList.remove('mabataki');
        }, 250);
    });
}, 5000);

const allView = document.querySelectorAll('.all-view');

setInterval(() => {
    allView.forEach(button => {
        button.classList.add('mabataki');

        setTimeout(() => {
            button.classList.remove('mabataki');
        }, 250);
    });
}, 3000);