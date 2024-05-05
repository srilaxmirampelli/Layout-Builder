import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-menu-container">
              <h1 className="left-navbar-menu-heading">Left Navbar Menu</h1>
              <ul className="left-navbar-menu-list">
                <li className="left-nav-item">Item 1</li>
                <li className="left-nav-item">Item 2</li>
                <li className="left-nav-item">Item 3</li>
                <li className="left-nav-item">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar-menu-container">
              <h1 className="left-navbar-menu-heading">Right Navbar Menu</h1>
              <div className="left-navbar-menu-list">
                <p className="right-nav-item">Ad 1</p>
                <p className="right-nav-item">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
