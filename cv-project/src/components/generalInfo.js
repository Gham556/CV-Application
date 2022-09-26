import React from 'react';

const Workexperience = (props) => {
    const {workArray} = props;

    return (
        <ul> 
            {workArray.map((work) => {
            return(
               <li> 
                <p>{work.employer}</p>
                <p>{work.start}</p>
                <p>{work.end}</p>
                <p>{work.position}</p>
               </li> 
            )
            }
            )}
        </ul> 
         )
};

export default Workexperience;