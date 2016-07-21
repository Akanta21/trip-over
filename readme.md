#trip-over
[ ![Codeship Status for fay2wk/trip-over](https://codeship.com/projects/ce3b5b50-2c9e-0134-2ede-66699d8c1ceb/status?branch=master)](https://codeship.com/projects/163437)

A server database containing information of different cities and the various attractions in each city. Users can create an account to plan and save trips by selecting a city, and then selecting multiple attractions for each trip. They can also edit and delete these saved trips the next time they login.
Repo website: https://github.com/fay2wk/trip-over
API Site: https://trip-over.herokuapp.com/


#Deployment
Deployment Flow:
Local -> Github (master) -> Codeship (run test) -> Heroku

Implemented CI through Codeship.
Only after test complete will it be passed into Heroku

#Built With
•	NodeJS


#Dependencies
•	Bcrypt
•	Body-parser
•	Express
•	Mongoose
•	Mongoose-unique-validator
•	Morgan
•	Uuid
•	Chai
•	Mocha
•	Supertest


#Authors
•	Dominic Lam - https://github.com/RedSwift
•	Ng Si Wai - https://github.com/fay2wk
•	Wayne Goh - https://github.com/wayneangoh
•	Kartika Subagijo - https://github.com/xiuminsbg
