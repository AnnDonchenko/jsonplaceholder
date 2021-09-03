import {Route, Switch} from "react-router";
import Home from "../components/home/Home";
import Users from "../components/users/Users";
import Posts from "../components/posts/Posts";

export default function Routes() {
    return(
      <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/users'} component={Users}/>
          <Route path={'/posts'} component={Posts}/>
      </Switch>
    );
}