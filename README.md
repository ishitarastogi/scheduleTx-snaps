```As mentioned by Metamask snaps team "Unfortunately it looks like 10.25.0 shipped with a bug breaking cronjobs. You'll have to wait for the next release" so we spend a lot of time fixing but later get to know this issue so we wrote the code but due to this issue code was not running properly.```

<img src="https://user-images.githubusercontent.com/46647968/219954772-feffdbc3-e54f-496b-9e01-284f241135f3.png" width="350px" height="350px"/>

# Project Description
This project is a web application that allows users to schedule their Ethereum transactions using Metamask Snaps. The application leverages the Metamask Snaps cronjob feature to schedule transactions based on user-defined conditions. Users can specify a time for the transaction to execute and provide the recipient address and other necessary transaction details.

The application also includes a feature to schedule transactions based on gas prices. Users can manually enter the gas price they want to use for their transaction, and the transaction will be scheduled to execute when the gas prices reach that level.


## Setup and Usage
To run the application, follow these steps:

- Clone the repository to your local machine.
- Install the required dependencies using yarn install.
- Start the application using npm start.
- Connect your Metamask wallet to the application.
- Schedule your transaction by providing the required details and clicking the "Schedule" button.

## Features

- Schedule transactions at a specific time
- Schedule transactions based on gas prices

## Technologies Used
- ReactJS
- Metamask Snaps
