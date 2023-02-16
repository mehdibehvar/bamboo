import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {

    const expectedError =
      error.response &&
      error.response.state >= 400 &&
      error.response.status < 500;
    const problem = error
    if (!expectedError) {
      return problem
    }
    return Promise.reject(error);
  }
);
// axios.interceptors.request.use((config) => {
//   const token = getItem('token')
//   config.headers = config.headers || {}
//   config.headers['x-auth-token'] = JSON.parse(token)
//   return config
// })


const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default methods;