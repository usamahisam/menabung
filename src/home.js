import { Component, Stylesheet } from '../dinggo.js';
import { BeautifulHeader, TabBody, Card } from '../component/index.js';
import { Div } from '../lib/index.js';

export default class Home extends Component {
	main() {
		return new TabBody((self) => {
            self.content(new BeautifulHeader((self) => {
                self.text = 'Menabung Bro';
            }));
            self.content(new Div((self) => {
                self.style(new Stylesheet({
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    paddingTop: '2px',
                    paddingBottom: '16px',
                }));
                self.render.appendChild(new Card((self) => {
                    self.set('1. Jalaludin Rumi');
                }));
                self.render.appendChild(new Card((self) => {
                    self.set('Aplikasi 2');
                }));
            }));
		});
    }

    ready({render, props}) {
    }
}