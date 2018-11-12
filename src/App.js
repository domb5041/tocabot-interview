import React, { Component } from "react";
import { Button } from "react-bootstrap";
import NodesList from "./components/NodesList";
import NodeModal from "./components/NodeModal";
import "./App.css";

class App extends Component {
	state = {
		Nodes: [],
		newNode: { title: "", connection: "" },
		newModal: false,
		indexA: 0,
		indexB: 0
	};

	componentWillMount() {
		let Nodes = JSON.parse(localStorage.getItem("Nodes")) || [];
		this.setState({ Nodes });
	}

	makeConnection = (indexA, indexB, title) => {
		let lastIndexA = this.state.indexA;
		this.setState({ indexA: indexA, indexB: lastIndexA });

		let Nodes = this.state.Nodes;
		Nodes[lastIndexA] = {
			title: Nodes[lastIndexA].title,
			connection: Nodes[indexA].title
		};
		localStorage.setItem("Nodes", JSON.stringify(Nodes));

		this.setState({ Nodes });
	};

	openModal = (modal, indexA) => {
		this.setState({ [modal]: true });
	};

	closeModal = (modal, indexA) => {
		this.setState({ [modal]: false });
	};

	updateNewNode(title, content) {
		this.setState({
			newNode: { title: title, connection: "no connection" }
		});
	}

	saveNewNode(newNode, modal, indexA) {
		this.closeModal(modal, indexA);
		let Nodes = [...this.state.Nodes];
		Nodes.unshift(newNode);
		localStorage.setItem("Nodes", JSON.stringify(Nodes));
		this.setState({ Nodes });
		this.setState({ newNode: { title: "", connection: "no connection" } });
	}

	deleteNode = indexA => {
		this.setState({ indexA: 0 });
		let Nodes = [...this.state.Nodes];
		Nodes.splice(indexA, 1);
		localStorage.setItem("Nodes", JSON.stringify(Nodes));
		this.setState({ Nodes });
	};

	openModal_closeModal(close, open, indexA) {
		this.closeModal(close, indexA);
		this.openModal(open, indexA);
	}

	render() {
		console.log(this.state.indexA);
		console.log(this.state.indexB);
		const { Nodes, indexA, newModal, editModal, newNode } = this.state;
		// let currentTitle, currentContent, lastEdited;
		// if (Nodes.length > 0) {
		// 	currentTitle = Nodes[indexA].title;
		// 	currentContent = Nodes[indexA].content;
		// 	lastEdited = Nodes[indexA].edited;
		// } else {
		// 	currentTitle = "";
		// 	currentContent = "";
		// 	lastEdited = "";
		// }

		return (
			<div className="app">
				<NodesList
					Nodes={Nodes}
					title={Nodes.title}
					newNode={() => this.openModal("newModal", indexA)}
					deleteNode={index => this.deleteNode(index)}
					indexA={index => this.makeConnection(index)}
					connection={Nodes.connection}
				/>

				<NodeModal
					modalType={newModal}
					newModal={newModal}
					closeModal={() => this.closeModal("newModal", indexA)}
					updateNewTitle={event =>
						this.updateNewNode(event.target.value, newNode.content)
					}
					saveNewNode={() => this.saveNewNode(newNode, "newModal", indexA)}
				/>
			</div>
		);
	}
}

export default App;
