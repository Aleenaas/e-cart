import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



function Header() {
const wishlistArray = useSelector((state)=>state.wishlist)

const cartArray = useSelector((state)=>state.cartItem)

  const [show, setShow] = useState(false)
  return (
    <>
      <nav className='bg-violet-900 p-5 flex text-white w-full fixed' >
        <div className='md:flex items-center md:px-10 px-5 w-full'>
          <div className='flex w-full '>
            <Link to={'/'}><h2 className='text-3xl '><FontAwesomeIcon icon={faCartShopping} className='me-3' /> E-Cart</h2></Link>
            <button onClick={() => setShow(!show)} className='border border-white p-3 text-white rounded ms-auto md:hidden'><FontAwesomeIcon icon={faBars} /></button>
          </div>

          {show && <ul className='flex mt-5 md:hidden'>
            <li>
              <Link to={'/wishlist'}><button className='border border-white p-3 rounded  hover:bg-white hover:text-violet-900 flex'><FontAwesomeIcon icon={faHeart} style={{ color: "#ff0000", }} className='me-2' />Wishlist <span className='border bg-white px-1 rounded text-black ms-2'>{wishlistArray.length}</span></button></Link>
            </li>



            <li>
              <Link to={'/cart'}><button className='border border-white p-3 rounded ms-3 hover:bg-white hover:text-violet-900 flex'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#00ff40", }} className='me-3' />Cart <span className='border bg-white px-1 rounded text-black ms-2'>{cartArray.length}</span></button></Link>
            </li>

          </ul>}

          <ul className='ms-auto md:flex hidden'>
            <li>
              <Link to={'/wishlist'}><button className='border border-white p-3 rounded hover:bg-white hover:text-violet-900 flex'><FontAwesomeIcon icon={faHeart} style={{ color: "#ff0000", }} className='me-2' />Wishlist <span className='border bg-white px-1 rounded text-black ms-2'>{wishlistArray.length}</span></button></Link>
            </li>



            <li>
              <Link to={'/cart'}><button className='border border-white p-3 rounded ms-3 hover:bg-white hover:text-violet-900 flex'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#00ff40", }} className='me-3' />Cart <span className='border bg-white px-1 rounded text-black ms-2'>{cartArray.length}</span></button></Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header