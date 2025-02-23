# Studio Phase - Hero Section Recreation

This project is a recreation of the hero section from the reference site [Pha5e](https://pha5e.com/). The goal was to replicate the initial animation, hover interactions, and mouse movement effects using HTML, CSS, JavaScript, and GSAP (GreenSock Animation Platform). The final result is a visually engaging and interactive hero section that mimics the functionality of the original site.

You can view the live demo of this project here: [Live Demo](https://karthikeya03.github.io/Itzfizz-Digital/)

---

## Features

### 1. **Initial Animation**
   - The text and images in the hero section smoothly animate into view when the page loads.
   - The text is styled with a bold, uppercase font and is centered in the middle of the screen.
   - The images are positioned at the four corners of the screen and animate into their respective positions.

### 2. **Hover Interaction**
   - When an image is hovered over, it becomes fully visible, while the other images transform into vector-like graphics.
   - The text in the center of the screen changes its style, adding a vector effect (transparent text with a white stroke) to create an engaging visual effect.
   - Hovering over an image also reveals additional text (title and description) related to the image.

### 3. **Mouse Movement Effect**
   - The hovered image subtly follows the mouse cursor within its area, creating a dynamic and interactive feel.
   - The movement is constrained within a defined radius to ensure the image doesn't move too far from its original position.

### 4. **Responsive Design**
   - The hero section is fully responsive and adapts to different screen sizes.
   - On smaller screens (below 426px), all animations and interactions are disabled to ensure a smooth user experience.
   - The text and images are repositioned and resized to fit smaller screens, and the hover effects are replaced with simpler interactions.

---

## Tech Stack

- **HTML**: Used to structure the content of the hero section, including the text and images.
- **CSS**: Used to style the hero section, including the layout, typography, and animations.
- **JavaScript**: Used to handle the hover interactions, mouse movement effects, and dynamic changes to the DOM.
- **GSAP (GreenSock Animation Platform)**: Used to create smooth animations for the text, images, and hover effects.

---

## Code Structure

### 1. **HTML**
   - The HTML file (`index.html`) contains the structure of the hero section, including the text and images.
   - Each image is wrapped in a container (`image-container`) that also includes the hover text (title and description).

### 2. **CSS**
   - The CSS file (`style.css`) contains all the styles for the hero section, including the layout, typography, and animations.
   - Media queries are used to ensure the hero section is responsive and adapts to different screen sizes.

### 3. **JavaScript**
   - The JavaScript file (`script.js`) handles the hover interactions, mouse movement effects, and dynamic changes to the DOM.
   - GSAP is used to create smooth animations for the text, images, and hover effects.
   - Event listeners are added to the images to handle hover and click interactions.

---

## How It Works

### 1. **Initial Animation**
   - When the page loads, the text and images animate into view using GSAP.
   - The text is centered in the middle of the screen, and the images are positioned at the four corners.

### 2. **Hover Interaction**
   - When an image is hovered over, the following changes occur:
     - The hovered image becomes fully visible.
     - The other images transform into vector-like graphics.
     - The text in the center of the screen changes its style to a vector effect.
     - The hover text (title and description) related to the image is revealed.

### 3. **Mouse Movement Effect**
   - When an image is hovered over, it subtly follows the mouse cursor within its area.
   - The movement is constrained within a defined radius to ensure the image doesn't move too far from its original position.

### 4. **Responsive Design**
   - On smaller screens (below 426px), all animations and interactions are disabled.
   - The text and images are repositioned and resized to fit smaller screens.
   - The hover effects are replaced with simpler interactions.

---

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd your-repo-name
   ```

3. **Open the `index.html` file in your browser**:
   - Simply double-click the `index.html` file or open it using a live server in your code editor.

---

## Usage

- **Hover over the images** to see the hover interaction and mouse movement effect.
- **Resize the browser window** to see how the hero section adapts to different screen sizes.

---

## Credits

- **Reference Site**: [Pha5e](https://pha5e.com/)
- **GSAP**: [GreenSock Animation Platform](https://greensock.com/gsap/)
- **Fonts**: [Google Fonts - Oswald](https://fonts.google.com/specimen/Oswald)

---

Enjoy exploring the Studio Phase hero section recreation! 🚀
