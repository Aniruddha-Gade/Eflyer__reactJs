import { useRef, useState } from 'react'

// react icons
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  const navigate = useNavigate();


  // handle search
  const searchQueryHandler = (event) => {
    if ((event?.key === 'Enter' || event === 'searchButton') && searchQuery?.length > 0) {
      console.log("Search query = ", searchQuery)
      navigate(`/search/${searchQuery}`);
    }
  }

  return (
    <div className='flex items-center h-full  '>
      <input
        type="text"
        placeholder='Search this blog'
        className='w-[500px] md:w-[calc(100%-150px) h-full
                 text-black bg-white px-[15px] md:px-[30px] 
                 text-[14px] md:text-[18px] outline-none border-none font-medium rounded-l-lg'
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        ref={searchRef}
      />

      <button
        onClick={() => {
          searchQueryHandler('searchButton');
          searchRef.current?.focus();
        }}
        className="flex items-center justify-center bg-orange-500 md:w-[50px] h-full text-white 
                  text-[16px] md:text-[18px] outline-none border-none rounded-r-lg"
      >
        <IoSearch size={23} />
      </button>
    </div>
  )
}

export default SearchBar
