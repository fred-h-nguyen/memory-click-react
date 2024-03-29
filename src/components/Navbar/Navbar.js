import React from 'react';
import { Menu, Container, Grid } from 'semantic-ui-react'

class Navbar extends React.Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu inverted>
                <Menu.Item
                    name='Clicky Game'
                    active={activeItem === 'clicky'}
                    onClick={this.handleItemClick}
                />

                <Grid columns={2}>
                    <Grid.Column>
                        <Container textAlign='right'>
                            <h5
                                style={{ color: 'white', marginTop: '10px', marginRight:'10px' }}
                            >
                                {this.props.message}
                            </h5>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Container textAlign='right'>
                            <h5
                                style={{ color: 'white', marginTop: '10px', marginRight:'10px' }}
                            >
                               Score:{this.props.currentScore} | Top Score:{this.props.topScore}
                            </h5>
                        </Container>
                    </Grid.Column>
                </Grid>
            </Menu>
        )
    }
}
export default Navbar