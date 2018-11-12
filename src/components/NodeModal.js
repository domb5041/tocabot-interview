import React from "react";
import {
	Button,
	Modal,
	FormControl,
	FormGroup,
	Glyphicon
} from "react-bootstrap";

const NodeModal = props => {
	return (
		<Modal
			show={props.modalType}
			onHide={props.closeModal}
			className="NodeModal"
			animation={false}
		>
			<Modal.Header>
				<FormControl
					className="NodeTitle"
					type="text"
					placeholder="add name"
					value={props.currentTitle}
					onChange={props.updateNewTitle}
				/>
			</Modal.Header>
			<Modal.Footer>
				<div className="modalButtons">
					<div className="NodeButton" onClick={props.saveNewNode}>
						<p>Save</p>
					</div>
				</div>
			</Modal.Footer>
		</Modal>
	);
};

export default NodeModal;
