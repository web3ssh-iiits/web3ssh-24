import { useGSAP } from "@gsap/react"
import gsap from "gsap/gsap-core"
import Whatsapp from "../assets/whatsapp.jsx"
import LinkedIn from "../assets/linkedin.jsx"
import Instagram from "../assets/instagram.jsx"
import Twitter from "../assets/x.jsx"

export default function Navbar() {
  useGSAP(
    () => {
      gsap.to('.disappear', {
        scrollTrigger: {
          trigger: '.disappear',
          start: 'top top',
          end: 'top+=1 top',
          scrub: 1,
          // markers: true,
        },
        margin: "20 90",
        backgroundColor: "rgba(0, 0, 0, 0.61)",
        border: "1px solid #161616",
        borderRadius: "20px",
        backdropFilter: "blur(5px)",
      })
    }
  )
  return (
    <div className="w-full fixed flex">
      <div className="disappear w-full top-0 right-0 z-10 text-white bg-black h-20 border-[#161616] flex p-3 justify-around items-center" >
        <div className="h-full pl-8">
          <img src="/web3ssh.png" alt="Web3SSH logo" className="max-h-full" />
        </div>
        <div className="w-full flex justify-center gap-6">
          <ul className="flex gap-6">
            <li><a href="#" >Home</a></li>
            <li><a href="#" >Sponsors</a></li>
            <li><a href="#" >Schedule</a></li>
            <li><a href="#" >FAQ</a></li>
          </ul>
          <ul className="flex gap-6">
            <li>< Whatsapp fill="#fff" width="20px" height="20px" className="hover:fill-[#291549]" /></li>
            {/*LINKED IN IS NOT WORKING FOR SOME GODFORSAKEN REASON*/}
            {/*<li>< LinkedIn fill="#fff" width="20px" height="20px" className="hover:fill-[#291549]" /></li>*/}
            <li>< Twitter fill="#fff" width="20px" height="20px" className="hover:fill-[#291549]" /></li>
            <li>< Instagram fill="#fff" width="20px" height="20px" className="hover:fill-[#291549]" /></li>
          </ul>
        </div>
      </div>

    </div>
  )
}
