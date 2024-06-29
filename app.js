gsap.registerPlugin(ScrollTrigger);

// first 
gsap.to(".b0", {y: -100, pin: true,
    scrollTrigger: { trigger: '.box', start: "top 600", end: "top 500",
        scrub: 2,pin: true,   }});
gsap.to(".b1", {x: -400, pin: true,
    scrollTrigger: {trigger: '.box1', start: "top 670", end: "top 600",
        scrub: 2, pin: true,}});
gsap.to(".lo", {y: 120, pin: true,
    scrollTrigger: { trigger: '.logo', start: "420 600", end: "420 500",
        scrub: 1,pin: true,}});
// second 
gsap.to(".b2", {y: -100, pin: true,
    scrollTrigger: { trigger: '.box2', start: "top 600", end: "top 500",
        scrub: 2,pin: true,}});
gsap.to(".b3", {x: -400, pin: true,
    scrollTrigger: {trigger: '.box3', start: "top 670", end: "top 600",
        scrub: 2, pin: true,}});
gsap.to(".lo1", {y: 120, pin: true,
    scrollTrigger: { trigger: '.logo1', start: "420 600", end: "420 500",
        scrub: 1,pin: true,}});
// third 
gsap.to(".b4", {y: -100, pin: true,
    scrollTrigger: { trigger: '.box4', start: "top 600", end: "top 500",
        scrub: 2,pin: true,}});
gsap.to(".b5", {x: -400, pin: true,
    scrollTrigger: {trigger: '.box5', start: "top 670", end: "top 600",
        scrub: 2, pin: true,}});
gsap.to(".lo2", {y: 120, pin: true,
    scrollTrigger: { trigger: '.logo2', start: "420 600", end: "420 500",
        scrub: 1,pin: true,}});
// fourth
gsap.to(".b6", {y: -100, pin: true,
    scrollTrigger: { trigger: '.box6', start: "top 600", end: "top 500",
        scrub: 2,pin: true,}});
gsap.to(".b7", {x: -400, pin: true,
    scrollTrigger: {trigger: '.box7', start: "top 670", end: "top 600",
        scrub: 2, pin: true,}});
gsap.to(".lo3", {y: 120, pin: true,
    scrollTrigger: { trigger: '.logo3', start: "420 600", end: "420 500",
        scrub: 1,pin: true,}});
// fifth 
gsap.to(".b8", {y: -100, pin: true,
    scrollTrigger: {trigger: '.box8', start: "top 600", end: "top 500",
        scrub: 2,pin: true,}});
gsap.to(".b9", {x: -400, pin: true,
    scrollTrigger: {trigger: '.box9', start: "top 670", end: "top 600",
        scrub: 2, pin: true,}});
gsap.to(".lo4", {y: 120, pin: true,
    scrollTrigger: { trigger: '.logo4', start: "420 600", end: "420 500",
        scrub: 1,pin: true,}});







// first 
gsap.to(".im1", {x: -400, duration: 5, pin: true,
    scrollTrigger: { trigger: '.imco', start: "600 550", end: "600 450",
        scrub: 3,pin: true,}});
gsap.to(".im2", {x: 420, duration: 5,pin: true,
    scrollTrigger: {trigger: '.imco', start: "600 550", end: "600 450",
        scrub: 3,pin: true,}});

// second 
gsap.to(".im3", {y: 600, x: 60, duration: 5,pin: true,
    scrollTrigger: {trigger: '.blk2', start: "top 400", end: "top 300",
        scrub: 2,}});
gsap.to(".im4", {y: -540, x: -60, duration: 5,pin: true,
    scrollTrigger: {trigger: '.blk2', start: "top 400", end: "top 300",
        scrub: 2,}});

// third
gsap.to(".im5", {x: 490, duration: 5,pin: true,
    scrollTrigger: {trigger: '.blk2', start: "700 350", end: "700 100",
        scrub: 2,}});
gsap.to(".im6", {y: 220, duration: 5,pin: true,
    scrollTrigger: {trigger: '.blk3', start: "top 400", end: "top 300",
        scrub: 2,}});
gsap.to(".im7", {y: -320, duration: 5,pin: true,
    scrollTrigger: {trigger: '.blk3', start: "100 400", end: "100 300",
        scrub: 2,}});
gsap.to(".im8", {y: -190, x: -70, duration: 5,pin: true,
    scrollTrigger: {trigger: '.blk3', start: "100 400", end: "100 300",
        scrub: 2,}});

// forth
gsap.to(".im9", {x: 490, duration: 5,pin: true,
    scrollTrigger: {trigger: '.blk4', start: "-100 350", end: "-100 100",
        scrub: 2,}});
gsap.to(".im10", {x: -440, duration: 5,pin: true,
    scrollTrigger: {trigger: '.blk4', start: "-100 350", end: "-100 100",
        scrub: 2,}});

// fifth
gsap.to(".im11", {y: -490, duration: 5,pin: true,
    scrollTrigger: {trigger: '.blk5', start: "top 350", end: "top 100",
        scrub: 2,}});