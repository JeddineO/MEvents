# MEvents

MEvents is a web application that allows users to organize and manage events. It provides features for both event organizers and service providers. This project is divided into two main parts: the frontend and the backend.

## Features

- **User Roles**: MEvents supports two main user roles: Clients and Service Providers.

- **Event Creation**: Clients can create and manage events, specifying details such as date, time, location, and services required.

- **Service Providers**: Service providers can offer their services for events and browse event listings.

- **APIs**: The backend provides APIs for various functionalities, including event management, user authentication, and more.

## Project Structure

- `/front-end`: Contains the React.js frontend code.

- `/back-end`: Contains the Laravel backend code, including APIs, controllers, models, and migrations.

## Getting Started

Follow these steps to set up and run the MEvents project:

### Frontend

1. Navigate to the `/front-end` directory:
```
cd front-end
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

### Backend

1. Navigate to the `/back-end` directory:
```
cd back-end
```

2. Install Composer dependencies:
```
composer install
```

3. Set up your database and configure the `.env` file with your database credentials.

4. Run migrations to create the database tables:
```
php artisan migrate
```

5. Generate an application key:
```
php artisan key:generate
```

6. Start the Laravel development server:
```
php artisan serve
```

7. The backend API will be available at `http://localhost:8000`.