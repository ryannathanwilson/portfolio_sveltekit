---
title: Learning Rust
date: "2022-11-05"
description: "It's finally time. Rust has been becoming the language of choice for building tools for JavaScript. I've been in the market for a new language so here we are. The process of getting started was a bit awkward do I'm going to document a few bit here..."
categories:
    - Rust
---

## Rust

It's finally time. Rust has been becoming the language of choice for building tools for JavaScript. I've been in the market for a new language so here we are. The process of getting started was a bit awkward do I'm going to document a few bit here.

## Installing Rust

I went with [Rustup](https://rustup.rs) as it install `cargo`, `rustc`, and `rustup` amongst other things.

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

```

## Installing rust-analyzer

`rust-analyzer` is the Language Server Protocol for Rust. Installing this helped me tap into syntax highlighting in my editor as well as "Go to definition" functions etc. I tried a handful of ways before finallying settling on homebrew.

```
brew install rust-analyzer
```

## [Rustlings](https://github.com/rust-lang/rustlings)

Rustlings is a repository you can clone, run a `watch` command, and the play around as it walks you through the files, and automatically runs test as you follow directions learning the basic syntax. Gamification is nice for boring parts of learning like this. Looking forwardto getting through the basics and then building something new! Would be cool to do something with web components but we'll see.

