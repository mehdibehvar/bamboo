
import { FiSearch } from 'react-icons/fi'
const SearchBox = () => {
  return (
<div className='search_box'>
<div className='search_bg_transparent'>
</div>
        <button className='search_submit'>
        <FiSearch/>
       </button>
      <input className='search_input' placeholder='جستجو...'></input>
</div>
  )
}

export default SearchBox