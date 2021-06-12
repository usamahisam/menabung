import { Component } from '../dinggo.js';

export default class Input extends Component {
	main({createWidget}) {
		return createWidget('input', ({self, style}) => {
			this.render = self;
			this.style = style;
        });
    }
    text(a) {
        this.render.value = a;
    }
}