import { Component } from '../dinggo.js';

export default class Button extends Component {
	main({createWidget}) {
		return createWidget('button', ({self, style}) => {
			this.render = self;
			this.style = style;
        });
    }
    set text(a) {
        this.render.textContent = a;
    }
    click(v) {
        this.render.addEventListener('click', v, false);
    }
}