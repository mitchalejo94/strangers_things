// import Register from "./Register"
export const URL =
  "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT";

  // const makeHeaders = (token) => {
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };
  
  //   if (token) {
  //     headers["Authorization"] = `Bearer ${token}`;
  //   }
  //   return headers;
  // };


  // const callAPI = async (endpointPath, defaultOptions = {}) => {
  //   const { token, method, body } = defaultOptions;
  
  //   const options = {
  //     headers: makeHeaders(token),
  //   };
  
  //   if (method) {
  //     options.method = method;
  //   }
  
  //   if (body) {
  //     options.body = JSON.stringify(body);
  //   }
  
  //   const response = await fetch(`${URL}${endpointPath}`, options);
  //   const result = await response.json();
  
  //   return result;
  // };

export const fetchPosts = async ()=>{
  try{
    const response = await fetch (`${URL}/posts`)
    console.log("Response", response);
    const {data} = await response.json()
    return data.posts
  }catch (error){
    console.error("Error fetching Posts", error);
  }
}