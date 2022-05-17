import Link from 'next/link'


const footer = () => {
  return (
    <footer>
        <div className="footerContent">
            <div className = "footItem">
                <p>This is a website.</p>
            </div>
            <div className = "footItem">
                <Link href ="https://github.com/u/calvinlinz"><a>GitHub</a></Link>
                <Link href ="https://linkedin.com/u/calvinlinz"><a>LinkedIn</a></Link>
            </div>
      
        </div>
    </footer>
  )
}

export default footer