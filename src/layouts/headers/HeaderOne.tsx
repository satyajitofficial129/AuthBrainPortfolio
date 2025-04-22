
"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavMenu from './NavMenu'
import MobileMenu from './MobileMenu'

export default function HeaderOne() {

  const [open, setOpen] = useState(false)
  const [opneMenu, setOpneMenu] = useState(false)

  return (
    <>
      <header id="navigation">
        <div className="container-fluid">
          <div className="row">
            <div className="col-30 left-col align-self-center rk_style">
              <div className="site-logo">
                <Link href="/"><h2>AuthBrain</h2></Link>
              </div>
            </div>

            <div className="col-40 justify-content-center d-flex align-self-center">
              <nav id="main-menu">
                <NavMenu />
              </nav>
            </div>
          </div>
        </div>

        <div className={`search_box ${open ? "active" : ""}`}>
          <div className="close-btn" onClick={() => setOpen(false)} style={{ display: open ? "block" : "none" }}>
            <i className="ti-close"></i>
          </div>

          <div className="search-data" style={{ display: open ? "block" : "none" }}>
            <form onSubmit={e => e.preventDefault()}>
              <input type="text" required />
              <div className={`line ${open ? "active" : ""}`}></div>
              <label style={{ display: open ? "block" : "none" }}>Type to search..</label>
              <button type="submit">
                <span className="ti-search" style={{ display: open ? "block" : "none" }}></span>
              </button>
            </form>
          </div>
        </div>

        <div id="sm_menu_ham" className={`${opneMenu ? "open" : ""}`} onClick={() => setOpneMenu(!opneMenu)}><span></span><span></span><span></span><span></span></div>
        <MobileMenu opneMenu={opneMenu} />
      </header>
    </>
  )
}
