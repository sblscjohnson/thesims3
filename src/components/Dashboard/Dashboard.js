import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(this.props)
    const {id, username, profile_pic} = this.props
    console.log('name', username)
    console.log('pic', profile_pic)
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