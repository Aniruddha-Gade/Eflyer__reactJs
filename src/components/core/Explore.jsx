import useFetch from "../../hooks/useFetch";
import Product from '../shared/Product'



const Explore = () => {

    const { data, loading } = useFetch('/products');
    console.log("data ==== ", data)

    return (
        <div className='mt-[300px bg-white w-full h-full py-5 px-24 relative'>
            <h3 className='text-3xl font-bold text-center'>
                Men & Women Fashion
            </h3>

            {
                !loading ?

                    (
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 place-items-center gap-8">
                            {
                                data?.map((item) => (
                                    <Product
                                        key={item.id}
                                        item={item}
                                    />
                                ))
                            }
                        </div>
                    )

                    :

                    <div className="text-4xl underline text-red-900">
                        Loading
                    </div>

            }

        </div>
    )
}

export default Explore
