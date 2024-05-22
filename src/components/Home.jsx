import Nav from "./Nav";
import Footer from "./Footer";
import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {
  return (
    <div className="font-serif">
      <Nav />

      <div>
        <div className='min-h-[100vh] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
          <h1 className="text-[3rem] text-center font-bold py-[5px] text-orange-900">Welcome to Brighton School</h1>

          <header className="grid md:grid-cols-2 md:px-20 py-10">
            <div>
              <img
                src="./images/student.jpg"
                alt="student image"
                className="w-2/4 rounded-full border-2 shadow-lg animate__animated animate__pulse animate__infinite animate__slow"
              />
            </div>
            <div className='flex flex-col gap-8 justify-center'>
              <h1 className='text-8xl font-[600] text-white'>Say Hello!</h1>
              <p className='text-xl font-semibold'>Enjoy complete digital learning experience with Binary</p>

              <div className='flex gap-6'>
                <button className='bg-[#100d22] text-white px-8 py-2 rounded-md text-lg font-semibold hover:bg-orange-600'>Learn Mode</button>
                <button className='border-2 border-[#100d22] px-8 py-2 rounded-md text-lg font-semibold hover:bg-pink-600 hover:border-none hover:text-white'>Watch Videos</button>
              </div>
            </div>
          </header>

          <div className="p-10">
            <h1 className="text-4xl font-bold text-center text-white">Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
              <div className='bg-white p-8 rounded-md shadow-lg'>
                <h1 className='text-2xl font-semibold text-center'>Online Education</h1>
                <p className='text-center mt-4'>Learn from anywhere, anytime</p>
              </div>
              <div className='bg-white p-8 rounded-md shadow-lg'>
                <h1 className='text-2xl font-semibold text-center'>Online Tutor</h1>
                <p className='text-center mt-4'>Get help from our expert tutors</p>
              </div>
              <div className='bg-white p-8 rounded-md shadow-lg'>
                <h1 className='text-2xl font-semibold text-center'>Online Quiz</h1>
                <p className='text-center mt-4'>Test your knowledge with our quizzes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 px-20">
          <h1 className="text-center text-4xl font-bold">Benifits & Advantages</h1>
          <p className='text-gray-500 text-center mt-4 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptatibus deserunt ducimus incidunt eos aliquid, est itaque obcaecati at dolorum nulla doloribus illum libero possimus quos ratione, quaerat quo maiores? Aliquam, odio porro, iure neque expedita officia commodi quo possimus tempore impedit at. Debitis, quisquam! Non libero distinctio aut mollitia?</p>

          <div className='w-11/12 mx-auto mt-8 grid grid-cols-3 gap-8'>
            <div className='shadow-lg border rounded-lg p-4 text-center'>
              <i className='ri-artboard-line text-6xl'></i>
              <h1 className='text-2xl font-semibold mb-2'>Great Faculty</h1>
              <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, vero.</p>
            </div>
            <div className='shadow-lg border rounded-lg p-4 text-center'>
              <i className='ri-edit-box-line text-6xl'></i>
              <h1 className='text-2xl font-semibold mb-2'>Latest Curriculum</h1>
              <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, vero.</p>
            </div>
            <div className='shadow-lg border rounded-lg p-4 text-center'>
              <i className='ri-tree-line text-6xl'></i>
              <h1 className='text-2xl font-semibold mb-2'>Green Enviroment</h1>
              <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, vero.</p>
            </div>
          </div>
        </div>

        <div className="py-10 px-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h1 className="text-center text-4xl font-bold">Campus Portfolio</h1>
          <p className='text-white text-center my-4 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptatibus deserunt ducimus incidunt eos aliquid, est itaque obcaecati at dolorum nulla doloribus illum libero possimus quos ratione, quaerat quo maiores.</p>
          <div className='grid grid-cols-2 text-center'>
            <div>
              <Swiper navigation={true} modules={[Navigation]} className="w-8/12">
                <SwiperSlide><img src="./images/s1.jpg" alt="student pic" className='h-[300px] w-[100%] rounded-md' /></SwiperSlide>
                <SwiperSlide><img src="./images/s2.jpg" alt="student pic" className='h-[300px] w-[100%] rounded-md' /></SwiperSlide>
                <SwiperSlide><img src="./images/s3.jpg" alt="student pic" className='h-[300px] w-[100%] rounded-md' /></SwiperSlide>
                <SwiperSlide><img src="./images/s4.jpg" alt="student pic" className='h-[300px] w-[100%] rounded-md' /></SwiperSlide>
                <SwiperSlide><img src="./images/s5.jpg" alt="student pic" className='h-[300px] w-[100%] rounded-md' /></SwiperSlide>
                <SwiperSlide><img src="./images/s6.jpg" alt="student pic" className='h-[300px] w-[100%] rounded-md' /></SwiperSlide>
                <SwiperSlide><img src="./images/s7.jpg" alt="student pic" className='h-[300px] w-[100%] rounded-md' /></SwiperSlide>
                <SwiperSlide><img src="./images/s8.jpg" alt="student pic" className='h-[300px] w-[100%] rounded-md' /></SwiperSlide>
              </Swiper>
            </div>

            <div className='flex flex-col gap-8 justify-center'>
              <h1 className='text-8xl font-[600]'>Say Hello!</h1>
              <p className='text-xl font-semibold'>Enjoy complete digital learning experience with Binary</p>

              <div className='flex gap-6'>
                <button className='bg-[#100d22] text-white px-8 py-2 rounded-md text-lg font-semibold hover:bg-orange-600'>Learn Mode</button>
                <button className='border-2 border-[#100d22] px-8 py-2 rounded-md text-lg font-semibold hover:bg-[#100d22] hover:text-white'>Watch Videos</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;