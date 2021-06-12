import { Component, Stylesheet, StatusBarColor, addStylesheet } from '../dinggo.js';
import { Div, Color, Icon } from '../lib/index.js';

export default class BottomTab extends Component {
	main() {
        this.BottomHeight = '55px';
        this.lastScollTop = 0;
        this.status_hide = false;
        this.bottomTabTextColor = '#777';
        this.tab_index = 0;
        this.tab_active = null;
        this.tab_active_last = null;
        this.tabs_render = [];
        this.tabs_props = [];
        this.tabs_ready = [];
        this.tabs_element = [];
        this.tabs_style = [];
        this.tabs_bottom_style = [];
        this.tabs_route = [];

		return new Div((self) => {
            self.style(new Stylesheet({
                position: 'relative',
                width: '100vw',
                height: '100vh',
            }));
            self.render.appendChild(new Div((self) => {
                this.render_page = self.render;
                self.style(new Stylesheet({
                    position: 'absolute',
                    bottom: 0,
                    top: 0,
                    left: 0,
                    right: 0,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                }));
            }));
            self.render.appendChild(new Div((self) => {
                this.render_tab = self.render;
                self.style(new Stylesheet({
                    position: 'fixed',
                    borderTop: '1px solid #ddd',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: this.BottomHeight,
                    overflow: 'hidden',
                    backgroundColor: Color.White,
                    display: 'flex',
                    alignItems:'center',
                    zIndex: 3,
                    transition: 'all 0.4s ease-in-out',
                }));
                self.style(this.css_bottom = new Stylesheet({
                    bottom: 0,
                }, true));
            }));
        });
    }

    tab(v, props) {
        // create page
        let f_ready = null;
        let a = new v((self) => {
            this.tabs_render.push(self);
            if (typeof self.ready !== 'undefined') {
                f_ready = self.ready;
            }
        });
        this.tabs_ready.push(f_ready);
        if (typeof props.default !== "undefined") {
            if (this.tab_active == null) {
                this.tab_active = this.tab_index;
            }
        }
        this.tabs_route.push(this.tab_index);
        let sc = addStylesheet(a, {
            zIndex: 1,
            paddingBottom: this.BottomHeight,
        });
        this.tabs_style.push(sc);
        this.render_page.appendChild(a);
        a.addEventListener('scroll', (e) => {
            window.requestAnimationFrame(() => {
                let top = a.scrollTop;
                if (this.lastScollTop < top) {
                    this.bottomHide();
                } else {
                    this.bottomShow();
                }
                this.lastScollTop = top;
            });
        });
        // create bottom tab
        let sty = this.createBottom(this.tab_index, props);
        this.tab_index++;
        this.tabs_props.push(props);
        this.tabs_element.push(a);
        this.tabs_bottom_style.push(sty);
        // check
        this.checkActive(this.tab_active);
    }

    bottomHide() {
        if (!this.status_hide) {
            this.css_bottom.sheet.bottom = '-'+this.BottomHeight;
            this.status_hide = true;
        }
    }

    bottomShow() {
        if (this.status_hide) {
            this.css_bottom.sheet.bottom = 0;
            this.status_hide = false;
        }
    }

    createBottom(index, props) {
        // create bottom tab 
        var icon = null, textStyle = null, btn = null;
        this.render_tab.appendChild(btn = new Div((self) => {
            self.style(new Stylesheet({
                height: 'inherit',
                flex: '1',
                textAlign: 'center',
            }));
            if (typeof props.icon !== 'undefined') {
                self.render.appendChild(new Icon((self) => {
                    icon = self;
                    self.name = props.icon;
                    self.size = 30;
                    self.color = this.bottomTabTextColor;
                }));
            }
            if (typeof props.name !== 'undefined') {
                self.render.appendChild(new Div((self) => {
                    self.render.textContent = props.name;
                    self.style(new Stylesheet({
                        color: this.bottomTabTextColor,
                        fontWeight: '420',
                        fontSize: '12px',
                    }));
                    self.style(textStyle = new Stylesheet({
                        color: this.bottomTabTextColor,
                    }, true));
                }));
            }
        }));

        // tab click action
        btn.addEventListener('click', () => {
            if (this.tab_active == index) {
                // same click
                this.tabs_element[index].scrollTo(0,0);
            }
            this.tab_active = index;
            this.checkActive(this.tab_active);
        });
        return { icon, textStyle };
    }

    checkActive(tab_active) {
        if (this.tab_active_last != tab_active) {
            // get props tab
            let props = this.tabs_props[tab_active];
            if (typeof props.isActive !== 'undefined') {
                props.isActive(true);
            }
            // page tab active
            for (var item in this.tabs_style) {
                let t = this.tabs_style[item];
                t.zIndex = 1;
            }
            let ready = this.tabs_ready[tab_active];
            if (ready != null) {
                ready({render: this.tabs_render[tab_active], props});
            }
            let ts = this.tabs_style[tab_active];
            ts.zIndex = 2;
            // bottom tab active
            for (var item in this.tabs_bottom_style) {
                let t = this.tabs_bottom_style[item];
                t.icon.color = this.bottomTabTextColor;
                t.textStyle.sheet.color = this.bottomTabTextColor;
            } 
            let s = this.tabs_bottom_style[tab_active];
            var colorActive = typeof props.colorActive === 'undefined' ? Color.Black : props.colorActive;
            s.icon.color = colorActive;
            s.textStyle.sheet.color = colorActive;
        }
        // set last
        this.tab_active_last = tab_active;
    }

}