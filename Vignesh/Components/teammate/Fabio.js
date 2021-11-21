import React from 'react'
import Teambio from '../Teambio'
import Footer from '../Footer'
import fabio from '../img/team/fabio.png'
function Fabio() {
    return (
        <>
           <Teambio person={fabio} name="Dr.Fabio Savorgnan" role="Cardiologist" post="" details="MD -FAPP-FACC– MSDS Cardiologist -Board Certified by American Board of Pediatrics, Neonatal and Perinatal Medicine, Critical Care Medicine, Cardiology"/>
         <Footer/>   
        </>
    )
}

export default Fabio
