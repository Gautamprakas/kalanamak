import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props){
	const [text, setText] = useState("Start Typing Here..");
	const handleUpClick=()=>{
		let newText=text.toUpperCase();
		setText(newText);
		// console.log("upper case was clicked");
	};
	const handleOnChange=(event)=>{
		setText(event.target.value);
		// console.log("On change");
	};
	return (
		<>
			<h1>{props.heading}</h1>
			<div className="mb-3">
			  
			  <textarea className="form-control" value={text} onChange={handleOnChange} id="textArea" rows="15"></textarea>
			</div>
			<button className="btn btn-primary" onClick={handleUpClick}>
			Convert To UpperCase
			</button>
		</>
	);
}
// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   about:PropTypes.string.isRequired
// }
// Navbar.defaultProps = {
//   title: 'Stranger'
// };