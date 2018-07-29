import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      myPosts: true
    };
  }

  onSearchChangeHandler(e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  changeMyPosts() {
    this.setState(prevState => ({
      myPosts: !prevState.myPosts
    }));
  }
  // changeMyPosts() {
  //   this.setState({
  //     myPosts: !this.state.myPosts
  //   });
  // }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={e => this.onSearchChangeHandler(e)}
        />
        <button>Search</button>
        <button>Reset</button>
        <label>My Posts:</label>
        <input
          type="checkBox"
          defaultChecked
          onChange={() => this.changeMyPosts()}
        />
        {console.log("State", this.state.searchValue)}
      </div>
    );
  }
}
export default Dashboard;
