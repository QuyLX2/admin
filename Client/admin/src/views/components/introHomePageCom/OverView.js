import React, { Component } from 'react'
import Banner from './Banner';
import Intro from './Intro';
import ShowData from './ShowData';

export default class OverView extends Component {
    render() {
        return (
            <>
                <Banner />
                <Intro />
                <ShowData />
            </>
        )
    }
}
