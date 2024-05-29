# Task 2: Backend (Node.js, Express.js) - User and Task Management API

**Objective**: Set up a simple Express server with basic CRUD operations for managing users and their tasks.

## Instructions

1. **Create an Express Server**:
   - Set up an Express server in the `src` folder.

2. **Implement CRUD Operations**:
   - Create endpoints for the following operations:
     - `GET /users`: Retrieve a list of users.
     - `POST /users`: Add a new user.
     - `PUT /users/:id`: Update an existing user.
     - `DELETE /users/:id`: Delete a user.
     - `GET /users/:id/tasks`: Retrieve tasks for a specific user.
     - `POST /users/:id/tasks`: Add a new task for a specific user.
     - `PUT /users/:id/tasks/:taskId`: Update an existing task for a specific user.
     - `DELETE /users/:id/tasks/:taskId`: Delete a task for a specific user.
   - Use in-memory storage (e.g., arrays) to store the users and tasks.

3. **Error Handling**:
   - Implement proper error handling for each endpoint.

### Setup Instructions

1. Navigate to the `task2-backend` directory.
2. Install dependencies: `npm install`.
3. Start the server: `node src/index.js`.

### Evaluation Criteria

- Correct implementation of CRUD operations.
- Proper error handling.
- Code organization and clarity.
