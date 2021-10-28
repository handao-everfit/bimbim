import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-dev.everfit.io/api",
  headers: {
    "Content-Type": "application/json",
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9maWxlSWQiOiI2MDdkMDljNTFmYjFjMjAwMWE1NWU4ZGEiLCJ0ZWFtSWQiOiI2MDdkMDlkODFmYjFjMjAwMWE1NWU4ZGUiLCJpc190cmFpbmVyIjp0cnVlLCJ0ZWFtUm9sZSI6MCwidGVhbVBlcm1pc3Npb24iOnsiYXV0b2Zsb3ciOnRydWUsImF1dG9mbG93X2ludGVydmFsIjp0cnVlLCJwcm9ncmFtIjp0cnVlLCJmb29kX2pvdXJuYWwiOnRydWUsIm1hY3JvIjp0cnVlLCJzZWdtZW50Ijp0cnVlLCJkaWdlc3RfZW1haWwiOnRydWUsInRlYW0iOnRydWUsImJyYW5kaW5nIjp0cnVlLCJjdXN0b21fbWV0cmljcyI6dHJ1ZSwiYXNzaWdubWVudF9zY2hlZHVsaW5nIjotMSwic3R1ZGlvX3Jlc291cmNlX2NvbGxlY3Rpb24iOnRydWUsInN0dWRpb19wcm9ncmFtIjp0cnVlLCJub19jbGllbnRzIjoxNTAsIm1hc3NfY29weSI6dHJ1ZSwiYnVsa19pbnZpdGVfY2xpZW50cyI6dHJ1ZSwiZm9ydW0iOnRydWUsImxlYWRlcmJvYXJkIjp0cnVlLCJyZXBlYXRfdGFzayI6dHJ1ZSwicmVwZWF0X3Rhc2tfYXV0b2Zsb3ciOnRydWUsIm11bHRpcGxlX3N0dWRpb19wcm9ncmFtIjp0cnVlLCJwYXltZW50Ijp0cnVlLCJwcmVtaXVtQ3VzdG9tQnJhbmQiOnRydWV9LCJpYXQiOjE2MzUzNjAxMDgsImV4cCI6MTYzNTQxMDEwOH0.57uUvPZRaeuxFBjkKpVhxYxFR3JWWkyrdA5aQDFGJfM",
  },
});

//Action Creator
export const createPost = (post) => {
  //redux thunk allows for returning a function instead of just object
  return (dispatch, getState) => {
    //halt the dispatch
    //async call to database
    instance
      .post(`/forum-post/add-post`, post)
      .then((res) => {
        // console.log(res.data.data);
        dispatch({ type: "CREATE_POST", post: res.data.data });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_POST_ERROR", err });
      });
  };
};

export const getPosts = () => {
  //redux thunk allows for returning a function instead of just object
  return (dispatch, getState) => {
    //halt the dispatch
    instance
      .get(
        `/forum-post/get-list-post?groupId=60d9b8c643edd200141777d8&perPage=15`
      )
      .then((res) => {
        console.log("ayo", res.data.data);
        dispatch({ type: "GET_POSTS", posts: res.data.data });
      })
      .catch((err) => {
        dispatch({ type: "GET_POSTS_ERR", err });
      });
  };
};
