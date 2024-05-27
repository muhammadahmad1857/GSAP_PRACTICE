// gsap.to("#box1", {
//   duration: 1.5,
//   x: 1047,
//   rotate: 360,
//   delay: 1,
// });f

// gsap.to("#box2", {
//   duration: 1.5,
//   x: 1047,
//   backgroundColor: "yellow",
//   delay: 2.5,
// });

// gsap.to("#box3", {
//   duration: 1.5,
//   x: 1047,
//   borderRadius: "50%",
//   rotate: 360,
//   delay: 4,
// });

// why we need timeline: in above code we have to calculate the delay but timeleine calculate it on see readme.md for detail

// // how to create timeline

// let tl = gsap.timeline();

// // we use tl.to() or tl.from()

// tl.to("#box1", {
//   duration: 1.5,
//   x: 1047,
//   rotate: 360,
//   delay: 1,
// });

// tl.to("#box2", {
//   duration: 1.5,
//   x: 1047,
//   backgroundColor: "yellow",
// });

// tl.to("#box3", {
//   duration: 1.5,
//   x: 1047,
//   borderRadius: "50%",
//   rotate: 360,
// });

// navbar animate
let tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  duration: 1,
  opacity: 0,
  delay: 0.5,
});

tl.from("h4", {
  y: -20,
  duration: 1,
  opacity: 0,
  delay: 0.5,
  stagger: 0.3,
});

tl.from("#center", {
  y: 20,
  duration: 0.5,
  opacity: 0,
  scale: 0.2,
});
