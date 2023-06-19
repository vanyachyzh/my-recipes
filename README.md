# My Recipes

[Demo](https://vanyachyzh.github.io/my-recipes/)

[Video](https://www.loom.com/share/bf1103b2a30740a49a99e2b17672d354?sid=133f9fd9-fb29-4c1c-aebf-a60e1cd43e2a)

My Recipes is a web application built using React, Redux, TypeScript, HTML, and SCSS. It allows users to manage their recipes, search for recipes by ingredients or title, filter recipes by meal type, and track their favorite and saved recipes.

## Features

- Home Page: The home page displays a list of recipes. Each recipe card includes an "Open" button that leads to the recipe page. Additionally, there are "Favorite" and "Saved" buttons that allow users to add the recipe card to their corresponding lists.

- Favorite and Saved Pages: The application provides separate pages to view favorite and saved recipes, making it easy for users to access their preferred recipes quickly.

- Search and Filter: Users can search for recipes by ingredients or title. The search functionality allows for filtering recipes based on the entered query, making it convenient to find specific recipes. Additionally, users can filter recipes by the type of meal (e.g., breakfast, lunch, dinner) and combine multiple filters for more precise results.

- Recipe Page: The recipe page provides detailed information about a specific recipe. It includes a cooking mode with two buttons: "Launch Process" and "Reset". Users can follow the cooking process by clicking the "Launch Process" button, and the "Reset" button allows them to start over if needed.

- Error Handling: In case of server errors or other issues, the application provides proper error handling. Users will receive error messages to inform them about the encountered problem, ensuring a smooth user experience.

## Setup and Installation

To run the My Recipes application locally, follow these steps:

- Clone the repository: git clone <repository-url>.
- Navigate to the project directory: cd my-recipes.
- Install the dependencies: npm install.
- Start the development server: npm start.
- Open the application in your web browser at http://localhost:3000.

## Dependencies

The project relies on the following dependencies:

- React
- Redux
- TypeScript
- HTML
- SCSS

You can find the complete list of dependencies in the package.json file.