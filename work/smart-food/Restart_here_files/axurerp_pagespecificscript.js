for(var i = 0; i < 0; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetGlobalVariableValue('ActionBarState', 'default');

SetGlobalVariableValue('JumpToPage', '');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Desktop_view.html');

}

});
