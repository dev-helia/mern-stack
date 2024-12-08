# Learn MERN Stack Tutorial - Common Issues & Solutions

This project is based on the Learn The MERN Stack tutorial on YouTube. During the implementation process, I encountered several issues that caused the code to not work as expected. Below is a summary of the problems and their solutions.
This repository documents common issues encountered during the development process and provides clear solutions for each.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Common Issues](#common-issues)
   - [1. If-Else Logic in React Components](#1-if-else-logic-in-react-components)
   - [2. Deprecated Methods](#2-deprecated-methods)
   - [3. React and Redux Version Compatibility](#3-react-and-redux-version-compatibility)
3. [How to Contribute](#how-to-contribute)
4. [License](#license)

---

## Project Overview

This project showcases the basic functionality of a MERN (MongoDB, Express.js, React, Node.js) stack application, including user authentication, goal management (CRUD), and state management using Redux Toolkit. As the tutorial progresses, developers often encounter a few tricky bugs and errors. This README captures those moments to save others time and frustration.

---

## Common Issues

### 1. If-Else Logic in React Components

#### **Problem:**

In the `Dashboard.jsx` file, using a simple `if` without an `else` caused the application to behave unpredictably. Specifically, navigation to `/login` did not work as expected.

#### **Solution:**

Always pair an `if` with an `else` to ensure React's render flow is consistent.

```javascript
useEffect(() => {
    if (!user) {
        navigate('/login');
    } else {
        dispatch(getGoals());
    }

    return () => {
        dispatch(reset());
    };
}, [user, navigate, dispatch]);
```

#### **Key Takeaway:**

React's rendering is sensitive to incomplete logic structures. Always account for both `if` and `else` cases when managing conditional logic.

---

### 2. Deprecated Methods

#### **Problem:**

Warnings about deprecated methods like `findByIdAndRemove` appeared during the project.

#### **Solution:**

Replace deprecated MongoDB methods `remove()` with their updated counterparts. For instance:

```javascript
await Goal.findByIdAndDelete(req.params.id);
```

#### **Key Takeaway:**

Check the documentation for updates on methods and APIs when working with MongoDB or other evolving technologies. Always use the recommended methods to ensure compatibility and future-proofing.

---

### 3. React and Redux Version Compatibility

#### **Problem:**

The project used React 19, which is incompatible with Redux Toolkit and other dependencies that currently support React 16, 17, or 18.

#### **Solution:**

Downgrade React and React-DOM to version 18 for compatibility. Steps:

1. Uninstall current React packages:

   ```bash
   npm uninstall react react-dom
   ```

2. Install compatible versions:

   ```bash
   npm install react@18 react-dom@18
   ```

3. Reinstall other dependencies if needed:

   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

4. Clear cache and reinstall all dependencies:

   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

#### **Key Takeaway:**

Newer isn't always better. Match the version of your libraries with the ecosystem's current stability to avoid unnecessary issues.

---


## License

This project is open-sourced under the MIT License.

