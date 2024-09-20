// what is animation.
// Ans: animation is simply a moving of an object... for detail see readme.md
// gsap.to("#box1", {
//   x: 1000, // move to x-axis
//   y: 400, // move to y-axis
//   duration: 10, // value is in seconds
//   delay: 20, // value is in seconds
// });

// Difference between to and from in gsap see Readme.md for detail but in short to: create animation from initial position to final position, from: from final position to initial position

// gsap.to("#box1", {
//   x: 1200,
//   duration: 2,
//   delay: 1,
// });

// gsap.to("#box2", {
//   x: 500,
//   y: 500,
//   duration: 2,
//   delay: 1,
// });

// gsap.to("#box1", {
//   x: 1047,
//   duration: 2,
//   delay: 1,
// });

// gsap.from("#box2", {
//   x: 1047, // we can give any position it is not important to give same as to
//   duration: 2,
//   delay: 1,
// });

// we can give any css property in this...

// Rotate

gsap.to("#box1", {
  x: 1047,
  duration: 2,
  delay: 1,
  rotate: 360,
});

// backgroundColor but there is a problem that we have to give it in camelCase what is camelCase see README.md for detailbut in short it is splitting letter with capital letters like "background-color" in camelCase is "backgroundColor" because of javaScript: JavaScript doesn't supportspecial symbols in variables or property names except _ or $

// gsap.to("#box1", {
//   x: 1047,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
// });

// scale

// gsap.to("#box1", {
//   x: 1047,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   scale: 0.5,
// });

// border-radius = borderRadius

gsap.to("#box1", {
  x: 1047,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  scale: 0.5,
  borderRadius: "100%", // we have to give it's value in qoutes becuse it has a special character
  repeat: -1, // we use it to make animation repeating infinite time,
});

gsap.from("#box2", {
  x: 1047,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  scale: 0.5,
  borderRadius: "100%", // we have to give it's value in qoutes becuse it has a special character
  repeat: -1, // we use it to make animation repeating infinite time,
});
