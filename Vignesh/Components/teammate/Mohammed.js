import React from 'react'
import Teambio from '../Teambio'
import Footer from '../Footer'
import mohammed from '../img/team/mohamed.jpeg'
function Mohammed() {
    return (
        <>
            <Teambio person={mohammed} name="Dr. Mohamed Ibrahim" role="Senior Researcher with a Professor, Oxford University, UK" post="CIO and Chief Computer Vision Scientist of Data Reveal AI" details="Mohamed is our CIO (Chief Information Officer) and Chief Computer Vision Scientist. He brings Science, Engineering and technology execution experience to Data Reveal.AI. He currently leads multiple teams that build practical applications of visual AI in healthcare, such as designing an action recognition module for the SARAS project. Recently, he has been working closely with MOFHS team to develop unique tools that simplify the processes of integration and decoupling. Before Oxford Brookes, he worked as a computer vision engineer/architect at Huawei, focusing on machine learning techniques and software engineering in mobile phones."/>
          <Footer/>  
        </>
    )
}

export default Mohammed
