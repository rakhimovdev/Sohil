import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Upload.css"

function App() {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    await axios.post('http://localhost:5000/upload', formData);
    fetchFiles();

    // 🔽 Faylni tozalash (input va state)
    setFile(null);
    document.querySelector('.custom-file').value = null;
  };

  const fetchFiles = async () => {
    const res = await axios.get('http://localhost:5000/files');
    setFiles(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/delete/${id}`);
    fetchFiles();
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className='upload'>
      <div className='send'>
        <h1>File Upload</h1>
        <div>
          <input
            type="file"
            className="custom-file"
            onChange={handleFileChange}
          />
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
      <div className="main_upload">
        <h2>Uploaded Files:</h2>
        <div className="card">
          <ul>
            {files.map(file => (
              <li key={file._id}>
                <img
                  src={`http://localhost:5000/${file.path}`}
                  className='uploaded_images'
                  alt={file.filename}
                />
                <br />
                <button className='delete_btn' onClick={() => handleDelete(file._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
