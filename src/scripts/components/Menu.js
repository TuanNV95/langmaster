import React from 'react'
import { Link } from 'react-router-dom'
import titleImg from '../../images/menu/menu-title.png'
import starIcon from '../../images/menu/star.svg'
import moonIcon from '../../images/menu/moon.svg'
import dogIcon from '../../images/menu/dog.svg'
import mountainIcon from '../../images/menu/mountain.svg'
import profileImg from '../../images/menu/menu-eng-1.png'
import siteImg from '../../images/menu/menu-eng-2.png'
import productImg from '../../images/menu/menu-eng-3.png'
import memoriesImg from '../../images/menu/menu-eng-4.png'

export default ({ menu, closeMenu }) => (
  <div className="menu" data-state={menu}>
    <section className="menu__space">
      <div />
      <div />
      <div />
      <div />
    </section>
    <section className="menu__box">
      <div className="bg" />
      <img className="menu-title" src={titleImg} alt="May I help you？" />
      <nav className="nav">
        <Link to="/profile">
          <div className="inner">
            <div className="icon">
              <img src={starIcon} alt="星" />
            </div>
            <img className="title" src={profileImg} alt="Menu 1" />
          </div>
        </Link>
        <Link to="/site">
          <div className="inner">
            <div className="icon">
              <img src={moonIcon} alt="月" />
            </div>
            <img className="title" src={siteImg} alt="Menu 2" />
          </div>
        </Link>
        <Link to="/product">
          <div className="inner">
            <div className="icon">
              <img src={dogIcon} alt="犬" />
            </div>
            <img className="title" src={productImg} alt="Menu 3" />
          </div>
        </Link>
        <Link to="/memories">
          <div className="inner">
            <div className="icon">
              <img src={mountainIcon} alt="山" />
            </div>
            <img className="title" src={memoriesImg} alt="Menu 4" />
          </div>
        </Link>
      </nav>
      <div className="colors">
        <div></div><div></div><div></div><div></div>
      </div>
    </section>
    <button type="button" className="menu__close-btn" onClick={closeMenu}>
      <div></div><div></div>
    </button>
  </div>
)
