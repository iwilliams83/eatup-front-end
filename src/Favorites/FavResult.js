import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const FavResult = props => {
  const { name, image_url, location, phone } = props.result
  return (
        <Card>
      <Image src={image_url} size='medium' />
        <Card.Content>
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Description>
            {location}
            <br/>
            {phone}
          </Card.Description>
          <Icon onClick={() => props.removeFavorite(props.userId, props.dataId)}
            name="trash" color='orange'/>
            Remove Favorite
        </Card.Content>
    </Card>
  )
}

export default FavResult
