import React from 'react'
import { EducatIcon } from '../common/button/icons';

const AchivCard = ({item}) => {
 const cardIcon={
    "EducatIcon":<EducatIcon/>
 }
    const {icon,title,value,text}=item;
  return (
    <div className='achiv_card'>
        <div className='icon_wrapper'><span>{cardIcon[icon]}</span></div>
        <div className='card_title'><span>{title}</span><span>{value}</span></div>
        <p>{text}</p>
    </div>
  )
}

export default AchivCard