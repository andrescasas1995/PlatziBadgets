import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/navbar';
import Badge from '../components/badge';
import BadgeForm from '../components/badgeForm';

class BadgeNew extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName="Stephanie" 
                                lastName="Roja" 
                                jobTitle="Front Engineer" 
                                twitter="andres_casas_g"
                                url="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew