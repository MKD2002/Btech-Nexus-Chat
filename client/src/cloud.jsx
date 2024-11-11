import axios from "axios";
export const ImageUpload = async (files) => {
    // const files = e.target.files;
    let cloud_name = "dagswsyyf";
    let upload_preset = "zvgzc2la" ;

    // Initialize an array to store the URLs of the uploaded images
    let mediaURLs = [];
      let formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", upload_preset);

      // Determine the Cloudinary endpoint for image upload
      const uploadEndpoint = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

      try {
        const response = await axios.post(uploadEndpoint, formData);
        if (response.status === 200) {
          const mediaURL = response.data.secure_url;
          console.log(mediaURL)
          mediaURLs.push(mediaURL);
        } else {
          console.error("Media upload failed for file:", files[i].name);
        }
      } catch (error) {
        console.error("An error occurred during media upload:", error);
      }

    console.log(mediaURLs)
    return mediaURLs;
  };
