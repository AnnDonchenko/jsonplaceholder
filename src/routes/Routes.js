import {Route, Switch} from "react-router";
import Home from "../components/home/Home";

export default function Routes() {
    return(
      <Switch>
          <Route exact path={'/'} component={Home}/>
      </Switch>
    );
}