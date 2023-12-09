import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiFacebook } from "react-icons/si";

const Mediaicons = () => {
  return (
    <>
    <div className="absolute items-center bottom-0 z-50 mb-10 media flex gap-16">
        <div className="instagram hover:scale-110 transition-all">
          <a href="https://www.instagram.com" target='_blank' rel="noreferrer">
            <RiInstagramFill size='1.5em' color='#00A082FF'/>
          </a>
        </div>
        <div className="facebook hover:scale-110 transition-all">
          <a href="#">
            <IoLogoWhatsapp size='1.5em' color='#00A082FF'/>
          </a>
        </div>
        <div className="wsp hover:scale-110 transition-all">
          <a href="https://www.facebook.com/profile.php?id=61554307084220">
            <SiFacebook size='1.4em' color='#00A082FF'/>
          </a>
        </div>
    </div>
    </>
  )
}

export default Mediaicons
