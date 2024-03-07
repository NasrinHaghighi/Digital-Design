import React from 'react'
import SortDropdown from './SortDropdown'
import CatDropdown from './CatDropdown'
import SearchInput from './SearchInput'

function Filters() {
  return (
    <div className='flex justify-start items-center py-4 gap-x-36'>
      <CatDropdown />
   <SortDropdown />
   <SearchInput />
   </div>
  )
}

export default Filters