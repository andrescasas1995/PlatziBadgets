import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import BadgeNew from './pages/badgeNew';

const contaiener = document.getElementById("app");

ReactDOM.render(
    <BadgeNew
    // firstName="Stephanie" 
    // lastName="Roja" 
    // jobTitle="Front Engineer" 
    // twitter="andres_casas_g"
    // url="https://www.gravatar.com/avatar?d=identicon"
     />,
    contaiener
);