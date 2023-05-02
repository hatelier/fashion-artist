import { useState } from 'react';

export const Products = () => {
    return (
        <div>Products</div>
    );
}

// const Files = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const onFileChange = (event) => {
//         setSelectedFile(event.target.files[0]);
//     };

//     const onSubmit = async (event) => {
//         event.preventDefault();;
//         try {
//             const formData = new FormData();
//             formData.append('files', selectedFile);
//             const response = await fetch ("http://localhost:3001/products", {
//                 method: "POST",
//                 body: formData,
//             });
//             console.log("File uploaded successfully");
//         }
//         catch(error) {
//             console.log("Error uploading file");
//         }
//     };
//     return <ProductForm onFileChange={onFileChange} onSubmit={onSubmit} />;
// };

// const ProductForm = ({onFileChange, onSubmit}) => {
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input type='file' onChange={onFileChange} />
//                 <button type='submit'>Upload</button>
//             </form>
//         </div>
//     );
// };