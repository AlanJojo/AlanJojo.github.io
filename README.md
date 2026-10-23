[![Deploy](https://github.com/AlanJojo/AlanJojo.github.io/actions/workflows/build-site.yml/badge.svg)](https://github.com/AlanJojo/AlanJojo.github.io/actions/workflows/build-site.yml)

# Personal Website
A website for scribbling down reflections, thoughts and notes on Apologetics, Catechism, Theology, Scripture etc. This was built using [Zensical](https://zensical.org).

## Run it locally
```bash
pip install -r requirements.txt
zensical serve        # Port 8000
```

## Where things live
| Folder             | What goes there |
|--------------------|-----------------|
| `docs/index.md`    | Home page |
| `docs/notes/posts/`| Notes - one Markdown file each |
| `docs/biy/`        | Bible in a Year posts |
| `docs/ciy/`        | Catechism in a Year posts |
| `docs/iisc.md`     | IISc prayer meeting message |
| `docs/css/`        | Site styling |
| `templates/`       | Templates for new pages |

## Writing a blog post
- Copy `templates/notes-post.md` into `docs/notes/posts/` and fill it in.
- Add `draft: true` to the front matter (This way drafts show in `zensical serve` but aren't published)

Images go next to the post (e.g. `docs/notes/posts/images/`) and are linked relatively: `![caption](images/photo.jpg)`.

## Adding a BIY or CIY day
- Copy `templates/biy-day.md` to `docs/biy/day-005.md`.
- Add a row to the table in `docs/biy/index.md`.

The menu, and the previous / next links at the bottom of each day, update on their own.

## Contributing
If you encounter issues with the website or have fixes, please contact me