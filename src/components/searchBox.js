import React from 'react'

const SearchBox = ({ searchChange }) => {
	return (
		<div className= 'pa2' >
			<input 
				className='pa3 ba tc b--gray white bg-transparent'
				type= 'search' 
				placeholder='find me'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;