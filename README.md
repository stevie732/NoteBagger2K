# 📝 Note-Bagger 2K

Note-Bagger 2K is a simple note-taking application built with React, TypeScript, and Bootstrap. It allows users to create, view, and delete notes.

Hold Up! 
No it is not bagging no notes on my watch foo!
## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
  - [App](#app)
  - [Header](#header)
  - [NotesList](#noteslist)
  - [Notes](#notes)
  - [CreateNotes](#createnotes)
  - [Footer](#footer)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- 📝 Create new notes with a title, text, and color.
- 📋 View a list of all notes.
- 🗑️ Delete notes.

## 🛠️ Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/note-bagger-2k.git
    cd note-bagger-2k
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## 🚀 Usage

1. Start the development server:

    ```sh
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## 📂 Project Structure

```plaintext
.gitignore
eslint.config.js
index.html
package.json
README.md
src/
  App.tsx
  components/
    CreateNotes.tsx
    Footer.tsx
    Header.tsx
    Notes.tsx
    NotesList.tsx
  main.tsx
  models/
    note.model.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
