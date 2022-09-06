import Link from 'next/link'


const navBar = () => {
  return (
        <div className = "navBar">
            <nav>
                <div className = "navBarHead">
                <Link href = "/"><a>CROSSHAIR</a></Link>
                </div>
                <div className = "navBarLinks">
                <Link div = "hover-underline-animation" href ="/create"><a>Create</a></Link>
            </div>
            </nav>
        </div>

  )
}

export default navBar