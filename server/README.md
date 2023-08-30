# Electronic Color Code Calculator

This project implements an electronic color code calculator for electronic components such as resistors.

## Files

### `src/controllers/ohmValueController.ts`

This file contains the Express controller that handles routes for calculating resistance values based on color bands.

### `src/models/ohmValueCalculator.ts`

This file contains the implementation of the `OhmValueCalculator` class, which calculates resistance values based on color bands. It also includes loading color values from the `colorValues.json` file.

### `src/utils/colorValues.json`

This JSON file contains the color values required for calculations. It includes band values, multipliers, and tolerances.

### `src/routes/ohmValueRoutes.ts`

This file defines the Express routes for the color code calculator API.

### `src/test/ohmValueCalculator.test.js`

This file contains unit tests for the `OhmValueCalculator` class using the Mocha and Chai testing library.

### `src/utils/codeColors.json`

This JSON file contains electronic colors and their corresponding values in the color code format.

## Installation and Execution

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run tests: `npm test`
4. Start the server: `npm start`

## License

This project is licensed under the MIT License. Refer to the `LICENSE` file for more details.
