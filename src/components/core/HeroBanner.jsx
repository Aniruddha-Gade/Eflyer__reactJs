import Img from '../shared/Img'
import SearchBar from '../shared/SearchBar'
import Button from '../shared/Button';

import background from '../../../public/assets/background2.png'


// react icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCart } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineArrowDropDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const HeroBanner = () => {
    return (
        <div className="w-full h-[450px] md:h-[500px] flex justify-center items-center relative text-white">

            {/* background image */}
            <div className='w-screen h-screen absolute top-0 left-0 bottom-0 opacity-[0.5 overflow-y-hidden object-cover'>
                <img
                    src={background}
                    className='w-full h-full overflow-hidden object-cover'
                    alt="background"
                />
                {/* <Img src={background} alt="background" className='w-screen h-screen overflow-hidden object-cover' /> */}
            </div>

            {/* background layer */}
            <div className='absolute left-0 bottom-0 w-full h-[100px] opacity_layer_bg '></div>

            <div className='w-full px-24 flex flex-col justify-center items-center gap-11 relative'>
                <h2 className='text-[30px] md:text-[40px] font-bold font-rubik '>
                    Eflyer
                </h2>

                <div className='w-full flex justify-between items-center h-12 gap-7  '>
                    {/* menu button */}
                    <div className="">
                        <GiHamburgerMenu size={50} />
                    </div>
                    <p className='bg-zinc-800 py-2 px-4 rounded-lg h-full flex gap-1 items-center '>
                        All category
                        <MdOutlineArrowDropDown size={23} />
                    </p>

                    {/* searh input */}
                    <SearchBar />

                    <p className='bg-white text-black py-2 px-4 rounded-lg h-full flex items-center'>
                        English
                        <MdOutlineArrowDropDown size={23} />
                    </p>

                    <div className="flex items-center gap-2">
                        <IoIosCart size={25} />
                        Cart
                    </div>
                    <div className="flex items-center gap-2">
                        <MdAccountCircle size={25} />
                        Profile
                    </div>

                </div>

                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center justify-center rounded-full bg-[#FEFEFE] bg-opacity-60 w-10 h-10 text-black'>
                        <MdKeyboardArrowLeft size={23} />
                    </div>

                    <h1 className='text-6xl text-center font-bold text-white uppercase leading-[90px]'>
                        Get start <br />
                        your favourite shopping
                    </h1>

                    <div className='flex items-center justify-center rounded-full bg-[#FEFEFE] bg-opacity-60 w-10 h-10 text-black'>
                        <MdKeyboardArrowRight size={23} />
                    </div>
                </div>

                <Button
                    btnTitle={'Buy Now'}
                    btnType={"button"}
                    btnLink={"/all-product"}
                />

            </div>
        </div>
    )
}

export default HeroBanner
