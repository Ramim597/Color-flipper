🎨 Color Flipper (Vanilla JavaScript)

A simple and interactive Color Flipper project built using HTML, CSS, and Vanilla JavaScript.
Click the button and instantly change the background color randomly 🎯

🚀 Live Demo

👉 (Add GitHub Pages link here later if you want)

📸 Preview

A minimal UI with a button that changes the background color on every click.

🛠️ Technologies Used

HTML5 – Structure

CSS3 – Styling & layout

Vanilla JavaScript – Logic & interactivity

📂 Project Structure
Color-flipper/
│
├── index.html
├── style.css
└── app.js

⚙️ How It Works

A list of HEX color codes is stored in an array.

When the Change Colors button is clicked:

Math.random() generates a random number

Math.floor() converts it into an integer

That number is used as an index to pick a random color

The selected color is applied to the page background.

🧠 JavaScript Logic (Core Idea)
let randomIndex = Math.floor(Math.random() * colors.length);
document.body.style.background = colors[randomIndex];

✨ Features

Random background color generator

Clean & centered UI

Beginner-friendly logic

No libraries or frameworks used

🔮 Future Improvements

Display current HEX color code

Copy color code to clipboard

Smooth background transition animation

Add gradient mode

Add dark/light text auto adjustment

📚 What I Learned

DOM manipulation

Event listeners

Arrays & random numbers

Math.random() and Math.floor()

Vanilla JavaScript fundamentals

👨‍💻 Author

Ramim
Aspiring Web Developer 🚀
Learning JavaScript step by step and building real projects.

⭐ If you like this project, don’t forget to star the repository!
