import { Component, Stylesheet, StatusBarColor } from '../dinggo.js';
import { Div, Color } from '../lib/index.js';

export default class BeautifulHeader extends Component {
	main() {
		return new Div((self) => {
            this.render = self.render;
            this.headerHeight = '60px';
            self.style(new Stylesheet({
                position: 'relative',
                width: '100vw',
                height: this.headerHeight,
                color: Color.Green[400],
                backgroundColor: Color.White,
                backgroundSize: 'cover',
                transition: 'all 0.0001s ease-in-out',
            }));
            self.style(this.css1 = new Stylesheet({
                // backgroundImage: 'url(./parallax.jpg)',
            }, true));
            // StatusBarColor(Color.Green[400]);
            self.render.appendChild(new Div((self) => {
                this.render_text = self.render;
                self.style(new Stylesheet({
                    fontSize: '20px',
                    fontWeight: '450',
                    padding: '20px 20px 0px 20px',
                }));
            }));
		});
    }
    
    content(v) {
        this.render.appendChild(v);
    }

    set text(v) {
        this.render_text.textContent = v;
    }

    set defaultImage(v) {
        this.css1.sheet.backgroundImage = 'url(./'+v+')';
    }
}