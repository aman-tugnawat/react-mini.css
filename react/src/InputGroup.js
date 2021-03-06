import React from 'react';

// Module constants (change according to your flavor file)
var inputGroupClassName = 'input-group';
var inputGroupFluidClassName = 'fluid';
var inputGroupVerticalClassName = 'vertical';

// InputGroup component.
export function InputGroup (props){
	var outProps = Object.assign({}, props);
	if (typeof outProps.fluid === 'undefined') outProps.fluid = false;
	if (typeof outProps.vertical === 'undefined') outProps.vertical = false;
	if (outProps.fluid && outProps.vertical) throw "Error: A 'Table' component cannot be fluid and vertical at the same time.";
	if (typeof outProps.className === 'undefined') outProps.className = inputGroupClassName;
	else outProps.className += ' ' + inputGroupClassName;
	if (outProps.fluid) outProps.className += ' ' + inputGroupFluidClassName;
	if (outProps.vertical) outProps.className += ' ' + inputGroupVerticalClassName;
	delete outProps.fluid;
	delete outProps.vertical;
	return React.createElement(
		'div', outProps, outProps.children
	);
}
