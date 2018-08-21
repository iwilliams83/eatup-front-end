import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'


const Signup = ( props ) => {

  const { toggleSignup, submitSignup, updateSignup} = props

    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' type="text" name="name" onChange={(e) => updateSignup(e.target.name, e.target.value)} placeholder="Name"/>
                <Form.Input
                  fluid
                  icon='mail'
                  iconPosition='left'
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  onChange={(e) => updateSignup(e.target.name, e.target.value)}
                />

                <Button color='orange' fluid size='large' type="submit" onClick={submitSignup}>
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Message>
              Already have an account? <a href='#' onClick={toggleSignup}>Log In</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>

    )
}

export default Signup
