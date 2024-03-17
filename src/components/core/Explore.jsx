import useFetch from "../../hooks/useFetch";
import Product from '../shared/Product'


// Loading Skeleton
const SklItem = () => {
    return (
        <div className="w-[350px] flex flex-col gap-4 rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] p-5 bg-white">
            <div className="skeleton rounded-xl w-20 h-5"></div>
            <div className="skeleton rounded-xl w-48 h-5"></div>

            <div className="skeleton w-full rounded-xl aspect-[1/1.5] "></div>

            <div className="skeleton rounded-xl w-24 h-5"></div>
        </div>
    )
}



const Explore = () => {

    const { data, loading } = useFetch('/products');
    // console.log("data ==== ", data)

    return (
        <div className='mt-[300px bg-white w-full h-full py-5 px-24 relative'>
            <h3 className='text-3xl font-bold text-center'>
                Man & Woman Fashion
            </h3>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 place-items-center gap-8">
                {!loading ? (
                    data?.map((item) => (
                        <Product
                            key={item.id}
                            item={item}
                        />
                    ))
                ) : (
                    // show loading skeleton if data not loaded
                    <>
                        <SklItem />
                        <SklItem />
                        <SklItem />
                        <SklItem />
                        <SklItem />
                        <SklItem />
                    </>
                )}
            </div>

        </div>
    )
}

export default Explore
