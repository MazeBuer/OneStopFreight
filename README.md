# OneStopFreight

<h3>A new way to communicate and inform agents of transportation schedule, space availability, and CBP information all in one space.</h3>
<h2>Live Site: https://one-stop-freight-api.herokuapp.com </h2>

<h1 align='center'><img width='80%' src="public/images/OneStopFreight.gif" alt='website gif'></h1>

# Installing

<p>clone git repository or download the zip file</p>
<p>'npm install' to install all packages and dependencies</p>
<h3>Things to add:</h3>
Create a .env file in config folder and add the following as `key = value`
<li>PORT = 2121 (can be any port example: 3000)</li>
<li>DB_STRING = `your database URI`</li>
<p>'npm start' to run the code</p>

# How's It's Made and Navigation
<h3>Main tech used: JavaScript, Node.js, MongoDB, Express, RestAPI, Heroku, Tailwind </h3>
<p>One Stop Freight is a full stack website that utilizes MVC organization to provide easy and efficient code organization. The main page allows the user to log in or sign up with user authenication to gain access to information that may be sensitive to companies. Users are able to see posts from all other users in the organization which was created using CRUD. The ability to post details about shipment transportation and schedule as well as comment on each post allows for easy communication between users. All information is safely stored on the MongoDB database with additional hash security to ensure the safety of user information and passcodes. The additional feature provided is the ability to quickly obtain necessary CBP information that is needed when transferring cargo to different facilites. This information has been accurately compared with U.S Customs and Border Protection which includes details of the facility, address, facility type, firms code, and more.</p>

# Optimization

<p>Additional features to be added include flight and vessel tracking for each shipment based on Master Airwaybill/Bill of Lading Number, providing the arrival date and time to the main port. As well as include user profiles and avatars throughout the site to quickly identify logged in user and post user.</p>


