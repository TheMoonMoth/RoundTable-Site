import React from 'react'

class Header extends React.Component {
    render(){
        return <header>
            <h1>Round Table Learning</h1>
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
              <li>Examples</li>
            </ul>
          </header>;
    }
}

export default Header