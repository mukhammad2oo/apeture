import React from 'react'
import rasm1 from "../../assets/img/content2.png"
import icon1 from "../../assets/img/cicon1.png"
import icon2 from "../../assets/img/cicon2.png"
import icon3 from "../../assets/img/cicon3.png"
import icon4 from "../../assets/img/cicon4.png"

const Content = () => {
    return (
        <div>

            <section className='min-h-[460px] sm:min-h-[520px] lg:h-[600px] bg-[url(./assets/img/content1.png)] bg-center bg-no-repeat bg-cover flex justify-center md:justify-end items-end md:items-center pb-6 md:pb-0 px-3 md:px-0'>

                <div className='w-full md:w-[300px] md:h-full flex flex-col justify-center md:pr-2 bg-black/50 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none'>
                    <h3 data-aos="fade-up" data-aos-duration="1000" className='font-thin text-[14px] text-[#FFFFFF]'> Sunset at Mount Fuji </h3>
                    <h3 data-aos="fade-down" data-aos-duration="1000" className='font-thin text-[14px] text-[#C0C0C0]'>Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</h3>
                </div>

            </section>

            <section className='py-10 lg:py-0 lg:h-[540px] flex flex-col lg:flex-row gap-8 lg:gap-6 justify-between items-center'>

                <div data-aos="fade-down" data-aos-duration="1000" className='w-full lg:flex-1'>
                    <h3 className='text-[13px] lg:pl-[20px] text-[#C0C0C0] tracking-[3px]'>The Gear cage</h3>
                    <h1 className='text-[22px] sm:text-[28px] lg:pl-[20px] text-[#FFFFFF]'>The tools that we use.</h1>
                    <p className='text-[14px] lg:pl-[20px] text-[#FFFFFF]'>The say that "no place is boring if you've had a good night's sleep <br className='hidden xl:block' /> and have a pocket full of unexposed film". While we don't shoot (a lot) <br className='hidden xl:block' /> of film these days — these are the tools that we actually use everyday <br className='hidden xl:block' /> to capture the amazing things around us.</p>
                    <button className='btn bg-[white] mt-[30px] lg:ml-[20px] text-[black]'>Check it out</button>
                </div>

                <img data-aos="fade-up" data-aos-duration="1000" className='w-full lg:w-[45%] xl:w-[650px] object-cover' src={rasm1} alt="" />

            </section>

            <section className='min-h-[460px] sm:min-h-[520px] lg:h-[600px] bg-[url(./assets/img/content3.png)] bg-center bg-no-repeat bg-cover flex justify-center md:justify-end items-end md:items-center pb-6 md:pb-0 px-3 md:px-0'>

                <div className='w-full md:w-[300px] md:h-full flex flex-col justify-center md:pr-2 bg-black/50 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none'>
                    <h3 data-aos="fade-right" data-aos-duration="1000" className='font-thin text-[14px] text-[#FFFFFF]'> Monstera Leafs </h3>
                    <h3 data-aos="fade-left" data-aos-duration="1000" className='font-thin text-[14px] text-[#C0C0C0]'>Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</h3>
                </div>

            </section>

            <section className='py-12 lg:py-0 lg:h-[500px] flex justify-center items-center'>

                <div className='w-full lg:h-[280px]'>
                    <h1 data-aos="zoom-in-up" data-aos-duration="1000" className='text-center text-[28px] xs:text-[32px] sm:text-[40px]'>Past clients</h1>
                    <h2 data-aos="zoom-in" data-aos-duration="1000" className='text-[16px] sm:text-[20px] lg:text-[24px] text-[#C0C0C0] text-center'>Trusted by your favourite companies</h2>

                    <div className='lg:h-[158px] flex flex-wrap justify-evenly items-center gap-x-6 gap-y-6 mt-6 lg:mt-0'>
                        <img data-aos="fade-up" data-aos-duration="1000" className='w-[80px] sm:w-[120px]' src={icon1} alt="" />
                        <img data-aos="fade-down" data-aos-duration="1000" className='w-[80px] sm:w-[120px]' src={icon2} alt="" />
                        <img data-aos="fade-down" data-aos-duration="1000" className='w-[80px] sm:w-[120px]' src={icon3} alt="" />
                        <img data-aos="fade-up" data-aos-duration="1000" className='w-[80px] sm:w-[120px]' src={icon4} alt="" />
                    </div>
                </div>

            </section>

            <section className='min-h-[460px] sm:min-h-[520px] lg:h-[600px] bg-[url(./assets/img/content4.png)] bg-center bg-no-repeat bg-cover flex justify-center md:justify-end items-end md:items-center pb-6 md:pb-0 px-3 md:px-0'>

                <div className='w-full md:w-[300px] md:h-full flex flex-col justify-center md:mr-5 bg-black/50 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none'>
                    <h3 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className='font-thin text-[14px] text-[#FFFFFF]'> Star fall in the Himalayas </h3>
                    <h3 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aos-delay="600" className='font-thin text-[14px] text-[#C0C0C0]'>Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</h3>
                </div>

            </section>

            <section className='py-12 lg:py-0 lg:h-[414px] flex justify-center items-center'>

                <div >
                    <h1 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className='text-[26px] xs:text-[30px] sm:text-[40px] text-center'>Need help with photography <br className='hidden sm:block' /> or videography?</h1>
                    <h3 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aos-delay="400" className='text-[16px] sm:text-[20px] lg:text-[24px] text-[#C0C0C0] text-center'>We're here for you!</h3>
                    <button data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aos-delay="700" className='block m-auto btn bg-[white] text-[black] mt-[10px] rounded-[14px]'> Get in touch </button>
                </div>

            </section>

        </div>
    )
}

export default Content