# Tech-Blog:
A technical blog

# Purpose
A simple place for users to create blog posts about the technology that they're using, and for their peers to read and reply to.

# Usage:
The application is available for tryout at Heroku (see below). However, if you want to run your own instance, download the code, and run npm install in the main directory. Then, simply run npm start. The application will run on http://localhost:3001.

# Licence:
The application has a standard MIT license.

# Functionality:
When the user first comes to the site, they arrive at the homepage, where all blog posts are displayed. Since they have not logged in, they are given the opportunity to either login or sign up. They can see a link to the comments for each post, and, when they click on that link, are taken to the individual post's page, where they can see the comments. Since they are not logged in, however, they cannot comment.

If the user chooses tosign up, they are asked to enter a username, password of 6 characters, first and last name, and email. Once they have successfully signed up, they are taken to the main page. The dashboard and logout links are displayed. 

From there, if they click on the daskboard link, they are taken to their daskboard, where they can create a new post.

 If they have already logs in, they are taken to their dashboard. From there, they can create a new post, edit an existing post, or add a comment to one of their posts.

 Once they have signed up or logged in, they are able to comment on posts.

 If they click on the logout link, they are automatically logged out, and their session is ended.

 # Testing:
 Tests for helper functions exist and can be run at the main directory by typing npm run tests.

 # Contribute:
 Absolutely. I'll take all the help I can get!

 # Images:
 Add a comment (logged in).
 ![addcomment](https://user-images.githubusercontent.com/52082187/97819122-e983c880-1c63-11eb-8773-425168ddbb2f.jpg)

 User's dashboard.
![dashboard](https://user-images.githubusercontent.com/52082187/97819130-edafe600-1c63-11eb-873a-0df6bc352719.jpg)

Signup page.
![signup](https://user-images.githubusercontent.com/52082187/97819134-f1436d00-1c63-11eb-8d07-8460912f065d.jpg)

Login page.
![login](https://user-images.githubusercontent.com/52082187/97819137-f6082100-1c63-11eb-9cf8-03da3d91c977.jpg)

Comment page (not logged in).
![comments-nli](https://user-images.githubusercontent.com/52082187/97819141-f99ba800-1c63-11eb-98d0-cc7e0c052676.jpg)

Homepage
![homepage](https://user-images.githubusercontent.com/52082187/97819144-fef8f280-1c63-11eb-9b95-9af995542c12.jpg)

# Heroku link
https://stormy-garden-92362.herokuapp.com/
