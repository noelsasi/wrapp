import React, { Component } from "react";
import axios from "axios";
import "../styles/main.scss";
import AddUser from "./addUser";
import Search from "./search";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchData: []
    };
  }

  componentWillMount() {
    // console.log(localStorage.getItem("data"), "object");
    localStorage.getItem("data") &&
      this.setState({
        data: JSON.parse(localStorage.getItem("data")),
        searchData: JSON.parse(localStorage.getItem("data"))
      });
  }

  componentDidMount() {
    if (!localStorage.getItem("data")) {
      this.fetchData();
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("data", JSON.stringify(nextState.data));
  }

  fetchData = async () => {
    const API = "https://randomuser.me/api/0.8/?results=5";
    const result = await axios(API);
    this.setState({
      data: result.data.results,
      searchData: result.data.results
    });
  };

  searchResults = searchText => {
    const regex = new RegExp(searchText, "gi");
    console.log(this.state.data, "searccc");
    const lists = this.state.data;
    const results = lists.filter(list => {
      return list.user.username.match(regex);
    });

    this.setState({
      searchData: results
    });
  };

  handleAddUser = newData => {
    const newUser = { user: newData };
    const add = [...this.state.data, newUser];
    localStorage.setItem("data", JSON.stringify(add));
    this.setState({ data: add });
    // setData(add);
  };

  getDate = date => {
    let d = new Date(date);
    return d.toISOString().substr(0, 10);
  };

  render() {
    return (
      <div className="shadow">
        <nav className="navbar navbar-light bg-primary shadow">
          <span className=" mb-0 h1 text-light ">Home</span>
          <button
            type="button"
            className="btn btn-danger mb-2 myfonts"
            onClick={() => this.props.handleLogin(true)}
          >
            Logout <span className="fa fa-power-off ml-1"></span>
          </button>
        </nav>{" "}
        <div className="user-list p-4">
          <Search searchResults={this.searchResults} />
          <button
            type="button"
            className="btn btn-primary mt-2 mb-2 myfonts"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Add User <span className="fa fa-plus ml-1"></span>
          </button>
          <AddUser handleAddUser={this.handleAddUser} />
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Username</th>
                <th scope="col">FullName</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Gender</th>
                <th scope="col">DOB</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {this.state.searchData.map((x, i) => (
                <tr className="rowItem" key={i}>
                  <td>{x.user.username}</td>
                  <td className="text-capitalize">
                    {x.user.name.title}. {x.user.name.first} {x.user.name.last}
                  </td>
                  <td>{x.user.email}</td>
                  <td>**************</td>
                  <td>{x.user.gender}</td>
                  <td>{this.getDate(x.user.dob)}</td>
                  <td>{x.user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
