import React from 'react'
import Footer from './Footer'
import Aside from './Aside'
import Header from './Header'

export default function Layout(props) {
  return (
    <>
        <Header />
        <main>
              <div className="container h-100 b_cont">
              <div className="row h-100">
              <Aside cls="a_leftside">Left Aside</Aside>
              {props.children}
              <Aside cls="a_rightaside">Right Aside</Aside>
            </div>
         </div>
         </main>
         <Footer />
    </>
    
  )
}
