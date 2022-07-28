import React from 'react';

import Info from './components/Info';
import Content from './components/Content';

const App = () => {
    return (
        <div className='container'>
            <Info />
            <Content 
                heading='About'
                content='I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.'
            />
            <Content 
                heading='Interests'
                content='Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'
            />
        </div>
    )
}

export default App;