import React from 'react'
import './Categories.css'



const Categories = ({ catogries }) => {

    const RenderCatogries = (catogries.CATOGERIES || []).map((category) => {
        return (
            <div key={category.id} className='catogries-list'>
                <img src={category.img} alt={category.Title} />
                <span className='text'>{category.Title}</span>
                <summery>{Math.round(Math.random(3) * 1000)}k views</summery>
                <div className='tags'
                    style={{ width: '100%' }}
                >{category.tags.map((tag) => {
                    return (<div className='tags-list'
                        key={tag}
                    >  {tag}</div>)
                })}</div>
            </div>
        )
    })

    return (
        <div className='Catogries'>
            <div className='title'>
                <a href='*'>Categories </a>we think you’ll like
            </div>
            <div className='catogries-list-container'>
                {RenderCatogries}
            </div>
        </div>
    )
}

export default Categories