import React from "react";

const EducationalExperience = (props) => {
    const {educationArray} = props; 

    return (
        <ul>
            {educationArray.map((edu) => {
                return (
                    <div>  
                        <li>{edu.school}</li>
                        <li>{edu.loe}</li>
                        <li>{edu.yog}</li>
                    </div>  
                )
            })}
        </ul>
    );
}; 


export default EducationalExperience