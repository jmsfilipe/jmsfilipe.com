---
title: Using Nuxt 3 and Nuxt Content to create a personal website
image: /blog/new-website/hero.png
author:
  name: Jorge Filipe,
  avatar: https://avatars.githubusercontent.com/u/9056469?s=96&v=4,
  to: https://github.com/jmsfilipe,
timestamp: 12 Dec, 2024
---

After years of letting my old website sit outdated and neglected, I decided it was time for a complete rebuild. My previous site no longer reflected who I am as a developer or the tools and practices I value today. With this new version, I wanted a platform that not only looks modern but also showcases my skills and grows with me over time.

This post outlines the key technologies I used to build my new personal website and why I chose them.

---

## Why a Redesign?

The old website was functional, but it had limitations. It was built with older technologies and lacked flexibility for content updates or customization. As my career evolved, so did the need for a site that could better reflect my work and interests. I wanted something that was easy to manage, lightning-fast, and leveraged modern frameworks.

---

## Tech Stack: Nuxt 3 + TypeScript

For this rebuild, I chose **Nuxt 3** as the core framework. It’s built on Vue 3 and provides powerful features out of the box, like server-side rendering (SSR) and static site generation (SSG). Here’s why Nuxt 3 was a no-brainer:

- **Modern and Performant:** Nuxt 3 takes advantage of Vue 3's Composition API and new rendering architecture, ensuring my site is fast and maintainable.
- **Static Site Generation:** Perfect for a personal site where the content doesn't change dynamically, keeping things efficient and SEO-friendly.
- **Seamless Developer Experience:** Nuxt's built-in tools make development smooth, whether I’m setting up routing, middleware, or state management.

Adding **TypeScript** to the mix improved type safety, catching potential errors during development and making the codebase more robust.

---

## Nuxt Content: CMS Simplified

I also wanted a simple, file-based CMS to manage my blog posts and static content. Enter **Nuxt Content**, a module that turns Markdown files into a fully functional content management system.

Here’s what makes Nuxt Content so effective:

- **Ease of Use:** Write blog posts in Markdown, and Nuxt handles the rendering.
- **Flexibility:** Customization options for content organization and presentation.
- **Performance:** It integrates seamlessly with Nuxt’s static generation, ensuring fast loading times.

With Nuxt Content, I can write and update content without needing an external CMS or database. It’s lightweight, developer-friendly, and just works.

---

## GitHub Actions for CI/CD

To streamline my development workflow, I set up **GitHub Actions** for continuous integration and deployment. This integration ensures that changes are automatically tested and deployed, maintaining high code quality and making updates seamless. The automation provided by GitHub Actions helps me manage deployments efficiently, saving time and reducing the risk of manual errors.

You can check out the code for this project on [GitHub here](https://github.com/jmsfilipe/jmsfilipe.com).

---

## Your Thoughts?

If you have any feedback on the new site or questions about the build process, feel free to reach out or drop a comment. I’d love to hear from you!
