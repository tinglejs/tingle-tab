/**
 * Tab Component Demo for tingle
 * @author zhangshun
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
window.FastClick && FastClick.attach(document.body);
require("tingle-context");

const Demo = require('./TabDemo');
React.render(<Demo/>, document.getElementById('TingleDemo'));