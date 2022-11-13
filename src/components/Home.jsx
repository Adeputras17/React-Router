import React from 'react'



// import { useEffect, useState } from 'react'

const Home = () => {

    // const [loopNum, setLoopNum] = useState(false);
    // const [isDeleting, setIsDeleting] = useState(false);
    // const toRotate = ["Billboard", "Sticker", "Photos", "Tombstone", "Painting"];
    // const [text, setText] = useState("");
    // const [delta, setDelta] = useState(300 - Math.random() * 100);
    // const period = 2000;

    // useEffect(() => {
    //     let ticker = setInterval(() => {
    //       tick();
    //     },delta);
    
    //     return () => { clearInterval(ticker) };
    //   }, [text])

    // const tick = () => {
    //     let i = loopNum % toRotate.length;
    //     let fullText = toRotate[i];
    //     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    //     setText(updatedText);

    //     if(isDeleting) {
    //         setDelta(prevDelta => prevDelta /2)
    //     }

    //     if (isDeleting && updatedText === fullText) {
    //         setIsDeleting(true);
    //         setDelta(period);
    //     } else if(isDeleting && updatedText === '') {
    //         setIsDeleting(false);
    //         setLoopNum(loopNum + 1);
    //         setDelta(500);
    //     }
    // }

  return (
    <div className='text-white '>
        <div className='bg-[url(https://cdn.pixabay.com/photo/2022/10/23/22/45/highway-7542272_960_720.jpg)] bg-[length:1440px_720px] backdrop-opacity-10 h-screen mx-auto text-center flex flex-col justify-center'>
            {/* <p className='text-[#26c96a] font-bold p-1'>SERVED YOUR PRINTING NEEDS</p> */}
            <h1 className='md:text-7xl sm:text-4xl font-bold md:py-4'>Cerca Trova</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Solve Your Data Problems</p>
                {/* <p className='md:text-5xl sm:text-4xl text-xl font-bold'>{text}</p> */}
            </div>
            <p className='md:text-2xl text-xl py-4'>We Provide Data Solution Services At Competitive Prices And Professional Quality</p>
            <button className='bg-[#26c96a] w-[200px] rounded-md font-medium mx-auto my-3 py-3 text-black'>Lets Order</button>
        </div>
    </div>
  )
} 

export default Home