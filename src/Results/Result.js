import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const Result = props => {
  const { name, location, phone } = props.result


  return (
        <Card>
      <Image src={props.result['image-url']} size='medium' />
        <Card.Content>
          <Card.Header>
            {name}
          </Card.Header>
          <Card.Description>
            {location}
            <br/>
            {phone}
          </Card.Description><br/>
          <Icon onClick={() => props.addFavorite(props.result['yelp-id'], name, props.result['image-url'], location, phone)}
            name="heart outline" color='orange'/>
        </Card.Content>
    </Card>
  )
}

export default Result
