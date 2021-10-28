import React from "react";
import Post from "../Post/component";
import { connect } from "react-redux";

function PostList(props) {
  console.log("POSTS", props.posts);
  return (
    <div>
      {props.posts &&
        props.posts.map((post) => <Post data={post} id={post["_id"]} />)}
    </div>
  );
}

const mapStateToProps = (state, action) => {
  return state.post.posts;
};

// export default connect(mapStateToProps)(PostList);
export default PostList;
