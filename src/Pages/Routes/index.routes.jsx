import { BrowserRouter as Router, Route ,Routes as Switch } from "react-router-dom";
import Home from "../Home/index";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home/>} />
        {/* <Route exact path="/" component={</>} /> */}
      </Switch>  
    </Router>
  )
}

export default Routes