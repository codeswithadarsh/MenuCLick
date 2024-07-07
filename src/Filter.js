import React from 'react'


function Filter( {haveCategory, selectedCategory, setCategory} ) {

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  }

  return (
    <div className='category-list'>
      {

        haveCategory.map(category =>{
          return(
            <div className='filter'>
                  <input type="radio" name="category" value={category} id={category} checked={category === selectedCategory} onChange={onChangeCategory}/>
                  <label htmlFor={category}>{category}</label>

              </div>
          )
        })
  

      }
    </div>
  )
}

export default Filter