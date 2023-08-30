# moris_slave

## A Discord Bot for the #Anti-Java Server

This is a free and open source discord bot made by and for students in the Computer Engineering class of NTNU, but other students are of course more than welcome to join in.

## How to contribute

Since the bot is for everyone, feel free to suggest any features or callout bugs in the issues section. We love collaboration <3. And if you wish to contribute with coding, we have a guide to get started below.

## How to get started

Because the bot runs on our main servers, its credentials remain confidential. However, you can create your own testing bot to try out the code on your own machine.

Steps:

1. Go to [The Discord Dev Portal](https://discord.com/developers/applications) and create your own application
2. Make the bot private, and not requiring a oauth2 grant. You'll find this under the bot sidebar-tab. ![private](https://github.com/lille-morille/moris_slave/assets/69890033/49f9af9c-27d1-4570-a6a2-98f0779a8e55)
<<<<<<< Updated upstream
4. Go ahead and reset the token to get a new one. Keep this token in a secure place!![token](https://github.com/lille-morille/moris_slave/assets/69890033/9b5fd7f3-3e4f-44f4-a78b-7d6858cd484a)
5. Under OAuth2 -> URL Generator, Select the bot and application.commands scopes. Under bot permissions, select Administrator. Copy the link given to you.![scopes](https://github.com/lille-morille/moris_slave/assets/69890033/02278f0a-9fd5-4677-aa26-4e6f6859654d)![url](https://github.com/lille-morille/moris_slave/assets/69890033/77f71526-90d1-4336-96e4-182d28bb7ebd)
6. Go to Discord and create your own server. Once this is done, paste the OAuth2 Link copied above into your browser, to add the bot to your server.
7. Now it's time to jump into the code. Using the token copied above, fork this project from github to your local machine, jumo into it, and create a .env file at the root of the project. Add the line ACCESS_TOKEN={your token}, where your token is the token you copied. Also add the line CLIENT_ID={your client id}. Your client id can be found in the discord dev portal under your bot. You will find this as the Application Id.![application_id](https://github.com/lille-morille/moris_slave/assets/69890033/5f825c1c-05ea-4a42-99e4-d18725467e1f)
8. Make sure you have NodeJS on your machine along with npm or yarn.
9. Use npm run dev or yarn dev to run the project. If everything has been setup correctly, your bot should appear online on your server, and application commands should be available.
=======
3. Go ahead and reset the token to get a new one. Keep this token in a secure place!![token](https://github.com/lille-morille/moris_slave/assets/69890033/9b5fd7f3-3e4f-44f4-a78b-7d6858cd484a)
4. Under OAuth2 -> URL Generator, Select the bot and application.commands scopes. Under bot permissions, select Administrator. Copy the link given to you.

   ![scopes](https://github.com/lille-morille/moris_slave/assets/69890033/02278f0a-9fd5-4677-aa26-4e6f6859654d)
   ![url](https://github.com/lille-morille/moris_slave/assets/69890033/77f71526-90d1-4336-96e4-182d28bb7ebd)

5. Go to Discord and create your own server. Once this is done, paste the OAuth2 Link copied above into your browser, to add the bot to your server.
6. Now it's time to jump into the code. Using the token copied above, fork this project from github to your local machine, jumo into it, and create a .env file at the root of the project. Add the line ACCESS_TOKEN={your token}, where your token is the token you copied. Also add the line CLIENT_ID={your client id}. Your client id can be found in the discord dev portal under your bot. You will find this as the Application Id.

   ![application_id](https://github.com/lille-morille/moris_slave/assets/69890033/5f825c1c-05ea-4a42-99e4-d18725467e1f)

Your .env file should now look something like this:

```env
ACCESS_TOKEN=3JKLWKkfjkfdklsf89sd83lkl3kjnklsfnmdls
CLIENT_ID=5jk43lwvn9df0v9ewmjk34l2knjgd8si0un89302o
```

9. Make sure you have NodeJS on your machine along with npm or yarn. Google this for your OS if you're unsure.
10. Run `npm install`or `yarn` to install all dependencies for this project.
11. Use `npm run dev` or `yarn dev` to run the project. If everything has been setup correctly, your bot should appear online on your server, and application commands should be available.

Feel free to contact the owner of this repo - lille-morille on discord - if you have any questions or things aren't working.
>>>>>>> Stashed changes
