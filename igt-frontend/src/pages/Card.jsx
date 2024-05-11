import { Eye, Play, Star } from "lucide-react"

// eslint-disable-next-line react/prop-types
const Card = ({image,star,reviews,title,watched}) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg">
    <div className="relative">
    <div className="absolute bg-[#ffffff92] p-4 rounded-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer"><Play size={30} color="#fff" fill="#fff" /></div>   
    <img src={image} className="w-full h-full object-cover rounded-t-lg" alt="Banner image" />
    </div>   
    <div className="p-5">
        <div className="flex items-center gap-1 mb-2">{[...Array(star)].map((_,idx)=><Star key={idx} size={20} fill="#FFCE1F" color="#FFCE1F" />)}{[...Array(5-star)].map((_,idx)=><Star key={idx} size={20} fill="#969696" color="#969696" />)}<span className="text-secondary ml-2">{`${star}.0 (${reviews} reviews)`}</span></div>
        <h4 className="mb-3 text-secondary font-semibold text-[20px]">{title}</h4>
        <div className="flex items-center text-[#343D48] gap-4"><Eye size={20} color="#343D48"/><span>{watched} students watched</span></div>
    </div>
</div>
  )
}

export default Card