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
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${URL}/posts`);
    console.log("Response", response);
    const { data } = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching Posts", error);
  }
};

// export const fetchGuest = async (token) => {
//   try {
//     const {success, error, data} = await callAPI('/users/me', {
//       token: token
//     });

//     if (success) {
//       return {
//       error: null,
//       username: data.username
//       }
//     } else {
//       return {
//         error: error.message,
//         username: null
//       }
//     }
//   } catch (error) {
//     console.error('failed to fetch guest', error)

//     return {
//       error: 'Failed to load username information',
//       username: null
//     };
//   }
// };

export const registerUser = async (username, password) => {
  try {
    const {success, error, data} = await fetch(`${URL}/users/register`, {
      method: "POST",
      body:{
        guest:{
          username,
          password,
        }
      }
      })

    if (success){
      return{
        error: null,
        token:data.token,
        message:data.message
      }
    }else{
      return{
        error: error.message,
        token: null,
        message: null,
      }
    }
  } catch (error) {
    console.error("Cant register user,", error);

    return{
      error: "Registration Failed",
      token: null,
      message: null,
    }
  }
};

export const fetchGuest = async (token) => {
  try {
  //   const response = await fetch(`${URL}/guests/me`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   const { data } = await response.json();
  //   return data;
  // } catch {
  //   console.log(error);
  const {success, error, data} = await callAPI ('/users/me',{
    token:token
  })
  if(success){
    return {
      error:null,
      username: data.username
    }
  }else{
    return{
      error: error.message,
      username:null
    }
  }
  }catch(error){
    console.error(error, "did not fetch guest");
    return{
      error: 'Failed to load username info',
      username: null

    }
  }
};

export const loginUser = async (username, password) => {
  try {
    const { success, error, data } = await callAPI('users/login', {
      method: "POST",
      body: {
        user: {
          username,
          password,
        },
      },
    });

    if (success) {
      return {
        error: null,
        token: data.token,
        message: data.message,
      };
    } else {
      return {
        error: error.message,
        token: null,
        message: null,
      };
    }
  } catch (error) {
    console.error(error, "error registering users");

    return {
      error: "Registration Failed.",
      token: null,
      message: null,
    };
  }
};
