import {useState} from 'react'
import {FaTruckArrowRight} from 'react-icons/fa6'
import {CgProfile} from 'react-icons/cg'
import {RiLogoutCircleFill} from 'react-icons/ri'
import {LuBuilding2} from 'react-icons/lu'

import './index.css'

const Header = () => {
  const [activeTab, setActiveTab] = useState('MY MOVES')

  const handleTabClick = tab => {
    setActiveTab(tab)
  }

  const getUnderlinePosition = tab => {
    switch (tab) {
      case 'MY MOVES':
        return 0
      case 'MY PROFILE':
        return 1
      case 'GET QUOTE':
        return 2
      case 'LOGOUT':
        return 3
      default:
        return 0
    }
  }

  return (
    <div className="main-container">
      <nav className="header-navbar">
        <ul className="nav-item-container">
          <li
            className={`nav-item ${activeTab === 'MY MOVES' ? 'active' : ''}`}
            onClick={() => handleTabClick('MY MOVES')}
          >
            {' '}
            <span className="icon desktop-only">
              <FaTruckArrowRight />
            </span>
            MY Moves
          </li>

          <li
            className={`nav-item ${activeTab === 'MY PROFILE' ? 'active' : ''}`}
            onClick={() => handleTabClick('MY PROFILE')}
          >
            <span className="icon desktop-only">
              <CgProfile />
            </span>{' '}
            MY PROFILE
          </li>
          <li
            className={`nav-item ${activeTab === 'GET QUOTE' ? 'active' : ''}`}
            onClick={() => handleTabClick('GET QUOTE')}
          >
            <span className="icon desktop-only">
              <LuBuilding2 />
            </span>{' '}
            GET QUOTE
          </li>
          <li
            className={`nav-item ${activeTab === 'LOGOUT' ? 'active' : ''}`}
            onClick={() => handleTabClick('LOGOUT')}
          >
            <span className="icon desktop-only">
              <RiLogoutCircleFill />
            </span>{' '}
            LOGOUT
          </li>
        </ul>
        <div
          className="underline"
          style={{
            transform: `translate${window.innerWidth >= 768 ? 'Y' : 'X'}(${
              getUnderlinePosition(activeTab) * 100
            }%)`,
          }}
        />
      </nav>
    </div>
  )
}

export default Header
