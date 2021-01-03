# Update homepage (https://corpus-synodalium.com/)

# Build and export static HTML files from Next.js project
npx next build && npx next export

# Copy the static HTML files from "out" directory to /var/www/html
cp -rf out/* /var/www/html/
