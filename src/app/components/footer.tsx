

import Link from "next/link"

export default function Footer(){
    return(
        <div className="footer">
            <ul className="footer-button">
              <Link href="https://www.google.com/" target="main"><li>Google</li></Link>
                <Link href="http://www.linkedin.com/" target="main">Linkedin</Link>
                <Link href="http://www.facebook.com/" target="main">FaceBook</Link>
            </ul>
        </div>
    )
}
