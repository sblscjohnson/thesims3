import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {updateUser} from './../../ducks/reducer';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {id} = this.props;
    if(!id) {
      axios.get('/api/user')
      .then(res => {
        this.props.updateUser(res.data)
      }).catch(res => {
        this.props.history.push('/')
      })
    }
  }

  render() {
    const {id, username, profile_pic} = this.props
    return(
      <div>
        <img src={profile_pic} alt='profile' />
        <p>{username}</p>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  const {id, username, profile_pic} = reduxState;
  return {
      id,
      username,
      profile_pic,
  }
}
const dispatch = {
  updateUser
}


export default connect(mapStateToProps, dispatch)(Dashboard);