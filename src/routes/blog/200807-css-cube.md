---
title: CSS CUBE
date: "2020-08-07"
description: Lorem ipsum alsdkfjal;sdjf asdlfja;sdalksd;fj
categories:
    - numbers
    - things
---

CSS CUBE
RYAN N WILSON | 7 AUGUST 2020
I learned my first bit of CSS at a one night free class offered by General Assembly here in Boston. After that a bit more through The Odin Project, and after that just through doing my own projects, tinkering away trying to get things to look the way they should look. I never really stepped back to learn bigger picture strategies for structuring CSS in a sensible way. I know BEM is a popular method that I'd like to look into soon, but today I'm going to explore CUBE (Composition, Utility, Blocks, Exceptions), and see where it takes me.

SASS

I love using Sass. I can use syntax very similar to CSS, but nest my properties to easily manage the scope of each property. The formatting for variables is also easier in my opinion than traditional CSS.

GORKO

A simple class generator for SASS. You can setup a number of variables in the configuration file and Gorko generates utility classes for each one so you easily add them into your html. Utilities are classes that do exactly one thing. That could be setting a background color, or

COMPOSITION

Composition is using CSS to establish your layout and the way that components interact with each other. No colors, decorative styles, micro-adjusting pixels. In this tutorial we have five composition utilities:

Splitter - A responsive box that puts two pieces of content at opposite ends on large screens, and stacks them neatly on small screens.
Flow - Using the Lobotomized Owl Selector, add margin to the top of all tags that are not the first child.
Wrapper - A max-width container with a gutter.
Visually-Hidden - Hides content while keeping it available to screen readers.
UTILITIES

Most of these are already created with Gorko, classes such as the following:
```css
.bg-primary {
  background: #231651;
}

.bg-secondary {
  background: #ff8484;
}

.bg-secondary-shade {
  background: #ff5151;
}
```
This tuturial also creates a border-radius utility.

BLOCKS

A large portion of your work should already be done at this point. Now when we go in to style particular details of each section we'll just be making fine adjustments. As an example one of the blocks is the summary section of the page, so we create a SASS file for that:

```css
.summary {
	padding: get-size('500') get-size('500') get-size('600') get-size('500');
	line-height: 1.1;
  
	dl,
	dt {
	  --flow-space: #{get-size('700')};
	}
  
	dd {
	  --flow-space: #{get-size('300')};
	}
}
```
Because we're only looking inside the summary class we can safely target elements directly without unintended side effects elsewhere in the project.

EXCEPTIONS

Exceptions create variations to a block and rather than being class based, they are called using data attributes. These are just small changes and can be made like so:

```css
.button {
  &[data-variant='ghost'] {
    border-color: currentColor;
    background: transparent;
  }
}
```

These can be mixed into the same files as the block.

CONCLUSIONS

When all is said and done you end up with something like this. My biggest takeaway is how great it is to have a number of different CSS files all importing into the global file. My global CSS files historically gets so long it's a real pain to find the line of code I want to fix. I also end up with much more redundant code than I needed. I'm looking forward to seeing if this simplifies things for me. I've also generally avoided utility classes because it makes my HTML busier, but I learned from this that you can add brackets into your classes to organize them and HTML just ignores the brackets. I hope to build up a system that is built more progressively and with better accessability. Thankd for your work on this Andy Bell!
