import React from 'react'
import {IndexLink, Link} from 'react-router'
import './Main.scss'

export const Main = () => (
  <div className="banner">
    <div className="logo-wrapper">
      <div className="logo"></div>
    </div>
    <div className="router-wrapper">
      <IndexLink to='/' className="router-item" activeClassName='route--active'>
        首页
      </IndexLink>
      <Link to='/counter' className="router-item" activeClassName='route--active'>
        我的投票
      </Link>
      <Link to='/zen' className="router-item" activeClassName='route--active'>
        个人中心
      </Link>
    </div>
    <div className="vote-button">
      <Link to='/elapse' className="router-item" activeClassName='route--active'>
        我要投票
      </Link>
    </div>
  </div>
)

export default Main
