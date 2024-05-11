import { CircleMinus, CirclePlus } from "lucide-react"

const Faq = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col px-[6vw] mt-4 py-8">
     <h2 className="text-tirtary font-medium text-[14px] mt-8">FREQUENT QUESTIONS</h2>
     <h3 className="text-secondary text-4xl font-semibold mt-1">Do you have any question</h3>
     <div className="mt-8 mx-20">
     <div className="group outline-none accordion-section" tabIndex="1">
       <div className="group flex gap-4 px-4 py-3 items-center text-secondary transition ease duration-300 cursor-pointer pr-10 relative p-4 shadow-lg">
       <CirclePlus color="#fff" fill="#3FDBB1" className="block group-focus:hidden" /><CircleMinus color="#fff" fill="#3FDBB1" className="hidden group-focus:block" /><h3 className="text-xl font-semibold text-secondary ml-2">How to contact with riders emergency ?</h3>
       </div>
       <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-200 shadow-lg my-4">
        <p className="text-[#343D48]">An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.</p>
       </div>
     </div>        
     <div className="group outline-none accordion-section" tabIndex="2">
       <div className="group flex gap-4 px-4 py-3 items-center text-secondary transition ease duration-300 cursor-pointer pr-10 relative p-4 shadow-lg">
       <CirclePlus color="#fff" fill="#3FDBB1" className="block group-focus:hidden" /><CircleMinus color="#fff" fill="#3FDBB1" className="hidden group-focus:block" /><h3 className="text-xl font-semibold text-secondary ml-2">App installation failed, how to update system information?</h3>
       </div>
       <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-200 shadow-lg my-4">
        <p className="text-[#343D48]">An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.</p>
       </div>
     </div>        
     <div className="group outline-none accordion-section" tabIndex="3">
       <div className="group flex gap-4 px-4 py-3 items-center text-secondary transition ease duration-300 cursor-pointer pr-10 relative p-4 shadow-lg">
       <CirclePlus color="#fff" fill="#3FDBB1" className="block group-focus:hidden" /><CircleMinus color="#fff" fill="#3FDBB1" className="hidden group-focus:block" /><h3 className="text-xl font-semibold text-secondary ml-2">Website reponse taking time, how to improve?</h3>
       </div>
       <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-200 shadow-lg my-4">
        <p className="text-[#343D48]">An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.</p>
       </div>
     </div>        
     <div className="group outline-none accordion-section" tabIndex="4">
       <div className="group flex gap-4 px-4 py-3 items-center text-secondary transition ease duration-300 cursor-pointer pr-10 relative p-4 shadow-lg">
       <CirclePlus color="#fff" fill="#3FDBB1" className="block group-focus:hidden" /><CircleMinus color="#fff" fill="#3FDBB1" className="hidden group-focus:block" /><h3 className="text-xl font-semibold text-secondary ml-2">New update fixed all bug and issues</h3>
       </div>
       <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-200 shadow-lg my-4">
        <p className="text-[#343D48]">An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.</p>
       </div>
     </div>        
     </div>
    </div>
  )
}

export default Faq