# Unit-and-Integration-Testing
Unit and Integration testing tasks - PDA assessment
Section B: JavaScript Calculator Testing
This activity relates to the following Outcome and Knowledge/Skills: |—————————————————————– |Outcome 4: Test programs using a range of approaches |Carry out unit testing |Carry out integration testing |Check the software meets specified requirements and carry out User Acceptance Testing.

JavaScript Calculator
User requirements: “As a user I want to be able to perform simple arithmetic functions in a web browser.”

The start code provided has a Calculator model with methods to add, subtract, divide, and multiply given numbers to a total (public/js/calculator.js). The Calculator model has properties to keep track of calculations as it performs them.

The model is used in a web application, which allows a user to chain multiple operations one after the other, and then ask for the total.

Your task is to complete both unit and integration testing on the Calculator model and the UI. You will be using the testing framework Mocha to complete the tests on the Calculator model, and another testing framework - Protractor - to complete the UI tests.

SETUP
To install project dependencies: npm install
To run the server: npm run server:dev
To view application visit ‘http://localhost:3000’
To run the unit tests with Mocha: npm test
To run the UI integration tests with Protractor:
Run npm run webdriver-update to update the webdriver server that the integration tests run on.
With your localhost:3000 server still running, open a new tab in Terminal and run npm run webdriver
Leave that server running, and in a new tab in Terminal run npm run protractor to run the integration tests.
Tasks
Unit Tests
You need to test the Calculator model using the testing framework Mocha. Write your tests in /tests/unit/calculator_spec.js. Test the following functions perform the following tasks:

calculator.add() - add 1 to 4 and get 5
calculator.subtract() subtract 4 from 7 and get 3
calculator.multiply() - multiply 3 by 5 and get 15
calculator.divide() - divide 21 by 7 and get 3
calculator.numberClick() - concatenate multiple number button clicks
calculator.operatorClick() - chain multiple operations together
calculator.clearClick() - clear the running total without affecting the calculation
UI Integration Tests
You need to write front-end integration tests to ensure the Calculator model and browser UI are working to meet the user requirements. The framework provided to do this is Protractor JS using Chai for assertions. There is one sample test written in /tests/integration/tests.js and you should continue writing your tests in this file.

You should write tests to ensure the following requirements are met:

Do the number buttons update the display of the running total?
Do the arithmetical operations update the display with the result of the operation?
Can multiple operations be chained together?
Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you’d prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
