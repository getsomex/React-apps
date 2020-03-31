import React from 'react';

class AppList extends React.Component {
  componentDidMount = () => {
    console.log(this.props);
  };
  render() {
    return <div>Applist</div>;
  }
}

export default AppList;
