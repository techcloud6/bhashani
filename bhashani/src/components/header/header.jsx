import React from 'react'
import Group from "../../assets/images/Group 2.png"
import Vector from "../../assets/images/Vector.png"
import Meity from "../../assets/images/meit-header.png"


export default function header() {
  return (
    <div>
    <div className="header" id="skipsection">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="header__main">
            <div className="header__main-item">
            <img src={Group} className="img" alt="Group" />
            </div>
            <div className="header__main-item">
            <img src={Vector} className="img" alt="Group" />
            <img src={Meity} className="img" alt="Group" />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="header__main">
            <div className="header__main-item">
            <img src={Meity} className="img" alt="Group" />
            </div>
           
          </div>
        </div>
      </div>
    </div>
   
  </div>
    </div>
  )
}
