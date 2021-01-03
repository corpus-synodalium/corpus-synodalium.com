This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies using `yarn install` or `npm i`.

Next, run the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## How to update this website

-   Clone this repo at the home directory (~) of the virtual private server.
-   Pull the changes (`git pull`) from the server.
-   Run `sh update_homepage.sh`. The script will build static HTML ouput files and copy the them into `var/www/html` directory.
-   Note: Do not overwrite or delete `/var/www/html/philologic/` folder since it contains the database files.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
