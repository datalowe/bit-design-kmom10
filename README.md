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

- favicon cap: https://www.flaticon.com/free-icons/cap
