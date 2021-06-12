import { Component, Stylesheet } from '../dinggo.js';
import { Div, Color } from '../lib/index.js';

export default class TabBody extends Component {
	main() {
		return new Div((self) => {
			this.render = self.render;
			self.style(new Stylesheet({
				position: 'absolute',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				overflowX: 'hidden',
				overflowY: 'auto',
				backgroundColor: Color.White,
				scrollBehavior: 'smooth',
				textRendering: 'optimizeLegibility',
			}));
		});
	}
	
	content(v) {
		this.render.appendChild(v);
	}
}