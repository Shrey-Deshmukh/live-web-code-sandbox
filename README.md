# Live Web Code Sandbox

## Overview
Live Web Code Sandbox is a browser-based application that allows users to write HTML, CSS, and JavaScript and see the results rendered instantly. The project provides a simple interactive environment for experimenting with frontend code without requiring local setup or page refreshes.

The sandbox focuses on real-time feedback and flexible layout, enabling users to toggle and resize code panels dynamically.

## Motivation & Background
This project was built to explore how interactive developer tools like online code editors work at a basic level. The goal was to understand how HTML, CSS, and JavaScript can be dynamically injected and executed in the browser while keeping the editor interface responsive and easy to use.

Rather than replicating full-featured platforms like CodePen or JSFiddle, the project emphasizes simplicity and learning through implementation.

## How It Works
The application provides multiple editable panels for HTML, CSS, and JavaScript. As the user writes code:

1. HTML content is injected into a preview area
2. CSS styles are applied dynamically
3. JavaScript is executed in real time
4. The output updates immediately without reloading the page

The rendered output is isolated from the editor interface to prevent style or script conflicts.

## System Design
The project is structured as a client-side web application:

- **Editor Panels**: Text-based input areas for HTML, CSS, and JavaScript
- **Rendering Engine**: Dynamically injects user code into the output area
- **UI Controls**: Allows panels to be shown, hidden, and resized
- **Layout Management**: Uses jQuery UI for draggable and resizable panels

jQuery is used extensively for DOM manipulation, event handling, and layout updates.

## Key Features
- Live preview of HTML, CSS, and JavaScript code
- Real-time execution without page refresh
- Resizable and toggleable editor panels
- Interactive layout using jQuery UI
- Client-side execution with no backend dependencies

## Tech Stack
- **Languages**: HTML, CSS, JavaScript
- **Libraries**: jQuery, jQuery UI
- **Architecture**: Client-side, event-driven web application

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Shrey-Deshmukh/live-web-code-sandbox.git
