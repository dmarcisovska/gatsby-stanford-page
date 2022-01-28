import React from "react"
import footerlogo from "../assets/images/footer-logo.png"

const Footer = () => {
  return (
    <>
      <div className="footer mt-5">
        <div className="container footer-container">
          <span className="text-white">
            <img src={footerlogo} className="footer-logo" />{" "}
          </span>
          {/* <span className="text-white">
            <a
              href="https://www.linkedin.com/in/denisa-marcisovska/"
              target="_blank"
            >
              {" "}
              link 1
            </a>
          </span>
          <span className="text-white">
            <a href="https://github.com/dmarcisovska" target="_blank">
              link 2
            </a>
          </span>
          <span className="text-white">
            <a
              href="https://www.youtube.com/channel/UCUD77wT8AYUhjEqBVGMFK0w"
              target="_blank"
            >
              {" "}
              link
            </a>
          </span> */}
        </div>
      </div>
    </>
  )
}

export default Footer
