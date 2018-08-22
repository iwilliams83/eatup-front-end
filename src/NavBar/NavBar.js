import React from 'react'
import logo from '../Eat-Up-Logo.png'
import {
  Header,
  Button,
  Container,
  Menu,
} from 'semantic-ui-react'

const NavBar = (props) => {
  const loggedInMenu = (
              <Menu
              secondary
              size='large'
              style={{backgroundColor: '#F69454'}}
            >
              <Container>
              <Menu.Item>
              <Header as='h2' style={{color: 'white'}} textAlign='center'>Hi, {props.activeUser.name}!</Header>
              </Menu.Item>
                <Menu.Item style={{color: 'white'}} as='a' onClick={props.toggleFaves}>My Favorites</Menu.Item>
                { props.currentResults.length > 0 ? <Menu.Item as='a' style={{color: 'white'}} onClick={props.newSearch}>New Search</Menu.Item>: null }
                <Menu.Item color="white" position='right'>
                  <Button as='a' onClick={props.handleLogout} style={{ marginLeft: '0.5em' }}>
                    Log Out
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>)


    return (
      <div>
        { props.activeUser.id === 0 ? <div><img src={logo} alt="Logo"/><h3>Eat Up helps you find a central location to eat!<br/><br/></h3></div> : <div>{loggedInMenu}</div>}
      </div>
    )

}

export default NavBar
