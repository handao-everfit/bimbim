import { useEffect, useState } from "react";
import PostList from "./components/PostList/component";
import ForumHeader from "./components/ForumHeader/component";
import CreatePostForm from "./components/CreatePostForm/component";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import { getPosts } from "./store/actions/postActions";

// axios
//   .post("https://api-dev.everfit.io/api/auth/login", {
//     email: "hungle@everfit.io",
//     password: "Pass1234",
//   })
//   .then((res) => {
//     instance.defaults.headers["x-access-token"] = res.data.token;
//   })
//   .catch((err) => console.log("login error", err));

function App(props) {
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    // instance.get(`/forum/get-list-group`).then((res) => {
    //   console.log(res.data);

    // instance
    //   .get(
    //     `/forum-post/get-list-post?groupId=60d9b8c643edd200141777d8&perPage=15`
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     setPosts(res.data.data);
    //   })
    //   .catch((err) => console.error(err));
    props.getPosts();
  }, []);
  return (
    <div className="App" style={{ backgroundColor: "#E5E5E5" }}>
      <ForumHeader />
      <CreatePostForm />
      <PostList posts={props.posts} />
    </div>
  );
}

const mapStateToProps = (state, action) => {
  return {
    posts: state.post.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
