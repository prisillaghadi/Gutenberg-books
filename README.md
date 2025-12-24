# Vue 3 + Vite

# Gutenberg Project

A responsive web app built with Vue 3 + Vite that lets users browse and search books from the Project Gutenberg library using the Gutendex API.

# Tech Stack

Vue 3 (Composition API)
Vite
Tailwind CSS (Vite plugin)
SCSS (theme & component styles)
Gutendex API

# Features

Browse books by category / genre
Search by title or author
Infinite scrolling for smooth browsing
Shows only books with cover images
Opens books in browser (HTML , PDF , TXT priority)

# Run locally
```sh
- npm install
- npm run dev
```
# API Notes

Data source: http://skunkworks.ignitesol.com:8000/books
Only books with images are fetched (mime_type=image)
ZIP files are ignored (not browser-viewable)

# Author

Prisilla Ghadi

Sr. Software Engineer

Skeleton loaders & responsive UI
This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
