import React, { useEffect, useState } from 'react'
import "./About.css"
import axios from 'axios';
// import img1 from "../../images/1.jpg"
// import img2 from "../../images/2.jpg"
// import img3 from "../../images/3.jpg"
// import img4 from "../../images/4.jpg"
// import img5 from "../../images/5.jpg"
// import img6 from "../../images/6.jpg"
// import img7 from "../../images/7.jpg"
// import img8 from "../../images/8.jpg"
// import img9 from "../../images/9.jpg"
function About() {

      const [file, setFile] = useState(null);
      const [files, setFiles] = useState([]);

      const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    await axios.post('http://localhost:5000/upload', formData);
    fetchFiles();
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
        <div className="About_1">
            <div className='About'>
                <div className="main_about">
                    <div className="">
                        <h1 className='first_comment'>Sohil Bo'yi Oilaviy Dam Olish Maskani</h1>
                        <a href="/bron">
                            <button>Hona Band Qilish</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container">
                {files.map(file => (
          <li key={file._id}>
            <img src={`http://localhost:5000/${file.path}`} alt={file.filename} width="200" />
            <br />
            <button onClick={() => handleDelete(file._id)}>Delete</button>
          </li>
        ))}
            </div>
        </div>
    )
}

export default About
