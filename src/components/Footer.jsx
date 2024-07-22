import footerData from '../data/footer.json';

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
              <div className="flex pl-4 justify-start mt-2">
                <a
                  className="flex items-center text-gray-300 hover:text-white mr-6 no-underline"
                  href="https://www.linkedin.com/company/web3ssh/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    className="fill-current w-8 h-8"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                </a>
                <a
                  className="flex items-center text-gray-300 hover:text-white mr-6 no-underline"
                  href="https://x.com/web3ssh"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#D7D7D7"
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
                  className="flex items-center text-gray-300 hover:text-white no-underline"
                  href="https://github.com/web3ssh-iiits"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
