# WriteStack using React + Appwrite

A blogging application built with **React** and **Appwrite**. It provides a simple UI for readers and advanced features for authors, including authentication, blog post creation, editing, rich text content, and content management.

---

## Features

- User signup, login, logout (Appwrite Auth)
- Create, edit, delete blog posts
- Rich text editor for writing posts (TinyMCE or similar)
- View posts in a public feed
- Individual post pages with formatted content
- Protected author dashboard
- State management with Redux Toolkit
- Form handling with React Hook Form
- Routing with React Router

---

## Tech Stack

| Category      | Tool/Library              |
|---------------|----------------------------|
| Frontend      | React (Vite or CRA)        |
| Backend       | Appwrite Cloud / Self-host |
| State         | Redux Toolkit              |
| Routing       | React Router               |
| Forms         | React Hook Form            |
| Editor        | TinyMCE or similar         |
| Parsing       | HTML React Parser          |

---

## Project Setup

### 1. Clone the repository
```sh
git clone https://github.com/AnshGupta01/WriteStack.git
cd WriteStack
```

### 2. Install dependencies
```sh
npm install
```

### 3. Setup ENV File
```sh
use given sample env as a starting point

VITE_APPWRITE_ENDPOINT=https://your-appwrite-endpoint/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_posts_collection
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

### 4. Run the Project
```sh
npm run dev
```