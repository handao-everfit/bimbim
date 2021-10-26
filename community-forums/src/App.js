import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./components/Post/component";

const instance = axios.create({
  baseURL: "https://api-dev.everfit.io/api",
  headers: {
    "Content-Type": "application/json",
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9maWxlSWQiOiI2MDdkMDljNTFmYjFjMjAwMWE1NWU4ZGEiLCJ0ZWFtSWQiOiI2MDdkMDlkODFmYjFjMjAwMWE1NWU4ZGUiLCJpc190cmFpbmVyIjp0cnVlLCJ0ZWFtUm9sZSI6MCwidGVhbVBlcm1pc3Npb24iOnsiYXV0b2Zsb3ciOnRydWUsImF1dG9mbG93X2ludGVydmFsIjp0cnVlLCJwcm9ncmFtIjp0cnVlLCJmb29kX2pvdXJuYWwiOnRydWUsIm1hY3JvIjp0cnVlLCJzZWdtZW50Ijp0cnVlLCJkaWdlc3RfZW1haWwiOnRydWUsInRlYW0iOnRydWUsImJyYW5kaW5nIjp0cnVlLCJjdXN0b21fbWV0cmljcyI6dHJ1ZSwiYXNzaWdubWVudF9zY2hlZHVsaW5nIjotMSwic3R1ZGlvX3Jlc291cmNlX2NvbGxlY3Rpb24iOnRydWUsInN0dWRpb19wcm9ncmFtIjp0cnVlLCJub19jbGllbnRzIjoxNTAsIm1hc3NfY29weSI6dHJ1ZSwiYnVsa19pbnZpdGVfY2xpZW50cyI6dHJ1ZSwiZm9ydW0iOnRydWUsImxlYWRlcmJvYXJkIjp0cnVlLCJyZXBlYXRfdGFzayI6dHJ1ZSwicmVwZWF0X3Rhc2tfYXV0b2Zsb3ciOnRydWUsIm11bHRpcGxlX3N0dWRpb19wcm9ncmFtIjp0cnVlLCJwYXltZW50Ijp0cnVlLCJwcmVtaXVtQ3VzdG9tQnJhbmQiOnRydWV9LCJpYXQiOjE2MzUxOTA1MDgsImV4cCI6MTYzNTI0MDUwOH0.hEaO0tPlI0XbjJZn40FsBgYAH_B1jRDtIpuI1ynzaO8",
  },
});

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // instance.get(`/forum/get-list-group`).then((res) => {
    //   console.log(res.data);
    // });
    instance
      .get(
        `/forum-post/get-list-post?groupId=60d9b8c643edd200141777d8&perPage=15`
      )
      .then((res) => {
        console.log(res.data);
        setPosts(res.data.data);
      });
  }, []);
  return (
    <div className="App" style={{ backgroundColor: "#E5E5E5" }}>
      {posts && posts.map((post) => <Post data={post} id={post["_id"]} />)}
    </div>
  );
}

export default App;
