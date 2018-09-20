for(var i = 0; i < 37; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('ActionBarTitle', 'Item 2');

SetGlobalVariableValue('ActionBarState', 'top');

}

});
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u8'] = 'center';
$axure.eventManager.focus('u30', function(e) {

if (true) {

SetWidgetFormText('u31', 'plate name...');

}
});
gv_vAlignTable['u6'] = 'center';
$axure.eventManager.focus('u35', function(e) {

if (true) {

SetWidgetFormText('u36', '');

}
});
gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u4'] = 'center';HookClick('u1', false);

$axure.eventManager.focus('u26', function(e) {

if (true) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

	var obj1 = document.getElementById("u25");
    obj1.focus();

}
});
gv_vAlignTable['u12'] = 'center';
$axure.eventManager.focus('u23', function(e) {

if (true) {

	SetPanelState('u21', 'pd1u21','none','',500,'none','',500);

	var obj1 = document.getElementById("u22");
    obj1.focus();

}
});

$axure.eventManager.focus('u25', function(e) {

if (true) {

SetWidgetFormText('u26', '');

}
});
gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u20'] = 'center';
$axure.eventManager.focus('u36', function(e) {

if (true) {

	SetPanelState('u34', 'pd1u34','none','',500,'none','',500);

	var obj1 = document.getElementById("u35");
    obj1.focus();

}
});

$axure.eventManager.focus('u22', function(e) {

if (true) {

SetWidgetFormText('u23', 'tags...');

}
});
gv_vAlignTable['u33'] = 'center';
$axure.eventManager.focus('u31', function(e) {

if (true) {

	SetPanelState('u29', 'pd1u29','none','',500,'none','',500);

	var obj1 = document.getElementById("u30");
    obj1.focus();

}
});
