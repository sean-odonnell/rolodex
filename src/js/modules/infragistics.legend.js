﻿/*!@license
* Infragistics.Web.ClientUI infragistics.legend.js 16.2.20162.1035
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*     infragistics.ext_core.js
*     infragistics.ext_collections.js
*     infragistics.dv_core.js
*     infragistics.ext_ui.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery","jquery-ui","./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.dv_core","./infragistics.ext_ui"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$p=$$t;$$0=$.ig.globalDefs.$$0;$$4=$.ig.globalDefs.$$4;$$1=$.ig.globalDefs.$$1;$$w=$.ig.globalDefs.$$w;$$6=$.ig.globalDefs.$$6;$$a=$.ig.globalDefs.$$a;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["LegendBaseViewManager:a","LegendMouseEventHandler:c","LegendMouseButtonEventHandler:e","ItemLegend:f","Legend:g","IInternalLegendOwner:h","LegendBase:j","ScaleLegend:k","ItemLegendView:l","LegendBaseView:m","LegendView:n","ScaleLegendView:o"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.getBoxIfEnum,$e=$.ig.util.getDefaultValue,$f=$.ig.util.getEnumValue,$g=$.ig.util.getValue,$h=$.ig.util.intSToU,$i=$.ig.util.nullableEquals,$j=$.ig.util.nullableIsNull,$k=$.ig.util.nullableNotEquals,$l=$.ig.util.toNullable,$m=$.ig.util.toString$1,$n=$.ig.util.u32BitwiseAnd,$o=$.ig.util.u32BitwiseOr,$p=$.ig.util.u32BitwiseXor,$q=$.ig.util.u32LS,$r=$.ig.util.unwrapNullable,$s=$.ig.util.wrapNullable,$t=String.fromCharCode,$u=$.ig.util.castObjTo$t,$v=$.ig.util.compareSimple,$w=$.ig.util.tryParseNumber,$x=$.ig.util.tryParseNumber1,$y=$.ig.util.numberToString,$z=$.ig.util.numberToString1,$0=$.ig.util.parseNumber;$c("LegendBaseViewManager:a","Object",{a:null,init:function(a){this.g=null;this.d=false;$.ig.$op.init.call(this);this.a=a;this._f=new $$4.f($.ig.$op.$type,$$1.$t.$type,0);this.n()},g:null,n:function(){var $self=this;if(this.g==null){this.g=function(a,b){var c=$.ig.LegendItemHelper.prototype.b();if(window.devicePixelRatio!=window.undefined&&($.ig.util.isNaN(c)||window.devicePixelRatio!=c)){$.ig.LegendItemHelper.prototype.b(window.devicePixelRatio);$self.a.w()}};window.addEventListener("resize",this.g,false)}this.g(this,null)},o:function(a){if(a==null){if(this.g!=null){window.removeEventListener("resize",this.g,false);this.g=null}this._j=null;this._h=null;return}this._h=$(a);this._j=$("<table></table>");this._j.addClass(this.a._j);this._h.append(this._j)},_j:null,_h:null,d:false,i:function(a,b){var c=$b($$a.$f.$type,a);var d=$("<tr></tr>");d.addClass(this.a._k);if(c!=null){var e=$b($.ig.ILegendContext.prototype.$type,c.content());if(e!=null&&c._ae!=null){var f=new $$a.i;f.context=d;f.passID="LegendItem";var g=new $$a.j;g.passInfo=f;g.width=NaN;g.height=NaN;g.data=e;g.context=d;var h=new $$a.k;h.passInfo=f;if(c._ae.measure()!=null){c._ae.measure()(g)}h.context=d;h.availableWidth=g.width;h.availableHeight=g.height;h.data=e;h.xPosition=0;h.yPosition=0;c._ae.render()(h);d.find(".ui-legend-item-badge").removeClass("ui-legend-item-badge").addClass(this.a._i);d.find(".ui-legend-item-text").removeClass("ui-legend-item-text").addClass(this.a._l)}}return d},_f:null,m:function(a,b){var c=this.i(a,this._j);c.mouseup(this.a.t.runOn(this.a));c.mousedown(this.a.q.runOn(this.a));c.mouseleave(this.a.r.runOn(this.a));c.mousemove(this.a.s.runOn(this.a));this._f.add(a,c);if(this._j.children().length==0||b>=this._j.children().length){this._j.append(c)}else{var d=this._j.children().eq(b);d.before(c)}},p:function(a){},q:function(a){var $self=this;var b;if(function(){var c=$self._f.tryGetValue(a,b);b=c.p1;return c.ret}()){b.remove();this._f.remove(a)}},l:function(visual_){var a=this._f.getEnumerator();while(a.moveNext()){var pair_=a.current();if(pair_.value()[0]===visual_[0]){return pair_.key()}}return null},e:function(a){var c=this._f.keys().getEnumerator();while(c.moveNext()){var b=c.current();var d=$b($$a.$f.$type,b);if(d!=null&&d.content()!=null){var e=$b($.ig.ILegendContext.prototype.$type,d.content());if(e!=null&&e.itemLabel()==a.itemLabel()&&e.series()==a.series()&&e.itemBrush()==a.itemBrush()){return true}}}return false},_k:null,_c:null,b:function(a){var b=this._h.width();var c=this._h.height();var d=$('<div style="position : relative;" />');this._k=$('<canvas style="position : absolute; top : 0; left : 0" />');this._h.append(d);d.append(this._k);this._c=new $.ig.RenderingContext(new $.ig.CanvasViewRenderer,this._k[0].getContext("2d"));this._k.attr("width",b.toString());this._k.attr("height",c.toString());return this._c},s:function(){return new $$a.ab(1,this._h.width(),Math.max(10,this._h.height()-15))},r:function(a,b,c,d){var e=a.g();e.beginPath();e.moveTo(b._ag.__inner[0].__x,b._ag.__inner[0].__y);for(var f=1;f<b._ag.count();f++){e.lineTo(b._ag.__inner[f].__x,b._ag.__inner[f].__y)}e.lineTo(b._ag.__inner[0].__x,b._ag.__inner[0].__y);var g=e.createLinearGradient(d.left(),d.top(),d.left(),d.top()+d.height());var i=c._a.getEnumerator();while(i.moveNext()){var h=i.current();g.addColorStop(h._a,h._b.__fill)}e.fillStyle=g;e.fill()},$type:new $.ig.Type("LegendBaseViewManager",$.ig.$ot)},true);$c("LegendMouseEventArgs:b","EventArgs",{init:function(a,b,c,d,e){$$0.$w.init.call(this);this.chart(a);this.series(b);this.item(c);this.originalEvent(d);this.legendItem(e)},toString:function(){return this.chart().name()+", "+this.series().name()+", "+(this.item()!=null?this.item().toString():"")+", "+this.getPosition(null).toString()},_originalEvent:null,originalEvent:function(a){if(arguments.length===1){this._originalEvent=a;return a}else{return this._originalEvent}},getPosition:function(a){return this.originalEvent().getPosition(a)},originalSource:function(){return this.originalEvent().originalSource()},_item:null,item:function(a){if(arguments.length===1){this._item=a;return a}else{return this._item}},_series:null,series:function(a){if(arguments.length===1){this._series=a;return a}else{return this._series}},_chart:null,chart:function(a){if(arguments.length===1){this._chart=a;return a}else{return this._chart}},_legendItem:null,legendItem:function(a){if(arguments.length===1){this._legendItem=a;return a}else{return this._legendItem}},$type:new $.ig.Type("LegendMouseEventArgs",$$0.$w.$type)},true);$c("LegendMouseButtonEventArgs:d","EventArgs",{init:function(a,b,c,d,e){$$0.$w.init.call(this);this.chart(a);this.series(b);this.item(c);this.originalEvent(d);this.legendItem(e)},toString:function(){return this.chart().name()+", "+this.series().name()+", "+(this.item()!=null?this.item().toString():"")+", "+this.getPosition(null).toString()},_originalEvent:null,originalEvent:function(a){if(arguments.length===1){this._originalEvent=a;return a}else{return this._originalEvent}},handled:function(a){if(arguments.length===1){this.originalEvent().handled(a);return a}else{return this.originalEvent().handled()}},getPosition:function(a){return this.originalEvent().getPosition(a)},originalSource:function(){return this.originalEvent().originalSource()},_item:null,item:function(a){if(arguments.length===1){this._item=a;return a}else{return this._item}},_series:null,series:function(a){if(arguments.length===1){this._series=a;return a}else{return this._series}},_chart:null,chart:function(a){if(arguments.length===1){this._chart=a;return a}else{return this._chart}},_legendItem:null,legendItem:function(a){if(arguments.length===1){this._legendItem=a;return a}else{return this._legendItem}},$type:new $.ig.Type("LegendMouseButtonEventArgs",$$0.$w.$type)},true);$c("LegendBase:j","ContentControl",{ag:function(){return new $$t.m(this)},a2:function(a){this._ah=a},_ah:null,init:function(){$$a.$f.init.call(this);var a=this.ag();this.a2(a);a.v();this.children(new $$4.d($$a.$b.$type,0))},addChildInOrder:function(a,b){},aw:function(a,b){},_children:null,children:function(a){if(arguments.length===1){this._children=a;return a}else{return this._children}},_seriesOwner:null,seriesOwner:function(a){if(arguments.length===1){this._seriesOwner=a;return a}else{return this._seriesOwner}},_chartOwner:null,chartOwner:function(a){if(arguments.length===1){this._chartOwner=a;return a}else{return this._chartOwner}},isItemwise:function(){return false},isScale:function(){return false},clearLegendItemsForSeries:function(a){if(a==null||this.children()==null||this.children().count()==0){return}var b=new $$4.d($$a.$b.$type,0);var d=this.children().getEnumerator();while(d.moveNext()){var c=d.current();var e=$b($$a.$f.$type,c);if(e!=null&&e.content()!=null){var f=$b($.ig.ILegendContext.prototype.$type,e.content());if(f!=null&&f.series()==a){b.add(c)}}}var h=b.getEnumerator();while(h.moveNext()){var g=h.current();this.children().remove(g)}},containsChild:function(a){return this.children().contains(a)},removeChild:function(a){this.children().remove(a)},af:function(){if(this.seriesOwner()!=null){return this.seriesOwner()}else{return this.chartOwner()}},propertyChanged:null,propertyUpdated:null,a4:function(a,b,c){if(this.propertyChanged!=null){this.propertyChanged(this,new $$0.b8(a))}if(this.propertyUpdated!=null){this.propertyUpdated(this,new $.ig.PropertyUpdatedEventArgs(a,b,c))}},legendItemMouseLeftButtonDown:null,az:function(a){if(this.legendItemMouseLeftButtonDown!=null){this.legendItemMouseLeftButtonDown(this,a)}},legendItemMouseLeftButtonUp:null,a0:function(a){if(this.legendItemMouseLeftButtonUp!=null){this.legendItemMouseLeftButtonUp(this,a)}},legendItemMouseEnter:null,ax:function(a){if(this.legendItemMouseEnter!=null){this.legendItemMouseEnter(this,a)}},legendItemMouseLeave:null,ay:function(a){if(this.legendItemMouseLeave!=null){this.legendItemMouseLeave(this,a)}},legendItemMouseMove:null,a1:function(a){if(this.legendItemMouseMove!=null){this.legendItemMouseMove(this,a)}},provideContainer:function(a){this._ah.u(a)},legendItemsListStyle:function(a){if(arguments.length===1){this._ah._j=a;return a}else{return this._ah._j}},legendItemStyle:function(a){if(arguments.length===1){this._ah._k=a;return a}else{return this._ah._k}},legendItemBadgeStyle:function(a){if(arguments.length===1){this._ah._i=a;return a}else{return this._ah._i}},legendItemTextStyle:function(a){if(arguments.length===1){this._ah._l=a;return a}else{return this._ah._l}},exportVisualData:function(){var a=new $$t.t;var c=this.children().getEnumerator();while(c.moveNext()){var b=c.current();var d=$b($$a.$f.$type,b);var e=new $$t.s;var f=$b($.ig.ILegendContext.prototype.$type,d.content());if(f!=null){if(f.legendLabel()!=null){e.label(f.legendLabel().toString())}if(f.itemLabel()!=null){e.label(f.itemLabel().toString())}if(f.actualItemBrush()!=null){e.appearance().fill($.ig.AppearanceHelper.prototype.b(f.actualItemBrush()))}else{e.appearance().fill($.ig.AppearanceHelper.prototype.b(f.itemBrush()))}}a.items().add(e)}return a},$type:new $.ig.Type("LegendBase",$$a.$f.$type,[$$0.$b7.$type,$.ig.IChartLegend.prototype.$type])},true);$c("ItemLegend:f","LegendBase",{ag:function(){return new $$t.l(this)},a2:function(a){$$t.$j.a2.call(this,a);this._a6=a},_a6:null,init:function(){var $self=this;$$t.$j.init.call(this);this._y=$$t.$f.$type;var a=this.children();a.collectionChanged=$.ig.Delegate.prototype.combine(a.collectionChanged,function(a,b){if(b.oldItems()!=null){var d=b.oldItems().getEnumerator();while(d.moveNext()){var c=d.current();$self._a6.y(c)}}if(b.newItems()!=null){var f=b.newItems().getEnumerator();while(f.moveNext()){var e=f.current();$self._a6.m(e)}}})},addChildInOrder:function(a,b){if(!this._ah.g()){return}this.bb(b)},isItemwise:function(){return true},createItemwiseLegendItems:function(a,b){this.aw(a,b)},aw:function(a,b){this.clearLegendItemsForSeries(b);if(b==null||a==null||a.count()==0){return}var d=a.getEnumerator();while(d.moveNext()){var c=d.current();var e=$b($$a.$f.$type,c);if(e!=null&&e.content()!=null){var f=$b($.ig.ILegendContext.prototype.$type,e.content());if(f!=null&&!this.a8(f)){this.children().add(c);var g=new $$t.i;g._b=f;g._c=c;g._a=b;if(f.legendLabel()!=null){g._d=f.legendLabel()}else{g._d=f.itemLabel()}}}}},createLegendItemsInsert:function(a,b){this.ba(a,b)},ba:function(a,b){var c=this.a9(b);if(b==null||a==null||a.count()==0){return}var e=a.getEnumerator();while(e.moveNext()){var d=e.current();var f=$b($$a.$f.$type,d);if(f!=null&&f.content()!=null){var g=$b($.ig.ILegendContext.prototype.$type,f.content());if(g!=null&&!this.a8(g)){this.children().insert(c,d);c++;var h=new $$t.i;h._b=g;h._c=d;h._a=b;h._d=g.itemLabel()}}}},renderItemwiseContent:function(a){this.bb(a)},bb:function(a){var $self=this;this.clearLegendItemsForSeries(a);if(a.hasSubItems()){a.forSubItems(function(b){var c=$b($$a.$f.$type,b);if(c!=null&&c.content()!=null){var d=$b($.ig.ILegendContext.prototype.$type,c.content());if(d!=null&&!$self.a8(d)){$self.children().add(b);var e=new $$t.i;e._b=d;e._c=b;e._a=a;e._d=d.itemLabel()}}})}},a9:function(a){if(a==null||this.children()==null||this.children().count()==0){return 0}var b=new $$4.d($$a.$b.$type,0);var c=-1;var d=0;var f=this.children().getEnumerator();while(f.moveNext()){var e=f.current();var g=$b($$a.$f.$type,e);if(g!=null&&g.content()!=null){var h=$b($.ig.ILegendContext.prototype.$type,g.content());if(h!=null&&h.series()==a){if(c==-1){c=d}b.add(e)}}d++}var j=b.getEnumerator();while(j.moveNext()){var i=j.current();this.children().remove(i)}if(c==-1){return this.children().count()}return c},a8:function(a){return this._a6.aa(a)},_a7:null,$type:new $.ig.Type("ItemLegend",$$t.$j.$type,[$.ig.IChartItemLegend.prototype.$type])},true);$c("Legend:g","LegendBase",{ag:function(){return new $$t.n(this)},a2:function(a){$$t.$j.a2.call(this,a);this._a6=a},_a6:null,init:function(){var $self=this;$$t.$j.init.call(this);this._y=$$t.$g.$type;var a=this.children();a.collectionChanged=$.ig.Delegate.prototype.combine(a.collectionChanged,function(a,b){if(b.oldItems()!=null){var d=b.oldItems().getEnumerator();while(d.moveNext()){var c=d.current();$self._a6.y(c)}}if(b.newItems()!=null){var f=b.newItems().getEnumerator();while(f.moveNext()){var e=f.current();$self._a6.m(e)}}})},a7:function(a){return a.resolveLegendIndex()},a9:function(a){return this.a8(a)},addChildInOrder:function(a,b){if(b.isStacked()){return}if(!b.isUsableInLegend()){return}var c=0;var e=this.children().getEnumerator();while(e.moveNext()){var d=e.current();var f;var g;var h;var i=this._ah.p(d,f,g,h);f=i.p1;g=i.p2;h=i.p3;if(b.container()!=null&&f!=null&&(this.a9(b.container())<this.a9(f)||this.a9(b.container())==-1&&this.a9(f)==-1&&b.container().getHashCode()<f.getHashCode())){break}if(b.container()!=null&&f!=null&&b.container()==f&&g!=null){var j=this.a7(b);var k=this.a7(g);var l=this.a9(b);var m=this.a9(g);if(g.isVertical()&&!g.isStacked()){if(m==-1&&l==-1){c=0;break}if(l<m||m==-1){break}}if(j<=k){break}}c++}this.children().insert(c,a);var n=new $$t.i;n._c=a;n._a=b;var o=$b($$a.$f.$type,a);if(o!=null&&o.content()!=null){var p=$b($.ig.ILegendContext.prototype.$type,o.content());if(p!=null){n._b=p;n._d=p.itemLabel()}}},a8:function(a){return-1},$type:new $.ig.Type("Legend",$$t.$j.$type)},true);$c("IInternalLegendOwner:h","Object",{$type:new $.ig.Type("IInternalLegendOwner",null)},true);$c("LegendItemInfo:i","Object",{init:function(){$.ig.$op.init.call(this)},_d:null,_c:null,_a:null,_b:null,$type:new $.ig.Type("LegendItemInfo",$.ig.$ot)},true);$c("ScaleLegend:k","LegendBase",{ag:function(){return new $$t.o(this)},a2:function(a){$$t.$j.a2.call(this,a);this._a8=a},_a8:null,legendScaleElement:function(){return this._a8._av},minText:function(){return this._a8._ar},maxText:function(){return this._a8._aq},init:function(){$$t.$j.init.call(this);this._y=$$t.$k.$type},_ba:0,_a9:0,a6:null,a7:function(a){if(arguments.length===1){this.a6=a;return a}else{return this.a6}},bd:function(){this._a8.an()},restoreOriginalState:function(){this.bd()},bg:function(a){if(a==null){return this._a8.au()}return $.ig.ColorUtil.prototype.l(a)},bb:function(a){this.a7(a);this.bc()},initializeLegend:function(a){this.bb(a)},isScale:function(){return true},bc:function(){var $self=this;if(this.legendScaleElement()==null||this.a7()==null||!this.a7().legendReady()){return}if(this.a7()==null||!this.a7().isAttachedTo(this)){return}var a=false;var b=$b($$a.$br.$type,this.legendScaleElement());if(b!=null){var c=this._a8.ah();if(!this.a7().forScaleColors(function(d,e){$self._a8.aj(c,$self.bg(d),e)})){a=true}this._a8.ao(b,a,c)}if(this.minText()!=null){this.minText().ah(this.a7().minScaleText())}if(this.maxText()!=null){this.maxText().ah(this.a7().maxScaleText())}},$type:new $.ig.Type("ScaleLegend",$$t.$j.$type,[$.ig.IChartScaleLegend.prototype.$type])},true);$c("LegendBaseView:m","Object",{init:function(a){this.f=false;$.ig.$op.init.call(this);this._a=a;this._b=new $$t.a(this)},_b:null,_a:null,v:function(){},e:function(){return false},c:function(a){var b;var c;var d;var e=this.p(a,b,c,d);b=e.p1;c=e.p2;d=e.p3;var f=new $$a.ao;var g=new $$t.d(b,c,d,f,a);return g},d:function(a){var b;var c;var d;var e=this.p(a,b,c,d);b=e.p1;c=e.p2;d=e.p3;var f=new $$a.an;var g=new $$t.b(b,c,d,f,a);return g},p:function(a,b,c,d){b=this._a.af();c=null;d=null;if(a!=null){var e=$b($$a.$f.$type,a);if(e!=null&&e.content()!=null&&$b($.ig.ILegendContext.prototype.$type,e.content())!==null){var f=$b($.ig.ILegendContext.prototype.$type,e.content());c=$b($.ig.ILegendSeries.prototype.$type,f.series());if(c!=null){b=c.container()}d=f.item()}}return{p1:b,p2:c,p3:d}},o:function(){},g:function(){return true},n:function(a){},x:function(a){},u:function(a){this._b.o(a)},y:function(a){this._b.q(a)},m:function(a){var b=this._a.children().indexOf(a);this._b.m(a,b)},_j:null,_k:null,_i:null,_l:null,f:false,w:function(){},h:function(e_){var a=$(e_.currentTarget);return this._b.l(a)},s:function(a){if(!this.f){this._a.ax(this.d(this.h(a)))}this.f=true},r:function(a){if(this.f){this._a.ay(this.d(this.h(a)))}this.f=false},q:function(a){this._a.az(this.c(this.h(a)))},t:function(a){this._a.a0(this.c(this.h(a)))},$type:new $.ig.Type("LegendBaseView",$.ig.$ot)},true);$c("ItemLegendView:l","LegendBaseView",{init:function(a){$$t.$m.init.call(this,a);this._z=a},_z:null,v:function(){$$t.$m.v.call(this)},e:function(){return true},aa:function(a){return this._b.e(a)},$type:new $.ig.Type("ItemLegendView",$$t.$m.$type)},true);$c("LegendView:n","LegendBaseView",{init:function(a){$$t.$m.init.call(this,a);this._z=a},_z:null,v:function(){$$t.$m.v.call(this)},$type:new $.ig.Type("LegendView",$$t.$m.$type)},true);$c("ScaleLegendView:o","LegendBaseView",{init:function(a){this._aw=new $$a.ab;this.ac=false;$$t.$m.init.call(this,a);this._aa=a;this._ar=new $$a.aj;this._aq=new $$a.aj;this._av=new $$a.bo},_aa:null,_av:null,_ar:null,_aq:null,an:function(){},o:function(){},au:function(){return $$a.$as.u(0,0,0,0)},ah:function(){return new $$t.p},aj:function(a,b,c){var d=a;d._a.add(function(){var $ret=new $$t.q;$ret._b=function(){var $ret=new $$a.ap;$ret.color(b);return $ret}();$ret._a=c;return $ret}())},ao:function(a,b,c){if(b){this._as=this._aa.a7().actualMarkerBrush();this._z=null}else{this._as=null;this._z=c}this.ak()},_z:null,_ab:null,_aw:null,u:function(a){$$t.$m.u.call(this,a);this._ab=this._b.b(a);this._aw=this._b.s();this.ak()},ac:false,ak:function(){if(!this.ac){this.ac=true;window.setTimeout(this.ap.runOn(this),0)}},ap:function(){if(this.ac){this.ac=false;this.am()}},am:function(){if(this._ab==null){return}this.al()},af:function(a){var b=$b($$a.$aj.$type,a);if(b!=null&&b.ah()!=null){return this._ab.e(b)+0}return 0},ae:function(a){return this._ad+0},_ad:0,_at:null,al:function(){if(this._aa.a7()==null||this._aa.a7().container()==null||this._z==null&&this._as==null){return}if(this._ab.d()){var a=$b($$t.$h.$type,this._aa.a7().container());this._ab.ac(a.getFontInfo());this._ad=a.getFontHeight();this._at=a.getFontBrush();var b=this.af(this._ar);var c=this.af(this._aq);var d=Math.max(b,c)+4;if(d>=this._aw.k()){d=0}var e=this._aw.k()-d;var f=2;var g=2;e=e-4;var h=this._aw.j()-4;var i=f+e+4;var j=g;var k=h;var l={__x:f+3/5*e,__y:g,$type:$.ig.Point.prototype.$type,getType:$.ig.Object.prototype.getType,getGetHashCode:$.ig.Object.prototype.getGetHashCode,typeName:$.ig.Object.prototype.typeName};var m={__x:f+5/5*e,__y:g,$type:$.ig.Point.prototype.$type,getType:$.ig.Object.prototype.getType,getGetHashCode:$.ig.Object.prototype.getGetHashCode,typeName:$.ig.Object.prototype.typeName};var n={__x:f+5/5*e,__y:h,$type:$.ig.Point.prototype.$type,getType:$.ig.Object.prototype.getType,getGetHashCode:$.ig.Object.prototype.getGetHashCode,typeName:$.ig.Object.prototype.typeName};var o={__x:f,__y:h,$type:$.ig.Point.prototype.$type,getType:$.ig.Object.prototype.getType,getGetHashCode:$.ig.Object.prototype.getGetHashCode,typeName:$.ig.Object.prototype.typeName};var p=this._av;p._ag.clear();p._ag.add(l);p._ag.add(m);p._ag.add(n);p._ag.add(o);this._ar._l=i;this._ar._m=j;this._ar._aj=this._at;this._aq._l=i;this._aq._m=j+k-this.ae(this._ar);this._aq._aj=this._at;this._ab.k(0,0,this._aw.k(),this._aw.j());if(this._z==null&&this._as!=null){p.__fill=this._as;this._ab.t(p)}else{this._b.r(this._ab,p,this._z,new $$a.aa(0,g,f,e,h))}if(d>0){this._ab.w(this._ar);this._ab.w(this._aq)}}},_as:null,w:function(){$$t.$m.w.call(this)},$type:new $.ig.Type("ScaleLegendView",$$t.$m.$type)},true);$c("GradientData:p","Object",{init:function(){$.ig.$op.init.call(this);this._a=new $$4.v($$t.$q.$type,0)},_a:null,$type:new $.ig.Type("GradientData",$.ig.$ot)},true);$c("GradientStopData:q","Object",{init:function(){$.ig.$op.init.call(this)},_a:0,_b:null,$type:new $.ig.Type("GradientStopData",$.ig.$ot)},true);$c("LegendItemVisualData:s","Object",{init:function(){$.ig.$op.init.call(this);this.labelBounds($.ig.RectData.prototype.empty());this.appearance(new $.ig.PrimitiveAppearanceData)},_label:null,label:function(a){if(arguments.length===1){this._label=a;return a}else{return this._label}},_labelBounds:null,labelBounds:function(a){if(arguments.length===1){this._labelBounds=a;return a}else{return this._labelBounds}},_appearance:null,appearance:function(a){if(arguments.length===1){this._appearance=a;return a}else{return this._appearance}},_labelAppearance:null,labelAppearance:function(a){if(arguments.length===1){this._labelAppearance=a;return a}else{return this._labelAppearance}},serialize:function(){var a=new $$6.ag(0);a.u("{");if(this.label()!=null){a.u('label: "'+this.label()+'", ')}if(this.appearance()!=null){a.u("appearance: "+this.appearance().serialize()+", ")}if(this.labelAppearance()!=null){a.u("labelAppearance: "+this.labelAppearance().serialize()+", ")}a.u("labelBounds: { left: "+this.labelBounds().left()+", top: "+this.labelBounds().top()+", width: "+this.labelBounds().width()+", height: "+this.labelBounds().height()+"}");a.u("}");return a.toString()},$type:new $.ig.Type("LegendItemVisualData",$.ig.$ot)},true);$c("LegendVisualDataList:r","List$1",{init:function(){$$4.$v.init.call(this,$$t.$s.$type,0)},$type:new $.ig.Type("LegendVisualDataList",$$4.$v.$type.specialize($$t.$s.$type))},true);$c("LegendVisualData:t","Object",{init:function(){$.ig.$op.init.call(this);this.items(new $$t.r)},_items:null,items:function(a){if(arguments.length===1){this._items=a;return a}else{return this._items}},_viewport:null,viewport:function(a){if(arguments.length===1){this._viewport=a;return a}else{return this._viewport}},_width:0,width:function(a){if(arguments.length===1){this._width=a;return a}else{return this._width}},_height:0,height:function(a){if(arguments.length===1){this._height=a;return a}else{return this._height}},serialize:function(){var a=new $$6.ag(0);a.u("{");a.u("width: "+this.width()+",");a.u("height: "+this.height()+",");a.u("items: [");for(var b=0;b<this.items().count();b++){if(b!=0){a.l(", ")}a.l(this.items().__inner[b].serialize())}a.u("],");a.u("}");return a.toString()},$type:new $.ig.Type("LegendVisualData",$.ig.$ot)},true);$$t.$g.ba="Orientation";$$t.$o.ai="LegendScale";$$t.$o.ag=0});(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})})(jQuery);