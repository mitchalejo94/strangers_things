// import Register from "./Register"
export const apiKey = "https://strangers-things.herokuapp.com/api/";
export const cohortName = "2207-FTB-ET-WEB-PT";

export async function fetchPosts() {
  try {
    const data = await fetch(`${apiKey}${cohortName}/posts`);
    const result = await data.json();
    return result;
  } catch (error) {}
}

export async function NewPost(token, details) {
 
    //* might need to be in a try catch

    const response = await fetch(`${apiKey}${cohortName}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
        post: {
            title:details.title,
            description: details.description,
            location: details.location,
            price: details.price,
            willDeliver: details.willDeliver
        }
    })
  }).then (response=>response.json ())
  .then(result =>{
    console.log(result);
  }).catch(console.error)
}

export async function createUser(username, password) {
  try {
    const response = await fetch(`${apiKey}${cohortName}/users/register`, {
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
    return response;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${apiKey}${cohortName}/users/login`, {
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
    return response;
  } catch (error) {
    throw error;
  }
}

