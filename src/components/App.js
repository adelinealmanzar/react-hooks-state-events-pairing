import video from "../data/video.js";
import Static from "./Static";
import Buttons from "./Buttons";


function App() {

  return (
    <div className="App">
      <Static
        src={video.embedUrl}
        title={video.title}
        views={video.views}
        date={video.createdAt}
      />
      <Buttons
        numLikes={video.upvotes}
        numDislikes={video.downvotes}
        comments={video.comments}
      />
    </div>
  );
}

export default App;
