import React from 'react';

import { Li } from './styles';

export default function NavItems({title}) {
  return (
    <Li >
    <h4>{title || ""}</h4>
     <a>
      Best Sellers       
    </a> 
     <a>
      Back in Stock       
    </a> 
     <a>
      Basics Shop       
    </a> 
     <a>
      Brands We Love       
    </a> 
     <a>
      F21 x Collections       
    </a> 
     <a>
      Extended Sizes       
    </a> 
     <a>
      Gift Cards       
    </a> 
     <a>
      Special Offers       
    </a> 
     <a>
      The Outlet       
    </a> 
     <a>
      #F21xMe       
    </a> 
     <a>
      Sale       
    </a> 

    </Li>
  );
}
