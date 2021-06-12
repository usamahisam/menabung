import { Component, Stylesheet } from '../dinggo.js';
import { Div, Color } from '../lib/index.js';

export default class Label extends Component {
	main() {
		return new Div((self) => {
            this.render = self.render;
            self.style(new Stylesheet({
                fontSize: '16px',
                fontWeight: '450',
                margin: '10px 16px 10px 16px',
                color: Color.Black,
            }));
        });
    }
    set text(v) {
        this.render.textContent = v;
    }
}