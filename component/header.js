import { Component, Stylesheet, StatusBarColor } from '../dinggo.js';
import { Div, Color } from '../lib/index.js';

export default class Header extends Component {
	main() {
		return new Div((self) => {
            self.render.appendChild(new Div((self) => {
				this.headerHeight = '63px';
                self.style(new Stylesheet({
					position: 'relative',
					width: '100vw',
					height: this.headerHeight,
					boxShadow: '0px 0px 4px 0px #aaa',
				}));
                self.style(this.headerStyle = new Stylesheet({
					backgroundColor: Color.Green[400],
				}, true));
				// StatusBarColor(Color.Green[400]);
				self.render.appendChild(new Div((self) => {
					this.renderText = self.render;
					self.style(new Stylesheet({
						fontSize: '25px',
						fontWeight: '450',
						padding: '18px 16px 18px 16px',
					}));
					self.style(this.textStyle = new Stylesheet({
						color: Color.Black,
					}, true));
				}));
            }));
		});
	}
	set text(v) {
		this.renderText.textContent = v;
	}
	set bgColor(v) {
		this.headerStyle.sheet.backgroundColor = v;
	}
	set textColor(v) {
		this.textStyle.sheet.color = v;
	}
}