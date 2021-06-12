import { Component, Stylesheet } from '../dinggo.js';
import { Div, Color } from '../lib/index.js';

export default class SlideMenu extends Component {
	main() {
        this.z = 0;
        this.menuWidth = '50px';
        this.menuHeight = '50px';
        this.borderRadius = '4px';
		return new Div((self) => {
            this.render = self.render;
            self.style(new Stylesheet({
                overflowY: 'hidden',
                overflowX: 'scroll',
                width: '100%',
                display: 'inline-block',
                whiteSpace: 'nowrap',
                transition: 'tranform 2ms ease-in-out',
            }));
            self.style(this.css1 = new Stylesheet({
                height: '85px',
            }, true));
		});
    }

    set height(v) {
        this.css1.sheet.height = v;
    }
    
	add(v) {
        this.z++;
        var mLeft = this.z==1 ? '17px' : 0;
        this.render.appendChild(new Div((self) => {
            self.render.textContent = v;
            self.style(new Stylesheet({
                padding: '15px 15px 15px 15px',
                backgroundColor: Color.White,
                borderRadius: this.borderRadius,
                boxShadow: '0px 0px 3px 0px #ccc',
                marginRight: '10px',
                marginLeft: mLeft,
                display: 'inline',
                marginTop: '2px',
                width: this.menuWidth,
                height: this.menuHeight,
                fontSize: '12px',
                display: 'inline-block',
                overflow: 'hidden',
            }));
        }));
	}
}