In our ***HTML/CSS/JavaScript*** module, I spearheaded the creation of WardrobeGenius, a website designed to innovate wardrobe management. Utilizing HTML, CSS, and JavaScript, the site details the app's smart features, from organizing clothes to suggesting outfits. Additionally, I implemented a Node.js server to handle the contact form, ensuring it operates flawlessly locally. Explore the site to see how WardrobeGenius can transform your wardrobe experience.

For a closer look at how WardrobeGenius can simplify your daily wardrobe choices with its unique features, I invite you to explore [the website](https://themane04.github.io/wardrobegenius/).

> [!NOTE]
> If you access the website through the link provided on GitHub, please be aware that you won't be able to use the contact form functionality. This limitation occurs because the Node server, which handles the form submissions, isn't running in this context. As a result, while you can still browse and view the site, certain interactive features may not be fully operational. To experience the full functionality of WardrobeGenius, including the contact form, follow the setup instructions to run the site locally on your machine.

## Setup
### Clone the Repository
First, clone the project repository to your local machine using Git:
```
git clone git@github.com:themane04/wardrobegenius.git
cd wardrobegenius
```
### Install Dependencies
Navigate to the project directory and install the necessary Node.js dependencies:
```
cd backend_for_form
npm install
```
### Create a .env file
To enable email functionality from the contact form, create a .env file in the *backend_for_form directory* with the following entries:
```
EMAIL_USER = 'your_email'
EMAIL_PASS = 'your_password'
```
* *your_email:* This is your email address from which the form data will be sent.
* *your_password:* Use the App-password generated by your email service, especially if you have 2-Factor Authentication (2FA) enabled.

### Start the Node Server
To launch the Node server which manages the contact form, run:
```
node server.js
```
### Open the Website
Open any of the HTML files (index.html, contact.html, or our_product.html) in your web browser. You will now be able to explore and interact with the WardrobeGenius website in full. Enjoy navigating through its features and experiencing the functionality firsthand.
