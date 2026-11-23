import React from 'react'

const About = () => {
  return (
    <div>

    <div className='w-full h-[100%] pt-[60px] sm:pt-[90px] lg:pt-[130px] pb-[60px] lg:pb-[100px]'>

        <section className='flex flex-col justify-center items-center'>
            <h1 data-aos="fade-up" className='text-[28px] xs:text-[32px] sm:text-[40px] font-popins text-center'> What we do. </h1>
            <h3 data-aos="fade-up" className='text-[16px] sm:text-[20px] lg:text-[23px] font-popins text-center'>The areas that we're specialized in.</h3>
        </section>

        <section className='w-full grid grid-cols-1 md:grid-cols-2 gap-[10px] mt-[30px] lg:mt-[40px]'>

            <div data-aos="zoom-in-up" data-aos-duration="2000" className='w-full lg:max-w-[576px] md:even:justify-self-end min-h-[440px] sm:min-h-[520px] lg:h-[600px] mt-5 bg-[url(./assets/img/rasm1.png)] bg-center bg-no-repeat bg-cover flex justify-end items-start flex-col p-5 sm:p-[30px]'>
              <h3 className='text-[#FFFFFF] text-[14px] pb-[10px] font-thin'>Product Photography</h3>
              <p className='text-[#C0C0C0] text-[14px] pb-3 font-thin'>Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
              <button className='btn bg-[white] text-[black]'> Read more </button>
            </div>

             <div data-aos="zoom-in-up" data-aos-duration="2000" className='w-full lg:max-w-[576px] md:even:justify-self-end min-h-[440px] sm:min-h-[520px] lg:h-[600px] mt-5 bg-[url(./assets/img/rasm2.png)] bg-center bg-no-repeat bg-cover flex justify-end items-start flex-col p-5 sm:p-[30px]'>
              <h3 className='text-[#FFFFFF] text-[14px] pb-[10px] font-thin'>Architecture Photography</h3>
              <p className='text-[#C0C0C0] text-[14px] pb-3 font-thin'>Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.</p>
              <button className='btn bg-[white] text-[black]'> Read more </button>
            </div>

            <div data-aos="zoom-in-up" data-aos-duration="2000" className='w-full lg:max-w-[576px] md:even:justify-self-end min-h-[440px] sm:min-h-[520px] lg:h-[600px] mt-5 bg-[url(./assets/img/rasm3.png)] bg-center bg-no-repeat bg-cover flex justify-end items-start flex-col p-5 sm:p-[30px]'>
              <h3 className='text-[#FFFFFF] text-[14px] pb-[10px] font-thin'>Drone Photography</h3>
              <p className='text-[#C0C0C0] text-[14px] pb-3 font-thin'>Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
              <button className='btn bg-[white] text-[black]'> Read more </button>
            </div>

            <div data-aos="zoom-in-up" data-aos-duration="2000" className='w-full lg:max-w-[576px] md:even:justify-self-end min-h-[440px] sm:min-h-[520px] lg:h-[600px] mt-5 bg-[url(./assets/img/rasm4.png)] bg-center bg-no-repeat bg-cover flex justify-end items-start flex-col p-5 sm:p-[30px]'>
              <h3 className='text-[#FFFFFF] text-[14px] pb-[10px] font-thin'>Wildlife Photography</h3>
              <p className='text-[#C0C0C0] text-[14px] pb-3 font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis..</p>
              <button className='btn bg-[white] text-[black]'> Read more </button>
            </div>

        </section>


    </div>

    </div>
  )
}

export default About