import React from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import {
  TheContent,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {
  const darkMode = useSelector(state => state.darkMode)
  const classes = classNames(
    'c-app c-default-layout',
    darkMode && 'c-dark-theme'
  )

  return (
    <>
    <TheHeader/>
    <TheContent/>
    <TheFooter/>
    </>
  )
}

export default React.memo(TheLayout)
