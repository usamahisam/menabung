import { Component, closeApp, Stylesheet } from '../dinggo.js';
import { Layout, Header, TabBody, Body, Btn } from '../component/index.js';
import { Div, Color } from '../lib/index.js';

export default class Tabungan extends Component {
	main() {
		return new TabBody((self) => {
			self.content(new Header((self) => {
                this.render_header = self;
                self.text = 'Tabungan';
                self.bgColor = Color.White;
            }));
		});
	}

    ready({render, props}) {
        render.render_header.textColor = props.colorActive;
    }
}