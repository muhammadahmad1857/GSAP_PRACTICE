# GSAP ScrollTrigger Guide

## Introduction

This guide provides an overview of GSAP's ScrollTrigger plugin, focusing on its key concepts and usage in HTML. ScrollTrigger allows you to create animations that are triggered and controlled by the user's scroll position.

## What is ScrollTrigger?

ScrollTrigger is a plugin for GSAP (GreenSock Animation Platform) that lets you trigger animations based on the scroll position of the page. It enables you to create highly interactive and engaging web experiences by synchronizing animations with the scroll position.

## Methods of Writing ScrollTrigger

ScrollTrigger can be configured in multiple ways within GSAP. Here are some common methods:

1. **Inline Configuration**: Adding the configuration directly within the `gsap.to` or `gsap.from` methods.

   ```javascript
   gsap.to(".element", {
     x: 100,
     scrollTrigger: {
       trigger: ".element",
       start: "top center",
       end: "bottom 100px",
       scrub: true,
     },
   });
   ```

2. **ScrollTrigger:true Method**: Creating a ScrollTrigger.
   ```javascript
    gsap.to(".element", {
     x: 100,
     scrollTrigger:true,});
   ```

## Trigger

The `trigger` property defines the element that will trigger the animation when it comes into view.

```javascript
gsap.to(".element", {
  scrollTrigger: {
    trigger: ".element",
    start: "top center",
    end: "bottom 100px",
  },
});
```

## Scroll: "body"

The `scroll` property allows you to specify which element's scroll position should be used. By default, it uses the `body` scroll.

```javascript
gsap.to(".element", {
  scrollTrigger: {
    trigger: ".element",
    scroll: "body",
    start: "top center",
    end: "bottom 100px",
  },
});
```

## Scrub

The `scrub` property allows you to synchronize the animation with the scroll position, creating a smooth and natural effect. It can be set to `true` or a numerical value to control the smoothness.

```javascript
gsap.to(".element", {
  scrollTrigger: {
    trigger: ".element",
    start: "top center",
    end: "bottom 100px",
    scrub: true, // or scrub: 1 for a smoother effect
  },
});
```

### Methods of Writing Scrub

1. **Boolean Value**: Setting `scrub` to `true` will make the animation scrub along with the scroll.

   ```javascript
   gsap.to(".element", {
     scrollTrigger: {
       trigger: ".element",
       start: "top center",
       end: "bottom 100px",
       scrub: true,
     },
   });
   ```

2. **Numerical Value**: Setting `scrub` to a number controls the duration of the scrub effect.
   ```javascript
   gsap.to(".element", {
     scrollTrigger: {
       trigger: ".element",
       start: "top center",
       end: "bottom 100px",
       scrub: 1, // scrub duration
     },
   });
   ```

## Start

The `start` property defines when the ScrollTrigger should start based on the trigger element's position relative to the viewport.

```javascript
gsap.to(".element", {
  scrollTrigger: {
    trigger: ".element",
    start: "top center", // element's top hits the center of the viewport
  },
});
```

## End

The `end` property defines when the ScrollTrigger should end based on the trigger element's position relative to the viewport.

```javascript
gsap.to(".element", {
  scrollTrigger: {
    trigger: ".element",
    start: "top center",
    end: "bottom 100px", // element's bottom reaches 100px from the top of the viewport
  },
});
```

## Pin

The `pin` property allows you to pin an element in place while scrolling.

```javascript
gsap.to(".element", {
  scrollTrigger: {
    trigger: ".element",
    start: "top center",
    end: "bottom 100px",
    pin: true,
  },
});
```

## Conclusion

GSAP's ScrollTrigger plugin offers powerful features to create scroll-based animations. By understanding and utilizing properties like `trigger`, `scroll`, `scrub`, `start`, `end`, and `pin`, you can create sophisticated animations that respond to the user's scroll behavior.

For more details and advanced usage, refer to the official [GSAP ScrollTrigger documentation](https://greensock.com/scrolltrigger/).
