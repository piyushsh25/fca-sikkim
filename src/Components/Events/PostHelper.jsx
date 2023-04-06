import axios from "axios"
import { toast } from "react-toastify"

export const poststate = {
    header1: "",
    header2: "",
    header3: "",
    header4: "",
    header5: "",
    header6: "",
    header7: "",
    description1: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    description6: "",
    description7: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
}
export const reducerFunction = (state, action) => {
    switch (action.type) {
        case "setHeader1":
            return { ...state, header1: action.payload }
        case "setHeader2":
            return { ...state, header2: action.payload }
        case "setHeader3":
            return { ...state, header3: action.payload }
        case "setHeader4":
            return { ...state, header4: action.payload }
        case "setHeader5":
            return { ...state, header5: action.payload }
        case "setHeader6":
            return { ...state, header6: action.payload }
        case "setHeader7":
            return { ...state, header7: action.payload }
        case "setDescription1":
            return { ...state, description1: action.payload }
        case "setDescription2":
            return { ...state, description2: action.payload }
        case "setDescription3":
            return { ...state, description3: action.payload }
        case "setDescription4":
            return { ...state, description4: action.payload }
        case "setDescription5":
            return { ...state, description5: action.payload }
        case "setDescription6":
            return { ...state, description6: action.payload }
        case "setDescription7":
            return { ...state, description7: action.payload }
        case "setImg1":
            return { ...state, img1: action.payload }
        case "setImg2":
            return { ...state, img2: action.payload }
        case "setImg3":
            return { ...state, img3: action.payload }
        case "setImg4":
            return { ...state, img4: action.payload }
        case "setImg5":
            return { ...state, img5: action.payload }
        case "setImg6":
            return { ...state, img6: action.payload }
        case "setImg7":
            return { ...state, img7: action.payload }
        default:
            return state
    }
}
export const generateImg = async (e, dispatch, imgDispatch) => {
    const actionType = e.target.dataset.img
    try {
        const data = new FormData()
        const image = e.target.files[0]
        imgDispatch({ type: actionType, for: actionType, payload: "pending" })
        data.append("file", image)
        data.append("upload_preset", process.env.REACT_APP_FOLDER_NAME)
        data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME)
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`, data)
        dispatch({ type: actionType, payload: response.data.url })
        imgDispatch({ type: actionType, for: actionType, payload: "success" })
    } catch (err) {
        toast.error("Error Uploading!")
        imgDispatch({ type: actionType, for: actionType, payload: "error" })
    }
}