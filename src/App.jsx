import React, { Component } from 'react'
import "./App.css"
import "./index.css"
import UserInfo from './Components/UserInfo'

class App extends Component {
  state = {
    person:{
      firstName: "Tope",
      lastName: "ray",
      emailAddress: "ray@dev.com",
      phoneNumber : "090775663535"
    },
  };

    setStateHandler = () => {
      this.setState = {
        person:{
          firstName: "Titi",
          lastName: "ray",
          emailAddress: "ray@dev54.com",
          phoneNumber : "09077563535"
        }
      }
    };
  
  render() {
    return (
      <div>
        <UserInfo  >

        </UserInfo>
      </div>
    )
  }
}

export default App
