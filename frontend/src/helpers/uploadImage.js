const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`
console.log("Cloud name:", process.env.REACT_APP_CLOUD_NAME_CLOUDINARY);

const uploadImage  = async(image) => {
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset","mern_product")
    

    const dataResponse = await fetch(url,{
        method : "post",
        body : formData
    })

    return dataResponse.json()

}

export default uploadImage 

// const uploadImage = async (image) => {
//   const cloudName = process.env.REACT_APP_CLOUD_NAME_CLOUDINARY;
//   const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

//   const formData = new FormData();
//   formData.append("file", image);
//   formData.append("upload_preset", "mern_product");

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     // ✅ Return secure_url in object
//     return { url: data.secure_url };
//   } catch (err) {
//     console.error("Image Upload Error:", err.message);
//     return { url: "" };
//   }
// };

// export default uploadImage;
