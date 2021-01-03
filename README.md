This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## How to update this website

-   Clone this repo at the home directory (~) of the virtual private server.
-   Pull the changes (`git pull`) from the server.
-   Run `sh update_homepage.sh`. The script will build static HTML ouput files and copy the them into `var/www/html` directory.
-   Note: Do not overwrite or delete `/var/www/html/philologic/` folder since it contains the database files.
-   The following screenshot displays the folders inside `/var/www/html/` folder.

<img src="https://i.imgur.com/IedpwAd.png" alt="Screenshot" width="500px">

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
