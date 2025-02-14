import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  
  const videoRef = useRef([])
  const contentRef = useRef([])
  const [isPlaying, setIsPlaying] = useState();


  const handlePlay = (index) => {
     const video = videoRef.current[index]
     if(video){
      if(video.paused){
         video.play()
         setIsPlaying(index)
      }else{
         video.pause()
         setIsPlaying()
      }
     }


  };


    useEffect(() => {
      contentRef.current.forEach((elem)=>{
         gsap.fromTo(
             elem,
             { opacity: 0, y: 100 },
             { opacity: 1, y: 0, duration:1, ease:"power1.in", scrollTrigger: {
                 trigger: elem,
                 start: "top 80%",
                 end: "top 50%",
                 scrub: .1
             }}
         );
      })
    }, []);

  return (
    <>
      <div className='menu z-30 mt-4 max-[600px]:mt-0 w-[40%] max-[1100px]:w-[80%] max-[400px]:w-[93%] h-16 max-[500px]:h-14 max-[500px]:justify-between flex justify-evenly pl-10 pr-10 items-center border-2 bg-[#201B19] border-gray-700 fixed left-1/2 -translate-x-1/2'>
            <h3 className='text-4xl max-[500px]:text-3xl font-[font4] text-[#e6bc92]'><a href="#buy">Course</a></h3>
            <h3 className='text-4xl max-[500px]:text-3xl font-[font4] text-[#e6bc92]'><a href="#page5">About</a></h3>
      </div>
    <div className='mainScreen w-[100%] h-[100%] p-3' >
         <div className='page1 w-full  flex flex-col justify-center items-center pt-6 max-[800px]:pt-0 '>
          <div className="image w-[50vw] h-[80vh] flex items-center justify-center ">
              <img className="w-full h-full object-cover " src="/mainImg.jpg" alt="" />
          </div>
         </div>
         <div className="page2 w-full text-center flex flex-col gap-3 justify-center items-center">
             <h1 ref={(elem)=> contentRef.current[0] = elem} className=' p-2 w-[50%] text-white font-[font6] text-8xl'>Content Creator & Video editor </h1>
             <p  ref={(elem)=> contentRef.current[1] = elem} className=' w-1/2 text-white font-[font2] text-2xl'>I have been Creating Videos since 2021</p>
         </div>
         <div className="page3 w-full flex p-3 gap-3">
              <div ref={(elem)=> contentRef.current[2] = elem} className="textdiv rounded-2xl border-4 border-white p-3 flex flex-col pb-8 justify-between h-[25rem] w-1/2 max-[900px]:w-full max-[500px]:h-[15rem] max-[400px]:h-[12rem]">
                   <h2 className='text-white text-5xl font-[font6] flex gap-3'>Watch The Intro Video<FaArrowAltCircleRight className='icon' /></h2>
                   <p className='text-white text-3xl font-[font3] w-[70%] font-bold'>what type of editing Will we learn in this course? Watch the Intro Video.</p>
              </div>
              <div ref={(elem)=> contentRef.current[3] = elem} className="videodiv rounded-2xl border-4 border-white h-[25rem] w-1/2 max-[900px]:w-full max-[500px]:h-[15rem] max-[400px]:h-[12rem]"></div>
         </div>
         <div className="page4 w-full p-3 h-[40rem] max-[900px]:h-1/2 bg-[#191919]">
            <img ref={(elem)=> contentRef.current[4] = elem} className='rounded-2xl border-white w-full h-full object-contain flex items-start justify-start' src="/thumbnail.png" alt="" />
         </div>
         <div id="page5" className="page5 w-full min-h-[40rem] p-3 flex flex-col gap-3 ">
            <h1 className='sticky bg-black p-1 top-20 z-[20] text-7xl text-left font-[font6] text-white'>Course Curriculum</h1>
            <div ref={(elem)=> contentRef.current[5] = elem} className='element relative z-0 w-full h-full max-[900px]:min-h-[60rem] flex gap-3 '>
                 <div className='flex flex-col gap-[4rem] p-6 border-2 border-white rounded-3xl w-1/3 h-full max-[900px]:w-full'>
                    <h2 className='text-bold text-white text-6xl font-[font6]'>Introduction</h2>
                    <p className='text-bold text-white text-4xl font-[font2] leading-[4rem]'>1. How To Install Capcut Pro <br />
                       2. Best VPN for Capcut Pro <br />
                       3. How To import Video? <br />
                       4. Know About Ratios <br />
                       5. How To Split Clips <br />
                       6. Undo/Redo
                    </p>
                 </div>
                 <div className='flex flex-col gap-[4rem] p-6 border-2 border-white rounded-3xl relative top-[5rem] max-[900px]:top-0 w-1/3 h-[80%] max-[900px]:w-full'>
                    <h2 className='text-bold text-white text-6xl font-[font6]'>Level 2</h2>
                    <p className='text-bold text-white text-4xl font-[font2] leading-[4rem]'>
                    1. Know About Basics Tools <br />
                    2. Rearrange Video & Audio <br />
                    3. Mastering Keyframe <br />
                    4. Create a basics Project <br />
                    </p>
                 </div>
                 <div className='flex flex-col gap-[4rem] p-6 border-2 border-white rounded-3xl  relative w-1/3 h-[75%] max-[900px]:w-full'>
                 <h2 className='text-bold text-white text-6xl font-[font6]'>Level 3</h2>
                    <p className='text-bold text-white text-4xl font-[font2] leading-[4rem]'>
                        1. Mastering Effects <br />
                        2. Mastering Colour Grading <br />
                        3. Mastering Masking <br />
                    </p>
                 </div>
            </div>
            <div ref={(elem)=> contentRef.current[6] = elem} className='element relative z-0 w-full h-full max-[900px]:min-h-[60rem] flex gap-3 '>
                 <div className='flex flex-col gap-[4rem] p-6 border-2 border-white rounded-3xl w-1/3 h-full max-[900px]:w-full'>
                    <h2 className='text-bold text-white text-6xl font-[font6]'>Introduction</h2>
                    <p className='text-bold text-white text-4xl font-[font2] leading-[4rem]'>1. How To Install Capcut Pro <br />
                       2. Best VPN for Capcut Pro <br />
                       3. How To import Video? <br />
                       4. Know About Ratios <br />
                       5. How To Split Clips <br />
                       6. Undo/Redo
                    </p>
                 </div>
                 <div className='flex flex-col gap-[4rem] p-6 border-2 border-white rounded-3xl relative top-[5rem] max-[900px]:top-0 w-1/3 h-[80%] max-[900px]:w-full '>
                    <h2 className='text-bold text-white text-6xl font-[font6]'>Level 2</h2>
                    <p className='text-bold text-white text-4xl font-[font2] leading-[4rem]'>
                    1. Know About Basics Tools <br />
                    2. Rearrange Video & Audio <br />
                    3. Mastering Keyframe <br />
                    4. Create a basics Project <br />
                    </p>
                 </div>
                 <div className='flex flex-col gap-[4rem] p-6 border-2 border-white rounded-3xl  relative w-1/3 h-[75%] max-[900px]:w-full '>
                 <h2 className='text-bold text-white text-6xl font-[font6]'>Level 3</h2>
                    <p className='text-bold text-white text-4xl font-[font2] leading-[4rem]'>
                        1. Mastering Effects <br />
                        2. Mastering Colour Grading <br />
                        3. Mastering Masking <br />
                    </p>
                 </div>
            </div>
            <h1 className='bg-black p-1 top-20 text-7xl text-left font-[font6] text-white'>3D Video Editing ----</h1>
            <div ref={(elem)=> contentRef.current[7] = elem} className='element relative z-0 w-full h-full max-[900px]:min-h-[60rem] flex gap-3 '>
                 <div className='flex flex-col gap-[4rem] p-6 border-2 border-white rounded-3xl w-1/3 h-full max-[900px]:w-full'>
                    <h2 className='text-bold text-white text-6xl font-[font6]'>Introduction</h2>
                    <p className='text-bold text-white text-4xl font-[font2] leading-[4rem]'>1.Basic Of 3D Editing <br />
                       2. X-axis, Y-axis, Z-axis<br />
                       3. Master Null<br />
                       4. About 3D Camera <br />
                       5. Parallax Editing <br />
                       6. Master Vector
                    </p>
                 </div>
                 <div className='flex flex-col gap-[4rem] p-6 border-2 border-white rounded-3xl relative max-[900px]:top-0 w-1/3 h-[80%] max-[900px]:w-full '>
                    <h2 className='text-bold text-white text-6xl font-[font6]'>Level 2</h2>
                    <p className='text-bold text-white text-4xl font-[font2] leading-[4rem]'>
                    1. 4k Quality Trick <br />
                    2. Line Moving Animation <br />
                    3. Map Animation <br />
                    4. 3D Neck Move Animation <br />
                    </p>
                 </div>
                 <div className='flex flex-col gap-[4rem] p-6 border-2 border-white rounded-3xl  relative w-1/3 h-[75%] max-[900px]:w-full '>
                 <h2 className='text-bold text-white text-6xl font-[font6]'>Level 3</h2>
                    <p className='text-bold text-white text-4xl font-[font2] leading-[4rem]'>
                        1. Text Higlight||Text Glow Effect <br />
                        2. 3D Documentry Editing  <br />
                        3. Match Cut Animation <br />
                        4. Many More Pojects 
                    </p>
                 </div>
            </div>
            <h1 className='text-center bg-black p-2 font-bold top-20 z-[20] text-5xl font-[font2] text-white'>Detail Curriculum <span className='text-blue-700'><a href="https://tagmango.app/d90153a96c">Click here</a></span></h1>
         </div>
         <div className="page6 flex flex-col gap-5 p-3 w-full min-h-screen">
               <h1 ref={(elem)=> contentRef.current[8] = elem} className='text-white text-6xl font-[font6] capitalize'>What we Create ------</h1>
               <p className='p-4 text-white text-3xl font-[font2] capitalize font-bold'>A Glimpse what Type of Video editing we are going to Create in this course </p>
               <div ref={(elem)=> contentRef.current[9] = elem} className='videodiv2 w-full h-[40rem] max-[1100px]:h-[35rem] max-[800px]:h-[35rem] max-[600px]:h-[45rem] max-[400px]:h-[40rem]  flex gap-3 justify-center'>
                   <div onClick={()=>handlePlay(0)} className="relative video1 border-4 border-white rounded-2xl w-1/3 max-[600px]:w-1/2 h-full ">
                      {isPlaying !== 0 &&(
                        <FaPlayCircle className=' text-white absolute top-36 right-16 text-4xl text-center'/>
                      )}
                      <video ref={(el)=>videoRef.current[0] = el} className='-z-1 w-full h-full rounded-xl object-cover' src="../public/videos/video1.mp4"></video>
                   </div>
                   <div onClick={()=>handlePlay(1)} className="relative video2 border-4 border-white rounded-2xl w-1/3 max-[600px]:w-1/2 h-full">
                      {isPlaying !== 1 &&(
                        <FaPlayCircle className=' text-white absolute top-36 right-16 text-4xl text-center'/>
                      )}
                      <video ref={(el)=>videoRef.current[1] = el} className='-z-1 w-full h-full rounded-xl object-cover' src="../public/videos/video3.mp4"></video>
                   </div>
               </div>
               <div ref={(elem)=> contentRef.current[10] = elem} className="buynow p-3w-full flex justify-center items-center rounded-2xl">
                 <h2  className='p-6 text-center font-bold rounded-3xl text-white text-5xl font-[font5] bg-green-500'> <a href="https://tagmango.app/d90153a96c">BUY NOW</a> </h2>
               </div>
               <div ref={(elem)=> contentRef.current[11] = elem}  className="socialMedia flex flex-col gap-7 p-6 video1 border-4 border-white rounded-2xl w-full">
                   <div className="youtube p-2 flex justify-evenly pr-10 pl-10">
                      <p className='text-white text-5xl capitalize'><FaYoutube /></p>
                      <p className='text-white text-5xl capitalize font-[font2] font-bold'><a href="https://www.youtube.com/@Shuside">My Own Documentary Channel</a></p>
                   </div>
                   <div className="youtube p-2 flex justify-evenly pr-10 pl-10">
                      <p className='text-white text-5xl capitalize'><FaSquareInstagram /></p>
                      <p className='text-white text-5xl capitalize font-[font2] font-bold'><a href="https://www.instagram.com/iamshubh03?igsh=czM1b3hjemN6dTQ3">See my Instagram Video editing
                      Style</a></p>
                   </div>
               </div>
               <div className="buynow p-3 w-full flex flex-col justify-center items-center rounded-2xl">
                 <h4  className='w-full text-center font-bold text-white text-5xl font-[font5] capitalize'>A Lots of Things That are waiting for you.</h4> <br/>
                 <h4  className='w-full text-center font-bold text-white text-5xl font-[font5] capitalize'>for Detail Curriculum <span className='text-blue-600'><a href="https://tagmango.app/d90153a96c">Click Here</a></span></h4>
               </div>
               <div className="buynow p-3w-full flex justify-center items-center rounded-2xl">
                 <h2 id='buy' className='p-6 text-center font-bold rounded-3xl text-white text-5xl font-[font5] bg-green-500'> <a href="https://tagmango.app/d90153a96c">BUY NOW</a> </h2>
               </div>
         </div>
         <div className="footer w-full bg-[#191919]">
            <p className='text-white text-center capitalize text-3xl p-6'>Created and Developed by Shubham singh @ All right Reserved </p>
         </div>
    </div>

    </>
  )
}

export default App
