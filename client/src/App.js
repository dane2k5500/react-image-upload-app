import React from 'react';
import FileUploads from './components/FileUploads';
import './App.css';


const App = () => (<div className='container mt-4'>
    <h5 className='display-4 text-center mb-4'>
        React File Upload
    </h5>
    <FileUploads />
</div>
);

export default App;
