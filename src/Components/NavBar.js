import React from 'react'
import logo from '../Eat-Up-Logo.png'
import {
  Header,
  Button,
  Container,
  Menu,
} from 'semantic-ui-react'

const NavBar = (props) => {
  console.log(props)
  const loggedInMenu = (
              <Menu
              secondary
              size='large'
              style={{backgroundColor: '#F69454'}}
            >
              <Container>
              <Menu.Item>
              <Header as='h2' color="white" textAlign='center'>Eat Up</Header>
              </Menu.Item>
                <Menu.Item color="white" as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item color="white" as='a'>Favorites</Menu.Item>
                { props.currentResults.length > 0 ? <Menu.Item as='a' onClick={props.newSearch}>New Search</Menu.Item>: null }
                <Menu.Item color="white" position='right'>
                  <Button as='a' onClick={props.handleLogout} style={{ marginLeft: '0.5em' }}>
                    Log Out
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>)


    return (
      <div>
        { props.activeUser.id === 0 ? <div><img src={logo} alt="Logo"/><h3>Welcome<br/><br/></h3></div> : <div>{loggedInMenu}</div>}
      </div>
    )

}

export default NavBar
