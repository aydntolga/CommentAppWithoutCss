import Comments from "./comments/Comments";

const App = () => {
  return (
    <div>
      <h1>Welcome Freely</h1>
      <Comments
        commentsUrl="http://localhost:3000/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;