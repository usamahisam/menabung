import { Component, Stylesheet } from '../dinggo.js';
import Color from './color.js';

export default class Icon extends Component {
	main({createWidget}) {
		return createWidget('i', ({self, style}) => {
            this.render = self;
            style(new Stylesheet({
                fontSize: '13px',
                color: Color.Black,
            }));
            style(this.css1 = new Stylesheet({
                fontSize: '13px',
            }, true));
		});
    }

    set name(v) {
        this.render.classList.add('ion-'+v);
    }

    set size(v) {
        this.css1.sheet.fontSize = v+'px';
    }

    set color(v) {
        this.css1.sheet.color = v;
    }
}