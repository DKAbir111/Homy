import axios from "axios"


export default async function photoUpload(photo) {
    //API KEY
    const apiKey = import.meta.env.VITE_PHOTO_API_KEY
    const formData = new FormData
    formData.append('image', photo)
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`, formData)
    return data.data.display_url

}
