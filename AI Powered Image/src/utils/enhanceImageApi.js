const API_KEY = ""
const ASE_URL = "https://techk.aoscdn.com/";
export const enhancedImageAPI = async (file) => {
    try{
        const taskId = await uploadImage(file);
        console.log("Image Uploaded Successfully, Task ID:", taskId);

        const enhacedImageData = await fetchEnhancedImage(taskId);
        console.log("Enhanced Image Data:" , enhacedImageData);

        console.log(enhacedImageData);
        // return enhacedImageData;
    } catch (error) {
        console.log("Error enhancing image:", error.message);
    }
};


const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);

    const {data } = await axios.post(`${ASE_URL}/api/tasks/visual/scale`,
        formData,
        {
            headers: {
                "Content-Type": multipart/form-data, 
                "X-API_KEY" : API_KEY,
            }
        },
    );

    if(!data?.data?.task_id){
        throw new Error("Failed to upload image! Task ID not found.");
    }
    // code to upload image
    // "/api/tasks/visual/scale" --post
    console.log(data);
    return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
    // fetch enhanced image
    // /api/tasks/visual/scale/{task_id} ---get
    const {data} = await axios.get(
        `${ASE_URL}/api/tasks/visual/scale.${taskId}`, 
        {
            headers: {
                "X-API-KEY" : API_KEY,
            },
        }
    );
    return data.data.image;
};

