import { useState } from "react";
import axios from "axios";

export const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const userID = window.localStorage.getItem('userID');
      // console.log(userID);
      const formData = new FormData();
  
      if (file) {
        formData.append('file', file, file.name);
      }
      // const data = {
      //   formData,
      //   userID: userID,
      // };
      const response = await axios.post("http://localhost:3001/products/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        params: {
          userID: userID
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
          <input type="file" id="file" name="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};
