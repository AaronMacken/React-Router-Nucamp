import React, { Fragment } from 'react';
import Header from '../Components/Header/Header';
import CardSection from '../CardSection/CardSection';
import StateSection from '../StateSection/StateSection';

export default function LandingPage() {
    return (
        <Fragment>
            <Header headerTitle="React" headerSub="W/ Create React App" />
            <CardSection />
            <StateSection />
        </Fragment>
    )
}
