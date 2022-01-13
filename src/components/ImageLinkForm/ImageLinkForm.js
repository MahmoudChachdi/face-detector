import React from 'react';
import './ImageLinkForm.css'



const ImageLinkForm = ({inputChange , clickButtonDetect}) => {
	return(
		<div >
			<p className='   f3 center '>{'Hello you can put any picture here and we will recognize any face in it'} </p>
				<div className='center'>
					<div  className ='form center pa4 br3 shadow-5'>
					
						<input onChange={inputChange} className='f4 pa2 w-70 center' type='text' />
						<button  onClick={clickButtonDetect} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'> Detect  </button>
					</div>	
				</div>
		</div>


		)




}
export default ImageLinkForm; 