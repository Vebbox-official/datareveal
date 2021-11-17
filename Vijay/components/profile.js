import React from 'react';
import './css/profile.css';
import pro1 from './assets/1.svg';
import {Button} from 'react-bootstrap';
function Profile() {
    return (
        <div>
           
                        <div className="profile" >
                            <img src={pro1} className="mt-4" />
                            <p className="mt-4 p-2">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                            <Button variant="primary" className="mt-3">View More</Button>
                        </div>
                    
        </div>
    )
}

export default Profile
