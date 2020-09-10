import React, { Component } from 'react'
import styled from "styled-components"
// import PropTypes from 'prop-types'

export class NavSide extends Component {
    render() {
        return (
            <SideWrapper>
                Side navbar
            </SideWrapper>
        )
    }
}

export default NavSide

const SideWrapper = styled.div`
    width:30vw;
    height:100vh;
    position:absolute;
    top:20vh;
    left:0;
    background-color:salmon;
`