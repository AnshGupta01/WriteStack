# WriteStack

A modern, full-stack blogging platform built with React and Appwrite. WriteStack empowers users to create, publish, and manage rich-content blog posts with a sleek dark-themed UI and seamless authentication.

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![Appwrite](https://img.shields.io/badge/Appwrite-1.8.x-F02E65?logo=appwrite)](https://appwrite.io/)
[![Material-UI](https://img.shields.io/badge/MUI-5.x-007FFF?logo=mui)](https://mui.com/)

---

## ✨ Features

- 🔐 **Secure Authentication** - User signup, login, and session management via Appwrite Auth
- ✍️ **Rich Text Editor** - Write and format posts with a powerful WYSIWYG editor (TinyMCE)
- 📝 **Full CRUD Operations** - Create, read, update, and delete blog posts
- 🖼️ **Image Management** - Upload and manage featured images for posts
- 🎨 **Modern UI** - Beautiful dark theme with gradient accents and responsive design
- 🔒 **Protected Routes** - Author-only access to edit/delete functionality
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds

---

## 🛠️ Tech Stack

**Frontend:** React 18, Material-UI (MUI), Redux Toolkit, React Router, React Hook Form  
**Backend:** Appwrite (Authentication, Database, Storage)  
**Editor:** TinyMCE Rich Text Editor  
**Build Tool:** Vite  
**Styling:** MUI Theme with custom gradients and dark mode

---

## 🚀 Quick Start

### Prerequisites
- Node.js and npm
- Appwrite account (cloud or self-hosted)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnshGupta01/WriteStack.git
   cd WriteStack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_APPWRITE_ENDPOINT='endpoint'
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_TABLE_ID=your_posts_collection_id
   VITE_APPWRITE_BUCKET_ID=your_storage_bucket_id
   ```

4. **Set up Appwrite**
   - Create a new project in Appwrite
   - Create a database and a posts collection with attributes: `title`, `slug`, `content`, `featuredImage`, `status`, `userId`
   - Create a storage bucket for featured images with public read permissions
   - Enable Email/Password authentication

5. **Run the development server**
   ```bash
   npm run dev
   ```

---

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header/      # Navigation bar
│   ├── Footer/      # Footer with social links
│   └── post-form/   # Post creation/editing form
├── pages/           # Route-level page components
├── appwrite/        # Appwrite service configurations
├── store/           # Redux slices and store
├── theme/           # MUI theme customization
└── conf/            # Environment configuration
```

---

##  Usage

1. **Sign Up / Login** - Create an account or log in with existing credentials
2. **Browse Posts** - View all published posts on the home page
3. **Create Post** - Click "Add Post" to create a new blog entry with a featured image
4. **Edit/Delete** - Authors can manage their own posts via edit and delete buttons
5. **Rich Content** - Use the TinyMCE editor to format text, add images, and style your posts


---
## 👤 Author

**Ansh Gupta**
- GitHub: [@AnshGupta01](https://github.com/AnshGupta01)
- LinkedIn: [anshexe](https://linkedin.com/in/anshexe)

---

## 📸 Screenshots