# Corpus Synodalium

## About

This repo contains source files for the homepage (non-database portion) of the Corpus Synodalium project, which can be accessed at https://corpus-synodalium.com/.

## Developer Notes

- All files from this repository should go into `/var/www/html/` folder in the Apache server.
- The following screenshot displays the folders inside `/var/www/html/` folder.

<img src="https://i.imgur.com/IedpwAd.png" alt="Screenshot" width="500px">

## How to make updates

- If you have access to the virtual private server, you can clone this repo at the home directory (~).
- Whenever this repo is updated, you can pull the changes and run `sh update_homepage.sh`. It will copy the contents into `var/www/html` directory.
- Note: Do not overwrite or delete `/var/www/html/philologic/` folder since it contains the database files.
