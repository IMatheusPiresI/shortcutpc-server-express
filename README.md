# ShortcutPC - Backend Node.js

###### Welcome to the documentation for the ShortcutPC backend! This repository contains the source code for the server that facilitates communication between the mobile application and the user's local computer. ShortcutPC is an innovative solution that allows users to create shortcuts to access applications on their computers remotely through their mobile devices.


## Overview

###### ShortcutPC consists of two main components: the mobile application and the backend, with the latter implemented in Node.js. This backend is responsible for establishing the bridge between the mobile device and the local computer, enabling users to manage their applications conveniently and efficiently.

## Key Features

#### 1. Shortcut Creation
The primary purpose of ShortcutPC is to provide users with the ability to create personalized shortcuts for applications on their computers. These shortcuts can be easily accessed through the mobile application, offering a quick and straightforward way to launch desired programs.

#### 2. Exploration of Local Applications
The server checks and lists all installed applications on the user's computer. This allows users to have a comprehensive view of available programs and select those they wish to include as shortcuts in the mobile application.

#### 3. Remote Access to Applications
In addition to creating shortcuts for local applications, ShortcutPC offers the functionality to remotely open applications. This means that users can start specific applications on their computers from their mobile devices, providing a convenient remote control experience.

#### 4. Integration with Online Services
Beyond local applications, the server also supports creating shortcuts for online services such as Netflix, Prime Video, and others. This expands user options, allowing them to access not only local applications but also internet content quickly and easily.

## ShortcutPC Instalation

This guide provides instructions on how to download and start the server for the ShortcutPC project.

## Requirements

- [NodeJS](https://nodejs.org/) version 16.x or higher

## Step by Step

#### 1. Install NodeJS
Make sure to have NodeJS installed on your machine. You can download the latest version from [nodejs.org](https://nodejs.org/).

#### 2. Download the Project
[Download the ShortcutPC](https://drive.google.com/file/d/1yLyxe2FnIXEXRYCXvX-j_-9oIveXTb2Y/view?usp=sharing) project file provided.

#### 3. Open the Project Folder
Open the folder of the project you just downloaded.

```bash
cd your/project/path
```
#### 4. Install Dependencies
Run the following command to install the project dependencies.

```bash
npm install
```

#### 5. Start the Server
After the dependencies installation is complete, start the server with the following command:

```bash
npm start
```

That's it! The ShortcutPC server is now running and ready to be used. If you need more information about the project or its configuration, refer to the additional documentation provided.