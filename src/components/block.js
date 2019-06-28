import React from 'react'

export default function block(props) {
    
    return (
        <div className="block" data-type={props.type}>
            <div className="circle" style={{backgroundColor: props.color}}></div>
            <div className="block-info">
                <h2 className="block-title">{props.title}</h2>
                <h2 className="block-amount">${props.amount}</h2>
            </div>
        </div>
    )
}
