import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/files')
      .then(res => setFiles(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Yuklangan rasmlar:</h2>
      {files.length === 0 && <p>Hozircha fayl yo'q.</p>}
      {files.map(file => (
        <div key={file._id} style={{ margin: "10px 0" }}>
          <img 
            src={`http://localhost:5000/uploads/${file.filename}`} 
            alt={file.originalname} 
            width="300" 
          />
          <p>{file.originalname}</p>
        </div>
      ))}
    </div>
  );
}

export default FileList;
