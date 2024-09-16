import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props){
	const [text, setText] = useState("");
	const handleUpClick=()=>{
		let newText=text.toUpperCase();
		setText(newText);
		// console.log("upper case was clicked");
		props.showAlert('Converted to UpperCase','primary');
	};
	const handleLoClick=()=>{
		setText(text.toLowerCase());
		props.showAlert('Converted to LowerCase','primary');
	};
	const handleResetClick=()=>{
		setText('');
		props.showAlert('Text is  copied to clipboard..','danger');
	};
	const handleCopy=()=>{
		//console.log('I am copy');
		var textElement=document.getElementById('textArea');
		textElement.select();
		navigator.clipboard.writeText(textElement.value);
		props.showAlert('Text is copy','success');
	}
	const handleOnChange=(event)=>{
		setText(event.target.value);
		// console.log("On change");
	};
	const findWordCountInStr=(str)=>{
		if(str==""){
			return 0;
		}
		return str.trim().split(" ").length;
	};
	return (
		<>
			<div className="container my-8" style={{color:props.mode=='dark'? 'white':'black'}}>
				<h1>{props.heading}</h1>
				<div className="mb-3">
				  
				  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=='dark'? 'grey':'white'}} id="textArea" rows="8"></textarea>
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
				<button className="btn btn-outline-primary btn-sm mx-2" onClick={handleCopy}>
					Copy 
				</button>
			</div>
			<div className="container my-3" style={{color:props.mode=='dark'? 'white':'black'}}>
				<h2>Your Text Summary</h2>
				<p><b>{findWordCountInStr(text)} </b> words found, <b> {text.length} </b> characters found</p>
			</div>
			<div className="container my-3" style={{color:props.mode=='dark'? 'white':'black'}}>
				<h2>Preview</h2>
				<p>{text.length>0?text:'Enter something to Preview..'}</p>
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