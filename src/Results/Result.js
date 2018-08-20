import React, {Component} from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const Result = props => {
  const { name, image_url, location, display_phone } = props.result



  return (
        <Card>
      <Image src={image_url} size='medium' />
        <Card.Content>
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Description>
            {location.display_address[0]}<br/>{location.display_address[1]}<br/>{display_phone}
          </Card.Description><br/>
          <Icon onClick={this.props.addFavorite} name="heart outline" color='orange'/>
        </Card.Content>
    </Card>
  )
}

export default Result
