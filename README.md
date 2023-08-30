# moris_slave

## A Discord Bot for the #Anti-Java Server

This is a free and open source discord bot made by and for students in the Computer Engineering class of NTNU, but other students are of course more than welcome to join in.

## How to get started

Because the bot runs on our main servers, its credentials remain confidential. However, you can create your own testing bot to try out the code on your own machine.

Steps:

1. Go to [The Discord Dev Portal](https://discord.com/developers/applications) and create your own application
2. Make the bot private, and not requiring a oauth2 grant. You'll find this under the bot sidebar-tab.
3. Go ahead and reset the token to get a new one. Keep this token in a secure place!
4. Under OAuth2 -> URL Generator, Select the bot and application.commands scopes. Under bot permissions, select Administrator. Copy the link given to you.
5. Go to Discord and create your own server. Once this is done, paste the OAuth2 Link copied above into your browser, to add the bot to your server.
6. Now it's time to jump into the code. Using the token copied above, fork this project from github to your local machine, jumo into it, and create a .env file at the root of the project. Add the line ACCESS_TOKEN={your token}, where your token is the token you copied. Also add the line CLIENT_ID={your client id}. Your client id can be found in the discord dev portal under your bot. You will find this as the Application Id.
7. Make sure you have NodeJS on your machine along with npm or yarn.
8. Use npm run dev or yarn dev to run the project. If everything has been setup correctly, your bot should appear online on your server, and application commands should be available.
