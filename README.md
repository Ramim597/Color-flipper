🎨 Color Flipper

A simple and fun Color Flipper web project built using HTML, CSS, and Vanilla JavaScript.

When the user clicks the "Change Colors" button, the background color changes randomly.

🚀 Features

Random background color generator

Clean and centered UI

Smooth user interaction

Built using pure Vanilla JavaScript (no libraries)

🛠️ Technologies Used

HTML5

CSS3

JavaScript (Vanilla JS)

📂 Project Structure
color-flipper/
│
├── index.html
├── style.css
└── app.js

🧠 How It Works

A list of HEX color codes is stored inside an array.

When the button is clicked:

Math.random() generates a random number.

Math.floor() converts it into a whole number.

That number is used as an index to pick a random color.

The selected color is applied to the body background.

Example logic:

let random = Math.random() * colors.length;
let randomColors = Math.floor(random);
let selectedColor = colors[randomColors];
document.body.style.background = selectedColor;

⚠️ Small Improvement Suggestion

Currently your random logic is:

let random = Math.random() * 3;


This will only select from the first 3 colors.

To use all colors, change it to:

let random = Math.random() * colors.length;


This makes it dynamic and more professional.

🎯 Future Improvements (Ideas)

Show the HEX color code on screen

Add smooth transition animation

Add copy-to-clipboard feature

Add gradient mode

Add dark/light text auto-adjust

📸 Preview

Click the button → Background color changes 🎨

👨‍💻 Author

Ramim
Aspiring Web Developer 🚀
Learning and building with passion.
