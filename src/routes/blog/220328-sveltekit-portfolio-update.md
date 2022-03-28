---
title: SvelteKit Portfolio
date: "2022-03-28"
description: "I learned my first bit of CSS at a one night free class offered by General Assembly here in Boston. After that a bit more through The Odin Project, and after that just through doing my own projects, tinkering away trying to get things to look the way they should look. I never really stepped back to learn bigger picture strategies for..."
categories:
    - Sveltekit
    - TypeScript
---

The conclusion of the story is that this website looks basically the same as it always has to you, the reader, but behind the scenes it used to be Gatsby JS and now it's SvelteKit.

## Why Gatsby

My [first portfolio website](https://r-n-w.github.io/) was 3 simple files. `index.html`, `styles.css`, and `script.js`. I felt like I had a sufficient grasp of those underlying languages and was ready and eager to step into the frameworks that tech twitter is always going on about. [Gatsby JS](https://www.gatsbyjs.com/) was basically a way to get up and running trying out React for the first time, while also taking advantage of the blazing speed and easy SEO offered by a framework that generates all your HTML at build time and then serves up a static site via CDNs around the world.

- React based with all of the react eco-system.
- Image API that resizes all images appropriately, and even sends a super low resolution version for the original page load to speed everything up.
- SEO plugin that makes it easy to handle all the special tags one needs to make it easy for google to hanlde your site.

The catch is that I built it in 2020 on Gatsby 2.0. Also to deal with any data, like an image, or json, or blog posts from a CMS, requires graphql syntax that just felt way overkill to get right. While I'm very interesting in learning to use graphql to talk to an elaborate backend, I don't want to use it to load an image that's stored in the next directory over...

Anyway, I wanted to resurrect this blog and I didn't want to write posts on Sanity, where I'd set up my CMS. I figured I'd just write markdown in my repository. I started working in my old Gatsby site, trying to switch over to TypeScript, update to Gatsby 4.0, and configure it to pull blog posts from the filesystem, and... I just didn't want to... so enter [SvelteKit](https://kit.svelte.dev/)

## Why SvelteKit

I learned about SvelteKit from the [Syntax podcast](https://syntax.fm/). Scott Tolinski recently rebuilt his entire platform [Level Up Tutorials](https://leveluptutorials.com/) in SvelteKit, despite the relative instability of being a framework that has not yet reached its 1.0 release. One weekend later, we're up and running. Here's my take so far.

### Back to basics

Sveltekit feels like I'm back to writing CSS, JavaScript, and HTML again, except really I'm writing SCSS, TypeScript, and HTML with custom components. 

### CSS

I can write SCSS in my `global.scss` file and have it apply anywhere. I can add other stylesheets if they just need to applied in certain places (I have one specific for markdown). This makes it easy for my CSS to be consistent across my site. When I need CSS to be scoped to a specific component, I just write CSS at the bottom of that component file.

### Routing

I don't want to think about page routing. Just put the file in a folder and that path becomes the route.

### Images

I didn't really look into this yet, but I'm just using Cloudinary to process and resize my images for now. I'm thinking of making my own custom image component that auto creates a `srcset` of images so images are more responsive.

### Reactivity

You can manage state, and update state just by changing the value of a variable. There is a little extra simple syntax if you want to signal that parts of your site should rerender if the value changes. Syntactically it is intuitive.

### Adapters

You can build your project for any host you want. I'm running mine on netlify, and specifically wanted a static site so I used the static site adapter. If I wanted to have it run with serverless functions, I could have it output to that. If I add new features that don't work with static, I can change the output again.

### Vite

Builds and local server are both so fast! Vite put a lot of work into bundling your code in a way that makes it easy to rebundle whenever you make changes. They don't have to rebundle all your dependencies every time you restart your project. I'm developing on one display. So when I save my changes and switch over to the browser, it's always ready. Oh! and did I mention build time for my app on Netlify ***are 6x faster?*** I'm down from 3 minutes to 30 seconds.

### Frontend + Backend

Your api and your frontend can share a codebase if you want. I'm only taking advantage of that in a small way at the moment. I have one endpoint that gets all my blog posts, sorts them by date, and returns them to the frontend for the blog home page. 

## Conclusions

I really like it, it was a quick and easy project. I'm curious to learn more, but before I do I'm heading back to HTML and going to learn a bit more about semantic HTML, how to structure my tags for screen readers and other attributes I should know for accessability. Aria-labels? What's that? I'll know soon. 
