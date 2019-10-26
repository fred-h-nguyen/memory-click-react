import React from 'react';
import { Segment, Image, Grid } from 'semantic-ui-react';

const style = {
        unhover:{ padding: '5px', backgroundColor: '#456a88' },
        hover: { padding: '5px', backgroundColor: '#924f9b' }
    }
class Character extends React.Component {

    state = {
        hover:false,
    }

    handleMouseOver = () => {
        this.setState({hover:true})
    };

    handleMouseExit = () => {
        this.setState({hover:false})
    }

    

    render () {
        return (
            <>
            <Grid.Column>
                <Segment raised compact inverted
                    style={this.state.hover ? style.hover:style.unhover}
                    onMouseEnter={this.handleMouseOver}
                    onMouseLeave={this.handleMouseExit}
                >
                    <Image src={this.props.image} alt={this.props.name} />
                </Segment>
            </Grid.Column>
        </>
        )
    }
}

export default Character;