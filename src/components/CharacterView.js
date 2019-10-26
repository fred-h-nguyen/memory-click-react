import React from 'react';
import Character from './Character/Character';
import { Grid, Container} from 'semantic-ui-react';
class CharacterView extends React.Component {
       
    render(){return (
        <Container>
            <Grid columns={8}>
                {this.props.avengers.map(avenger => <Character key={avenger.key} id={avenger.key} image={avenger.image} name={avenger.name} cardClickedEvent={this.props.cardClickedEvent}/>)}
            </Grid>
        </Container>
    )}
}

export default CharacterView;