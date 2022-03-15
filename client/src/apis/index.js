import axios from "axios";
// create an instance of axios to get data from api without writing full URL
export default axios.create({
  baseURL: "https://mern-flores-tambo.herokuapp.com",
});
