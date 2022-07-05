import React from 'react';
import Hero from '../components/Hero';
import CardLayout from '../components/CardLayout';
import Contact from '../components/Contact';


function Homepage(props){ 
    return(
        <div>
        <Hero title={props.title} subtitle={props.subtitle}/>
        <CardLayout />
        {/* <Contact/> */}
        </div>);



}

export default Homepage;