import { Component, Stylesheet } from '../dinggo.js';
import { Div, Color } from '../lib/index.js';

export default class Card extends Component {
	main() {
		return new Div((self) => {
			this.render = self.render;
			self.style(new Stylesheet({
                height: '30px',
				overflowX: 'hidden',
                overflowY: 'hidden',
                padding: '5px',
                backgroundColor: Color.White,
                borderRadius: '5px',
				boxShadow: '0px 0px 3px 0px #ccc',
				marginBottom: '10px'
			}));
		});
	}
	
	set(v) {
		this.render.append(v);
	}
}