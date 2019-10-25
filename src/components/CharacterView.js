import React from 'react';
import Character from './Character/Character';
import avengers from './Character/avengersData';
import { Grid, Container} from 'semantic-ui-react';
const CharacterView = () => {
    const avengerCards = avengers.map(avenger => <Character key={avenger.key} image={avenger.image} name={avenger.name} />)
    return (
        <Container>
            <Grid columns={8}>
                {avengerCards}
            </Grid>
        </Container>
    )
}

export default CharacterView;