import React from 'react';
import './App.css';
import Header from './components/Header'
import UserCard from './components/Usercard'
import {Spinner} from 'reactstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: 'hamzayousuf121',
      users: {},
      loading: false,
      userExist : false,
    }
  }

  componentDidMount(){
    this.fetchUser();
  }


  handleSearch = (e) => {
    this.setState({
      search: e
    })
  }

  fetchUser = () => {
    if (this.state.search !== '' ) {
      this.setState({
        loading: true
      })
      fetch(`https://api.github.com/users/${this.state.search}`)
        .then(res => res.json())
        .then((data) => {
          this.setState({ users: data, loading : false, userExist: true })
      })
        .catch((err) => alert('Error Getting Users'))
    }
  }

  render() {
    return (
      <div>
        <Header search={this.state.search} fetchUser={this.fetchUser} handleSearch={(e) => this.handleSearch(e)} />
        {this.state.loading && <div className="center"><Spinner type="grow" color="info" /></div>}
        <UserCard userRecord = {this.state.users} userExist={this.state.userExist}/>
      </div>
    )
  }
}

export default App;