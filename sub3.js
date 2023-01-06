var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: '.mySwiper .swiper-button-next',
        prevEl: '.mySwiper .swiper-button-prev',
    },
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
        },
        next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
        },
    },
});