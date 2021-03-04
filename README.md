# SeamlessMD_Challenge

In order to view web application on VS Code ensure you have the "open in browser" extension and a launch.json file with the following code in it.

{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome from file system",
            "file": "${workspaceFolder}/index.html"
        }
    ]
}

To launch the web application right click on Index.html and select "Open In Default Browser".
