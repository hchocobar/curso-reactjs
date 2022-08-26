import React, { Component } from 'react';

class Lista4Class extends Component {
  state = {
    newUser: { id: undefined, name: '', username: '', email: ''},
    endpoint: 'https://jsonplaceholder.typicode.com/users',
    users: null
  }

  fetchUsers = async () => {
    const response = await fetch(this.state.endpoint)
    const resJSON = await response.json()
    this.setState({
      users: resJSON
    })
  }

  handleNameInput = e => {
    this.setState({
      newUser: { ...this.state.newUser, name: e.target.value}
    });
  };
  handleAddUser = () => {
    this.setState({
      users: [...this.state.users, this.state.newUser]
    })
  }

  componentDidMount() {
    this.fetchUsers()
  }

  render() {
    return (
      <div>
        <h3>Class Component</h3>
        <input type="text" onChange={this.handleNameInput} value={this.state.name}
        placeholder="User Name" />
        <button onClick={this.handleAddUser}> Add </button>
        <section>
          <ul>
            {!this.state.users ? 'Cargando...' :
              this.state.users.map((users, index) => {
                return <li key={index}>{users.name}</li>
              })}
          </ul>
        </section>
      </div>
    );
  }
}

export default Lista4Class;
