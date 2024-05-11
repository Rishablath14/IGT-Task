import { CircleCheck, Eye, Play, Star } from "lucide-react"

const DesigningCourse = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col px-[6vw] mt-4">
     <h2 className="text-tirtary font-medium text-[14px] mt-8">QUALITY FEATURES</h2>
     <h3 className="text-secondary text-4xl font-semibold mt-1">Tutorials that people love most</h3>
     <div className="mt-8">
     <div className="group outline-none accordion-section" tabIndex="1">
       <div className="group flex gap-4 justify-between px-4 py-3 items-center text-secondary transition ease duration-300 cursor-pointer pr-10 relative p-4 shadow-lg">
       <div className="bg-[#ffe3c493] p-4 rounded-full cursor-pointer"><Play size={30} color="#EF9E48" fill="#EF9E48" /></div>   
         <div className="flex flex-col gap-2 justify-center">
           <div className="flex items-center gap-2"><div className="flex items-center gap-1 mb-2">{[...Array(5)].map((_,idx)=><Star key={idx} size={20} fill="#FFCE1F" color="#FFCE1F" />)}{[...Array(5-5)].map((_,idx)=><Star key={idx} size={20} fill="#969696" color="#969696" />)}<span className="text-secondary ml-2">{`5.0 (2332 reviews)`}</span></div><div className="ml-4 -mt-2 flex items-center justify-center text-[#343D48] gap-1"><Eye size={20} color="#343D48"/><span>2,532 students watched</span></div></div>
           <h3 className="text-secondary text-2xl font-semibold">Professional graphic design tutorial full course with exercise file</h3>
           <p className="text-[#5D646D]">Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
         </div>
         <button className="p-4 bg-[#3FDBB1] text-white rounded-md">7 Video Classes | 4 hrs</button>
       </div>
       <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-300 shadow-lg my-4">
        <div className="grid grid-cols-2 place-items-center">
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        </div>
       </div>
     </div>        
     <div className="group outline-none accordion-section" tabIndex="2">
       <div className="group flex gap-4 justify-between px-4 py-3 items-center text-secondary transition ease duration-300 cursor-pointer pr-10 relative p-4 shadow-lg">
       <div className="bg-[#ffe3c493] p-4 rounded-full cursor-pointer"><Play size={30} color="#EF9E48" fill="#EF9E48" /></div>   
         <div className="flex flex-col gap-2 justify-center">
           <div className="flex items-center gap-2"><div className="flex items-center gap-1 mb-2">{[...Array(5)].map((_,idx)=><Star key={idx} size={20} fill="#FFCE1F" color="#FFCE1F" />)}{[...Array(5-5)].map((_,idx)=><Star key={idx} size={20} fill="#969696" color="#969696" />)}<span className="text-secondary ml-2">{`5.0 (2332 reviews)`}</span></div><div className="ml-4 -mt-2 flex items-center justify-center text-[#343D48] gap-1"><Eye size={20} color="#343D48"/><span>2,532 students watched</span></div></div>
           <h3 className="text-secondary text-2xl font-semibold">Professional graphic design tutorial full course with exercise file</h3>
           <p className="text-[#5D646D]">Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
         </div>
         <button className="p-4 bg-[#3FDBB1] text-white rounded-md">7 Video Classes | 4 hrs</button>
       </div>
       <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-300 shadow-lg my-4">
        <div className="grid grid-cols-2 place-items-center">
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        </div>
       </div>
     </div>        
     <div className="group outline-none accordion-section" tabIndex="3">
       <div className="group flex gap-4 justify-between px-4 py-3 items-center text-secondary transition ease duration-300 cursor-pointer pr-10 relative p-4 shadow-lg">
       <div className="bg-[#ffe3c493] p-4 rounded-full cursor-pointer"><Play size={30} color="#EF9E48" fill="#EF9E48" /></div>   
         <div className="flex flex-col gap-2 justify-center">
           <div className="flex items-center gap-2"><div className="flex items-center gap-1 mb-2">{[...Array(5)].map((_,idx)=><Star key={idx} size={20} fill="#FFCE1F" color="#FFCE1F" />)}{[...Array(5-5)].map((_,idx)=><Star key={idx} size={20} fill="#969696" color="#969696" />)}<span className="text-secondary ml-2">{`5.0 (2332 reviews)`}</span></div><div className="ml-4 -mt-2 flex items-center justify-center text-[#343D48] gap-1"><Eye size={20} color="#343D48"/><span>2,532 students watched</span></div></div>
           <h3 className="text-secondary text-2xl font-semibold">Professional graphic design tutorial full course with exercise file</h3>
           <p className="text-[#5D646D]">Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
         </div>
         <button className="p-4 bg-[#3FDBB1] text-white rounded-md">7 Video Classes | 4 hrs</button>
       </div>
       <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-300 shadow-lg my-4">
        <div className="grid grid-cols-2 place-items-center">
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        </div>
       </div>
     </div>          
     <div className="group outline-none accordion-section" tabIndex="4">
       <div className="group flex gap-4 justify-between px-4 py-3 items-center text-secondary transition ease duration-300 cursor-pointer pr-10 relative p-4 shadow-lg">
       <div className="bg-[#ffe3c493] p-4 rounded-full cursor-pointer"><Play size={30} color="#EF9E48" fill="#EF9E48" /></div>   
         <div className="flex flex-col gap-2 justify-center">
           <div className="flex items-center gap-2"><div className="flex items-center gap-1 mb-2">{[...Array(5)].map((_,idx)=><Star key={idx} size={20} fill="#FFCE1F" color="#FFCE1F" />)}{[...Array(5-5)].map((_,idx)=><Star key={idx} size={20} fill="#969696" color="#969696" />)}<span className="text-secondary ml-2">{`5.0 (2332 reviews)`}</span></div><div className="ml-4 -mt-2 flex items-center justify-center text-[#343D48] gap-1"><Eye size={20} color="#343D48"/><span>2,532 students watched</span></div></div>
           <h3 className="text-secondary text-2xl font-semibold">Professional graphic design tutorial full course with exercise file</h3>
           <p className="text-[#5D646D]">Get your tutorials delivered at let home collect sample from the victory of the managments.</p>
         </div>
         <button className="p-4 bg-[#3FDBB1] text-white rounded-md">7 Video Classes | 4 hrs</button>
       </div>
       <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-300 shadow-lg my-4">
        <div className="grid grid-cols-2 place-items-center">
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        <div className="flex items-center gap-2">
       <CircleCheck color="#fff" fill="#B5C3CB"/><p className="p-2 text-secondary inline-block">
       How to reduce file pixel dimentions without loosing quality
         </p>
        </div>
        </div>
       </div>
     </div>        
     </div>
     
     </div>
  )
}

export default DesigningCourse