import React from 'react'
import Main from '../../components/Main'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Main />
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
