import React from 'react'
import Navbar from './Navbar'
import Announcement from './Announcement'
import Banner from './Banner'
import Search from './Searchbar'
import Products from './Products'
import Information from './Information'
import Keywords from './Keywords'

const index = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Banner/>
        <Search/>
        <Products/>
        <Information/>
        <Keywords/>
    </div>
  )
}

export default index
