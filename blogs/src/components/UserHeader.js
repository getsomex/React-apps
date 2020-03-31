import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions/index';

class UserHeader extends React.Component {
  componentDidMount = async () => {
    this.props.fetchPostsAndUsers();
  };
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};
export default connect(mapStateToProps, { fetchPostsAndUsers })(UserHeader);
