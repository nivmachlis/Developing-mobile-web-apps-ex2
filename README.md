# HTTP Static Server

A simple HTTP static web server built with Node.js that serves static content from a specified directory.

## Prerequisites

- Node.js

## Getting Started

1. Clone the repository:

```shell
git clone https://github.com/nivmachlis/Developing-mobile-web-apps-ex2.git
```

2. Navigate to the project directory:

```shell
cd Developing-mobile-web-apps-ex2
```

3. Install dependencies:

```shell
npm install
```

4. Start the server:

```shell
node .\myServer.js
```

or

```shell
npm start
```

The server will start and listen on the specified port (8090 by default).

5. Open a web browser and navigate to `http://localhost:8090/index.html` to access the file injected in the server.

Additionally, you can add any other file to the directory and then request that specific file by sending a request to http://localhost:8090/new_file.
