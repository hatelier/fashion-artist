import { useState } from "react";
import axios from "axios";

export const UploadPage = () => {
  const [file, setFiles] = useState<File []>([]);
  const [folderName, setFolderName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFiles = Array.from(event.target.files);
      setFiles(selectedFiles);
    }
  };

  const handleFolderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const userID = window.localStorage.getItem('userID');
      // console.log(userID);
      const formData = new FormData();
  
      if (file.length > 0) {
        file.forEach((f) => {
          formData.append('file', f, f.name);
        });
      }
      // const data = {
      //   formData,
      //   userID: userID,
      // };
      const response = await axios.post("http://localhost:3001/products/upload", formData, {
        headers: {},
        params: {
          userID: userID,
          folderName: folderName
        }
      });
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h2>Upload Page</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data"> 
        <div>
          <label htmlFor="file">File:</label>
          <input type="file" id="file" name="file" onChange={handleFileChange} multiple />
        </div>
        <div>
          <label htmlFor="folderName">Folder Name:</label>
          <input type="text" id="folderName" name="folderName" value={folderName} onChange={handleFolderChange}/>
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};
