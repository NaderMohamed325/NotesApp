# Notes Application

This is a simple notes application built with Node.js, Express, and MongoDB. It allows users to create, read, update, and delete notes.

## Features

- Add new notes with a title and content.
- View a list of all notes.
- Delete notes.
- Responsive and modern UI.

## Technologies Used

- Node.js
- Express
- MongoDB
- EJS (Embedded JavaScript templates)
- CSS

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/NaderMohamed325/notes-app.git
    cd notes-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the following environment variables:
        ```env
        DATABASE_URL=<your_mongodb_connection_string>
        DATABASE_PASSWORD=<your_database_password>
        ```

4. Start the application:
    ```sh
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

- To add a new note, fill in the title and content fields and click the "Add Note" button.
- To delete a note, click the "Delete" button next to the note you want to remove.

## Project Structure

- `app.js`: Main application file.
- `server.js`: Server setup and database connection.
- `routes/notesRouter.js`: Routes for handling notes-related requests.
- `controller/notesController.js`: Controller functions for notes operations.
- `models/notesModel.js`: Mongoose schema and model for notes.
- `views/notes.ejs`: EJS template for rendering notes.

------

### JavaScript Function Binding Section

1. Function Binding Types: Your explanation is correct and concise. Let me elaborate slightly:

- **Implicit Binding**: `this` is set to the object that contains the function.
  ```javascript
  const obj = {
    name: 'John',
    greet() { console.log(this.name); }
  };
  obj.greet(); // 'this' refers to obj
  ```

- **Explicit Binding**: Using `.call()`, `.apply()`, or `.bind()` to explicitly set `this`.
  ```javascript
  function greet() { console.log(this.name); }
  const person = { name: 'Alice' };
  greet.call(person); // Explicitly sets 'this' to person
  ```

- **New Binding**: When creating an object using the `new` keyword, `this` refers to the newly created instance.
  ```javascript
  function Person(name) {
    this.name = name;
  }
  const john = new Person('John'); // 'this' inside Person refers to john
  ```

- **Default Binding**: When no other binding applies, `this` defaults to the global object (in non-strict mode) or `undefined` (in strict mode).
  ```javascript
  function defaultExample() {
    console.log(this);
  }
  defaultExample(); // Global object or undefined
  ```

2. Output of `typeof typeof student`:
   - `typeof student` returns `"object"`
   - `typeof "object"` returns `"string"`
   - So the output will be `"string"`

### Modules Section

3. Modules:
   **CommonJS Modules**:
   - Synchronous loading
   - Uses `require()` and `module.exports`
   - Primarily used in Node.js

   **ES6 (ESM) Modules**:
   - Asynchronous loading
   - Uses `import`/`export`
   - Native to browser and modern JavaScript
   - Static structure, better for tree-shaking

4. `scripts` in `package.json`:
   - Defines custom commands for project tasks
   - Can run scripts like `npm run start`, `npm run test`
   - Automates development workflows

### Express.js Section

1. Middleware:
   - Functions that have access to request/response cycle
   - Can modify request/response objects
   - Can end the request-response cycle
   - Can call next middleware with `next()`

2. Reasons for Express App Hanging:
   - Missing `next()` call
   - Synchronous, blocking operations
   - Unhandled promises
   - Resource contention
   - Infinite loops

3. Parsing Form Body:
   - `express.urlencoded()` middleware
   ```javascript
   app.use(express.urlencoded({ extended: true }));
   ```

4. Route with Parameters and Query:
   ```javascript
   app.get('/profile/:userId',(req,res)=>{
     console.log(req.params);  // { userId: '1307' }
     console.log(req.query);   // { tab: 'friends', history: 'off' }
   })
   ```

5. Redirecting Logged-In User:
   - Correct answer is: `c. res.redirect('/')`

### MongoDB Section

1. MongoDB Document ID:
   - Default type is `ObjectId`

2. Mongoose Model:
   - Schema definition for documents
   - Creates a model for database interactions
   ```javascript
   const userSchema = new mongoose.Schema({
     name: String,
     age: Number
   });
   const User = mongoose.model('User', userSchema);
   ```

3. Output of Types:
   ```javascript
   console.log(typeof x);  // Promise
   console.log(typeof y);  // Promise
   console.log(typeof z);  // Promise
   ```

4. Update User Age Problem:
   ```javascript
   const updateAge = async () => {
     const user = await User.findOne({username:"sherbiny"});
     console.log(user.age); // 20
     user.age = 25;
     await user.save();
     console.log(user.age); // 25
   }
   ```
   - Problem: Not using `await` and callback removed
   - Solution: Use async/await

5. Mongoose Validation:
   ```javascript
   const userSchema = new mongoose.Schema({
     name: {
       type: String,
       minlength: 3  // Ensures string is at least 3 characters
     }
   });
   ```



## License

This project is licensed under the MIT License.
