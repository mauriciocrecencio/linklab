'use client'

import SmallDotsImage from '@/app/assets/images/small-dots.svg'
import './styles.scss'
import Image from "next/image";
import ErlenmeyerFlaskIcon from '@/app/assets/icons/erlenmeyer-flask.svg'
import ChemicalsIcon from '@/app/assets/icons/chemicals.svg'
import ToolsIcon from '@/app/assets/icons/tools.svg'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Category } from '@/app/interfaces/Category';
import useWindowDimensions from '@/hooks/useWindowDimensions';

type Props = {
  category: Category
}

type MappedIcons = {
  [key: string]: StaticImport; 
}

const mappedIcons: MappedIcons = {
  products: ErlenmeyerFlaskIcon,
  chemicals: ChemicalsIcon,
  tools: ToolsIcon
}

export const CategoryCard = ({category}: Props) => {
  const {isMobile}  = useWindowDimensions()
  return (
  <div className="l-flex">
    {isMobile ?
    <>
      <Image src={mappedIcons[category.icon]} alt={`Image of ${category.icon}`}/>
      <h3 className='c-category-text__name'>{category.name}</h3>
      <Image src={SmallDotsImage} alt="Image of small dots"/>
    </> :
    <>
    <span className='c-category-text__title'>{category.title}</span>
    <div className='l-position-left'>
      <Image src={mappedIcons[category.icon]} alt={`Image of ${category.icon}`}/>
      <h3 className='c-category-text__name'>{category.name}</h3>
    </div>
    </>
  }
  </div>
)}
