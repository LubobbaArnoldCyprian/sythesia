# SYNTHESIA AUTOMATION FRAMEWORK

Provide a brief description of your project here.

The automation is to replicate end to end user activity. 

## Prerequisites

To get started, you need the following installed on your system:

1. [Node.js and npm](https://nodejs.org/en/download/)
2. [Git](https://git-scm.com/downloads)

## Getting Started

Follow the steps below to setup the project on your local machine:

1. Clone the repository from GitHub. Open a terminal window and run the following command:
    ```
    git clone git@github.com:LubobbaArnoldCyprian/sythesia.git
    ```

2. Navigate into the project directory:
    ```
    cd synthesia
    ```
3. Install the project's dependencies. In the project directory, run the following command:
    ```
    npm install
    ```
    This command installs all the dependencies listed in the `package.json` file.

## Running Tests With Cypress

1. To open Cypress, run the following command in your terminal:
    ```
    npx cypress open
    ```
    This will open the Cypress Test Runner.

2. In the Cypress Test Runner, click on the test file you'd like to run. Cypress will automatically run the tests in a new browser window.

3. To run tests manually from the command line without opening the Cypress Test Runner, use the following command:
    ```
    npm run cy:run  
    ```

## Test Scenarios

- Verify user can create Free AI video without business email
- Verify user can not create without business email Synthesia Demo, sales Pitch, How-To video and Learning & development
- Verify character count

