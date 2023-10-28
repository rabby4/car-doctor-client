import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[700px] ">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full bg-gradient-to-r from-black to-transparent rounded-xl">
                    <div className='w-2/4 text-white space-y-5 mx-20 '>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn bg-orange-600 hover:bg-orange-500 text-white border-none'>Discover More</button>
                            <button className='btn btn-outline border-gray-300 text-white hover:bg-white hover:text-gray-900'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-5 gap-5">
                    <a href="#slide4" className="btn btn-circle hover:bg-gray-400 text-white border-none bg-orange-600">❮</a>
                    <a href="#slide2" className="btn btn-circle hover:bg-gray-400 text-white border-none bg-orange-600">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[700px]">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full bg-gradient-to-r from-black to-transparent rounded-xl">
                    <div className='w-2/4 text-white space-y-5 mx-20'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn bg-orange-600 hover:bg-orange-500 text-white border-none'>Discover More</button>
                            <button className='btn btn-outline border-gray-300 text-white hover:bg-white hover:text-gray-900'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-5 gap-5">
                    <a href="#slide1" className="btn btn-circle hover:bg-gray-400 text-white border-none bg-orange-600">❮</a>
                    <a href="#slide3" className="btn btn-circle hover:bg-gray-400 text-white border-none bg-orange-600">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[700px]">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full bg-gradient-to-r from-black to-transparent rounded-xl">
                    <div className='w-2/4 text-white space-y-5 mx-20'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn bg-orange-600 hover:bg-orange-500 text-white border-none'>Discover More</button>
                            <button className='btn btn-outline border-gray-300 text-white hover:bg-white hover:text-gray-900'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-5 gap-5">
                    <a href="#slide2" className="btn btn-circle hover:bg-gray-400 text-white border-none bg-orange-600">❮</a>
                    <a href="#slide4" className="btn btn-circle hover:bg-gray-400 text-white border-none bg-orange-600">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[700px]">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full bg-gradient-to-r from-black to-transparent rounded-xl">
                    <div className='w-2/4 text-white space-y-5 mx-20'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn bg-orange-600 hover:bg-orange-500 text-white border-none'>Discover More</button>
                            <button className='btn btn-outline border-gray-300 text-white hover:bg-white hover:text-gray-900'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 right-5 bottom-5 gap-5">
                    <a href="#slide3" className="btn btn-circle hover:bg-gray-400 text-white border-none bg-orange-600">❮</a>
                    <a href="#slide1" className="btn btn-circle hover:bg-gray-400 text-white border-none bg-orange-600">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;