import React from "react"

export const ButtonComponent = (props: { title: string }) => {
    return (
        <button className="button-component" type='submit'>{props.title}</button>
    )
}

export const LineComponent = () => {
    return (
        <p className='line-separator'></p>
    )
}