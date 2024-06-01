# SVG Animations with GSAP

## Introduction

This guide provides an overview of using GSAP (GreenSock Animation Platform) to animate SVG (Scalable Vector Graphics) elements. SVG is a powerful format for creating graphics on the web, and GSAP offers a robust set of tools to bring these graphics to life with smooth and performant animations.

## What is SVG?

SVG stands for Scalable Vector Graphics. It is an XML-based format for creating two-dimensional vector graphics, which are resolution-independent and can be scaled to any size without losing quality. SVG is widely used for icons, illustrations, and complex graphics in web development.

## Types of SVG Paths

SVG paths can be created using different types of commands, primarily cubic and quadratic Bézier curves:

- **Cubic Bézier Curves**: Defined using the `C` command for absolute coordinates or `c` for relative coordinates. Cubic Bézier curves require three points: a start point, an end point, and two control points that define the curve's shape.
    ```html
    <path d="M10 80 C 40 10, 65 10, 95 80" />
    ```

- **Quadratic Bézier Curves**: Defined using the `Q` command for absolute coordinates or `q` for relative coordinates. Quadratic Bézier curves require two points: a start point, an end point, and one control point.
    ```html
    <path d="M10 80 Q 52.5 10, 95 80" />
    ```

## Path Attributes

### `d` Attribute
The `d` attribute contains a series of commands and parameters that describe the shape of the path. Each command specifies a different type of drawing action.

- **M (move to)**: Moves the pen to a new position without drawing anything. It takes two parameters: the x and y coordinates of the new position.
    ```html
    <path d="M10 10" />
    ```
    - `M 10 10`: Move the pen to the point (10, 10).

- **L (line to)**: Draws a straight line from the current position to the specified position. It takes two parameters: the x and y coordinates of the end point.
    ```html
    <path d="M10 10 L50 50" />
    ```
    - `L 50 50`: Draw a line from the current position to (50, 50).

- **H (horizontal line to)**: Draws a horizontal line from the current position to the specified x-coordinate.
    ```html
    <path d="M10 10 H90" />
    ```
    - `H 90`: Draw a horizontal line to x = 90.

- **V (vertical line to)**: Draws a vertical line from the current position to the specified y-coordinate.
    ```html
    <path d="M10 10 V90" />
    ```
    - `V 90`: Draw a vertical line to y = 90.

- **C (cubic Bézier curve)**: Draws a cubic Bézier curve from the current position to the specified position using two control points.
    ```html
    <path d="M10 10 C20 20, 40 20, 50 10" />
    ```
    - `C 20 20, 40 20, 50 10`: Draw a cubic Bézier curve to (50, 10) with control points at (20, 20) and (40, 20).

- **S (smooth cubic Bézier curve)**: Draws a smooth cubic Bézier curve from the current position using the second control point of the previous curve as the first control point.
    ```html
    <path d="M10 10 C20 20, 40 20, 50 10 S70 20, 90 10" />
    ```
    - `S 70 20, 90 10`: Draw a smooth cubic Bézier curve to (90, 10) with a control point at (70, 20).

- **Q (quadratic Bézier curve)**: Draws a quadratic Bézier curve from the current position to the specified position using one control point.
    ```html
    <path d="M10 10 Q20 20, 30 10" />
    ```
    - `Q 20 20, 30 10`: Draw a quadratic Bézier curve to (30, 10) with a control point at (20, 20).

- **T (smooth quadratic Bézier curve)**: Draws a smooth quadratic Bézier curve from the current position using the control point of the previous curve.
    ```html
    <path d="M10 10 Q20 20, 30 10 T40 10" />
    ```
    - `T 40 10`: Draw a smooth quadratic Bézier curve to (40, 10).

- **A (arc)**: Draws an elliptical arc from the current position to the specified position.
    ```html
    <path d="M10 10 A20 20 0 0 1 30 30" />
    ```
    - `A 20 20 0 0 1 30 30`: Draw an arc with radii 20 and 20, no rotation, large-arc-flag 0, sweep-flag 0, ending at (30, 30).

- **Z (close path)**: Closes the current path by drawing a straight line back to the start point.
    ```html
    <path d="M10 10 L50 50 L90 10 Z" />
    ```
    - `Z`: Close the path, connecting the last point to the first point.

### `fill` Attribute
The `fill` attribute specifies the color used to fill the shape.

```html
<path d="M10 10 H 90 V 90 H 10 Z" fill="red" />
```

### `stroke` Attribute
The `stroke` attribute specifies the color of the outline of the shape.

```html
<path d="M10 10 H 90 V 90 H 10 Z" fill="none" stroke="blue" />
```

## What is addEventListener?

`addEventListener` is a method used in JavaScript to attach an event handler to an element. It allows you to specify a function to be executed when a certain event occurs on the element.

```javascript
document.getElementById('myElement').addEventListener('click', function() {
    console.log('Element clicked!');
});
```

## What is Easing?

Easing functions describe the rate of change of a parameter over time, providing more natural motion compared to linear timing. They are used to create smooth and visually appealing animations by controlling the acceleration and deceleration of the animation.

## Ease in GSAP

In GSAP, easing is used to control the motion of animations. GSAP provides a variety of built-in easing functions that can be applied to animations to achieve different effects.

```javascript
gsap.to(".box", {duration: 2, x: 100, ease: "power1.inOut"});
```

## Changing Attributes of SVG Elements in GSAP

GSAP allows you to animate and change the attributes of SVG elements easily. You can use GSAP to modify attributes such as `fill`, `stroke`, `d`, and more.

```javascript
gsap.to("#myPath", {duration: 2, attr: {d: "M10 10 H 90 V 90 H 10 Z"}, ease: "power1.inOut"});
gsap.to("#myCircle", {duration: 2, fill: "blue", stroke: "red"});
```

## Premium Features of GSAP

While GSAP offers many powerful features for free, some advanced features and plugins are part of the GSAP Club GreenSock membership. These premium features include additional plugins, advanced easing, morphing, and more.

If you are interested in unlocking the full potential of GSAP and accessing premium SVG animation capabilities, consider purchasing a [GSAP Club GreenSock membership](https://greensock.com/club/).

## Conclusion

Animating SVGs with GSAP can add significant visual appeal to your web projects. Understanding the basics of SVG path commands, attributes, and how to use GSAP to animate these elements will enable you to create engaging and dynamic graphics. For more advanced animations and premium features, joining GSAP Club GreenSock is highly recommended.