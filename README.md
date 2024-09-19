
# Math Quiz Application

## Overview
This is a simple math quiz application that randomly generates arithmetic problems and provides multiple-choice answers. Users can select an answer, and the application will indicate whether the selection is correct or wrong.
Live Link - https://thanushtanu.github.io/Maths_quiz/

## Features
- Randomly generates two numbers and an arithmetic operation (+, -, *, /).
- Provides multiple-choice answers, including the correct answer and several distractors.
- Shuffles the answer options to ensure a varied experience each time.
- Indicates correct and wrong answers with color coding.
- Allows users to restart the quiz with a "Play Again" button.

## Technologies Used
- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, etc.)
- Basic knowledge of HTML, CSS, and JavaScript (optional)

### Installation
1. Clone the repository or download the files.
2. Open the `index.html` file in your web browser.

### Usage
1. Click the "Play" button to start the quiz.
2. View the math problem displayed on the screen.
3. Click on one of the answer options.
4. The application will display whether your answer is correct or wrong.
5. Click "Play Again" to restart the quiz.

## Code Explanation

### Main Functions
- **`shuffleArray(arr)`**: Shuffles the elements of an array in place.
- **`genRandomInt(min, max)`**: Generates a random integer between the specified min and max values.
- **`getcorrectindex(arr, crt_ans)`**: Returns the index of the correct answer in the options array.
- **`main()`**: The main function that initializes the quiz, generates numbers, selects an operation, calculates the answer, and sets up the options.

### Event Listeners
- The application listens for clicks on the answer options and the "Play Again" button to control the quiz flow.

## Contributing
Feel free to fork the repository and make your own enhancements. Contributions are welcome!

## License
This project is open-source and available under the MIT License.

## Acknowledgments
- Inspired by various online quiz applications.
- Thanks to all contributors and developers who have shared their knowledge and resources.


