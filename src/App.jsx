import { Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import Navbar from "./components/navbar/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  )
}

export default App
