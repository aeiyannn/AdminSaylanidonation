import "./App.css";
import Login from "./Components/Login";
import Main from "./Components/Main";

let useractive=localStorage.getItem("userstatus")
const App = () => {
  return (
    <>
    { useractive?
    <Main/>:
    <Login/>
}
    </>
  );
};

export default App;
