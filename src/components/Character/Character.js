import React from 'react';
import { Segment, Image, Grid } from 'semantic-ui-react';

const style = {
    unhover: { padding: '5px', backgroundColor: '#456a88' },
    hover: { padding: '5px', backgroundColor: '#db2c2c' }
}
class Character extends React.Component {

    state = {
        hover: false
    }

    handleHover = () => {
        this.setState({ hover: !this.state.hover })
    };


    render() {
        return (
            <>
                <Grid.Column>
                    <Segment raised compact inverted
                        style={this.state.hover ? style.hover : style.unhover}
                        onMouseEnter={this.handleHover}
                        onMouseLeave={this.handleHover}
                        onClick= {()=>this.props.cardClickedEvent(this.props.id)}
                    >
                        <Image src={this.props.image} alt={this.props.name} />
                    </Segment>
                </Grid.Column>
            </>
        )
    }
}

export default Character;