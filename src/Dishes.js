import React from 'react'

function Dishes({dishes}) {
  return (
    <div className='dishes-category'>
      {
        dishes.map(dish => {
          return <div className='list'>
            <img src={dish.img} alt={dish} />
            <div>

              <h2 className='dish-title'>{dish.title}</h2>
              <p>{dish.price}</p>
              
              <div className='desc'>
                <p>{dish.desc}</p>
              </div>
            

            </div>
          </div>
        })
      }
    </div>
  )
}

export default Dishes