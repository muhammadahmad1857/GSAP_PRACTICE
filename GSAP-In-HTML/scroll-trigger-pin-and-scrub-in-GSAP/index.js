// gsap.from("#page1 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 1,
//   rotate: 360,
// });
// gsap.from("#page2 #box", {
//   scale: 0,
//   duration: 1,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//   },
// });

// gsap.from("#page2 h1", {
//   opacity: 0,
//   duration: 2,
//   x: 500,
//   scrollTrigger: {
//     trigger: "#page2 h1",
//     start: "top 60%",
//     markers: true,
//   },
// });

// gsap.from("#page2 h2", {
//   opacity: 0,
//   duration: 2,
//   x: -500,
//   scrollTrigger: {
//     trigger: "#page2 h2",
//     start: "top 60%",
//     markers: true,
//   },
// });

// // scrub:true
// gsap.from("#page2 #box", {
//   scale: 0,
//   opacity: 0,
//   duration: 1,
//   rotate: 720,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     scrub: true,
//   },
// });

// // scrub:number(between 1-5)
// gsap.from("#page2 #box", {
//   scale: 0,
//   opacity: 0,
//   duration: 1,
//   rotate: 720,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     scrub: 2,
//   },
// });

// // pin:boolean
// gsap.from("#page2 #box", {
//   scale: 0,
//   opacity: 0,
//   duration: 1,
//   rotate: 720,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     scrub: 2,
//     pin: true,
//   },
// });

// making an animation with pin. whenever we use pin we always trigger the parent of element

gsap.to("#page2 h1", {
  transform: "translateX(-110%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
