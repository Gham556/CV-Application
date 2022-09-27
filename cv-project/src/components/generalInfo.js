import React from 'react';
import '../index.css';

const Workexperience = (props) => {
    const {workArray, edit} = props;

    return (
        <ul> 
            {workArray.map((work) => {
            return(
               <li key={work.id}> 
                <p>{work.employer}</p>
                <p>{work.start}</p>
                <p>{work.end}</p>
                <p>{work.position}</p>
                <button className={work.pointer} onClick={edit}>Edit</button>
               </li> 
            )
            }
            )}
        </ul> 
         )
};

export default Workexperience;