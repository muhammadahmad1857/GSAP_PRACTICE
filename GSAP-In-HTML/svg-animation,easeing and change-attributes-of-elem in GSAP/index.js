let path = `M 10 100 Q 750 100 1490 100`;
let finalPath = "M 10 100 Q 750 100 1490 100";

let string = document.querySelector("#string");

string.addEventListener("mousemove", (details) => {
  path = `M 10 100 Q ${details.x} ${details.y} 1490 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});

// other svg animations are paid if you are interested then check them.
