import React from 'react';

const ErrorMessage = ({error}) => {
	return (
		<h4 style={{color: "red"}}>{error}</h4>
	);
};

export default ErrorMessage;