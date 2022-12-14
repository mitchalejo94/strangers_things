// //BASE URL
// export const URL =
//   "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT";

// //HELPER FUNCTIONS
// const makeHeaders = (token) => {
//   const headers = {
//     "Content-Type": "application/json",
//   };

//   if (token) {
//     headers["Authorization"] = `Bearer ${token}`;
//   }
//   return headers;
// };

// //CallAPI
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

// //FETCH FUNCTIONS

// export const fetchPosts = async (token) => {
//   try {
//     const { success, error, data } = await callAPI("/posts", {
//       token: token,
//     });

//     if (success) {
//       return {
//         error: null,
//         posts: data.posts,
//       };
//     } else {
//       return {
//         error: error.message,
//         posts: [],
//       };
//     }
//   } catch (error) {
//     console.error("There was an error loading Posts", error);

//     return {
//       error: "Failed to load Posts",
//       posts: [],
//     };
//   }
// };

// // export const fetchPosts = async () => {
// //   try {
// //     const response = await fetch(`${URL}/posts`);
// //     console.log("Response", response);
// //     const { data } = await response.json();
// //     return data.posts;
// //   } catch (error) {
// //     console.error("Error fetching Posts", error);
// //   }
// // };

// export const registerUser = async (username, password) => {
//   try {
//     const { success, error, data } = await callAPI("/users/register", {
//       method: "POST",
//       body: {
//         user: {
//           username,
//           password,
//         },
//       },
//     });

//     if (success) {
//       return {
//         error: null,
//         token: data.token,
//         message: data.message,
//       };
//     } else {
//       return {
//         error: error.message,
//         token: null,
//         message: null,
//       };
//     }
//   } catch (error) {
//     console.error("Cant register user,", error);

//     return {
//       error: "Registration Failed",
//       token: null,
//       message: null,
//     };
//   }
// };

// export const fetchGuest = async (token) => {
//   try {
//     const { success, error, data } = await callAPI("/users/me", {
//       token: token,
//     });
//     if (success) {
//       return {
//         error: null,
//         username: data.username,
//       };
//     } else {
//       return {
//         error: error.message,
//         username: null,
//       };
//     }
//   } catch (error) {
//     console.error(error, "did not fetch guest");
//     return {
//       error: "Failed to load username info",
//       username: null,
//     };
//   }
// };

// export const loginUser = async (username, password) => {
//   try {
//     const { success, error, data } = await callAPI("/users/login", {
//       method: "POST",
//       body: {
//         user: {
//           username,
//           password,
//         },
//       },
//     });

//     if (success) {
//       return {
//         error: null,
//         token: data.token,
//         message: data.message,
//       };
//     } else {
//       return {
//         error: error.message,
//         token: null,
//         message: null,
//       };
//     }
//   } catch (error) {
//     console.error(error, "error logging in users");

//     return {
//       error: "Log in Failed.",
//       token: null,
//       message: null,
//     };
//   }
// };

// export const createPost = async (
//   token,
//   title,
//   description,
//   price,
//   location,
//   willDeliver
// ) => {
//   try {
//     const post = {
//       description: description,
//     };
//     if (location) {
//       post.location = location;
//     }
//     if (price) {
//       post.price = price;
//     }
//     if (willDeliver) {
//       post.willDeliver = willDeliver;
//     }
//     const { success, error, data } = await callAPI("/posts", {
//       token: token,
//       method: "POST",
//       body: {
//         post: {
//           title,
//           description,
//           price,
//           location,
//           willDeliver,
//         },
//       },
//     });
//     if (success) {
//       return {
//         error: null,
//         post: data.post,
//       };
//     } else {
//       return {
//         error: null,
//         post: data.post,
//       };
//     }
//   } catch (error) {
//     console.error(error, "error posting posts");

//     return {
//       error: "Failed to create post",
//       post: null,
//     };
//   }
// };

// export const deletePost = async (token, postId)=>{
//   try{
//     const {success, error, data} = await callAPI(`/posts/${postId}`,{
//       method:"DELETE",
//       token: token
//     })
//     if (success){
//       return {
//         error: null,
//         data: null
//       }
//     }else{
//       return{
//         error: error.message,
//         data: null
//       }
//     }
//   }catch(error){
//     console.error(error, "delete /posts/postsID FAILED");
//     return{
//       error:"Failed to delete post",
//       data:null
//     }
//   }
// }

// export const addComment = async (token, postId, message) => {
//   try {
//     const { success, error, data } = await callAPI(`/posts/${postId}/messages`, {
//       token: token,
//       method: "POST",
//       body: {
//         message: {
//         content: message
//         },
//       },
//     });

//     if (success) {
//       return {
//         success: success,
//         error: null,
//         message: data.message
//       };
//     } else {
//       return {
//         success: success,
//         error: error.message,
//         message: null
//       };
//     }
//   } catch (error) {
//     console.error(`Post /posts/${postId}/messages failed:`, error);

//     return {
//       success: false,
//       error: 'Failed to create message for post',
//       message: null
//     };
//   };
// }


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
// export const fetchPosts = async () => {
//   try {
//     const response = await fetch(`${URL}/posts`);
//     console.log("Response", response);
//     const { data } = await response.json();
//     return data.posts;
//   } catch (error) {
//     console.error("Error fetching Posts", error);
//   }
// };

export const fetchPosts = async (token) => {
  try {
    const {success, error, data} = await callAPI('/posts', {
      token: token
    });
    if (success) {
      return {
        error: null,
        posts: data.posts
      };
    } else {
      return {
        error: error.message,
        posts: []
      };
    }
  } catch (error) {
    console.error("There was an error registering the user,", error);
    return {
      error: 'Failed to load Posts',
      posts: []
    };
  }
};

export const registerUser = async (username, password) => {
  try {
    const { success, error, data } = await callAPI("/users/register", {
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
    console.error("Cant register user,", error);

    return {
      error: "Registration Failed",
      token: null,
      message: null,
    };
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
    const { success, error, data } = await callAPI('/users/me', {
      token: token,
    });
    if (success) {
      return {
        error: null,
        username: data.username,
      };
    } else {
      return {
        error: error.message,
        username: null,
      };
    }
  } catch (error) {
    console.error(error, "did not fetch guest");
    return {
      error: "Failed to load username info",
      username: null,
    };
  }
};

export const loginUser = async (username, password) => {
  try {
    const { success, error, data } = await callAPI("/users/login", {
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
    console.error(error, "error logging in users");

    return {
      error: "Log in Failed.",
      token: null,
      message: null,
    };
  }
};

export const createPost = async (token, title, description, price, location, willDeliver) => {
  try{
    const post = {
      description:description
    }
    if (location){
      post.location = location
    }
    if(price){
      post.price = price
    }
    const {success, error,data}= await callAPI('/posts',{
      token: token,
      method: "POST",
      body:{
        post:{
          title,
          description,
          price,
          location,
          willDeliver
        }
      }
    })
    if (success){
      return{
        error:null,
        post: data.post
      }
    }else{
      return{
        error:null,
        post:data.post
      }
    }
  }catch(error){
    console.error(error, "error posting posts");

    return{
      error: 'Failed to create post',
      post: null
    }
  }
}


export const addComment = async (token, postId, message) => {
  try {
    const { success, error, data } = await callAPI(`/posts/${postId}/messages`, {
      token: token,
      method: "POST",
      body: {
        message: {
        content: message
        },
      },
    });

    if (success) {
      return {
        success: success,
        error: null,
        message: data.message
      };
    } else {
      return {
        success: success,
        error: error.message,
        message: null
      };
    }
  } catch (error) {
    console.error(`Post /posts/${postId}/messages failed:`, error);

    return {
      success: false,
      error: 'Failed to create message for post',
      message: null
    };
  };
}

export const deletePost = async (token, postId)=>{
  try{
    const {success, error, data} = await callAPI(`/posts/${postId}`,{
      method:"DELETE",
      token: token
    })
    if (success){
      return {
        error: null,
        data: null
      }
    }else{
      return{
        error: error.message,
        data: null
      }
    }
  }catch(error){
    console.error(error, "delete /posts/postsID FAILED");
    return{
      error:"Failed to delete post",
      data:null
    }
  }
}