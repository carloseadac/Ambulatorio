/*!
 *
 * Bryntum Calendar 5.3.5 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
function _cmpb(a,b){const c=_cmpa();_cmpb=function(d,e){d=d-0x99;let f=c[d];return f;};return _cmpb(a,b);}(function(a,b){const c=a();function m(a,b){return _cmpb(b-0x10e,a);}while(!![]){try{const d=parseInt(m(0x16b,0x1a7))/0x1+-parseInt(m(0x1e6,0x212))/0x2+-parseInt(m(0x1f5,0x1fd))/0x3+-parseInt(m(0x1d9,0x208))/0x4*(parseInt(m(0x22c,0x1e6))/0x5)+-parseInt(m(0x1d8,0x217))/0x6*(-parseInt(m(0x1cf,0x1b9))/0x7)+-parseInt(m(0x1f2,0x228))/0x8*(parseInt(m(0x1e5,0x1eb))/0x9)+-parseInt(m(0x1da,0x1bb))/0xa*(-parseInt(m(0x230,0x222))/0xb);if(d===b){break;}else{c['push'](c['shift']());}}catch(e){c['push'](c['shift']());}}}(_cmpa,0x19a3c));import{GridFeatureManager,GridBase}from'./GridBase.js';import{Delayable,InstancePlugin}from'./Editor.js';const storeListenerName=_cmpn(0x1cc,0x1bd);class ColumnAutoWidth extends Delayable(InstancePlugin){static get[_cmpn(0x23c,0x203)](){function o(a,b){return _cmpn(a,b-0x2d4);}return o(0x453,0x461);}static get[_cmpn(0x220,0x1ff)](){return{'default':null,'delay':0x0};}static get[_cmpn(0x1fe,0x1c8)](){function p(a,b){return _cmpn(a,b- -0x1d);}return{'after':{'bindStore':p(0x194,0x1a5),'unbindStore':'unbindStore','renderRows':p(0x1d4,0x194),'onInternalResize':p(0x217,0x1e4)},'assign':['columnAutoWidthPending',p(0x1d0,0x194)]};}[_cmpn(0x1f6,0x1fa)](a){super[q(-0x68,-0x37)](a);const {store:b}=this['client'];function q(a,b){return _cmpn(b,a- -0x262);}b&&this['bindStore'](b);}[_cmpn(0x19f,0x1cd)](){function r(a,b){return _cmpn(b,a- -0x12a);}this[r(0x77,0x6c)]();super['doDestroy']();}[_cmpn(0x1d6,0x1c2)](a){this['lastSync']=null;function s(a,b){return _cmpn(b,a- -0x462);}a[s(-0x2d2,-0x2b0)]({'name':storeListenerName,['change'+this['client'][s(-0x2a9,-0x2c4)]]:s(-0x2c4,-0x2e3),'thisObj':this});}[_cmpn(0x189,0x1a1)](){function t(a,b){return _cmpn(b,a-0x14b);}this[t(0x2e6,0x325)](storeListenerName);}get[_cmpn(0x1ed,0x1bf)](){function u(a,b){return _cmpn(b,a- -0x4b1);}return this['lastSync']===null||this['hasTimeout'](u(-0x300,-0x309));}[_cmpn(0x1b9,0x19e)]({action:a}){function v(a,b){return _cmpn(a,b-0x297);}if(a!==v(0x4a1,0x48e)){const b=this,{cellEdit:c}=b[v(0x43a,0x436)]['features'];++b[v(0x3e5,0x410)];if(c!==null&&c!==void 0x0&&c[v(0x476,0x48c)]&&!c['editingStoppedByTapOutside']){b[v(0x413,0x448)]();}else if(!b['hasTimeout'](v(0x452,0x448))){b[v(0x439,0x460)](v(0x43c,0x448),b[v(0x447,0x488)]);}}}['onInternalResize'](a,b,c,d){function w(a,b){return _cmpn(b,a- -0x208);}if(d===0x0){this[w(-0x6,-0x27)]=null;this[w(-0x57,-0x30)]();}}['syncAutoWidthColumns'](){const a=this,b=a[x(-0x222,-0x258)],c=a[x(-0x248,-0x240)];function x(a,b){return _cmpn(b,a- -0x3c1);}if(a[x(-0x1bf,-0x18a)]!==c){a[x(-0x1bf,-0x1e4)]=c;let d,e;for(const f of b[x(-0x1fa,-0x210)]['visibleColumns']){d=f['autoWidth'];if(d){if(d===!![]){d=a[x(-0x209,-0x23e)];}b['resizingColumns']=e=!![];f[x(-0x240,-0x256)](d);}}if(e){b[x(-0x1d8,-0x1b5)]=![];b['afterColumnsResized']();}}if(a[x(-0x1ed,-0x215)](x(-0x210,-0x1e6))){a[x(-0x244,-0x20a)](x(-0x210,-0x1ec));}}}ColumnAutoWidth[_cmpn(0x18d,0x1ad)][_cmpn(0x139,0x179)]=0x0;ColumnAutoWidth[_cmpn(0x1b4,0x1c0)]='ColumnAutoWidth';GridFeatureManager['registerFeature'](ColumnAutoWidth,!![]);function _cmpn(a,b){return _cmpb(b-0xdf,a);}class RowCopyPaste extends InstancePlugin{static ['$name']=_cmpn(0x1cd,0x1a9);static [_cmpn(0x168,0x196)]=_cmpn(0x1ab,0x1e7);static [_cmpn(0x1a5,0x1c8)]={'assign':[_cmpn(0x1dd,0x1f0),_cmpn(0x1b0,0x1ee)],'chain':['populateCellMenu']};[_cmpn(0x1ba,0x1e5)]=[];static ['configurable']={'nameField':_cmpn(0x167,0x1a2),'keyMap':{'Ctrl+C':{'weight':0xa,'handler':_cmpn(0x172,0x1b5)},'Ctrl+X':{'weight':0xa,'handler':'cut'},'Ctrl+V':{'weight':0xa,'handler':'paste'}},'copyRecordText':_cmpn(0x1d5,0x200),'cutRecordText':_cmpn(0x176,0x192),'pasteRecordText':_cmpn(0x1da,0x1e0),'rowSpecifierText':_cmpn(0x1b7,0x1a6),'rowSpecifierTextPlural':_cmpn(0x152,0x17f),'localizableProperties':[_cmpn(0x1e9,0x1d3),_cmpn(0x1ae,0x184),_cmpn(0x1bc,0x1c3),'rowSpecifierText',_cmpn(0x142,0x17a)],'rowOptionsOnCellContextMenu':![]};[_cmpn(0x1b8,0x1fa)](a,b){super[y(0xba,0x95)](a,b);a[y(0x25,0x59)][y(0x3,0x2b)]({'beforeRenderRow':y(0x95,0x66),'thisObj':this});function y(a,b){return _cmpn(a,b- -0x165);}this[y(0x7a,0x43)]=a;}[_cmpn(0x1d0,0x1de)]=_cmpn(0x1d5,0x1a4);[_cmpn(0x1ca,0x1cb)]({row:a,record:b}){function z(a,b){return _cmpn(b,a- -0x469);}a['cls'][z(-0x2e6,-0x2ab)]=this['_isCut']&&this['clipboardRecords'][z(-0x2b5,-0x290)](b);}['isActionAvailable'](a,b,c){function A(a,b){return _cmpn(a,b- -0x3b3);}var d;const {grid:e}=this,{cellEdit:f}=e[A(-0x1ff,-0x22c)],{target:g}=c;return!this[A(-0x1a7,-0x1d2)]&&globalThis[A(-0x1f2,-0x21e)]()[A(-0x259,-0x21f)]()['length']===0x0&&(!f||!f[A(-0x19c,-0x1be)])&&((d=e[A(-0x239,-0x22e)])===null||d===void 0x0?void 0x0:d[A(-0x1f2,-0x225)])>0x0&&(!g||Boolean(g[A(-0x1be,-0x1e9)](A(-0x19e,-0x1c4))));}[_cmpn(0x178,0x1b5)](){function B(a,b){return _cmpn(b,a-0x211);}this[B(0x401,0x42e)]();}[_cmpn(0x188,0x1af)](){function C(a,b){return _cmpn(a,b- -0x213);}this[C(-0x3c,-0x23)](!![]);}['paste'](a){function D(a,b){return _cmpn(a,b- -0x55);}this[D(0x15b,0x199)](a!==null&&a!==void 0x0&&a[D(0x1a8,0x16f)]?a:null);}[_cmpn(0x1b7,0x1f0)](a=![]){const b=this,{client:c,entityName:d}=b,e=b['selectedRecords']['filter'](f=>!f['readOnly']||!a);if(!e[E(0x2d9,0x30f)]||c[E(0x31a,0x31d)]||c[E(0x346,0x366)]('beforeCopy',{'records':e,'isCut':a,'entityName':d})===![]){return;}b[E(0x2c7,0x298)]=a;b[E(0x330,0x339)]['forEach'](f=>{function F(a,b){return E(b-0x185,a);}var g;return(g=c[F(0x4d4,0x48e)]['getRowById'](f))===null||g===void 0x0?void 0x0:g[F(0x4d6,0x4b4)](F(0x470,0x453));});b[E(0x330,0x340)]=e[E(0x2f2,0x305)]();function E(a,b){return _cmpn(b,a-0x14b);}c[E(0x308,0x346)][E(0x326,0x344)](f=>{function G(a,b){return E(a- -0x550,b);}f['meta'][G(-0x230,-0x230)]=b[G(-0x289,-0x26d)]&&b[G(-0x220,-0x1f5)][G(-0x251,-0x23c)](f);});e[E(0x326,0x309)](f=>this[E(0x2f0,0x2ff)](f,a));c[E(0x346,0x368)](E(0x300,0x343),{'records':e,'isCut':a,'entityName':d});}[_cmpn(0x1c1,0x1a5)](a,b){var c;function H(a,b){return _cmpn(a,b-0x2b1);}(c=this[H(0x436,0x450)]['rowManager']['getRowById'](a))===null||c===void 0x0?void 0x0:c[H(0x44b,0x451)](H(0x46b,0x434),b);}[_cmpn(0x20f,0x1ee)](a){var b,c;const d=this,e=d[I(0x3d1,0x3b4)],{client:f,entityName:g}=d,{store:h}=f,i=a||f[I(0x372,0x349)];function I(a,b){return _cmpn(b,a-0x1ec);}if(f['readOnly']||f[I(0x384,0x383)]||!e[I(0x37a,0x3ad)]||h[I(0x367,0x34a)]&&d['_isCut']&&e[I(0x3c3,0x3d4)](l=>l[I(0x3e4,0x3bf)](i,!![]))||f[I(0x3e7,0x40e)]('beforePaste',{'records':e,'referenceRecord':i,'isCut':d[I(0x368,0x324)],'entityName':g})===![]){return[];}d['sortByIndex'](e);const j={},k=d[I(0x3bd,0x3a2)](e,j);d[I(0x3ad,0x3be)](k,i);if(d['_isCut']){d[I(0x3bc,0x3cc)]();}else{f[I(0x371,0x37a)]=k;}f[I(0x3e7,0x3c4)](I(0x3b2,0x3d5),{'records':k,'originalRecords':e,'isCut':d[I(0x368,0x32c)],'referenceRecord':i,'entityName':g});(b=f[I(0x377,0x379)](k[k[I(0x37a,0x3be)]-0x1]))===null||b===void 0x0?void 0x0:(c=b[I(0x374,0x3b3)])===null||c===void 0x0?void 0x0:c[0x0][I(0x3c4,0x3dc)]();return k;}[_cmpn(0x18d,0x1d0)](){if(this[J(-0x9e,-0xbc)]){this['clipboardRecords'][J(-0x2e,-0x5d)](a=>{function K(a,b){return J(b,a-0x2b4);}var b;return(b=this[K(0x21b,0x1dd)]['rowManager'][K(0x1fc,0x225)](a))===null||b===void 0x0?void 0x0:b[K(0x260,0x22e)](K(0x1ff,0x219));});}function J(a,b){return _cmpn(a,b- -0x238);}this[J(-0xe5,-0xbc)]=![];this[J(-0x89,-0x53)]=[];}[_cmpn(0x1e5,0x1fd)](a){const b=a[this['nameField']];let c=0x2;function L(a,b){return _cmpn(b,a-0x1e7);}while(this[L(0x386,0x3c5)][L(0x3a4,0x3b7)]['findRecord'](this[L(0x3d2,0x3d2)],b+L(0x3c3,0x3ad)+c)){c++;}return b+L(0x3c3,0x3d1)+c;}[_cmpn(0x18a,0x1c1)](a,b){const {store:c}=this[M(-0x114,-0x154)],d=c[M(-0x134,-0x16a)](b)+0x1;function M(a,b){return _cmpn(a,b- -0x2f3);}if(c['tree']){return b[M(-0xbc,-0xfd)][M(-0x150,-0x11d)](a,b[M(-0x138,-0x116)],![],{'orderedBeforeNode':b[M(-0xcf,-0xf7)]});}else if(this[M(-0x158,-0x177)]){c[M(-0x120,-0xfc)](a,c[M(-0x152,-0x13d)](d));}else{return c['insert'](d,a);}}get[_cmpn(0x151,0x185)](){function N(a,b){return _cmpn(a,b-0x25f);}const a=[...this[N(0x42f,0x3fe)]['selectedRecords']];this[N(0x3d6,0x3fe)][N(0x3c0,0x3f8)][N(0x40b,0x43a)](b=>{function O(a,b){return N(b,a-0x43);}if(!a[O(0x456,0x484)](b['record'])){a[O(0x452,0x41b)](b[O(0x43f,0x406)]);}});return a;}[_cmpn(0x1ac,0x1c5)](a,b=![]){const c=this;let d=c[a+'RecordText'];function P(a,b){return _cmpn(b,a- -0x2ba);}if(b){d+='\x20('+(c['selectedRecords']['length']>0x1?c[P(-0x140,-0x104)]:c[P(-0xff,-0x115)])+')';}return d;}[_cmpn(0x172,0x1aa)]({record:a,items:b,cellSelector:c}){var d;const e=this,{client:f,rowOptionsOnCellContextMenu:g}=e,h=((d=f[Q(-0x319,-0x309)][Q(-0x28e,-0x29e)])===null||d===void 0x0?void 0x0:d[Q(-0x265,-0x2a4)])===!![],i=h&&f[Q(-0x28a,-0x2a3)](c);function Q(a,b){return _cmpn(a,b- -0x490);}if(!f['readOnly']&&!f[Q(-0x2bc,-0x2f8)]&&(a===null||a===void 0x0?void 0x0:a[Q(-0x2e2,-0x2aa)])===![]&&(h?f[Q(-0x2d4,-0x2f4)][Q(-0x2e2,-0x302)]:f[Q(-0x2f6,-0x30b)][Q(-0x33c,-0x302)])&&(!i||e['rowOptionsOnCellContextMenu'])){b[Q(-0x2a1,-0x2e1)]={'text':e['getMenuItemText'](Q(-0x305,-0x2e1),i&&g),'localeClass':e,'icon':Q(-0x333,-0x2fd),'weight':0x87,'disabled':a['readOnly'],'onItem':()=>e[Q(-0x2b3,-0x2e1)]()};b[Q(-0x303,-0x2db)]={'text':e['getMenuItemText'](Q(-0x2ad,-0x2db),i&&g),'localeClass':e,'cls':Q(-0x2d1,-0x2e4),'icon':Q(-0x2d9,-0x2e2),'weight':0x78,'onItem':()=>e[Q(-0x30d,-0x2db)]()};b[Q(-0x2a8,-0x2ca)]={'text':e[Q(-0x304,-0x2cb)](Q(-0x29d,-0x2ca),i&&g),'localeClass':e,'icon':Q(-0x2d7,-0x2e5),'weight':0x8c,'disabled':!e[Q(-0x28e,-0x2ab)][Q(-0x313,-0x302)],'onItem':()=>e[Q(-0x291,-0x2ca)](a)};}}['sortByIndex'](a){function R(a,b){return _cmpn(a,b-0x7);}const {store:b}=this[R(0x1cb,0x1a6)];return a[R(0x1a9,0x1e9)]((c,d)=>{const e=c[S(0x2e9,0x320)],f=d[S(0x2e9,0x30d)];if(!a[S(0x303,0x305)](c[S(0x345,0x353)])&&!a['includes'](d[S(0x345,0x360)])){return b[S(0x2d8,0x2e9)](c)-b['indexOf'](d);}function S(a,b){return R(b,a-0x148);}if(e[S(0x2dd,0x2ef)]===f['length']){for(let g=0x0;g<e['length'];g++){if(e[g]<f[g]){return-0x1;}if(e[g]>f[g]){return 0x1;}}return 0x0;}else{return e[S(0x2dd,0x2b5)]-f[S(0x2dd,0x315)];}});}[_cmpn(0x1b0,0x1d1)](a,b){const c=this,{client:d,_isCut:e}=c;if(d['store']['tree']){a[T(-0x4,0x4)](g=>{function U(a,b){return T(a-0xa0,b);}g[U(0x7b,0x78)](h=>{function V(a,b){return U(b-0xb4,a);}const i=h[V(0x116,0xf7)](!![]);if(!a['includes'](h)&&(!e||!a['some'](j=>i['includes'](j)))){a['push'](h);}});});}const f=a[T(0x0,0x36)]((g,h)=>{let i;const j=h[W(0x29,0x40)]||h[W(0x28,0x24)][W(0x7,-0x24)];if(e){i=h;i['meta'][W(0x4b,0x53)]=![];}else{i=h['copy']();i[c[W(0x61,0x3f)]]=c[W(0x73,0x75)](i);i[W(0x60,0x2a)]['expanded']=h['isExpanded'](d['store']);}b[h['id']]=i;if(h['parent']===d['store'][W(0x19,-0x5)]){g[W(0x26,0xe)](i);}else if(j in b){b[j]['appendChild'](i,!![]);}else{g[W(0x26,0x27)](i);}function W(a,b){return T(a-0x55,b);}return g;},[]);f[T(-0x4,-0x22)](g=>{function X(a,b){return T(b-0x274,a);}g[X(0x2a5,0x293)](!![],!![]);});function T(a,b){return _cmpn(b,a- -0x1df);}return f;}}RowCopyPaste[_cmpn(0x161,0x17e)]=_cmpn(0x204,0x1d2);RowCopyPaste[_cmpn(0x181,0x1c0)]='RowCopyPaste';function _cmpa(){const Z=['move','contains','48FkUbsH','construct','trigger','nextOrderedSibling','generateNewName','sortOrderedChildren','configurable','L{copyRecord}','onInternalResize','lastSync','$name','106754QMyDAS','storeGeneration','rowSpecifierTextPlural','tree','_isCut','clearTimeout','featureClass','L{rows}','getRowById','resizeToFitContent','getTopParent','b-cut-row','cutRecordText','selectedRecords','selectedRecord','features','cells','indexOf','1305962mvwdZA','getRowFor','1885660oNgcmK','ColumnAutoWidth','length','SchedulerPro','ion','modified','L{cutRecord}','b-icon\x20b-icon-cut','toString','getSelection','type','Grid','isTreeGrouped','selectedCells','indexPath','detachListeners','selectedRows','record','onStoreChange','client','toggleCls','unbindStore','name','rootNode','row','onRowCutOrCopy','L{row}','slice','grid','RowCopyPaste','populateCellMenu','b-icon\x20b-icon-paste','b-separator','prototype','b-icon\x20b-icon-copy','cut','push','syncAutoWidthColumns','meta','parentId','includes','copy','getAt','979905saHXmK','default','asyncEventSuffix','traverse','rowSpecifierText','85572vVcBJl','store','rowManager','columnAutoWidthPending','_$name','insertCopiedRecords','bindStore','pasteRecordText','isModel','getMenuItemText','paste','columns','pluginConfig','setTimeout','closest','onBeforeRenderRow','registerFeature','doDestroy','347415hAHEWW','readOnly','clearClipboard','extractParents','b-row-copypaste','copyRecordText','hasTimeout','isCut','insertChild','some','focus','4cKdShk','Gantt','forEach','\x20-\x20','nextSibling','entityName','reduce','L{pasteRecord}','disabled','sort','16064JScKmx','removeCls','clipboardRecords','isSpecialRow','rowCopyPaste','6LejBEM','resizingColumns','data','nameField','enabled','isCellSelected','pasteRows','.b-gridbase:not(.b-schedulerbase)\x20.b-grid-subgrid,.b-grid-subgrid:not(.b-timeaxissubgrid)','copyRows','delay','cellCopyPaste','11KxPYPW','initClass','isEditing','parent'];_cmpa=function(){return Z;};return _cmpa();}GridFeatureManager[_cmpn(0x1e9,0x1cc)](RowCopyPaste,!![],_cmpn(0x162,0x197));GridFeatureManager['registerFeature'](RowCopyPaste,![],_cmpn(0x1f5,0x1da));GridFeatureManager[_cmpn(0x1ac,0x1cc)](RowCopyPaste,![],_cmpn(0x15c,0x18f));GridFeatureManager[_cmpn(0x1ff,0x1cc)](RowCopyPaste,![],'ResourceHistogram');class Grid extends GridBase{static get['$name'](){function Y(a,b){return _cmpn(a,b- -0x390);}return Y(-0x1c3,-0x1f9);}static get[_cmpn(0x183,0x196)](){return'grid';}}Grid[_cmpn(0x1e3,0x1f4)]();Grid[_cmpn(0x1e8,0x1c0)]=_cmpn(0x17b,0x197);export{ColumnAutoWidth,Grid,RowCopyPaste};