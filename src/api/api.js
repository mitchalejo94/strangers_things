// import Register from "./Register"
export const URL =
  "https://strangers-things.herokuapp.com/api/2207-FTB-ET-WEB-PT";

const makeHeaders = (token) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
};

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
export async function fetchPosts() {
  try {
    const data = await fetch(`${URL}/posts`);
    const result = await data.json();
    return result;
  } catch (error) {}
}
// export async function NewPost(token, details) {

//     //* might need to be in a try catch
//         const response = await fetch (`${apiKey}${cohortName}/posts`,{
//             method:"POST",
//             headers:{
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify({
//                 post:{
//                     title:details.title,
//                     description: details.description,
//                     location: details.location,
//                     price: details.price,
//                     willDeliver: details.willDeliver
//                 }
//             })
//         }).then((response => response.json()))
//         .then(result => {
//           console.log(result)
//         })
//         .catch(console.error)
//     }
export const NewPost = async (
  token,
  title,
  description,
  price,
  location,
  willDeliver
) => {
  try {
    const post = {
      description: description,
    };

    if (location) {
      post.location = location;
    }

    if (price) {
      post.price = price;
    }

    if (willDeliver) {
      post.willDeliver = willDeliver;
    }

    const { success, error, data } = await callAPI("/posts", {
      token: token,
      method: "POST",
      body: {
        post: {
          title,
          description,
          price,
          location,
          willDeliver,
        },
      },
    });

    if (success) {
      return {
        error: null,
        post: data.post,
      };
    } else {
      return {
        error: error.message,
        post: null,
      };
    }
  } catch (error) {
    console.error("Post /posts failed:", error);

    return {
      error: "Failed to create Post",
      post: null,
    };
  }
};

//     const response = await fetch(`${apiKey}${cohortName}/posts`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({
//         post: {
//             title:details.title,
//             description: details.description,
//             location: details.location,
//             price: details.price,
//             willDeliver: details.willDeliver
//         }
//     })
//   }).then (response=>response.json ())
//   .then(result =>{
//     console.log(result);
//   }).catch(console.error)

export async function createUser(username, password) {
  try {
    const response = await fetch(`${URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    console.log(response, "response");
    const data = await response.json();
    console.log(data, "data");
    return data;
  } catch (error) {
    throw error;
  }
}

// export const getGuest = async (token)=>{
//     try{
//         const {success, error, data} = await callAPI

//     }
// }
