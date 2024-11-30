# ProjectVestidor

Vestidor is a full-stack application built with Angular for the client-side, Express.js for the server-side, and MongoDB for the database. The app supports user authentication, dynamic data rendering, and API integrations.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Server and Database Connection

1. **MongoDB Setup**: Ensure MongoDB is running locally or provide a remote connection URI in the `.env` file.
2. **Server Startup**: Run the server with: ```bash node index.js

# Short Description

An app on how to sell what you no longer need or shop for unique things you won't find in stores.

Consits of "Home" page, "Catalog" page, "How it works", "Search", "Login/Register" page (for non-logged users) and "Home" page, "Catalog" page, "Sell now", "How it works", "Search", "Logout" page (for logged users).

On the "Home" page there is bottons "Catalog" (for logged users) and "Login" (for non-logged users) .
On the "How it works" page explains how the application works. Тhere аre bottons "Catalog" (for non-logged users) and "Start selling" (for logged users) .
On "Catalog" page are displayed all items. If you click on a one item, you can see its details.
Not-logged users are able to see only the details, while logged in users can see their posts.
If the user is the owner, they can update the item details or delete it.All registered users can see the comments on the item and write a comment.

# Homepage

![ScreenshotHomePage](https://github.com/user-attachments/assets/061472ac-fbfc-43fa-8ada-de9d83afa3f5)
