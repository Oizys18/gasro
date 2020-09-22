import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <FooterWrapper>
                Footer component
            </FooterWrapper>
        )
    }
}


const FooterWrapper = styled.div`
    justify-content: center;
    align-items:center;
    display: flex;

    /* size & position */
    background-color:#ffffff;
    position:relative;
    top:0;
    left:0;
    width:100%;
    height:5vh; 
`