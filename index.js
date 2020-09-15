import { runApp } from './dinggo.js';
import MyHomeTab from './src/tabbottom.js';

var routes = [
    {  url: 'home', page: MyHomeTab }
]

runApp(routes);