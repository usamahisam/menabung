import { Component, StatusBarColor } from '../dinggo.js';
import { BottomTab } from '../component/index.js';
import Home from './home.js';
import Tabungan from './tabungan.js';
import Profil from './profil.js';
import Aktivitas from './aktivitas.js';
import Color from '../lib/color.js';

export default class MyHomeTab extends Component {
	main() {
		return new BottomTab((self) => {
            self.tab(Home, {
                default: true,
                name: 'Beranda',
                icon: 'home',
                colorActive: Color.Green[600],
                isActive: () => {
                    StatusBarColor(Color.Green[600]);
                }
            });
            self.tab(Tabungan, {
                name: 'Tabungan',
                icon: 'ios7-analytics',
                colorActive: Color.Purple[600],
                isActive: () => {
                    StatusBarColor(Color.Purple[600]);
                }
            });
            self.tab(Aktivitas, {
                name: 'Aktivitas',
                icon: 'ios7-paper',
                colorActive: Color.Red[600],
                isActive: () => {
                    StatusBarColor(Color.Red[600]);
                }
            });
            self.tab(Profil, {
                name: 'Profil',
                icon: 'person',
                colorActive: Color.Green[600],
                isActive: () => {
                    StatusBarColor(Color.Green[600]);
                }
            });
        });
    }
}