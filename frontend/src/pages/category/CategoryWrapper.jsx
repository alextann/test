import React from 'react'
import {Link} from "react-router-dom";



function CategoryItem ({name,href,backgroundColor,color}) {
    const style = {
        backgroundColor : backgroundColor,
        color : color,
        borderColor: color
    }
    return (
        <div>
            <Link to = {href} className='rounded-full'>
                <div className='uppercass px-6 py-2 text-center rounded-full' style={style}>{name}</div>
            </Link>
        </div>
    )
}





function CategoryList () {
    return (
        <div className='flex flex-wrap items-center justify-center gap-8'>
            <CategoryItem name = "weight" href = "/categories/weight" backgroundColor = "#f0f5c4" color = "#59871f"/>
            <CategoryItem name = "cardio" href = "/categories/cardio" backgroundColor = "#efedfa" color = "#3c3a8f"/>
            <CategoryItem name = "yoga" href = "/categories/yoga" backgroundColor = "#e5f7f3" color = "#1f8787"/>
        </div>
    )
}

const CategoryWrapper = () => {
  return (
    <div clas>
        <CategoryList/>
        </div>
  )
}

export default CategoryWrapper