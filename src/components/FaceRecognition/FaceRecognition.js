import React from 'react';
import './FaceRecognition.css';



const FaceRecognition = ({ImgUrl , box}) => {

	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img  id='inputimage' alt='' src={ImgUrl} width='500px' heigh='auto'/>
				<div className='bounding_box' style = {{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}> </div>
			</div>
		</div>




	)
}

export default FaceRecognition;