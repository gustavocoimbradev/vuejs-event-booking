<img width="396" height="127" alt="images" src="https://github.com/user-attachments/assets/2f6b25d7-a342-4bd6-9072-d0b11cb6b375" />

## About the project

This is a simple event booking app built with Vue.js. Created for portfolio purposes to practice component composition, reactivity, and Firebase integration.

#### Features

- View available events  
- Register for an event  
- Cancel your registration  
- Visual feedback for loading and actions  

#### Technologies

- Vue.js  
- Firebase (Firestore)  
- Tailwind CSS  
- Vite  

## Main Files

#### Components

- [src/components/Container.vue](src/components/Container.vue) – Layout wrapper component  
- [src/components/EventButton.vue](src/components/EventButton.vue) – Action button component  
- [src/components/EventCard.vue](src/components/EventCard.vue) – Card to display event info  
- [src/components/EventsGrid.vue](src/components/EventsGrid.vue) – Grid layout for event cards  
- [src/components/Footer.vue](src/components/Footer.vue) – Footer of the page  
- [src/components/Header.vue](src/components/Header.vue) – Header with the app title  
- [src/components/Section.vue](src/components/Section.vue) – Section wrapper component  

#### Composables

- [src/composables/useAuthentication.js](src/composables/useAuthentication.js) – Basic user data logic  
- [src/composables/useBookings.js](src/composables/useBookings.js) – Handle user bookings (CRUD)  
- [src/composables/useEvents.js](src/composables/useEvents.js) – Fetch and filter available events  

#### Core

- [src/firebase.js](src/firebase.js) – Firebase setup and configuration  
- [src/main.js](src/main.js) – App entry point  
- [src/App.vue](src/App.vue) – Root Vue component  
- [index.html](index.html) – Main HTML entry  

