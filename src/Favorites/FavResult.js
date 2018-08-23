import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const FavResult = props => {
  const { name, location, phone } = props.result
  
  return (
        <Card>
      <Image src={props.result["image-url"]} size='medium' />
        <Card.Content>
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Description>
            {location}
            <br/>
            {phone}
          </Card.Description>
          <Icon onClick={() => props.deleteFav(props.userId, props.result['yelp-id'])}
            name="trash" color='orange'/>
            Remove Favorite
        </Card.Content>
    </Card>
  )
}

export default FavResult
