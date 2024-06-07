const cursor = document.querySelector("#cursor");
const main = document.querySelector("#main");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    ease: "back.out()",
  });
});


