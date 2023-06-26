# Frontend Mentor | Notifications Page

This is a solution for the "Notifications page" challenge from Frontend Mentor. The challenge requires creating a responsive web page that displays notifications and allows the user to mark them as read.

## Project Structure

The project consists of the following files:

index.html: This HTML file defines the structure and content of the web page. It includes the necessary HTML elements to create the header, sections, and footer of the page. It also links to the CSS and JavaScript files.
style.css: The CSS file contains the styles for the web page. It includes styles for the header, sections, notifications, user avatars, text content, timestamps, and other elements. The CSS rules are organized using selectors for specific elements and classes.
scripts.js: The JavaScript file handles the functionality of marking notifications as read. It includes two functions: unmark(element) and unmarAll(). The unmark(element) function is triggered when a notification is clicked and removes the "unread" class from the clicked element. It also checks for the presence of a red dot element and removes the "red_dot" class if found. The unmarAll() function is triggered when the "Mark all as read" link is clicked and removes the "unread" class from all notifications and the "red_dot" class from any red dot elements.

## Technologies Used

The project utilizes the following technologies:

HTML: Used for creating the structure and content of the web page.
CSS: Used for styling the web page and making it visually appealing.
JavaScript: Used for adding interactivity and implementing the functionality of marking notifications as read.

## Getting Started

To run the project locally, follow these steps:

Clone the repository: [ git clone](Link) .
Navigate to the project directory.
Open the index.html file in your preferred web browser.

## Functionality

The web page displays a list of notifications, each containing a user avatar, text content, and a timestamp. Unread notifications are marked with a red dot. The user can interact with the notifications in the following ways:

Clicking on a notification removes the "unread" class from the clicked element, indicating that it has been read.
If a notification contains a red dot element, clicking on it removes the "red_dot" class from the element.
Clicking on the "Mark all as read" link removes the "unread" class from all notifications, marking them as read. It also removes the "red_dot" class from any red dot elements, indicating that all notifications have been read.

# Author

This project was coded by Mostafa Soliman Fadali as a solution for the "Notifications page" challenge on Frontend Mentor. The project demonstrates the author's proficiency in HTML, CSS, and JavaScript, as well as their ability to create responsive web pages and implement interactive features.
