import React from "react";

const PracticalExperience = (props) => {
    const {skillArray} = props; 

    return (
        <ul>
            {skillArray.map((skill) => {
                return (
                    <li key={skill.id}>
                        {skill}
                    </li>
                )
            })}
        </ul>
    )
};

export default PracticalExperience