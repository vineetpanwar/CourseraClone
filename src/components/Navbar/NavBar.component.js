import { ReactComponent as CompanyLogo } from '../.././assets/svg/companyLogo.svg';
import {ReactComponent as SearchIcon} from '../.././assets/svg/searchIcon.svg';
import {ReactComponent as MenuIcon} from '../.././assets/svg/menuIcon.svg';
import {Component,Fragment} from 'react';
import "./NavBarComponent.css";

class NavBar extends  Component {
 state = {
   isMobile: window.innerWidth < 1000
 }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isMobile: window.innerWidth < 1000 
      })
    }, false)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {
      console.log('removed event listener successfully')
    })
  }

  render() {return (
 <div className="header">
{this.state.isMobile && <div className="menuIcon" >
    <MenuIcon />
</div>}
<CompanyLogo className={this.state.isMobile ? "smallCompanyLogo" :"bigCompanyLogo"} />
{this.state.isMobile && <SearchIcon className="mobileSearchIcon"/>}
{!this.state.isMobile && (
  <Fragment>

<div className="explore-button">
  <span className="">Explore</span>
  <a href="/home" className="arrow down" ></a>
</div>
<div className="searchContainer">
  <input placeholder="What do you want to learn" className="searchBox"/>
  <div className="searchIcon" >
    <SearchIcon />
  </div>
</div>
<div className="rightContainer">
  <span className="options">For Enterprise</span>
  <span className="optionSeparator"></span>
  <span className="options">For Students</span>
  <span className="login">Log In</span>
  <div className="registerContainer">
  <span className="register">Join for Free</span>
</div>
</div >
  </Fragment>
)}
</div>
      
  )
  }
}

export default NavBar;
