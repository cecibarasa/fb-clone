import React from 'react'
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5uMOVBjePTG7qFQL2FDonsabLCu4_OHRKw&usqp=CAU"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5uMOVBjePTG7qFQL2FDonsabLCu4_OHRKw&usqp=CAU"
                title="Jazz"
            />
            <Story
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Sister_Sister_logo.svg/1200px-Sister_Sister_logo.svg.png"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Sister_Sister_logo.svg/1200px-Sister_Sister_logo.svg.png"
                title="Jvune"
            />
            <Story
                image="https://cdn.mos.cms.futurecdn.net/ZcD9zyBoBHt6ATTFmZHr5B.jpg"
                profileSrc="https://cdn.mos.cms.futurecdn.net/ZcD9zyBoBHt6ATTFmZHr5B.jpg"
                title="Jazzlas"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JrOXZCCd3LnBvMgvIVmpBIAiJIvfuyMCTKBA1U7NiOR-Javby9ybNyKIViDNnnD4FdE&usqp=CAU"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JrOXZCCd3LnBvMgvIVmpBIAiJIvfuyMCTKBA1U7NiOR-Javby9ybNyKIViDNnnD4FdE&usqp=CAU"
                title="Jazzy"
            />
            
        </div>
    )
}

export default StoryReel
