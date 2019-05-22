import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserHome from "./pages/UserHome";
import CreatePoll from "./pages/CreatePoll";
//import UserContext from "./utils/context";

// import { Provider } from "react-redux";
// import store from "./store";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

class App extends React.Component{
  //the state of the emcompassing App component will contain the jwt 
  //that was created upon successful login...it had user id, email, as payload
  state= {
    user: undefined
  }

  handleLogin = (user) => {
    this.setState({
      user
    });
    
  }
  handleLogout = () => {
    this.setState({
      user:""
    });
    console.log("logged out")
    return <Redirect to='/' />
  }
  
  render() {
    console.log(this.state);
    return (
      // <Provider store={store}>
      // <UserContext.Provider value={{user: this.state.user}}>
      <Router>
        <div>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" render={(props) => <Login {...props} handleLogin={this.handleLogin} user={this.state.user}/>} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/createPoll" render={(props) => <CreatePoll {...props} user={this.state.user} />} />
            <Route exact path="/userhome" render={(props) => <UserHome {...props} handleLogout={this.handleLogout} user={this.state.user} />} />
            {/* <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
      // </UserContext.Provider>
      // </Provider>
      
    );
  }
}

export default App;

