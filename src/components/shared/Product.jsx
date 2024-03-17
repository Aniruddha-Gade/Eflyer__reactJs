import { Link } from 'react-router-dom'
import Button from '../shared/Button'


const Product = ({ item }) => {



  return (
    <div className="w-[350px] rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] p-5 group">

      <Link
        to='/product/'
        className='flex flex-col items-center '
      >
        <p className="font-semibold text-lg">
          {item?.title.split(' ').slice(0, 3).join(' ')}
          {item?.title.split(' ').length > 3 ? ' ...' : ''}
        </p>



        <p>
          <span className='text-red-400 '>Price $ </span>
          {item?.price}
        </p>

        <img
          src={item?.image}
          className="object-contain w-[300px] h-[300px] my-10 group-hover:scale-105 duration-300"
        />

        <Button
          btnType={'button'}
          btnTitle={"Add to cart"}
          btnLink={"/product/"}

        />
      </Link>


    </div>
  )
}

export default Product