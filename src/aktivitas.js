import { Component } from '../dinggo.js';
import { Header, TabBody } from '../component/index.js';
import { Div, Color } from '../lib/index.js';

export default class Aktivitas extends Component {
	main() {
		return new TabBody((self) => {
			self.content(new Header((self) => {
                this.render_header = self;
				self.text = 'Aktivitas';
                self.bgColor = Color.White;
			}));
		});
    }

    ready({render, props}) {
        render.render_header.textColor = props.colorActive;
    }
}