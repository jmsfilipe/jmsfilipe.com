for(var i = 0; i < 11; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('ActionBarTitle', 'Item 1');

SetGlobalVariableValue('ActionBarState', 'top');

}

});
gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u5'] = 'top';u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

SetGlobalVariableValue('JumpToPage', 'page1.1');

}
});
gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u10'] = 'center';document.getElementById('u0_img').tabIndex = 0;

u0.style.cursor = 'pointer';
$axure.eventManager.click('u0', function(e) {

if (true) {

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';