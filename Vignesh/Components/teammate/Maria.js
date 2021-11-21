import React from 'react'
import Teambio from '../Teambio'
import Footer from '../Footer'
import maria from '../img/team/maria.jpeg'
function Maria() {
    return (
        <>
          <Teambio person={maria} name="Dr. Maria Viqar" role="Cardiovascular Diseases Surgeon" post="CMO and President of Data Reveal AI" details="Dr Maria Viqar acts as our Chief Medical Officer (CMO) and leads the vision, development, and execution of Data Reveal AI's health strategy for clinical products, clinical research, and analytics. She has received her clinical training and participated in research programs at the world-renowned, prestigious Mayo Clinic in cardiovascular diseases. In addition, she has held leadership positions in clinical administration. Her areas of focus are health analytics and research, which ultimately benefit patient care at all healthcare systems. She is passionate about the use of modern technologies to improve patient lives through genomics and personalized medicine. She is thrilled about the Data Reveal AI's technology tool to make it easier for health systems and providers to connect data across sources and share that data with patients. She enjoys travelling."/>  
          <Footer/>
        </>
    )
}

export default Maria
