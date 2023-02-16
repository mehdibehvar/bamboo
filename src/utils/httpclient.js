import axios from "axios";
import http from "./interceptor/http.interceptor";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";
export async function axiosGet(url) {
    return  axios.get(url)
    .then(response=>response.data)
    .catch(error=>console.log(error))
   
}


export const getAllCourses = async () => {
  try {
    const result = await http.get('api/course/getall');
    
    return result.data
  } catch (error) {
    console.log(error);
  }
  return {};
};
export const getCourse = async (id) => {
  try {
    const result = await http.get(`api/course/${id}`);
    
    return result.data
  } catch (error) {
    console.log(error);
  }
  return {};
};

