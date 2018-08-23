import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const Result = props => {
  const { yelpId, name, image_url, location, phone } = props.result
  //const address = location.display_address.join(' ')
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
          </Card.Description><br/>
          <Icon onClick={() => props.addFavorite(yelpId, name, image_url, location, phone)}
            name="heart outline" color='orange'/>
            Add to Favorites
        </Card.Content>
    </Card>
  )
}

export default Result
