import Image from 'react-bootstrap/Image'
import React from 'react'


function AvatarIcon(props) {
	return (
		<Image src={props.avatarURL} roundedCircle fluid
			width="30"
			height="30"
			className={props.className}
			alt="user profile picture"
		/>
	);
}
export default AvatarIcon;
