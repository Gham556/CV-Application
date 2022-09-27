import React from "react";

const PracticalExperience = (props) => {
    const {skillArray} = props; 

    return (
        <ul>
            {skillArray.map((skill) => {
                return (
                    <li key={skill.id}>
                        <p>{skill}</p>

                    </li>
                )
            })}
        </ul>
    )
};

export default PracticalExperience