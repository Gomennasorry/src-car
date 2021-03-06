import './App.css';
import React from 'react';
import Menu from './Menu';
import Menu2 from './Menu2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { iscarpage: false };
  }
  setiscarpage = (check) => {
    console.log(window.location.pathname);
    this.setState({ iscarpage: check });
  }

  componentDidMount() {
    //console.log(window.location.pathname);
    if (window.location.pathname === "/CarHilight") {
      console.log("Yes")
      this.setState({ iscarpage: true })
    } else {
      this.setState({ iscarpage: false })
    }
  }
  componentDidUpdate() {
    window.onpopstate = e => {
      //console.log(window.location.pathname);
      if (window.location.pathname === "/CarHilight") {
        console.log("Yes")
        this.setState({ iscarpage: true })
      } else {
        this.setState({ iscarpage: false })
      }
    }
  }

  render() {
    return (
      <>
        {this.setiscarpage}
        {this.state.iscarpage ? <Menu2 myFunction={this.setiscarpage} /> : <Menu myFunction={this.setiscarpage} />}
      </>
    );
  }
}

export default App;
