import Header from "./components/Header";
import Post from "./components/Post";
import SideMenu from "./components/SideMenu";
import "./TagButton.css";

export default function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* posts & side menu container */}

        <div style={{ display: "flex", width: "60%" }}>
          {/* Post Container */}
          <div style={{ width: "70%" }}>
            <Post title="Learning Web Development">
              <div
                style={{
                  border: "3px solid teal",
                  padding: "20px",
                  marginBottom: "20px",
                  backgroundColor: "#fff",
                }}
              >
                Web development helps you build modern and responsive websites.
              </div>
            </Post>
            <Post title="Improve Your Skills">
              <div
                style={{
                  border: "3px solid teal",
                  padding: "20px",
                  marginBottom: "20px",
                  backgroundColor: "#fff",
                }}
              >
                Improve your skills through practice and learning.
              </div>
            </Post>
            <Post title="What is React?">
              <div
                style={{
                  border: "3px solid teal",
                  padding: "20px",
                  marginBottom: "20px",
                  backgroundColor: "#fff",
                }}
              >
                React is a JavaScript library for building user interfaces.
              </div>
            </Post>
            <Post title="Time Management Tips" />
          </div>

          {/* Side Menu Container */}
          <div style={{ width: "30%" }}>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
