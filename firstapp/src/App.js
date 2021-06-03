
import React from "react";
import Navigation from "./components/Navigation";


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navigation />
        <Switch>
          <Route exact path="/"  component={() => <Home />} />
          <Route path="/about"  component={() => <About />} />
          <Route path="/contact" component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router> */}
      <Navigation />
    </div>
  );
}

export default App;
