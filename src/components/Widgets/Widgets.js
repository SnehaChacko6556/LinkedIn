import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
    <div className="widgets__articleLeft">
      <FiberManualRecordIcon />
    </div>
    <div className="widgets__articleRight">
      <h4>{heading}</h4>
      <p>{subtitle}</p>
    </div>
  </div>
  )

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle ("Sneha is back","Top news - 9999 readres")}
      {newArticle ("Sneha is back","Top news - 9999 readres")}
      {newArticle ("Sneha is back","Top news - 9999 readres")}
      {newArticle ("Sneha is back","Top news - 9999 readres")}
      {newArticle ("Sneha is back","Top news - 9999 readres")}
      {newArticle ("Sneha is back","Top news - 9999 readres")}
    </div>
  )
}

export default Widgets
