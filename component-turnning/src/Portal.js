import React, {useMemo, useState} from 'react';
import Modal from "./components/Modal";

function Portal() {
	const [visible, setVisible] = useState(false);

	const open = () => {
		setVisible(true);
	}

	const close = () => {
		setVisible(false);
	}
	return (
		<div>
			<button onClick={open}>open(use portal)</button>
			{visible && (
				<Modal>
					<div onClick={close}
					     style={{width: '50vw', height: '50vh', background: 'rgba(0,0,0,0.5'}}>
						Hello(this onClick ==> hide)
					</div>
				</Modal>)
			}
		</div>
	);

}

export default Portal;
