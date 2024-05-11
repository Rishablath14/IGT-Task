import LeftBanner from "./LeftBanner"
import RightBanner from "./RightBanner"

const Banner = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-around relative px-[6vw] pt-8">
      <div className="absolute h-full w-[69%] bg-gradient-to-r from-[#E0F5FA] to-[#FFFDE6] left-0 top-0 rounded-br-[200px]"></div>
      <LeftBanner/>
      <RightBanner/>
    </div>
  )
}

export default Banner