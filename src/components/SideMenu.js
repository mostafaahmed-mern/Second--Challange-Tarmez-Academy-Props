import "../TagButton.css";
import TagButton from "./TagButton";
export default function SideMenu() {
  return (
    <div
      style={{
        margin: "25px",
        border: "solid teal 5px ",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <TagButton title="Read More" />
      <TagButton title="Learn More" />
      <TagButton title="Get Started" />
      <TagButton title="View Details" />
    </div>
  );
}
