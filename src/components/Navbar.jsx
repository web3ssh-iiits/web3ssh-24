import { useGSAP } from "@gsap/react"
import gsap from "gsap/gsap-core"

export default function Navbar() {
  useGSAP(
    () => {
      gsap.to('.disappear', {
        scrollTrigger: {
          trigger: '.disappear',
          start: 'top top',
          end: 'top+=1 top',
          // pin: true,
          scrub: 1,
          markers: true,
        },
        // ease: "elastic.out",
        // opacity: 0.5,
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
        <img src="/web3ssh.png" alt="Web3SSH logo" className="max-h-[100%]" />
        <div>
          <ul className="flex gap-2">
            <li><a href="#" >Items</a></li>
            <li><a href="#" >Items</a></li>
            <li><a href="#" >Items</a></li>
            <li><a href="#" >Items</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}
