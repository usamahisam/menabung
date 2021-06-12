import { Component, Stylesheet } from '../dinggo.js';
import { Div, Color } from '../lib/index.js';

export default class Layout extends Component {
	main() {
		return new Div((self) => {
			this.render = self.render;
			self.style(new Stylesheet({
				position: 'absolute',
				width: '100vw',
				height: '100vh',
				right: 0,
				left: 0,
				backgroundColor: Color.White,
				overflow: 'hidden',
			}));
		});
	}
	view(v) {
		this.render.appendChild(v);
	}
}