import React from 'react'
import {Segment,Button} from 'semantic-ui-react'

const Footer = () =>
    (
        <>
            <Segment inverted
            style={{padding:'3px', position:'fixed', bottom:'0',width:'100%'}}>
                <Button as='a' circular color='github' icon='github' href="https://github.com/fred-h-nguyen" target="_blank"></Button>
            </Segment>
        </>
    )

export default Footer;