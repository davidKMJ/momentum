# momentum

A JavaScript learning project that demonstrates fundamental JavaScript concepts through building a personal dashboard application.

## Table of Contents

1. [JavaScript Fundamentals](#javascript-fundamentals)
2. [DOM Manipulation](#dom-manipulation)
3. [Event Handling](#event-handling)
4. [Data Storage & Persistence](#data-storage--persistence)
5. [Asynchronous JavaScript](#asynchronous-javascript)
6. [APIs & External Data](#apis--external-data)
7. [Advanced JavaScript Concepts](#advanced-javascript-concepts)

---

## JavaScript Fundamentals

### Variables and Data Types

JavaScript uses three ways to declare variables:

```javascript
// const - cannot be reassigned
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// let - can be reassigned
let toDos = [];

// var - function scoped (avoid in modern JS)
var oldStyle = "not recommended";
```

**Data Types in JavaScript:**

-   **Primitives**: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`
-   **Objects**: `object`, `array`, `function`

**Example in project**: See `js/greetings.js` for constant declarations and `js/todo.js` for array usage.

### Functions

Functions are first-class citizens in JavaScript:

```javascript
// Function declaration
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// Function expression
const onLoginSubmit = function (event) {
    event.preventDefault();
    // function body
};

// Arrow function (ES6+)
const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // function body
};
```

**Example in project**: Check `js/clock.js` for function declarations and `js/weather.js` for arrow functions.

### Objects and Arrays

JavaScript objects and arrays are fundamental data structures:

```javascript
// Object literal
const newToDoObject = {
    id: Date.now(),
    text: newToDo,
};

// Array of objects
const quotes = [
    {
        quote: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds",
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs",
    },
];

// Array methods
toDos.push(newToDoObject); // Add to end
toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // Filter
parsedToDos.forEach(paintToDo); // Iterate
```

**Example in project**: See `js/quotes.js` for object arrays and `js/todo.js` for array manipulation.

### Template Literals

Modern string interpolation using backticks:

```javascript
// Template literals with variables
clock.innerText = `${hours}:${minutes}:${seconds}`;

// Template literals with expressions
greeting.innerText = `Hello ${username}`;

// Template literals for URLs
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
```

**Example in project**: Check `js/clock.js` and `js/weather.js` for template literal usage.

---

## DOM Manipulation

### Selecting Elements

The Document Object Model (DOM) allows JavaScript to interact with HTML:

```javascript
// Single element selection
const clock = document.querySelector("h2.clock");
const loginForm = document.querySelector(".login-form");

// Multiple elements selection
const spans = document.querySelectorAll("span");

// Selecting within elements
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
```

**Example in project**: See `js/clock.js` for element selection and `js/greetings.js` for nested selection.

### Modifying Content

Change element content and attributes:

```javascript
// Text content
clock.innerText = `${hours}:${minutes}:${seconds}`;
greeting.innerText = `Hello ${username}`;

// HTML content (use with caution)
element.innerHTML = "<strong>Bold text</strong>";

// CSS classes
loginForm.classList.add(HIDDEN_CLASSNAME);
loginForm.classList.remove(HIDDEN_CLASSNAME);
greeting.classList.remove(HIDDEN_CLASSNAME);

// CSS styles
container.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
```

**Example in project**: Check `js/greetings.js` for class manipulation and `js/background.js` for style changes.

### Creating Elements

Dynamically create and add elements to the DOM:

```javascript
function paintToDo(newToDoObject) {
    // Create elements
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    // Set properties
    li.id = newToDoObject.id;
    span.innerText = newToDoObject.text;
    button.innerText = "remove";

    // Add event listeners
    button.addEventListener("click", deleteToDo);

    // Append elements
    li.appendChild(span);
    li.appendChild(button);
    li.classList.add("todo-list__item");
    toDoList.appendChild(li);
}
```

**Example in project**: See `js/todo.js` for dynamic element creation.

---

## Event Handling

### Event Listeners

JavaScript responds to user interactions through events:

```javascript
// Form submission
loginForm.addEventListener("submit", onLoginSubmit);
toDoForm.addEventListener("submit", handleToDoSubmit);

// Input changes
loginInput.addEventListener("input", onInputChange);

// Button clicks
button.addEventListener("click", deleteToDo);

// Prevent default behavior
function onLoginSubmit(event) {
    event.preventDefault();
    // custom logic
}
```

**Example in project**: Check `js/greetings.js` and `js/todo.js` for event handling.

### Event Object

Events provide information about user interactions:

```javascript
function deleteToDo(event) {
    // Access the element that triggered the event
    const li = event.target.parentElement;

    // Use event data
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}
```

**Example in project**: See `js/todo.js` for event object usage.

---

## Data Storage & Persistence

### Local Storage

Store data in the browser's local storage:

```javascript
// Save data
localStorage.setItem(USERNAME_KEY, username);
localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

// Retrieve data
const savedUsername = localStorage.getItem(USERNAME_KEY);
const savedToDos = localStorage.getItem(TODOS_KEY);

// Check if data exists
if (savedUsername === null) {
    // Show login form
} else {
    // Show greeting
}
```

**Example in project**: See `js/greetings.js` for username storage and `js/todo.js` for todo persistence.

### JSON Serialization

Convert between JavaScript objects and strings:

```javascript
// Convert object to string for storage
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// Convert string back to object
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
    toDos = parsedToDos;
}
```

**Example in project**: Check `js/todo.js` for JSON serialization.

---

## Asynchronous JavaScript

### Timers and Intervals

Execute code at specific intervals:

```javascript
// Execute once after delay
setTimeout(function () {
    console.log("This runs after 1 second");
}, 1000);

// Execute repeatedly
setInterval(getClock, 1000);

// Clear interval
const intervalId = setInterval(getClock, 1000);
clearInterval(intervalId);
```

**Example in project**: See `js/clock.js` for interval usage.

### Promises and Fetch API

Handle asynchronous operations:

```javascript
// Fetch API returns a Promise
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector(".weather span:first-child");
        const city = document.querySelector(".weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
    .catch((error) => {
        console.error("Error fetching weather:", error);
    });
```

**Example in project**: Check `js/weather.js` for Promise handling.

### Geolocation API

Access user's location asynchronously:

```javascript
// Get current position
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// Success callback
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // Use coordinates
}

// Error callback
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
```

**Example in project**: See `js/weather.js` for geolocation implementation.

---

## APIs & External Data

### Working with External APIs

Integrate third-party services:

```javascript
const API_KEY = "your-api-key";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // Process API response
        const weather = data.weather[0].main;
        const temperature = data.main.temp;
        const cityName = data.name;
    });
```

**Example in project**: See `js/weather.js` for OpenWeatherMap API integration.

### Error Handling

Handle API failures gracefully:

```javascript
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

// Or with try-catch
try {
    const data = await fetch(url);
    const result = await data.json();
} catch (error) {
    console.error("API Error:", error);
}
```

**Example in project**: Check `js/weather.js` for error handling.

---

## Advanced JavaScript Concepts

### Array Methods

Powerful methods for array manipulation:

```javascript
// Filter - create new array with filtered elements
toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

// forEach - execute function for each element
parsedToDos.forEach(paintToDo);

// Map - transform each element
const doubled = numbers.map((num) => num * 2);

// Find - find first element matching condition
const found = todos.find((todo) => todo.id === targetId);
```

**Example in project**: See `js/todo.js` for filter and forEach usage.

### String Methods

Common string manipulation techniques:

```javascript
// padStart - pad string to specific length
const hours = String(date.getHours()).padStart(2, "0");

// toLowerCase/toUpperCase
const lowerCase = text.toLowerCase();

// includes - check if string contains substring
if (text.includes("search")) {
    // do something
}

// split - convert string to array
const words = sentence.split(" ");
```

**Example in project**: Check `js/clock.js` for padStart usage.

### Math Object

Mathematical operations and random numbers:

```javascript
// Random number between 0 and 1
Math.random();

// Random integer between 0 and array length
Math.floor(Math.random() * quotes.length);

// Random angle for gradient
const angle = Math.floor(Math.random() * 360);

// Current timestamp
const id = Date.now();
```

**Example in project**: See `js/quotes.js` for random selection and `js/background.js` for random gradients.

### Conditional Logic

Control program flow with conditions:

```javascript
// if/else statements
if (savedUsername === null) {
    loginForm.addEventListener("submit", onLoginSubmit);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    paintGreetings(savedUsername);
}

// Ternary operator
const message = isLoggedIn ? "Welcome back!" : "Please log in";

// Logical operators
if (loginInput.value === "") {
    loginButton.classList.add(HIDDEN_CLASSNAME);
} else {
    loginButton.classList.remove(HIDDEN_CLASSNAME);
}
```

**Example in project**: See `js/greetings.js` for conditional logic.

### Scope and Closures

Understanding variable scope:

```javascript
// Global scope
const HIDDEN_CLASSNAME = "hidden";

function outerFunction() {
    // Function scope
    const localVariable = "I'm local";

    function innerFunction() {
        // Can access outer scope
        console.log(localVariable);
    }

    return innerFunction;
}

// Block scope with let/const
if (true) {
    const blockScoped = "I only exist in this block";
}
```

**Example in project**: See all files for scope examples with constants and variables.

### Modern JavaScript Features

ES6+ features used in the project:

```javascript
// Arrow functions
const onGeoOk = (position) => {
    // function body
};

// Template literals
const message = `Hello ${username}`;

// const/let instead of var
const API_KEY = "your-key";
let toDos = [];

// Destructuring (not used in project but important)
const { lat, lon } = position.coords;
```

**Example in project**: See `js/weather.js` for arrow functions and template literals throughout all files.

---

## Project Structure

```
momentum/
├── index.html          # Main HTML structure
├── css/
│   └── style.css       # Styling
├── js/
│   ├── background.js   # Random background generation
│   ├── clock.js        # Real-time clock
│   ├── greetings.js    # User login and greeting
│   ├── quotes.js       # Random quote display
│   ├── todo.js         # Todo list functionality
│   └── weather.js      # Weather API integration
└── img/                # Background images
```

This project demonstrates core JavaScript concepts through practical implementation, making it an excellent learning resource for understanding how JavaScript works in real-world applications.
