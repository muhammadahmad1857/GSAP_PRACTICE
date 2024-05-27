### GSAP Animations: Repeat, Yoyo, and Stagger

In GSAP (GreenSock Animation Platform), `repeat`, `yoyo`, and `stagger` are properties used to customize and enhance animations. Let's explore each one and understand their differences:

#### Repeat:
The `repeat` property in GSAP specifies the number of times an animation should repeat. It takes a numeric value representing the number of repeats. If set to `-1`, the animation repeats indefinitely.

```javascript
gsap.to("#box", {
  duration: 2,
  x: 1047,
  delay: 1,
  rotate: 360,
  repeat: 1 // Repeat the animation once
});
```

#### Yoyo:
The `yoyo` property, when set to `true`, reverses the animation on each repeat, creating a back-and-forth effect. It works in conjunction with the `repeat` property. If `repeat` is set to `-1` (infinite repeat), `yoyo` will continuously alternate between the original animation and its reverse.

```javascript
gsap.to("#box", {
  duration: 2,
  x: 1047,
  delay: 1,
  rotate: 360,
  repeat: -1, // Repeat indefinitely
  yoyo: true // Reverse the animation on each repeat
});
```

#### Difference between Repeat and Yoyo:
- **Repeat**: Replays the animation from the beginning to the end for the specified number of times or indefinitely.
- **Yoyo**: Reverses the animation on each repeat, creating a ping-pong effect. It complements the repeat behavior by adding variation to the animation's repetition.

#### Why Yoyo Doesn't Work Without Repeat:
`yoyo` only works when there's a repeat set. It needs the context of a repeating animation to alternate between the original and reversed states. Without a repeat, there's no repetition to reverse, so `yoyo` won't have any effect.

#### Stagger:
The `stagger` property in GSAP is used to create staggered animations, where each target starts its animation after a specified delay relative to the previous target. It can be used to create visually appealing effects when animating multiple elements sequentially.

```javascript
gsap.from("h1", {
  duration: 3,
  y: 20,
  delay: 1,
  opacity: 0,
  stagger: 0.3 // Stagger the animations with a delay of 0.3 seconds between each target
});
```

#### Summary:
- **Repeat**: Specifies the number of times an animation should repeat.
- **Yoyo**: Reverses the animation on each repeat, creating a back-and-forth effect.
- **Stagger**: Delays the start of each target's animation relative to the previous target, creating a sequential effect.

By understanding and utilizing these properties effectively, you can create dynamic and engaging animations using GSAP.