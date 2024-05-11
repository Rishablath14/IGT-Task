const Footer = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col px-[6vw] py-8">
        <h2 className="text-5xl font-semibold text-primary text-center leading-snug">Ready to learn design <br/>with Nia Matos</h2>
        <button className="text-[#EF9E48] inline-block py-2 px-6 rounded-md bg-[#ffcf9c85] font-medium text-base mt-14 mb-36">Start Learning Today</button>
        <hr className="h-[1px] w-full bg-black"/>
        <div className="grid grid-cols-4 mt-12 w-full">
            <div>
            <h3 className="text-secondary text-xl mb-6 font-semibold">About Us</h3>
            <h4 className="text-primary my-2">Support Center</h4>
            <h4 className="text-primary my-2">Customer Support</h4>
            <h4 className="text-primary my-2">About Us</h4>
            <h4 className="text-primary my-2">Copyright</h4>
            <h4 className="text-primary my-2">Popular Campaign</h4>
            </div>
            <div>
            <h3 className="text-secondary text-xl mb-6 font-semibold">Our Information</h3>
            <h4 className="text-primary my-2">Return Policy </h4>
            <h4 className="text-primary my-2">Privacy Policy</h4>
            <h4 className="text-primary my-2">Terms & Conditions</h4>
            <h4 className="text-primary my-2">Site Map</h4>
            <h4 className="text-primary my-2">Store Hours</h4>
            </div>
            <div>
            <h3 className="text-secondary text-xl mb-6 font-semibold">My Account</h3>
            <h4 className="text-primary my-2">Press inquiries</h4>
            <h4 className="text-primary my-2">Social media </h4>
            <h4 className="text-primary my-2">directories</h4>
            <h4 className="text-primary my-2">Images & B-roll</h4>
            <h4 className="text-primary my-2">Permissions</h4>
            </div>
            <div>
            <h3 className="text-secondary text-xl mb-6 font-semibold">Policy</h3>
            <h4 className="text-primary my-2">Application security</h4>
            <h4 className="text-primary my-2">Software principles</h4>
            <h4 className="text-primary my-2">Unwanted software policy</h4>
            <h4 className="text-primary my-2">Responsible supply chain</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer