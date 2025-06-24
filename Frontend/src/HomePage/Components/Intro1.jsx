import React from 'react'

function Intro1() {
    return (
        <div className="text-center lg:text-left">
            {/* This is the empty space on the top */}
            <div div className='pt-28 text-black bg-white' ></div>

            <div className="lg:flex-row justify-center items-center gap-20 bg-white px-10 py-10 flex flex-col-reverse">

                {/* Left section */}
                <div className='left bg-white'>
                    <h1 className='font-bold md:text-[50px] text-[25px]'>Hello, I’m Vedansh Tyagi</h1>
                    <p className='max-w-[500px] font-mono mt-5'>Hi, I am a 2nd-year Computer Science student passionate about web development, AI/ML, and cybersecurity. I actively build projects, compete in coding contests, and love exploring new tech to grow as a developer.</p>
                    <button className='border px-4 py-2 mt-5 bg-[#A53DFF] rounded-lg text-white cursor-pointer hover:bg-[#8f32d6] transition duration-200'><a href="https://github.com/vedanshtyagi1901" target='_blank'>View Github</a></button>
                    <div className='mt-10 flex justify-between gap-1'>
                        <div className='bg-[#e0c4f9] w-full py-3'>
                            <h1 className='font-bold text-center text-xl my-2'>20+</h1>
                            <p className='text-center'>CP contests </p>
                        </div>
                        <div className='bg-[#e0c4f9] w-full py-3'>
                            <h1 className='font-bold text-center text-xl my-2'>15+</h1>
                            <p className='text-center'>Projects</p>
                        </div>
                        <div className='bg-[#e0c4f9] w-full py-3'>
                            <h1 className='font-bold text-center text-xl my-2'>1</h1>
                            <p className='text-center'>Hackethon</p>
                        </div>
                    </div>
                </div>

                {/* Right section */}
                <div className='right'>
                    <img src="/my_image4.png" alt="" srcset="" className='' />
                </div>
            </div>
        </div >
    )
}

export default Intro1