# 🪐 Cosmic Canvas: A Modern Online Whiteboard

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Framework](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Styling](https://img.shields.io/badge/Styling-TailwindCSS-cyan.svg)](https://tailwindcss.com/)
[![Language](https://img.shields.io/badge/Language-TypeScript-blueviolet.svg)](https://www.typescriptlang.org/)

A feature-rich, real-time digital whiteboard built with React, TypeScript, and the HTML Canvas API. Designed for creativity, brainstorming, and collaboration, set against an immersive, animated cosmic backdrop.

**[Live Demo](https://example.com) &middot; [Report Bug](https://example.com/issues) &middot; [Request Feature](https://example.com/issues)**

![Cosmic Canvas Screenshot](https://storage.googleapis.com/aistudio-hosting/project-images/cosmic-canvas-demo.png)

---

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Built With](#built-with)
- [Architecture Overview](#architecture-overview)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About The Project

Cosmic Canvas was built to provide a seamless and inspiring digital drawing experience. The primary goal was to create a high-performance, aesthetically pleasing, and user-friendly whiteboard application using modern web technologies.

This project demonstrates:
- **Direct DOM manipulation** via the HTML Canvas API for high-performance, real-time drawing.
- **Modern React principles**, including functional components, hooks, and TypeScript for robust, scalable architecture.
- **Separation of concerns**, with complex canvas logic abstracted into a reusable custom hook (`useWhiteboard`).
- **Responsive and beautiful UI/UX** design using Tailwind CSS, focused on creating a comfortable and friendly user experience.

---

## Key Features

- **🎨 Infinite Creativity**: A full-screen, responsive canvas for free-form drawing and brainstorming.
- **🖌️ Dynamic Brush Controls**:
  - **Color Picker**: Select any color imaginable for your strokes.
  - **Adjustable Size**: Use the intuitive slider to control brush thickness in real-time.
- **⚡ Powerful Actions**:
  - **Undo**: Instantly revert your last stroke with a simple state management system.
  - **Clear Canvas**: Start fresh with a single click.
  - **Download as PNG**: Save your masterpiece to your device with a transparent background.
- **🚀 Immersive & Modern UI**:
  - A beautiful, animated multi-layer galaxy background for an inspiring experience.
  - A sleek, floating toolbar that is intuitive and stays out of your way.
  - Fully responsive design that works flawlessly on desktop, tablet, and mobile devices.

---

## Built With

This project leverages a modern, powerful tech stack for a high-performance and maintainable application.

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that builds on JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **HTML Canvas API**: The core technology for all rendering and drawing logic.
- **Vite**: (Assumed for modern local development) A next-generation frontend tooling.

---

## Architecture Overview

The application is structured to be modular and maintainable, with a clear separation between UI and business logic.

- **`App.tsx`**: The main application component that orchestrates the layout and manages global state like modals.
- **`components/`**: Contains all the presentational React components.
  - **`Layout.tsx`**: Provides the global structure, including the animated galaxy background, header, and footer.
  - **`Whiteboard.tsx`**: The core UI component containing the `<canvas>` element and the floating toolbar. It is a "dumb" component that receives all its logic and event handlers from its parent.
- **`hooks/`**:
  - **`useWhiteboard.ts`**: This powerful custom hook is the brain of the application. It encapsulates all canvas-related logic:
    - Initializing the canvas and its 2D context.
    - Handling all drawing events (`mousedown`, `mousemove`, etc.).
    - Managing state for color, line width, and drawing status.
    - Implementing the history stack for the `undo` functionality.
    - Providing utility functions (`clearCanvas`, `downloadImage`).
This architecture ensures that the `Whiteboard` component remains lean and focused on rendering, while the complex logic is reusable and easy to test.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/cosmic-canvas.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the development server
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) (or similar) to view it in the browser.

---

## Usage

The Cosmic Canvas is designed for simplicity and intuitive interaction.

1.  **Open the application** in your web browser.
2.  **Start Drawing**: Click (or tap) and drag your cursor across the central canvas area to draw.
3.  **Use the Toolbar**:
    - Click the **color swatch** to open your system's color picker.
    - Drag the **size slider** to change the thickness of your lines.
    - Click **Undo**, **Clear**, or **Download** to perform the respective actions.
4.  **Save Your Work**: Click the "Download" button to save a high-quality PNG image of your current canvas.

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

---

## Contact

HSINI MOHAMED - [hsini.web@gmail.com](mailto:hsini.web@gmail.com)

Project Link: [https://github.com/hsinidev/cosmic-canvas](https://github.com/hsinidev/cosmic-canvas)
