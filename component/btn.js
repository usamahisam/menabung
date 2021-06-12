import { Component, Stylesheet } from '../dinggo.js';
import { Button, Color } from '../lib/index.js';

export default class Btn extends Component {
	main() {
		return new Button((self) => {
			this.render = self;
			self.style(new Stylesheet({
				border: 'none',
				padding: '10px 24px 10px 24px',
				fontSize: '16px',
				fontWeight: '420',
				outline: 'none',
				borderRadius: '3px',
			}));
			self.style(this.css1 = new Stylesheet({
				backgroundColor: Color.White,
				color: Color.Black,
			}, true));
		});
	}

	set text(v) {
		this.render.text = v;
	}

	click(c) {
		this.render.click(c);
	}
	
	get primary() {
		this.css1.sheet.backgroundColor = Color.Blue[400];
		this.css1.sheet.color = Color.White;
		return true;
	}
}