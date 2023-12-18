'use client'

import Image from "next/image";
import LogoIcon from '@/app/assets/icons/logo.svg'
import BudgetIcon from '@/app/assets/icons/budget.svg'
import BurgerMenu from '@/app/assets/icons/burger-menu.svg'

import './styles.scss'
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { NavMenu } from "../NavMenu";

export const Header = () => {
  const { isMobile } = useWindowDimensions()


  return (
  <header className='c-header'>
    <nav className="c-nav"> 
      <Image src={LogoIcon} alt="Linklab Icon"/>
      {isMobile ?
      <button className="c-budget-button__mobile">
        <Image src={BudgetIcon} alt="Budget Icon"/>
      </button>
      :
        <NavMenu/>
      }
      {isMobile ? <button>
        <Image className="l-margin-left" src={BurgerMenu} alt="Burger Menu Icon"/>
      </button> : 
      <button className="c-budget-button">
        <Image src={BudgetIcon} alt="Burger Menu Icon"/>
      <span>Orçamento</span>
    </button> 
      }
    </nav>
  </header>
)}