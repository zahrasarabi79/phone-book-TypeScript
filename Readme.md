```mermaid
%% Example of sequence diagram
  sequenceDiagram
    Client->>Windows: Open Software
    activate Windows
    Windows->> Nodejs: run app
    activate Nodejs
    Nodejs->> clean.js: run app
        activate clean.js

        clean.js->> Nodejs: run app
    deactivate clean.js



```
