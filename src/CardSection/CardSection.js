import React from 'react';
import './CardSection.css';
import SubTitle from '../Components/SubTitle/SubTitle';
import Card from '../Components/Card/Card';
import CARDDATA from './CardData';

export default function CardSection() {

    // when we have an array of data 
    // we can dynamically create components
    // my mapping though the array
    // and creating a component for each item of the array
    // with the arrays data being passed into the component as props

    const cards = CARDDATA.map((e) => <Card img={e.img} text={e.text} />)


    return (
        <section className="card-section">
            <SubTitle text="Mapped Cards" />
            <div className='cards'>
                {cards}
            </div>
        </section>
    )
}
