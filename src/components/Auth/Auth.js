import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  componentDidMount() {
    const {id} = this.props;
    if(id) {
      this.props.history.push('./dashboard')
    } else {
      axios.get('/api/user')
      .then(res => {
        this.props.updateUser(res.data)
        this.props.history.push('./dashboard')
      }).catch({
    
      })
    }
  }

  handleChange = (prop, val) => {
    console.log(val)
    this.setState({
      [prop]: val
    })
  }

  handleRegister = () => {
    const {username, password} = this.state;
    axios.post('/auth/register', {username, password})
    .then(res => {
      this.props.updateUser(res.data)
      this.props.history.push('/dashboard')
    }).catch(err => {
      console.log('error with reg', err)
    })
    this.setState({
      username: '',
      password: ''
    })
  }


  render() {
    const {username, password} = this.state;
    return(
      <div>
        <input value={username} onChange={e => this.handleChange('username', e.target.value)} />
        <input type='password' value={password} onChange={e => this.handleChange('password', e.target.value)} />
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleRegister}>Register</button>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    id: reduxState.id
  }
}

const dispatch = {
  updateUser
}

export default connect(mapStateToProps, dispatch)(Auth);