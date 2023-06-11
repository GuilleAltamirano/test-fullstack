import React from 'react'
import { ImageComponent } from './images.component'
export const SearchComponent = (props: {title: string}) => {
    return (
        <label className='container-search'>
            <ImageComponent image='IsoTypeBlack' desc='Iso type Ddbase' />
            <input type="text" placeholder={props.title} />
        </label>
    )
}