import { Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import Navbar from "./components/navbar/Navbar";
import Access from "./components/access/Access";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={(props) => (
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (<Access />)
    )} />
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/home" component={Home} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  )
}

export default App
