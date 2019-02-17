import axios from "axios";

function _callApi(keyword) {
  const urlString =
    keyword === ""
      ? `http://munsangdong.cafe24.com/api/card`
      : `http://munsangdong.cafe24.com/api/card?keyword=${keyword}`;
  
  return axios.get(urlString)
}; 
  
export default _callApi;