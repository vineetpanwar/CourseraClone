import { ReactComponent as CompanyLogo } from '../.././assets/svg/companyLogo.svg';
import {Component,Fragment} from 'react';
import "./CourseBodyComponent.css";

class CourseBody extends  Component {

  imageArr = [
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/illinois.svg?auto=format%2Ccompress&dpr=1&w=&h=32"
    , "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/duke.svg?auto=format%2Ccompress&dpr=1&w=&h=37",
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/google.png?auto=format%2Ccompress&dpr=1&w=&h=37",
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/umich.png?auto=format%2Ccompress&dpr=1&w=&h=55",
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/ibm.png?auto=format%2Ccompress&dpr=1&w=&h=32",
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/imperial.png?auto=format%2Ccompress&dpr=1&w=&h=35",
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/stanford.svg?auto=format%2Ccompress&dpr=1&w=&h=27",
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/partners/penn.svg?auto=format%2Ccompress&dpr=1&w=&h=37"  
 ]

  advantagesArr = [
      {url:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/SvgaLearn.svg?auto=format%2Ccompress&dpr=1&w=&h=55",
       title: "Learn the latest skills" ,
       desc: "like business analytics, graphic design, Python, and more"
    },
      {url:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/teacher-img.svg?auto=format%2Ccompress&dpr=1&w=&h=55",
      title:"Get ready for a career",
      desc:"in high-demand fields like IT, AI and cloud engineering"
    },
      {url:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/SvgaColorCertificate.svg?auto=format%2Ccompress&dpr=1&w=&h=55",
      title:"Earn a certificate or degree",
      desc:"from a leading university in business, computer science, and more"
    },
      {url:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/SvgaCommunity.svg?auto=format%2Ccompress&dpr=1&w=&h=55",
      title:"Upskill your organization",
      desc:"with on-demand training and development programs"
    }
  ]

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
        <div className="courseBody">
        <section className="roboBanner">
            <div className="bannerContainer">
                <div className="textContainer">
                    <h1 className="bannerTitle">Your Course to Success</h1>
                    <div className="build-skills">Build skills with courses, certificates, and degrees online from world-class universities and companies</div>
                    <button className="joinFree">Join For Free</button>
                </div>
                <div className="roboGirl"></div>
                <div className="roboGradient"></div>
            </div>

        </section>

        <section className="partners">
            <div className="partnerTitle">
            <div>We collaborate with   <span> </span> 
            <span className="underline">200+ leading universities and companies</span>
            </div>
            </div>
            <div className="partnerLogo">
                {this.imageArr.map(curr => <img src={curr} className="eachLogo" />)}
            </div>
        </section>

        <section className="advantages">
            <div className="achieveTitle">Achieve your goals with Coursera</div>
            <ul className="achieveList">
                {this.advantagesArr.map(curr => (
                    <li className="achieveItem">
                        <div class="achieveImgContainer">
                            <img src={curr.url} className="achieveImg"/>
                        </div>
                        <div className="achieveItemTitle">
                            <span >{curr.title}</span>
                            <small className="achieveSmallItemDesc">{curr.desc}</small>
                        </div>
                    </li>
                ))}
            </ul>
        </section>

        </div>
    )
  }
}

export default CourseBody;
