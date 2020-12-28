import React from 'react';
import './StoryReel.css';
import Story from './story/Story';

function StoryReel() {
    return (
        <div className='storyReels'>
            <Story image='https://www.history.com/.image/t_share/MTU4MjU5ODMwOTgzNzYzMzYy/fredi-washington-494800943.jpg' title='Akshay' profileSrc='https://pramaka.com/wp-content/uploads/2019/05/Sztuchlak-Gergo-Avatar-Small-300x300.jpg' />
            <Story image='https://images.unsplash.com/photo-1563995103864-d87d3c1fdd39?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80' title='Raj' profileSrc='https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png' />
            <Story image='https://i.pinimg.com/originals/29/86/d6/2986d6627bce9c102c46744d1331112c.png' title='Michael' profileSrc='https://leadslive.io/wp-content/uploads/2017/05/Miniclip-8-Ball-Pool-Avatar-11.png' />
            <Story image='https://i.pinimg.com/originals/72/1a/3e/721a3eb2ef1aa90467995034fe098ca9.jpg' title='Samuel' profileSrc='https://img.devrant.com/devrant/rant/r_1973645_LFf2y.jpg' />
        </div>
    )
}

export default StoryReel
