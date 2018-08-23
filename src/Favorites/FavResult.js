import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const FavResult = props => {
  const { name, image_url, location, phone } = props.result
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
        </Card.Content>
    </Card>
  )
}

export default FavResult
