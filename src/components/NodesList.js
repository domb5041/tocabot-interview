import React from "react";
import { Panel } from "react-bootstrap";

const NodesList = props => {
	return (
		<div className="NodesContainer">
			<button onClick={props.newNode}>ADD NODE</button>
			{props.Nodes.map((Node, index) => {
				const panelSize = {};

				const textSize = {};

				return (
					<Panel
						key={index}
						eventKey={index}
						className="NodeList"
						style={panelSize}
					>
						<Panel.Heading className="NodeTitle">
							{Node.title} <br />
							Connection: {Node.connection} <br />
							<button onClick={() => props.deleteNode(index)}>
								delete
							</button>
							<button onClick={() => props.indexA(index)}>
								connect
							</button>
						</Panel.Heading>
					</Panel>
				);
			})}
		</div>
	);
};

export default NodesList;
