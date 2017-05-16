import {observable, computed} from "mobx";

import RandomMessageGenerator from '../lib/RandomMessageGenerator'; 

class ObservableChatStore {

	constructor() {
		var generator = new RandomMessageGenerator();
		var randomMessages = generator.generate(20);
		randomMessages.forEach((message) => {
			this._messages.push(message);
		});
	}

	@observable _messages = [];

	addMessage(text) {
		this._messages.push({
			text: text,
			date: new Date(),
		});
	}

	//this is really cheesy. Should be a way to index messages via dictionary AND observe changes to the dictionary.
	getMessage(id) {
		return this._messages[id];
	}

	@computed get messages() {
		//tricky! observable array isn't a real array, so it can't be used like one in a ListView DataSource
		//this is a way to abstract the mobx stuff in the store and let the ListView-using component deal with the ListView DataSource
		//stuff. Some people create computed properties that return an entire DataSource.
		return this._messages.slice(); //turns an observable array into a regular one
	}
}

const observableChatStore = new ObservableChatStore();

export default observableChatStore;