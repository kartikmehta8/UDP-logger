# Distributed Logger System with UDP

This project implements a lightweight, UDP-based distributed logging system in Node.js. 
The logging server aggregates log messages from multiple distributed clients, using UDP to receive logs quickly without HTTP overhead. 
This project demonstrates SOLID principles and design patterns, with a central logging server that can log to console, files, and future extendable storage options.

## Project Structure

```
distributed-logger
├── server
│   ├── config
│   │   └── index.js                # Configuration file for server settings
│   ├── logger
│   │   ├── Logger.js               # Logger class implementing the Facade Pattern
│   │   ├── handlers
│   │   │   ├── ConsoleHandler.js   # Handler for console output
│   │   │   ├── FileHandler.js      # Handler for saving logs to files
│   │   └── parsers
│   │       └── LogParser.js        # Parses incoming log messages
│   ├── udpServer.js                # UDP server to receive log messages
│   └── index.js                    # Main entry point
├── client
│   ├── loggerClient.js             # Client script for sending logs via UDP
├── logs                            # Directory for storing log files
└── package.json                    # Node.js dependencies and scripts
```

## Features

- **UDP-Based Logging**: Each client application sends logs to a central server via UDP for minimal latency.
- **SOLID Design**: Handlers for logging (console, file) follow the Single Responsibility Principle.
- **Extensible Logging Handlers**: Easily add new handlers (e.g., database, cloud storage).

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd distributed-logger
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### 1. Start the Logging Server

To start the logging server, run:

```bash
node server/index.js
```

The server listens for UDP messages on the configured port (default: `41234`), as specified in `config/index.js`. It will display received logs in the console and store them in the `logs` directory.

### 2. Run the Client Logger

Open a new terminal window, then run the client script to send sample log messages:

```bash
node client/loggerClient.js
```

The client will send various logs (INFO, ERROR, DEBUG) to the server. The server console should display incoming logs and append them to `logs/app.log`.
