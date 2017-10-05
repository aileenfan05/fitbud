import React, { Component } from 'react';
import { Menu, Input, Button, Dropdown } from 'semantic-ui-react';
import { NavLink, Link, Redirect } from 'react-router-dom';

class DashNav extends Component {
  constructor(props) {
    super(props)

    console.log(props);
  }

  render() {
    return (
      <Menu tabular>
        <Menu.Item name='my workouts' active={this.props.view === 'my workouts'} onClick={this.props.handleClick} />
        <Menu.Item name='my requests' active={this.props.view === 'my requests'} onClick={this.props.handleClick} />
        <Menu.Item name='my invites' active={this.props.view === 'my invites'} onClick={this.props.handleClick} />
      </Menu>
    )
  }

}

export default DashNav;
