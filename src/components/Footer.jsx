import footerData from '../data/footer.json';
import Instagram from '@public/icons/instagram.svg';

export default function Footer() {
  return (
    <>
      <footer className="bg-black bg-opacity-70 text-white pt-12 pb-8 px-4">
        <div className="mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between">
          <div className="md:1/3 lg:w-1/4">
            <a href="/" className="flex mr-4">
              <img
                src="/web3ssh.webp"
                className="w-20 h-20 ml-4 lg:ml-0"
                alt="Web3SSH logo"
              />
              <h1 className="font-sans justify-center items-center text-3xl my-6 lg:my-2 xl:my-6 h-10">
                web3ssh
              </h1>
            </a>
            <p className="text-sm"> © 2024</p>
          </div>

          <div className="w-full block sm:flex text-sm mt-6 lg:mt-0">
            {footerData.map((section, index) => (
              <ul
                key={index}
                className="text-gray-700 list-none p-0 font-sans font-normal flex flex-col text-left w-full px-5"
              >
                <li className="inline-block py-2 px-3 text-white uppercase font-normal text-xl tracking-wide ">
                  {section.sectionHead}
                </li>
                {section.sectionItems.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="text-lg font-normal inline-block py-2 px-3  text-gray-400 hover:text-white hover:font-bold no-underline"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
            <div className="text-gray-700 flex flex-col w-full">
              <div className="inline-block py-2 px-3 text-white uppercase font-bold text-xl tracking-wide">
                Follow Us
              </div>
              <div className="flex justify-between px-1 mt-2">
                <a
                  className="flex items-center text-gray-300 m-1 px-0.5 hover:text-white no-underline"
                  href="https://www.linkedin.com/company/web3ssh/"
                >
                  <svg version="1.1" viewBox="0 0 512 512" height="43" width="43" xmlns="http://www.w3.org/2000/svg">
                    <path fill='white' d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554v386.892c0,34.524 -28.03,62.554 -62.554,62.554h-386.892c-34.524,0 -62.554,-28.03 -62.554,-62.554v-386.892c0,-34.524 28.029,-62.554 62.554,-62.554h386.892Zm-288.985,423.278v-225.717h-75.04v225.717h75.04Zm270.539,0v-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266v-31.958h-75.021c0.995,21.181 0,225.717 0,225.717h75.02v-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037v120.768h75.024Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002h0.484c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z" />
                  </svg>
                </a>
                <a
                  className="flex items-center text-gray-300 m-1 px-0.5 hover:text-white no-underline"
                  href="https://t.me/web3ssh"
                >
                  <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 512 512" height="43" width="43" xmlns="http://www.w3.org/2000/svg">
                    <title />
                    <path fill='white' d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM389.059,161.936,343.591,379a16.007,16.007,0,0,1-25.177,9.593l-66.136-48.861-40.068,37.8a5.429,5.429,0,0,1-7.74-.294l-.861-.946,6.962-67.375L336.055,194.266a3.358,3.358,0,0,0-4.061-5.317L171.515,290.519,102.4,267.307a9.393,9.393,0,0,1-.32-17.694L372.5,147.744A12.441,12.441,0,0,1,389.059,161.936Z" />
                  </svg>
                </a>
                <a
                  className="flex items-center text-gray-300 m-1 px-0.5 hover:text-white no-underline"
                  href="https://www.instagram.com/web3ssh"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="43" height="43">
                    <path fill='white' d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608 c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608 c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07 c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849 c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311 C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014 C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948 c0.085,1.853,0.603,3.7,1.942,5.038c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24 c3.259,0,3.668-0.014,4.948-0.072c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038 C23.986,15.668,24,15.259,24,12c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038 c-1.343-1.343-3.189-1.858-5.038-1.942C15.668,0.014,15.259,0,12,0z" />
                    <path fill='white' d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162 C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" />
                    <circle fill='white' cx="18.406" cy="5.594" r="1.44" />
                  </svg>
                </a>
                <a
                  className="flex items-center text-gray-300 m-1 px-0.5 hover:text-white no-underline"
                  href="https://x.com/web3ssh"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFFFFF"
                      fill-rule="evenodd"
                      d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#000"
                      d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
                    ></path>
                    <polygon
                      fill="#000"
                      points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
                    ></polygon>
                    <polygon
                      fill="#000"
                      points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
                    ></polygon>
                  </svg>
                </a>
                <a
                  className="flex items-center text-gray-300 m-1 px-0.5 hover:text-white no-underline"
                  href="https://github.com/web3ssh-iiits"
                >
                  <svg fill="white" viewBox="0 0 25 25" height="43" width="43" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M15.7481 24.9471C24.0901 24.7061 24.9111 22.9501 24.9111 12.9811C24.9111 1.98108 23.9111 0.981079 12.9111 0.981079C1.91113 0.981079 0.911133 1.98108 0.911133 12.9811C0.911133 22.9761 1.73713 24.7151 10.1391 24.9491C10.2121 24.8581 10.2391 24.7441 10.2391 24.6281C10.2391 24.3781 10.2291 21.8121 10.2241 20.9291C7.18713 21.5681 6.54613 19.5101 6.54613 19.5101C6.04913 18.2881 5.33313 17.9621 5.33313 17.9621C4.34213 17.3061 5.40813 17.3191 5.40813 17.3191C6.50413 17.3941 7.08113 18.4101 7.08113 18.4101C8.05513 20.0271 9.63713 19.5601 10.2591 19.2891C10.3581 18.6061 10.6401 18.1391 10.9521 17.8751C8.52713 17.6081 5.97813 16.7001 5.97813 12.6451C5.97813 11.4901 6.40413 10.5461 7.10213 9.80608C6.98913 9.53808 6.61513 8.46208 7.20913 7.00608C7.20913 7.00608 8.12613 6.72108 10.2121 8.09008C11.0831 7.85508 12.0171 7.73808 12.9461 7.73408C13.8731 7.73808 14.8071 7.85508 15.6801 8.09008C17.7651 6.72108 18.6801 7.00608 18.6801 7.00608C19.2761 8.46208 18.9011 9.53808 18.7881 9.80608C19.4881 10.5461 19.9111 11.4901 19.9111 12.6451C19.9111 16.7101 17.3581 17.6051 14.9251 17.8661C15.3171 18.1931 15.6661 18.8391 15.6661 19.8261C15.6661 20.7721 15.6601 22.4451 15.6561 23.5541C15.6541 24.1031 15.6531 24.5131 15.6531 24.6281C15.6531 24.7371 15.6821 24.8521 15.7481 24.9471V24.9471Z" fill="white" fill-rule="evenodd"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer >
    </>
  );
}
