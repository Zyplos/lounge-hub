# lounge-hub

The lounge hub is a community website created to document some resources and showcase player profiles for people playing on the community's Minecraft server.

This project was built using Next.js. Authentication is handled by NextAuth to allow users to login using Discord. The frontend leverages [theme-ui](https://github.com/system-ui/theme-ui) to easily handle styles, themes, and component building.

Player profiles use [Bluemap](https://github.com/BlueMap-Minecraft/BlueMap) to visualize the Minecraft world in the browser. The map is updated when there are no players online.

General user profile data is stored in Firebase for easy access. Minecraft player data is stored in a MySQL database that is populated by players using the ingame plugin ([repo here](https://github.com/Zyplos/LoungeCommuna)).

![Player Profile Screenshot](./src/assets/readme_screenshot.png)

## Project Setup

This project was made specifically for the lounge and as such has functionality that was made with this in mind. Setting up this project to work exactly as it does with the lounge will probably be a little difficult, but you are welcome to try.

This project expects a Firebase Realtime Database and a MySQL database to be configured and ready. The `.env` file contains some of the credentials and information the project needs to function.

**This project depends on Vercel's serverless functions.** First install the Vercel CLI by doing `npm i -g vercel`.

### `vercel dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
