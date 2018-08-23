import React, {Component} from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

export default class Result extends Component{
  state = { liked: false }
  // I think this item needs state in order to toggle liked / not liked
  toggleLiked = () => {
    const { name, location, phone } = this.props.result
    this.setState(prevState => {
      return {liked: !prevState.liked}
    })
    this.props.addFavorite(this.props.result['yelp-id'], name, this.props.result['image-url'], location, phone)
  }
  render(){
    const { name, location, phone } = this.props.result
    return (
          <Card>
        <Image src={this.props.result['image-url']} size='medium' />
          <Card.Content>
            <Card.Header>
              {name}
            </Card.Header>
            <Card.Description>
              {location}
              <br/>
              {phone}
            </Card.Description><br/>
            <Icon onClick={this.toggleLiked} name={this.state.liked ? "heart" : "heart outline"} color='orange'/>
          </Card.Content>
      </Card>
    )
  }

}

//export default Result
