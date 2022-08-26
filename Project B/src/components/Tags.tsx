import React, {FC, useCallback} from 'react'
import Tag from './Tag'

type TagsProps={
    values:string[],
    checked:string[],
    onChange:(checked: string[])=>void 
    size: 'small' | 'medium' | 'large'
    mode: 'radio' | 'checkbox'
}



const AllTags:FC<TagsProps>=({values,checked, onChange, mode, size})=> {

    const handleChange = useCallback((name: string) => {
        if (!mode || mode === 'radio') {
            onChange([name])
        } else {
            if (checked.includes(name)) {
                onChange(checked.filter(n => n !== name))
            } else {
                onChange([ ...checked, name ])
            }
        }
    }, [mode, onChange, checked])
 
   
    return(
        <>
   
        {values.map((tag)=>{
            const  active =checked.includes(tag)
            return <Tag active={active} onChange={handleChange} label={tag} size={size}/>
        })}

        
        
        </>
    )
}
export default AllTags