import Productpage from "./component/Productpage";
import { BrowserRouter, Route } from "react-router-dom";
import Comments from "./component/Comments";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path={"/"}>
          <Productpage />
        </Route>
        <Route path={"/comment"}>
          <Comments />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
