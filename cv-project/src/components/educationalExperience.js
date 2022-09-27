import React from "react";

const EducationalExperience = (props) => {
    const {educationArray, test} = props; 

    return (
        <ul>
            {educationArray.map((edu) => {
                return (
                    <li key={edu.id}>  
                        <p>{edu.school}</p>
                        <p>{edu.loe}</p>
                        <p>{edu.yog}</p>
                        <button onClick={test}>Test</button>
                    </li>  
                )
            })}
        </ul>
    );
}; 


export default EducationalExperience