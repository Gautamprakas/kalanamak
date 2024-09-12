import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props){
	const [text, setText] = useState("");
	const handleUpClick=()=>{
		let newText=text.toUpperCase();
		setText(newText);
		// console.log("upper case was clicked");
	};
	const handleLoClick=()=>{
		setText(text.toLowerCase());
	};
	const handleResetClick=()=>{
		setText('');
	};
	const handleOnChange=(event)=>{
		setText(event.target.value);
		// console.log("On change");
	};
	return (
		<>
			<div className="container my-8">
				<h1>{props.heading}</h1>
				<div className="mb-3">
				  
				  <textarea className="form-control" value={text} onChange={handleOnChange} id="textArea" rows="8"></textarea>
				</div>
				<button className="btn btn-primary mx-2" onClick={handleUpClick}>
				Convert To UpperCase
				</button> 
				<button className="btn btn-primary mx-2" onClick={handleLoClick}>
					Convert To LowerCase 
				</button>
				<button className="btn btn-outline-danger btn-sm mx-2" onClick={handleResetClick}>
					Reset 
				</button>
			</div>
			<div className="container my-3">
				<h2>Your Text Summary</h2>
				<p><b>{text.split(" ").length -1} </b> words found, <b> {text.length} </b> characters found</p>
			</div>
			<div className="container my-3">
				<h2>Preview</h2>
				<p>{text}</p>
			</div>
			
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