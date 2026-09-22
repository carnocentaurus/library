# Library

A simple, clean web app for tracking the books you own or want to read. Add a title, author, and page count, mark whether you've read it, and manage your collection from a responsive table — all without leaving the page.

**Live Demo:** [https://carnocentaurus.github.io/library/](https://carnocentaurus.github.io/library/)

## Features

- **Add books** with title, author, page count, and read status via a simple form
- **Form validation** for required fields, character limits (150 chars for title, 70 for author), and page count bounds (1–10,000)
- **Numeric-only input** for the page count field, blocking non-numeric keystrokes as you type
- **Toggle read status** for any book directly from the table with a single click
- **Remove books** from the library, with a confirmation prompt to prevent accidental deletion
- **Dynamic empty state** that displays a placeholder icon and message when the library has no books, and automatically switches to the table view once books are added
- **Inline success/error messaging** for form submissions, with success messages auto-clearing after a few seconds
- **Sticky form and table header** so controls and column labels stay visible while scrolling through a long list of books
- **Custom-styled radio buttons and form controls** for a consistent look across browsers

## Tech Stack

- **HTML5** — semantic form and table structure
- **CSS3** — custom properties, CSS Grid layout, custom radio button styling, sticky positioning
- **Vanilla JavaScript** — no frameworks or libraries; DOM manipulation, constructor functions/prototypes, and `crypto.randomUUID()` for unique book IDs

## How It Works

1. Fill out the **Title**, **Author**, and **Number of pages** fields, and select whether you've read the book.
2. Click **Add Book** to add it to your library. The form validates each field and shows an error message if something's missing or out of range.
3. Once at least one book is added, the empty-state placeholder is replaced by a table listing all your books.
4. Use the **Toggle Read Status** button on any row to flip a book between "Was read" and "Not read."
5. Use the **Remove** button to delete a book from the library (you'll be asked to confirm first).

## Project Structure

```
library/
├── index.html
├── style.css
├── script.js
├── fonts/
│   ├── Roboto-Regular.woff2
│   └── Roboto-Regular.woff
└── book-open-blank-variant-outline.svg
```

## Running Locally

Since this project uses no build tools or dependencies, you can run it locally by simply opening `index.html` in your browser, or by serving the folder with any static file server, for example:

```bash
npx serve .
```

## Credits

- **Icons:** [Material Design Icons](https://materialdesignicons.com/) — the "book-open-blank-variant-outline" SVG icon used for the empty library state
- **Font:** [Roboto](https://www.dafont.com/roboto.font) via [dafont.com](https://www.dafont.com/)
- **Number-input keydown logic:** Adapted from a [Stack Overflow answer](https://stackoverflow.com/a/54163655) by A. Morel (and community contributors), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

## License

This project is open source and available for personal and educational use.