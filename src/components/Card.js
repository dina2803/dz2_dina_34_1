import React from 'react'
function Card({ cardInfo, isSelected, onMouseEnter, onMouseLeave }) {
    return (
        <div className='card' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{transform: isSelected ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.3s'}}>
            <img src='https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png' alt='' className='cardImg'/>
            <h2 className='cardName'>{cardInfo.name}</h2>
            {isSelected && (<something><h3 className='cardUsername'> {cardInfo.username}</h3> <p className='cardEmail'>{cardInfo.email}</p></something>)}
        </div>
    )
}

export default Card




