import axios from "axios";
// import Swal from "sweetalert2";
const client = axios.create({
  baseURL: ``,
});
// client.interceptors.request.use(async (config) => {
//   let _authToken = "";
//   _authToken = await getItem("_authToken");
//   config.headers.Authorization = _authToken;
//   return config;
// });
client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    // if (error.response.status !== 200) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "خطا",
    //     text: error.response.status + ":: " + error.response.message,
    //   });
    // }
    return Promise.reject(error);
  }
);
export default client;
