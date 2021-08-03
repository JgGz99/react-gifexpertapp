import React from 'react'

export const GifGridItem = ({ title, url }) => {
    return (
        <div className="col-md-3">
            <div className="card" >
            <img className="card-img-top" src={url} alt={title}></img>
            <div className="card-body">
                <p className="card_text">{title}</p>
            </div>
        </div>
        </div>
    )
}
