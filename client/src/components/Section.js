import React from "react";

const Section = ({ children }) => {
    return (
        <div style={{ margin: "50px"}}>
            {children}
        </div>
    );
}; 
//We use the children to pass the properties of the return as a component

export default Section;