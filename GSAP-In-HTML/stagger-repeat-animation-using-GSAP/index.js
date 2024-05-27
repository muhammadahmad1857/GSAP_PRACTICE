// gsap.from("h1", {
//   duration: 3,
//   y: 20,
//   delay: 1,
//   opacity: 0,
// });
// it has same properties as we have in box-animation
// stagger

// gsap.from("h1", {
//   duration: 3,
//   y: 20,
//   delay: 1,
//   opacity: 0,
//   stagger: 1, // stagger property takes time and send each eleemtn after time given seconds if you don't understand see README.md for details.
// });

// gsap.from("h1", {
//   duration: 3,
//   y: 20,
//   delay: 1,
//   opacity: 0,
//   stagger: 0.3, // if we give value in - then it run backwards for detail see readme.md
// });

// repeat

// gsap.to("#box", {
//   duration: 2,
//   x: 1047,
//   delay: 1,
//   rotate: 360,
//   repeat:1 // repeat takes the value how many we repeat it.
// });

// repeat infinite

// gsap.to("#box", {
//   duration: 2,
//   x: 1047,
//   delay: 1,
//   rotate: 360,
//   repeat: -1, //if we give value -1 then it repeat infinite time
// });

// if we use reapeat:-1 there is a problem that repeat run from initial to final only if we want that it go from initial to final then final to initial we use "yoyo" for seeing detail on yoyo see readme.md

gsap.to("#box", {
  duration: 2,
  x: 1047,
  delay: 1,
  rotate: 360,
  repeat: -1, //if we give value -1 then it repeat infinite time
  yoyo: true, // if we give repeat then yoyo run infinite time else not
});


