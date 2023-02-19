import axios from "axios";
import http from "./interceptor/http.interceptor";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";
axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";
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
export const getPagination = async (pagenumber,pagesize) => {
  try {
    const result = await http.get(`/api/course/list?`,{params:{
      pagenumber,
      pagesize
    }}); 
    return result.data;
  } catch (error) {
    console.log(error);
  }
  return {};
};

export const loginUser=async (data)=>{
  try {
    const result=await http.post("/api/auth/login",{email:data.email,password:data.password});
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const CourseRegister=async (userId,courseId)=>{
  try {
    const result=await http.post(`/api/course/addStudentToCourse/${userId}`,{courseId});
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const getStudentById = async (id) => {
  try {
    const result = await http.get(`/api/student/${id}`);
    
    return result.data
  } catch (error) {
    console.log(error);
  }
  return {};
};