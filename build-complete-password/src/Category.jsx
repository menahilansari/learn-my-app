import React from 'react'

export default function category({finalCategory,setCatname}){
    let cat=finalCategory.map((v,i)=>{
        return(
            <li key={i} className='bg{#ccc} p-{7px} cursor-pointer text-{20px}font-serif font-{500} mb-2'>
                {v}

            </li>
        )
    })
    return(
        <div>
            (cat)
            <h3 className='text-[25px]font-[500] p-[10px]'> product category</h3>
            <ul>
                cat
            </ul>
        </div>
    )
}