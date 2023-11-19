# Nero Dev UI

Nero Dev UI is a modern UI library designed for React applications, leveraging Tailwind CSS for styling. This library makes it easy to incorporate a range of components and utilities to enhance your React applications with a polished and cohesive look.

## Requirements

- React
- Tailwind CSS

## Installation

Before using Nero Dev UI, ensure you have React and Tailwind CSS set up in your project. 

## How to Use

1. **Global CSS Import**

   Import the global CSS file from Nero Dev UI in your main JavaScript file (e.g., `index.js` or `App.js`):

   ```javascript
   import "nero-dev/src/lib/global.css";

2. **Tailwind configuration**

    Update your Tailwind configuration to include the tailwindpreset from Nero Dev UI. This will integrate Nero Dev UI's custom styles with your Tailwind setup.

    First, import tailwindpreset at the top of your Tailwind configuration file:

    ```javascript
    import { tailwindpreset } from "nero-dev";
    ```

    Then, add tailwindpreset to the presets array in your Tailwind configuration:

    ```javascript
    module.exports = {
        presets: [tailwindpreset],
        // ... rest of your Tailwind config
    }
    ```
    
    In your Tailwind configuration, make sure to include Nero Dev UI's file paths in the content array to enable Tailwind to apply its styles to Nero Dev UI components.

    ```javascript
    module.exports = {
    // ... rest of your Tailwind config
    content: [
        "./node_modules/nero-dev/**/*.{js,ts,jsx,tsx,mdx}",
        // ... other paths
    ],
    }   
    ```