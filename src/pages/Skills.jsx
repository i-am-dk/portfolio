import { React, useEffect, useState } from "react";
import Background from "../components/Background";
import SkillInfo from "../components/SkillInfo";
const Skills = () => {
    const [Number, SetNumber] = useState(0);
  useEffect(()=> {
    const interval = setInterval(() => {
      SetNumber(prevNumber => (prevNumber === 11 ? 1 : prevNumber + 1));
    }, 1000)
    const intervalText = setInterval(() => {
      const newX = Math.random() * window.innerWidth;
      const newY = Math.random() * window.innerHeight;
    }, 1);
    return ()=> clearInterval(interval, intervalText);
  },[]
  )
  const [currentStage] = useState(1);
  return (
    <section className="w-full h-screen relative">
        <div className='absolute top-40 left-0 right-90 z-10 flex items-center justify-center moving-text'>
      <h1 className='sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5 text-3xl'>
        <h1 className="fixed  text-white mx-5 text-2xl font-semibold"></h1>
        <br /> 
        <br />
            &nbsp;  {currentStage && <SkillInfo currentStage={Number} />} </h1>
      </div>

    <Background />
    </section>
  );
};
export default Skills;
