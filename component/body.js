import { Component, Stylesheet } from '../dinggo.js';
import { Div, Color } from '../lib/index.js';

export default class Body extends Component {
	main() {
		return new Div((self) => {
			this.render = self.render;
			self.style(new Stylesheet({
				// position: 'relative',
				width: '100%',
				height: '100%',
				overflow: 'hidden',
			}));
			// self.style(this.css1 = new Stylesheet({
			// 	height: '100vh',
			// }, true));
			// self.render.appendChild(new Div((self) => {
			// 	this.render = self.render;
			// 	self.style(new Stylesheet({
			// 		position: 'absolute',
			// 		top: 0,
			// 		bottom: 0,
			// 		left: 0,
			// 		right: 0,
			// 		overflowX: 'none',
			// 		overflowY: 'auto',
			// 		transition: 'all 2ms ease-in-out',
			// 	}));
			// 	self.style(this.css2 = new Stylesheet({
			// 		padding: '16px',
			// 	}, true));
			// }));
		});
	}

	set padding(v) {
		// this.css2.sheet.padding = v;
	}
	
	content(v) {
		this.render.appendChild(v);
	}
}