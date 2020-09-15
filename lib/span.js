import { Component } from '../dinggo.js';

export default class Span extends Component {
	main({createWidget}) {
		return createWidget('span', ({self, style}) => {
			this.render = self;
			this.style = style;
        });
    }
    set text(a) {
        this.render.textContent = a;
    }
}