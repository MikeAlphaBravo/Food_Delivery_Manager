![alt text](/resources/images/header.png)

# _Food Delivery Service Manager_
-------------------

#### _Using Angular and FireStore to build a web application for a food service business owner, 11.09.2017_

#### By _Nathan McGregor, Mark Helt, Dan Danilyuk & Michael A. Brooks_

## Description

_Create an app using Angular and FireStore to manage a small food service delivery business._

## Specs

As a user I want to...

_PROFILE_
* log into my personal business profile

_CLIENTS_
* view a full client list
* click on client and Add/edit/delete clients

_MAP_
* be able to view a map of all clients
* view routing to clients to plan delivery

_MENU_
* input and view meal menu

_PAYMENT_
* track who has and hasn’t paid

## Setup/Installation Requirements

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Open terminal on your computer,
Navigate to the folder you would like to clone the project into and run:

`git clone https://github.com/MikeAlphaBravo/food-deliver`

`cd food-delivery`

`npm install`

`touch app/api-keys.ts`

Navigate in your browser to
https://firebase.google.com/

Log in with your Gmail credentials

1. Open the Firebase Console.
2. If you haven’t created an API project yet, click Create Project.
3. Find your Firebase project and click Project Name.
4. Click the setting icon and select "Project Setting" menu
5. Select "Cloud Messaging" tab and use API key in place of "YOUR_API_HERE" in api-keys.ts

Follow instructions here: https://developers.google.com/maps/documentation/javascript/get-api-key
to get your Google Maps API key, insert as in step 5 above ^

Follow instruction here:
https://developers.google.com/maps/documentation/geocoding/get-api-key
to get your Google Maps Geocoding API key, insert as in step 5 above ^

`ng serve`

Open a tab in your browser and navigate to `localhost:4200` You should be taken to the Home Page of our delivery service web application and can log in with a Google account at the top right.

User experience screenshots:

![alt text](/resources/images/HomePage.png)

![alt text](/resources/images/Clients.png)

![alt text](/resources/images/Map.png)

## Running the tests

_There are currently no tests for this application but will be soon!_

## Known Bugs

_Curretnly testing for bugs and running different user scenarios, please submit or contact us if you find any._

## Support and contact details

_Updates or suggestions please contact any of our contributors or make a contribution yourself._

## Built With

* [Angular 5](https://angular.io/) - The web framework used
* [JavaScript ES6](https://www.javascript.com/) - Script language
* [FireStore](https://firebase.google.com/docs/firestore/) - Database by Google FireBase
* [Atom](https://atom.io/) - Text editor
* HTML6 & CSS - Browser implementation and styling

## Future Features

* As admin be able to add/edit and delete business or co-login profiles
* Make a new business or co-login for existing business
* Sort client list by size of order, type of order, zipcode, quadrant(or zone) of city or route
* Input a new address into live map to see where it is in relation to existing clients
* Send menu as attachment in email
* View old menus for reference
  - Build a menu for next or any week
  - Recipe prep, shopping, timelines etc
* Email all clients by size of order, type of order, zipcode, quadrant(or zone) of city or route
* Text clients via email link
* To view a calendar of delivery dates
  - To view my schedule for shopping, prep, execution, delivery and post production clean up
* To know when users pay for their service
i.e. weekly or monthly

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
Copyright (c) 2017 Nathan McGregor, Mark Helt, Dan Danilyuk & Michael A. Brooks

## Acknowledgments

* All the amazing developers, Stack Overflow and Google that help me through these challenges!
* My amazing friends and boyfriend for emotional support, Eli and KC you're the best <3
