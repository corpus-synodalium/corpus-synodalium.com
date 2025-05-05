This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

npm

```bash
npm i
npm run dev
```

yarn

```bash
yarn
yarn dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## How to update the content

The folders are organized as follows:

-   `components` contains components that are reused in all pages.
-   `pages` contains all the pages for the website. Each file correspond to a page in the website. For example,
    "about.js" contains content for "https://corpus-synodalium.com/about". "index.js" is the home page.
    "\_app.js" is a special page that is common to all pages (e.g. You can add top nav bar and footer here which all pages have).
    (See Next.js documentation for more information about this.)
-   `public` contains static files such as PDF documentations.
-   `styles` contains CSS files. Right now, we only have 1 global CSS file. We use Bootstrap for most styling.

Here are some common scenarios.

-   **Modifying an existing page**: Let's say you need to update the content in "Documentation" page.
    In this case, you need to modify `pages/documentation.js`.
-   **Adding a new page**: Add a new file in `pages`. Follow the same naming convention as other files.
    Then, add a link to the new page in the nav bar. (`components/nav.js`)

## Auto-formatting the code

```bash
npm run lint
# or
yarn lint
```

## How to deploy your new changes to update the website

-   Clone this repo at the home directory (~) of the virtual private server.
-   Pull the changes (`git pull`) from the server.
-   Run `sh update_homepage.sh`. The script will build static HTML ouput files and copy the them into `var/www/html` directory.
-   Note: Do not manually overwrite or delete `/var/www/html/philologic/` folder since it contains the database files.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
