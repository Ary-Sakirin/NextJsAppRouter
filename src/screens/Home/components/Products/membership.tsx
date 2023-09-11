import Image from 'next/image'
export default function Membership() {
    return (
        <>
            <h1 className="text-[25px] font-bold px-2 py-2">Nike Membership</h1>
            <div className="container px-2 py-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 bg-[black]">
                    <div className="text-white">
                        <div className="text-[50px] font-extrabold leading-[0.9] tracking-tighter mb-5">
                            <h1>BECOME A</h1>
                            <h1>MEMBERSHIP</h1>
                        </div>
                        <p className="mb-5">Sign up for free. Join the community.</p>
                        <span>
                            <button className="btn bg-white rounded-full me-2">Join us</button>
                            <button className="btn bg-white rounded-full">Sign in</button>
                        </span>
                    </div>
                    {/* <div className=''>
                        <Image
                            src="https://clipart-library.com/image_gallery2/Nike-Logo-PNG.png"
                            alt="Picture of the author"
                            width={200}
                            height={100}
                        />
                    </div> */}
                </div>
            </div>
        </>
    )
}