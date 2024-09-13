import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function About(){
  const [btnText,setBtnText]=useState('Enable Dark Mode');

  const [myStyle,setStyle]=useState({
    color:'black',
    backgroundColor:'white'
  });
  const handleStyle=()=>{
    if(myStyle.backgroundColor=='white'){
      setBtnText('Disable Dark Mode');
      setStyle({
        color:'white',
        backgroundColor:'black',
        border:'1px solid white'
      });
    }else{
      setBtnText('Enable Dark Mode');
      setStyle({
        color:'black',
        backgroundColor:'white'
      });
    }
  }
  //let myStyle=
  return (
    <div className="container"  style={myStyle}>
      <h1 className="my-3" style={myStyle}>About Us </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Who I am ?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Introduction : </strong>Hello there! I am Prakash Gautam, a B.Tech student in Computer Science and Engineering with a commendable CGPA of 8.14. I am an aspiring professional eager to embark on a fulfilling career journey in the field of Software Developer.

During my academic journey, I have honed my skills in various areas of computer science, gaining proficiency in programming languages, data structures, algorithms, and database management. Additionally, my passion for data analysis has led me to undertake a valuable internship experience as a Data Analyst, where I gained hands-on experience in analyzing and interpreting complex datasets, deriving actionable insights, and presenting meaningful conclusions to aid in decision-making.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Contact
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>7897680196 Email-gautamprakash697@gmail.com</strong></div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <button type="button" className="btn btn-primary" onClick={handleStyle}>{btnText}</button>
      </div>
    </div>
  );
}
// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   about:PropTypes.string.isRequired
// }
// Navbar.defaultProps = {
//   title: 'Stranger'
// };


