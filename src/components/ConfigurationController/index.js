import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="cc-container">
          <h1 className="layout-heading">Layout</h1>
          <li className="controller-item">
            <input
              type="checkbox"
              className="input-checkbox"
              onClick={onToggleShowContent}
              checked={showContent}
              id="Content"
            />
            <label className="option" htmlFor="Content">
              Content
            </label>
          </li>
          <li className="controller-item">
            <input
              type="checkbox"
              className="input-checkbox"
              onClick={onToggleShowLeftNavbar}
              id="Left Navbar"
              checked={showLeftNavbar}
            />
            <label className="option" htmlFor="Left Navbar">
              Left Navbar
            </label>
          </li>
          <li className="controller-item">
            <input
              type="checkbox"
              className="input-checkbox"
              onClick={onToggleShowRightNavbar}
              id="Right Navbar"
              checked={showRightNavbar}
            />
            <label className="option" htmlFor="Right Navbar">
              Right Navbar
            </label>
          </li>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
