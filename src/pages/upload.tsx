import { useEffect, useState } from "react";
import axios from "axios";

export const UploadPage = () => {
  const [file, setFiles] = useState<File []>([]);
  const [folderName, setFolderName] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);

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
      const response = await axios.post("/products/upload", formData, {
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

  const retreiveImageUrls = async (folderName: string) => {
    try {
      const response = await axios.get("/products/images", {
        params: {
          folderName: folderName
        }
      });
      setImageUrls(response.data);
    } catch (error) {
      console.error('Error retreiving image Urls:', error);
      setImageUrls([])
    }
  };

  useEffect(() => {
    retreiveImageUrls(folderName);
  }, [folderName]);
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
      <h3>Retreived Images</h3>
      {imageUrls.length > 0 ? (
        <div>
          {imageUrls.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Image ${index}`} />
          ))}
        </div>
      ) : (
        <p>No images found</p>
      )}
    </div>
  );
};
