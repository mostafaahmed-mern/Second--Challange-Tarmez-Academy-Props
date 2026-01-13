export default function Post({ title, children = "No Content" }) {
  return (
    <div style={{ padding: "10px", border: "solid teal 5px ", margin: "10px" }}>
      <h2>{title}</h2>
      <hr />
      {children}
    </div>
  );
}
