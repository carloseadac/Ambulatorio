/*!
 *
 * Bryntum Calendar 5.3.5 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(a,b){function m(a,b){return _cmpb(a-0x3a5,b);}const c=a();while(!![]){try{const d=-parseInt(m(0x479,0x46d))/0x1+parseInt(m(0x4bb,0x4ed))/0x2+-parseInt(m(0x493,0x469))/0x3+parseInt(m(0x49e,0x482))/0x4+parseInt(m(0x46e,0x447))/0x5*(parseInt(m(0x49a,0x4ae))/0x6)+-parseInt(m(0x4b7,0x49e))/0x7*(-parseInt(m(0x46c,0x488))/0x8)+-parseInt(m(0x460,0x471))/0x9*(-parseInt(m(0x45d,0x44d))/0xa);if(d===b){break;}else{c['push'](c['shift']());}}catch(e){c['push'](c['shift']());}}}(_cmpa,0xb3bb9));import{ColumnStore,Column,GridFeatureManager}from'./GridBase.js';import{NumberFormat}from'./MessageDialog.js';import{ObjectHelper,InstancePlugin,EventHelper}from'./Editor.js';class NumberColumn extends Column{static [_cmpn(0x427,0x411)]='number';static [_cmpn(0x41a,0x407)]='number';static [_cmpn(0x450,0x450)]=[_cmpn(0x46d,0x452),_cmpn(0x445,0x45f),'max',_cmpn(0x412,0x40c),_cmpn(0x44e,0x47c),_cmpn(0x455,0x473)];static get[_cmpn(0x465,0x48f)](){function o(a,b){return _cmpn(b- -0x90,a);}return{'filterType':o(0x388,0x3b4),'format':''};}get['defaultEditor'](){function p(a,b){return _cmpn(a- -0x69f,b);}const {format:a,name:b,max:c,min:d,step:e,largeStep:f,align:g}=this;return ObjectHelper[p(-0x257,-0x227)]({'type':p(-0x277,-0x27b),'format':a,'name':b,'max':c,'min':d,'step':e,'largeStep':f,'textAlign':g});}get[_cmpn(0x40f,0x3ee)](){function q(a,b){return _cmpn(b- -0x3a0,a);}const a=this,{format:b}=a;let c=a[q(0xa2,0x9d)];if(!c||a[q(0x8e,0xbd)]!==b){a[q(0x99,0x9d)]=c=NumberFormat['get'](a[q(0x8e,0xbd)]=b);}return c;}[_cmpn(0x438,0x417)](a){function r(a,b){return _cmpn(b- -0x528,a);}if(a!=null){a=this[r(-0xfb,-0x119)]['format'](a);if(this[r(-0xa6,-0xd3)]){a=''+a+this[r(-0x103,-0xd3)];}}return a??'';}['defaultRenderer']({value:a}){function s(a,b){return _cmpn(a- -0x142,b);}return this[s(0x2f6,0x309)](a);}}ColumnStore[_cmpn(0x42d,0x402)](NumberColumn,!![]);NumberColumn[_cmpn(0x43a,0x42a)]();NumberColumn[_cmpn(0x426,0x452)]=_cmpn(0x45e,0x44e);class RegionResize extends InstancePlugin{static ['$name']=_cmpn(0x46b,0x43b);static get[_cmpn(0x471,0x480)](){function t(a,b){return _cmpn(a- -0x4b4,b);}return{'chain':['onElementPointerDown',t(-0x8b,-0xa7),t(-0x5e,-0x8b),t(-0x55,-0x50),t(-0x81,-0x97),t(-0x5b,-0x2e)]};}[_cmpn(0x429,0x437)](a){const b=this,{client:c}=b,d=a[u(0x469,0x442)][u(0x47e,0x491)](u(0x484,0x456));function u(a,b){return _cmpn(a-0x50,b);}if(d&&!b[u(0x461,0x467)]){b['expanding']=!![];let e=d[u(0x46c,0x445)][u(0x467,0x47a)],f=c[u(0x474,0x471)](e);if(!f[u(0x4b8,0x4a9)]){e=c[u(0x4b0,0x4d6)]()[0x1];f=c[u(0x474,0x448)](e);}f[u(0x4ac,0x4b1)]()['then'](()=>b[u(0x461,0x493)]=![]);}}['startMove'](a,b){const c=this,{client:d}=c,e=a[v(0x1c9,0x1c9)][v(0x1e4,0x1c4)],f=d[v(0x213,0x1ee)],g=d['regions'][d[v(0x223,0x21f)][v(0x23e,0x214)](e)+0x1],h=d[v(0x1c3,0x1d1)](g),i=d['getSubGrid'](e);let j=i,k=0x1;if(j[v(0x1dd,0x1ec)]!=null){if(h[v(0x1e6,0x1ec)]==null){j=h;k=-0x1;}}function v(a,b){return _cmpn(b- -0x253,a);}if(d['rtl']){k*=-0x1;}if(a['classList'][v(0x1e4,0x1c8)](v(0x1ec,0x1cf))){return;}const l=j[v(0x1d2,0x1ee)][v(0x1f1,0x213)]+h[v(0x212,0x1ee)][v(0x1f7,0x213)];c[v(0x1d9,0x1cb)]={'element':a,'headerEl':j[v(0x1e0,0x1ca)]['element'],'subGridEl':j[v(0x1c9,0x1ee)],'subGrid':j,'splitterSubGrid':i,'originalWidth':j[v(0x1f4,0x1ee)][v(0x1f1,0x213)],'originalX':b,'minWidth':j[v(0x1b7,0x1d8)]||0x0,'maxWidth':Math[v(0x1c9,0x1f2)](l,j[v(0x1a5,0x1d0)]||l),'flip':k};f[v(0x1f1,0x1e6)][v(0x1b8,0x1df)](v(0x1c0,0x1dc));i[v(0x1ee,0x1eb)](v(0x1d8,0x1e2));c[v(0x1af,0x1d7)]=EventHelper['on']({'element':document,'pointermove':v(0x1da,0x1de),'pointerup':v(0x212,0x204),'thisObj':c});}[_cmpn(0x449,0x44b)](){const a=this,{dragContext:b}=a;function w(a,b){return _cmpn(b- -0x266,a);}if(b){a['pointerDetacher']();a[w(0x1a6,0x1b2)][w(0x1d1,0x1db)]['classList'][w(0x200,0x1ee)](w(0x1c8,0x1c9));b[w(0x1be,0x1b0)][w(0x1e5,0x1d8)](w(0x1d1,0x1cf),![]);a['dragContext']=null;}}['onCollapseClick'](a,b){const c=this,{client:d}=c,e=b[x(-0x2c9,-0x29c)][x(-0x2ce,-0x2e4)],f=d[x(-0x285,-0x2b1)]();function x(a,b){return _cmpn(a- -0x6e5,b);}if(f[0x0]===e){const g=d[x(-0x2c1,-0x2e8)](f[0x1]);if(g[x(-0x27d,-0x266)]){g[x(-0x289,-0x2a1)]();return;}}a['collapse']();}[_cmpn(0x462,0x450)](a,b){const c=this,{client:d}=c,e=b[y(0x228,0x253)][y(0x258,0x24e)],f=d['getLastRegions']();function y(a,b){return _cmpn(b- -0x1c9,a);}if(f[0x0]===e){if(!a[y(0x2be,0x29f)]){const g=d['getSubGrid'](f[0x1]);g[y(0x265,0x289)]();return;}}a[y(0x275,0x293)]();}[_cmpn(0x44b,0x435)](a){const {dragContext:b}=this;function z(a,b){return _cmpn(b- -0x303,a);}if(b){const c=a-b[z(0x151,0x160)],d=Math[z(0x173,0x166)](Math[z(0x11a,0x142)](b[z(0x119,0x120)],b[z(0x14c,0x140)]+c*b[z(0x16d,0x169)]),0x0);b[z(0x17c,0x16d)][z(0x166,0x14c)]=Math['max'](d,b[z(0x12d,0x128)]);}}[_cmpn(0x430,0x452)](a){const b=this,{target:c}=a,d=a[A(0x2ec,0x2e3)]===0x0&&c[A(0x2da,0x306)](A(0x2e3,0x2c2)),e=d&&b[A(0x2c4,0x2ca)]['getSubGrid'](d[A(0x2c8,0x2c9)][A(0x2c3,0x2aa)]);let f;function A(a,b){return _cmpn(a- -0x154,b);}if(d){if(c['closest'](A(0x2ff,0x2f3))){b['onCollapseClick'](e,d);}else if(c['closest'](A(0x2c1,0x29f))){b[A(0x30e,0x307)](e,d);}else{b['startMove'](d,a[A(0x310,0x338)]);f=d;}}if(a['pointerType']==='touch'){b[A(0x31b,0x2f8)](f);}}['onPointerMove'](a){function B(a,b){return _cmpn(a- -0x400,b);}if(this['dragContext']){this['updateMove'](a[B(0x64,0x74)]);a['preventDefault']();}}[_cmpn(0x456,0x482)](a){function C(a,b){return _cmpn(b- -0x4a,a);}if(this[C(0x3b0,0x3d4)]){a[C(0x3f5,0x400)]();}}[_cmpn(0x457,0x436)](a){function D(a,b){return _cmpn(a- -0x39b,b);}if(this['dragContext']){this[D(0xae,0xd9)]();a[D(0xaf,0x90)]();}}[_cmpn(0x45f,0x452)]({subGrid:a}){function E(a,b){return _cmpn(a- -0x703,b);}const b=this[E(-0x2eb,-0x2fa)][E(-0x2cd,-0x2a3)](a),c=this[E(-0x2eb,-0x2c5)][E(-0x2a3,-0x287)]();if(c[0x1]===a[E(-0x2ec,-0x2ed)]){b[E(-0x2ca,-0x2ec)]['add'](E(-0x2ef,-0x2d6));}}[_cmpn(0x433,0x409)]({subGrid:a}){const b=this[F(-0x4,-0x19)]['resolveSplitter'](a);function F(a,b){return _cmpn(a- -0x41c,b);}b[F(0x1d,0x10)][F(0x38,0x50)](F(-0x8,-0x2));}[_cmpn(0x46f,0x49b)](a){const b=this,{touchedSplitter:c}=b;if(a&&c&&a['dataset'][G(-0x13a,-0x145)]!==c[G(-0x12b,-0x140)][G(-0x127,-0x145)]){b[G(-0x103,-0xed)]();}function G(a,b){return _cmpn(b- -0x55c,a);}const d=b['client']['getSubGrid'](a?a[G(-0x148,-0x140)][G(-0x153,-0x145)]:c===null||c===void 0x0?void 0x0:c[G(-0x154,-0x140)][G(-0x172,-0x145)]);if(d){d[G(-0xf4,-0x11e)](G(-0x145,-0x121),Boolean(a));if(a){d[G(-0x13c,-0x137)]();}else{d[G(-0xd9,-0xfb)]();}}b[G(-0x101,-0x102)]=a;}[_cmpn(0x459,0x427)](){function H(a,b){return _cmpn(a- -0x411,b);}const {regions:a,subGrids:b}=this[H(0x7,-0x16)];if(a[H(0x36,0x5c)]>0x2){b[a[0x0]]['splitterElement'][H(0x28,0x2a)][H(0x21,0x50)](H(0x2b,0x50));b[a[0x1]][H(0x31,0x1)][H(0x28,-0x3)][H(0x21,0x1e)](H(0x4a,0x69));}}}RegionResize[_cmpn(0x458,0x434)]=_cmpn(0x44c,0x44c);RegionResize[_cmpn(0x426,0x40d)]='RegionResize';function _cmpn(a,b){return _cmpb(a-0x358,b);}function _cmpb(a,b){const c=_cmpa();_cmpb=function(d,e){d=d-0xb7;let f=c[d];return f;};return _cmpb(a,b);}GridFeatureManager[_cmpn(0x420,0x42f)](RegionResize);function _cmpa(){const I=['onElementPointerDown','onPointerMove','add','onSubGridExpand','.b-grid-splitter-collapsed','b-moving','resolveSplitter',':not(.b-row-reordering):not(.b-dragging-event):not(.b-dragging-task):not(.b-dragging-header):not(.b-dragselecting)\x20.b-grid-splitter','formatValue','classList','exposeProperties','b-touching','b-left-only','_formatter','toggleSplitterCls','flex','button','element','splitterElement','originalWidth','number','min','2047821ZWlKgr','length','cleanupProperties','endMove','preventDefault','updateMove','b-split','6gGFCDz','largeStep','width','fields','1762636oOVHIA','collapse','.b-grid-splitter-button-collapse','remove','unit','onElementTouchMove','onPointerUp','featureClass','render','touchedSplitter','b-right-only','expand','_lastFormat','NumberColumn','onSubGridCollapse','getLastRegions','stopSplitterButtonSyncing','onExpandClick','originalX','clientX','defaults','offsetWidth','indexOf','collapsed','max','55489YJfLCE','RegionResize','flip','format','2122884xCkgBS','toggleTouchSplitter','subGrid','pluginConfig','regions','formatter','40CGkWCu','expanding','step','1696266Inglbg','b-grid-splitter-allow-collapse','.b-grid-splitter-button-expand','splitterSubGrid','region','client','target','fieldType','contains','dataset','header','dragContext','192PECjKI','registerFeature','704705unaUaU','b-grid-splitter-collapsed','maxWidth','getSubGrid','startSplitterButtonSyncing','_$name','type','numberfield','onElementDblClick','pointerDetacher','minWidth','1168394gZctAs','registerColumnType','closest','b-moving-splitter'];_cmpa=function(){return I;};return _cmpa();}export{NumberColumn,RegionResize};