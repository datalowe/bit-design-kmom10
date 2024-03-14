[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Design kmom10: Bew Gorp, web developer self promotion

This repository is my final project for the course Technical Web Design and Usability ("Teknisk webbdesign och användbarhet - PA1436") at Blekinge Institute of Technology (BIT). I attended the course in the winter of 2020-2021 but did not finish the final project then, so this is a long overdue completion of my bachelor's degree from BIT.

This project consists of a technically simple site which promotes the fictional web designer "Bew Gorp". The emphasis in the course and this project is on web design and accessibility.

## Used tools

- Angular
- Sass (with the SCSS format)
- ? (TODO: select image compression tool)
- nginx (for serving)
- Docker (for automating deployment)

## Deploy with docker

Create a file in root .docker.env with contents:

```
APP_BASE_HREF=/root/path/
```

where in this example, you would deploy to `https://mysite.com/root/path` (use just `/` if deploying at root).

```bash
docker compose up -d
```

This starts a container which exposes the website at `https://localhost:7005`.

(to bring the container down, run `docker compose down`)

## Used resources

- flaticon cap: https://www.flaticon.com/free-icons/cap
- Monochromatic orange color palette generated with Adobe color wheel: https://color.adobe.com/ja/create/color-wheel
- Photos used
  - Programmer by whiteboard: https://pixabay.com/de/photos/frau-arbeit-b%C3%BCro-whiteboard-4702060/
  - Programmer at computer: https://pixabay.com/de/photos/frau-computers-b%C3%BCro-arbeiten-5653501/
  - Code on screen: https://www.pexels.com/photo/html-270366/
- Fonts
  - "Special Elite Typewriter": https://www.1001fonts.com/special-elite-font.html
- Logos
  - Docker: https://logos-world.net/wp-content/uploads/2021/02/Docker-Emblem.png
  - Angular: https://freebiesupply.com/logos/angular-logo/
  - WebAssembly: https://seeklogo.com/vector-logo/411853/webassembly
  - Rust: https://commons.wikimedia.org/wiki/File:Rust_programming_language_black_logo.svg
  - Django: https://creazilla.com/nodes/3253694-django-icon
