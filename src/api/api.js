//BASE URL 
export const URL =
  "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT";

  //HELPER FUNCTIONS 
  const makeHeaders = (token) => {
    const headers = {
      "Content-Type": "application/json",
    };
  
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
  };

//CallAPI
  const callAPI = async (endpointPath, defaultOptions = {}) => {
    const { token, method, body } = defaultOptions;
  
    const options = {
      headers: makeHeaders(token),
    };
  
    if (method) {
      options.method = method;
    }
  
    if (body) {
      options.body = JSON.stringify(body);
    }
  
    const response = await fetch(`${URL}${endpointPath}`, options);
    const result = await response.json();
  
    return result;
  };

//FETCH FUNCTIONS 
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

export const fetchGuest = async (token) => {
  try {
    const {success, error, data} = await callAPI('/users/me', {
      token: token
    });

    if (success) {
      return {
      error: null,
      username: data.username
      }
    } else {
      return {
        error: error.message,
        username: null
      }
    }
  } catch (error) {
    console.error('failed to fetch guest', error)

    return {
      error: 'Failed to load username information',
      username: null
    };
  }
};

export const registerUser = async (username, password) => {
  try {
  const response = await fetch(`${URL}/users/register`, { method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username,
      password,
    },
  }),
  });
  console.log("response", response)
  const data = await response.json();
  console.log("data", data)
  return data;
} catch(error) {
  console.error("Cant register user,", error);
}
};
