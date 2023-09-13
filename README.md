# Dataguess Country Searching App

This project aims to improve the developer's skills by making it possible to practice multiple concepts on Frontend Development as well as demonstrate them if needed.

# Features

1. Web Application: This app uses React JS to render client side JavaScript.

2. GraphQL and Apollo: This app is able to make API calls to a public API to get countries object containing all the countries on Earth. While it is possible to change API params to get specific countries, it makes more sense to fetch all at once and renders conditionally.

3. Search Mechanism: This app makes it possible to filter the countries depending on user input as 'search:COUNTRY_NAME' or 'search:COUNTRY_NAME group:size. It leverages react states and context API to manage this mechanism.

4. TailwindCSS: This app styles itself with the help of a postcssprocessor known as TailwindCSS. Thanks to this package, it is considerably easier and well-structured as far as the styling is considered.

   > This app is designed to be used on desktops rather than mobile devices.

5. Jest: This app has some amount of unit testing using jest.js package. While it is important to create separate tests for every component and function, this app has only a few to demonstrate the skills of the developer.

# Demonstrated Skills

- React.js: Utilized React hooks such as useState, useEffect, and useMemo to manage component states and lifecycle events.

- TypeScript: Implemented TypeScript for type-checking to enhance code quality and reduce runtime errors.

- Context API: Used the React Context API for state management across components.

- Responsive Design: Designed the application to be mobile-responsive using Tailwind CSS.

- Unit Testing: Used React Testing Library along with Jest for unit testing components and utilities.

# Installation and Setup

1. Clone the repository:
```sh
git clone [repository-link](https://github.com/ssoydabas/dataguess-graphQL-FE)
```

2. Navigate to the project directory:
```sh
cd dataguess-graphQL-FE
```

3. Install dependencies:
```sh
npm ci
```

4. Run the application:
```sh
npm start
```

# Contributing

This is a personal project and won't be accepting pull requests. However, suggestions and feedback are welcome.