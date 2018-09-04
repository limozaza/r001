import React from 'react';
const person = (props) => {
    return(
        <div>
            <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <hr/>
        </div>
    );
}
export default person;