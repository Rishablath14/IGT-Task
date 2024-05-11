import { CircleCheck, CircleX } from "lucide-react"

const Pricing = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col px-[6vw] mt-4 py-8">
     <h2 className="text-tirtary font-medium text-[14px] mt-8">PRICING PLAN</h2>
     <h3 className="text-secondary text-4xl font-semibold mt-1">Choose your pricing policy</h3>
     <div className="bg-[rgb(247,248,251)] w-56 p-1 rounded-sm mt-6 flex items-center"><span className="bg-white rounded-md p-2 shadow-sm text-secondary mr-2">Monthly Plan</span><span>Annual Plan</span></div>
     <div className="mt-8 flex justify-center items-center gap-6">
        <div className="flex flex-col justify-center p-12 rounded-md shadow-md max-w-[35%]">
            <h3 className="text-secondary font-semibold text-2xl">Free Plan</h3>
            <p className="text-secondary mt-2">For Small teams or office</p>
            <ul className="mt-2">
                <li className="flex items-center my-4"><CircleCheck color="#fff" fill="#25CB9E" /><p className="text-[#343D48] ml-2">Ultimate access to all course, exercises and assessments</p></li>
                <li className="flex items-center my-4"><CircleCheck color="#fff" fill="#25CB9E" /><p className="text-[#343D48] ml-2">Free acess for all kind of exercise corrections with downloads.</p></li>
                <li className="flex items-center my-4"><CircleCheck color="#fff" fill="#25CB9E" /><p className="text-[#343D48] ml-2">Total assessment corrections with free download access system</p></li>
                <li className="flex items-center my-4"><CircleX color="#fff" fill="gray" /><p className="text-[#343D48] ml-2">Unlimited download of courses on the mobile app contents</p></li>
                <li className="flex items-center my-4"><CircleX color="#fff" fill="gray" /><p className="text-[#343D48] ml-2">Download and print courses and exercises in PDF</p></li>
            </ul>
            <div className="text-center mt-4">
            <button className="text-[#EF9E48] inline-block py-2 px-6 rounded-md bg-[#ffcf9c85] font-medium text-base">Start free trial</button>
            </div>
        </div>
        <div className="flex flex-col justify-center p-12 rounded-md shadow-md max-w-[35%] border-[2px] border-[#25CB9E] relative">
            <div className="absolute bg-[#EF9E48] py-1 px-2 rounded-md text-white top-4 text-[14px]">Recommended</div>
            <div className="flex items-center justify-between">
            <div>
            <h3 className="text-secondary font-semibold text-2xl">Premium</h3>
            <p className="text-secondary mt-2">For startup enterprise</p>
            </div>
            <div>
            <p className="text-secondary text-[14px] mt-2 text-center">Starting from</p>
            <h4 className="text-2xl font-bold text-[#25CB9E]">49.99/mo</h4>
            </div>    
            </div>
            <ul className="mt-2">
                <li className="flex items-center my-4"><CircleCheck color="#fff" fill="#25CB9E" /><p className="text-[#343D48] ml-2">Ultimate access to all course, exercises and assessments</p></li>
                <li className="flex items-center my-4"><CircleCheck color="#fff" fill="#25CB9E" /><p className="text-[#343D48] ml-2">Free acess for all kind of exercise corrections with downloads.</p></li>
                <li className="flex items-center my-4"><CircleCheck color="#fff" fill="#25CB9E" /><p className="text-[#343D48] ml-2">Total assessment corrections with free download access system</p></li>
                <li className="flex items-center my-4"><CircleCheck color="#fff" fill="#25CB9E"/><p className="text-[#343D48] ml-2">Unlimited download of courses on the mobile app contents</p></li>
                <li className="flex items-center my-4"><CircleCheck color="#fff" fill="#25CB9E"/><p className="text-[#343D48] ml-2">Download and print courses and exercises in PDF</p></li>
            </ul>
            <div className="text-center mt-4">
            <button className="text-[#EF9E48] inline-block py-2 px-6 rounded-md bg-[#ffcf9c85] font-medium text-base">Subscribe now</button>
            </div>
        </div>
     </div>
     </div>
  )
}

export default Pricing