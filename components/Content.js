import React from 'react';

const Content = (props) => {
    return (
        <div className='about'>
            <h4>
                {props.heading}
            </h4>
            <p>
                {props.content}
            </p>
        </div>
    )
}

export default Content;