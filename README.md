# **React Image Uploader with Express and Node.js**

This project is an **image uploading system** built using **React** on the frontend and **Express** with **Node.js** on the backend. It enables users to upload images from their local device and securely store them on the server. 

**Note:** Since GitHub does not support server side code (e.g., the Node.js portion of this app), the front end will not work.  However, the frontend and backend code is provided in the repository!

#### **Key Features:**
- **Image Selection:** Users can easily browse and select image files (e.g., JPG, PNG) from their local machine for upload.
- **Image Validation:** The system ensures only valid image formats (e.g., JPG, PNG) are allowed, along with size validation to prevent overly large uploads.
- **Preview Feature:** Users can preview selected images before uploading, offering a visual confirmation of the image choice.
- **Progress Bar:** A real-time progress bar displays upload progress, providing feedback as the image is sent to the server.
- **Asynchronous Uploads:** The images are uploaded asynchronously via RESTful API calls to the Node.js server, resulting in a smooth user experience without page refreshes.
- **Backend API with Express:** The Express server receives image upload requests, processes the files, and securely stores them on the server.
- **Error Handling:** Integrated error handling addresses potential issues like invalid file types, large image sizes, or network errors.
- **Responsive Design:** The uploader is fully responsive, ensuring a seamless experience across desktop and mobile devices.
  
#### **Tech Stack:**
- **Frontend:** React, CSS3, HTML5, Axios
- **Backend:** Node.js, Express
- **API:** RESTful API for handling image uploads
- **Other:** FormData for sending image data, JavaScript (ES6+)

This project demonstrates how to build a user-friendly image upload system using React for the frontend, combined with Node.js and Express on the backend, ensuring secure and efficient image handling.
