import React, { useState, useEffect } from 'react';
import Api from '../../Api/Axios';
import "./Upload.css";

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

    try {
      await Api.post('/upload', formData);
      fetchFiles();

      setFile(null);
      document.querySelector('.custom-file').value = null;
    } catch (err) {
      console.error("Yuklashda xatolik:", err);
    }
  };

  const fetchFiles = async () => {
    try {
      const res = await Api.get('/files');
      setFiles(res.data);
    } catch (err) {
      console.error("Fayllarni olishda xatolik:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await Api.delete(`/delete/${id}`);
      fetchFiles();
    } catch (err) {
      console.error("O‘chirishda xatolik:", err);
    }
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
                  src={`https://sohil-backend-1.onrender.com/${file.path}`}
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
