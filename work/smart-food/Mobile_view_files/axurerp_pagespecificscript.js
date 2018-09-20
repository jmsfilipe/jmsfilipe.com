for(var i = 0; i < 654; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	MoveWidgetTo('u599', GetNum('-320'), GetNum('44'),'none',500);

SetWidgetSelected('u608');
SetGlobalVariableValue('CurrentPage', 'home');

SetGlobalVariableValue('MainSearchOn', 'yes');

	SetPanelVisibility('u640','hidden','none',500);

	SetPanelVisibility('u595','hidden','none',500);

	SetPanelVisibility('u383','hidden','none',500);

SetGlobalVariableValue('ActionBarTitle', 'SmartFood');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

	SetPanelVisibility('u254','hidden','none',500);

	SetPanelVisibility('u84','hidden','none',500);

	SetPanelVisibility('u125','hidden','none',500);

	SetPanelVisibility('u138','hidden','none',500);

	SetPanelVisibility('u125','hidden','none',500);

}

});

if (bIE) document.getElementById('u1').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u1'); });
else {
    document.getElementById('u1').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u1'); }, true);
    document.getElementById('u1').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u1'); }, true);
}

widgetIdToSwipeLeftFunction['u1'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetTo('u1', GetNum('0'), GetNum('0'),'easeInCubic',200);

SetGlobalVariableValue('OffCanvasHide', 'yes');

}

}

widgetIdToSwipeRightFunction['u1'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetTo('u1', GetNum('248'), GetNum('0'),'easeInCubic',200);

SetGlobalVariableValue('OffCanvasHide', 'no');

}

}
gv_vAlignTable['u646'] = 'center';gv_vAlignTable['u167'] = 'top';HookClick('u202', false);
HookClick('u438', false);
gv_vAlignTable['u613'] = 'top';gv_vAlignTable['u216'] = 'center';gv_vAlignTable['u194'] = 'top';u514.tabIndex = 0;

u514.style.cursor = 'pointer';
$axure.eventManager.click('u514', function(e) {

if (true) {

	SetPanelState('u1', 'pd3u1','none','',500,'none','',500);

SetGlobalVariableValue('ActionBarTitle', 'Place view');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

}
});
HookClick('u152', false);
gv_vAlignTable['u347'] = 'center';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u166'] = 'center';gv_vAlignTable['u298'] = 'top';gv_vAlignTable['u464'] = 'center';gv_vAlignTable['u586'] = 'center';gv_vAlignTable['u193'] = 'center';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u332'] = 'center';gv_vAlignTable['u568'] = 'center';gv_vAlignTable['u131'] = 'top';gv_vAlignTable['u151'] = 'center';HookClick('u72', false);
gv_vAlignTable['u644'] = 'center';HookClick('u463', false);
gv_vAlignTable['u100'] = 'top';u653.tabIndex = 0;

u653.style.cursor = 'pointer';
$axure.eventManager.click('u653', function(e) {

if (true) {

	SetPanelState('u1', 'pd16u1','none','',500,'none','',500);

SetGlobalVariableValue('ActionBarTitle', 'Help');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

	SetPanelVisibility('u640','hidden','none',500);

}
});
gv_vAlignTable['u214'] = 'center';gv_vAlignTable['u275'] = 'center';gv_vAlignTable['u412'] = 'top';gv_vAlignTable['u390'] = 'top';HookClick('u150', false);
gv_vAlignTable['u287'] = 'top';gv_vAlignTable['u426'] = 'center';gv_vAlignTable['u345'] = 'top';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u318'] = 'center';gv_vAlignTable['u588'] = 'center';gv_vAlignTable['u462'] = 'center';gv_vAlignTable['u90'] = 'center';HookClick('u268', false);
gv_vAlignTable['u603'] = 'center';gv_vAlignTable['u66'] = 'top';$('#u596').attr('axSubmit', 'u597');
gv_vAlignTable['u129'] = 'center';u449.tabIndex = 0;

u449.style.cursor = 'pointer';
$axure.eventManager.click('u449', function(e) {

if (true) {

	SetPanelState('u1', 'pd13u1','none','',500,'none','',500);

SetGlobalVariableValue('ActionBarTitle', 'Reviews \'O Fumeiro\'');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

}
});
gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u411'] = 'top';gv_vAlignTable['u330'] = 'center';gv_vAlignTable['u286'] = 'top';u584.tabIndex = 0;

u584.style.cursor = 'pointer';
$axure.eventManager.click('u584', function(e) {

if ((GetWidgetVisibility('u640')) == (false)) {

	SetPanelVisibility('u640','','none',500);

	MoveWidgetTo('u599', GetNum('-320'), GetNum('44'),'easeInCubic',200);

SetGlobalVariableValue('OffCanvasHide', 'yes');

	SetPanelVisibility('u595','hidden','none',500);

}
else
if (true) {

	SetPanelVisibility('u640','hidden','none',500);

}
});
HookClick('u425', false);
gv_vAlignTable['u344'] = 'top';gv_vAlignTable['u642'] = 'center';gv_vAlignTable['u163'] = 'top';HookClick('u461', false);
gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u177'] = 'center';gv_vAlignTable['u132'] = 'top';gv_vAlignTable['u448'] = 'center';gv_vAlignTable['u410'] = 'center';gv_vAlignTable['u307'] = 'top';gv_vAlignTable['u285'] = 'top';gv_vAlignTable['u605'] = 'center';gv_vAlignTable['u424'] = 'center';gv_vAlignTable['u343'] = 'top';gv_vAlignTable['u579'] = 'center';gv_vAlignTable['u162'] = 'center';gv_vAlignTable['u491'] = 'top';document.getElementById('u597_img').tabIndex = 0;

u597.style.cursor = 'pointer';
$axure.eventManager.click('u597', function(e) {

if ((GetGlobalVariableValue('MainSearchOn')) == ('yes')) {

	SetPanelState('u1', 'pd1u1','none','',500,'none','',500);

SetGlobalVariableValue('MainSearchOn', 'no');

	SetPanelVisibility('u595','hidden','none',500);

SetGlobalVariableValue('ActionBarTitle', 'Results');

SetGlobalVariableValue('ActionBarTitle', ' Search results');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

}
});
gv_vAlignTable['u389'] = 'top';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u474'] = 'center';gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u528'] = 'center';gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u575'] = 'center';gv_vAlignTable['u306'] = 'center';HookClick('u423', false);
gv_vAlignTable['u342'] = 'top';gv_vAlignTable['u540'] = 'top';gv_vAlignTable['u437'] = 'center';gv_vAlignTable['u356'] = 'top';HookClick('u229', false);
HookClick('u148', false);
gv_vAlignTable['u13'] = 'center';HookClick('u110', false);
gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u20'] = 'center';u124.tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

	SetPanelState('u125', 'pd0u125','none','',500,'none','',500);

SetGlobalVariableValue('ActionBarTitle', 'Edit plate');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

}
});
gv_vAlignTable['u86'] = 'center';gv_vAlignTable['u279'] = 'center';gv_vAlignTable['u583'] = 'center';gv_vAlignTable['u609'] = 'center';HookClick('u241', false);
u160.tabIndex = 0;

u160.style.cursor = 'pointer';
$axure.eventManager.click('u160', function(e) {

if (true) {

	SetPanelState('u1', 'pd12u1','none','',500,'none','',500);

SetGlobalVariableValue('ActionBarTitle', 'Edit plate');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

}
});
gv_vAlignTable['u297'] = 'top';HookClick('u436', false);
gv_vAlignTable['u355'] = 'center';gv_vAlignTable['u174'] = 'center';gv_vAlignTable['u553'] = 'top';gv_vAlignTable['u472'] = 'center';gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u635'] = 'center';gv_vAlignTable['u304'] = 'top';HookClick('u459', false);
gv_vAlignTable['u123'] = 'center';u240.tabIndex = 0;

u240.style.cursor = 'pointer';
$axure.eventManager.click('u240', function(e) {

if (true) {

	SetPanelState('u1', 'pd2u1','none','',500,'none','',500);

}
});
gv_vAlignTable['u296'] = 'center';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u435'] = 'top';gv_vAlignTable['u33'] = 'center';u408.tabIndex = 0;

u408.style.cursor = 'pointer';
$axure.eventManager.click('u408', function(e) {

if (true) {

	SetPanelVisibility('u383','','none',500);

}
});
gv_vAlignTable['u552'] = 'center';gv_vAlignTable['u181'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u227'] = 'center';gv_vAlignTable['u566'] = 'center';gv_vAlignTable['u303'] = 'center';gv_vAlignTable['u539'] = 'top';gv_vAlignTable['u94'] = 'center';HookClick('u122', false);
gv_vAlignTable['u358'] = 'center';HookClick('u420', false);
gv_vAlignTable['u5'] = 'center';u391.tabIndex = 0;

u391.style.cursor = 'pointer';
$axure.eventManager.click('u391', function(e) {

if (true) {

	SetPanelState('u1', 'pd6u1','none','',500,'none','',500);

	SetPanelVisibility('u383','hidden','none',500);

}
});
gv_vAlignTable['u615'] = 'top';gv_vAlignTable['u87'] = 'top';gv_vAlignTable['u434'] = 'center';u253.tabIndex = 0;

u253.style.cursor = 'pointer';
$axure.eventManager.click('u253', function(e) {

if (true) {

	SetPanelState('u1', 'pd20u1','none','',500,'none','',500);

	SetPanelVisibility('u383','hidden','none',500);

	SetPanelVisibility('u244','hidden','none',500);

}
});
gv_vAlignTable['u522'] = 'center';gv_vAlignTable['u470'] = 'center';u627.tabIndex = 0;

u627.style.cursor = 'pointer';
$axure.eventManager.click('u627', function(e) {

if (true) {

SetGlobalVariableValue('JumpToPage', 'page1');

SetGlobalVariableValue('OffCanvasHide', 'yes');

SetWidgetSelected('u611');
	MoveWidgetTo('u599', GetNum('-320'), GetNum('44'),'easeInCubic',200);

	SetPanelState('u1', 'pd10u1','none','',500,'none','',500);

SetGlobalVariableValue('ActionBarTitle', 'My creations');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

	SetPanelVisibility('u595','hidden','none',500);

}
});
gv_vAlignTable['u267'] = 'center';gv_vAlignTable['u399'] = 'center';u121.tabIndex = 0;

u121.style.cursor = 'pointer';
$axure.eventManager.click('u121', function(e) {

if (true) {

	SetPanelState('u1', 'pd11u1','none','',500,'none','',500);

}
});
gv_vAlignTable['u500'] = 'top';u594.tabIndex = 0;

u594.style.cursor = 'pointer';
$axure.eventManager.click('u594', function(e) {

if (true) {

	SetPanelState('u1', 'pd8u1','none','',500,'none','',500);

SetGlobalVariableValue('ActionBarTitle', 'Add plate');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

	SetPanelVisibility('u595','hidden','none',500);

	MoveWidgetTo('u599', GetNum('-320'), GetNum('44'),'easeInCubic',200);

SetGlobalVariableValue('OffCanvasHide', 'yes');

	SetPanelVisibility('u640','hidden','none',500);

	SetPanelVisibility('u244','hidden','none',500);

}
});
gv_vAlignTable['u316'] = 'center';gv_vAlignTable['u294'] = 'top';gv_vAlignTable['u614'] = 'top';u108.tabIndex = 0;

u108.style.cursor = 'pointer';
$axure.eventManager.click('u108', function(e) {

if (true) {

	SetPanelState('u1', 'pd14u1','none','',500,'none','',500);

}
});
gv_vAlignTable['u573'] = 'top';u252.tabIndex = 0;

u252.style.cursor = 'pointer';
$axure.eventManager.click('u252', function(e) {

if (true) {

	SetPanelState('u1', 'pd18u1','none','',500,'none','',500);

	SetPanelVisibility('u383','hidden','none',500);

	SetPanelVisibility('u244','hidden','none',500);

}
});
HookClick('u171', false);
gv_vAlignTable['u550'] = 'top';HookClick('u447', false);
HookClick('u266', false);
gv_vAlignTable['u564'] = 'top';u239.tabIndex = 0;

u239.style.cursor = 'pointer';
$axure.eventManager.click('u239', function(e) {

if (true) {

	SetPanelState('u1', 'pd2u1','none','',500,'none','',500);

}
});
gv_vAlignTable['u301'] = 'top';gv_vAlignTable['u618'] = 'top';u120.tabIndex = 0;

u120.style.cursor = 'pointer';
$axure.eventManager.click('u120', function(e) {

if (true) {

	SetPanelState('u1', 'pd11u1','none','',500,'none','',500);

}
});
gv_vAlignTable['u293'] = 'top';u134.tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	SetPanelState('u1', 'pd19u1','none','',500,'none','',500);

	SetPanelVisibility('u383','hidden','none',500);

	SetPanelVisibility('u125','hidden','none',500);

}
});
gv_vAlignTable['u513'] = 'top';gv_vAlignTable['u432'] = 'top';gv_vAlignTable['u251'] = 'top';gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u164'] = 'top';gv_vAlignTable['u446'] = 'center';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u419'] = 'center';gv_vAlignTable['u82'] = 'top';gv_vAlignTable['u563'] = 'center';gv_vAlignTable['u238'] = 'center';u175.tabIndex = 0;

u175.style.cursor = 'pointer';
$axure.eventManager.click('u175', function(e) {

if (true) {

	SetPanelState('u1', 'pd11u1','none','',500,'none','',500);

SetGlobalVariableValue('ActionBarTitle', 'Plate view');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

}
});
gv_vAlignTable['u200'] = 'top';gv_vAlignTable['u208'] = 'top';gv_vAlignTable['u314'] = 'center';gv_vAlignTable['u292'] = 'center';HookClick('u77', false);
u133.tabIndex = 0;

u133.style.cursor = 'pointer';
$axure.eventManager.click('u133', function(e) {

if (true) {

	SetPanelState('u1', 'pd17u1','none','',500,'none','',500);

	SetPanelVisibility('u383','hidden','none',500);

	SetPanelVisibility('u125','hidden','none',500);

}
});
gv_vAlignTable['u512'] = 'center';gv_vAlignTable['u431'] = 'top';gv_vAlignTable['u250'] = 'top';gv_vAlignTable['u387'] = 'center';gv_vAlignTable['u147'] = 'top';gv_vAlignTable['u526'] = 'center';HookClick('u445', false);
HookClick('u116', false);
HookClick('u418', false);
gv_vAlignTable['u81'] = 'top';gv_vAlignTable['u576'] = 'top';gv_vAlignTable['u549'] = 'top';gv_vAlignTable['u430'] = 'center';gv_vAlignTable['u327'] = 'center';gv_vAlignTable['u490'] = 'center';gv_vAlignTable['u146'] = 'center';u444.tabIndex = 0;

u444.style.cursor = 'pointer';
$axure.eventManager.click('u444', function(e) {

if (true) {

	SetPanelState('u1', 'pd5u1','none','',500,'none','',500);

SetGlobalVariableValue('ActionBarTitle', 'Plates \' O Fumeiro\'');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

}
});
gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u263'] = 'top';gv_vAlignTable['u281'] = 'center';gv_vAlignTable['u561'] = 'top';gv_vAlignTable['u277'] = 'center';u14.tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

SetGlobalVariableValue('ActionBarTitle', 'Edit plate');

	SetPanelState('u1', 'pd12u1','none','',500,'none','',500);

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

	SetPanelVisibility('u254','','none',500);

}
});
u47.tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

SetGlobalVariableValue('ActionBarTitle', 'Edit plate');

	SetPanelState('u1', 'pd12u1','none','',500,'none','',500);

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

	SetPanelVisibility('u138','','none',500);

}
});
gv_vAlignTable['u548'] = 'center';u212.tabIndex = 0;

u212.style.cursor = 'pointer';
$axure.eventManager.click('u212', function(e) {

if (true) {

	SetPanelState('u1', 'pd3u1','none','',500,'none','',500);

SetGlobalVariableValue('ActionBarTitle', 'Place view');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

}
});
gv_vAlignTable['u190'] = 'top';gv_vAlignTable['u510'] = 'top';gv_vAlignTable['u581'] = 'center';u407.tabIndex = 0;

u407.style.cursor = 'pointer';
$axure.eventManager.click('u407', function(e) {

if (true) {

	SetPanelState('u383', 'pd1u383','none','',500,'none','',500);

}
});
gv_vAlignTable['u385'] = 'center';gv_vAlignTable['u524'] = 'center';gv_vAlignTable['u443'] = 'center';HookClick('u118', false);
gv_vAlignTable['u262'] = 'center';gv_vAlignTable['u560'] = 'center';gv_vAlignTable['u638'] = 'center';HookClick('u457', false);
gv_vAlignTable['u232'] = 'center';gv_vAlignTable['u421'] = 'center';gv_vAlignTable['u211'] = 'top';gv_vAlignTable['u265'] = 'center';gv_vAlignTable['u406'] = 'top';gv_vAlignTable['u365'] = 'center';gv_vAlignTable['u225'] = 'top';gv_vAlignTable['u144'] = 'top';gv_vAlignTable['u650'] = 'top';gv_vAlignTable['u456'] = 'top';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u488'] = 'center';gv_vAlignTable['u248'] = 'center';HookClick('u169', false);
gv_vAlignTable['u210'] = 'center';u633.tabIndex = 0;

u633.style.cursor = 'pointer';
$axure.eventManager.click('u633', function(e) {

if (true) {

SetGlobalVariableValue('JumpToPage', 'page2');

SetGlobalVariableValue('OffCanvasHide', 'yes');

SetWidgetSelected('u606');
	MoveWidgetTo('u599', GetNum('-320'), GetNum('44'),'easeInCubic',200);

	SetPanelState('u1', 'pd15u1','none','',500,'none','',500);

SetGlobalVariableValue('ActionBarTitle', 'Favorites');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

	SetPanelVisibility('u595','hidden','none',500);

}
});
gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u405'] = 'top';gv_vAlignTable['u224'] = 'center';gv_vAlignTable['u143'] = 'top';HookClick('u379', false);
gv_vAlignTable['u341'] = 'top';gv_vAlignTable['u260'] = 'top';gv_vAlignTable['u397'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u157'] = 'center';gv_vAlignTable['u455'] = 'center';gv_vAlignTable['u189'] = 'top';gv_vAlignTable['u509'] = 'center';u328.tabIndex = 0;

u328.style.cursor = 'pointer';
$axure.eventManager.click('u328', function(e) {

if (true) {

	SetPanelState('u1', 'pd7u1','none','',500,'none','',500);

}
});
gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u106'] = 'top';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u404'] = 'top';gv_vAlignTable['u382'] = 'center';gv_vAlignTable['u142'] = 'center';gv_vAlignTable['u340'] = 'top';HookClick('u237', false);
gv_vAlignTable['u535'] = 'top';gv_vAlignTable['u188'] = 'top';gv_vAlignTable['u273'] = 'center';gv_vAlignTable['u652'] = 'top';gv_vAlignTable['u179'] = 'center';u589.tabIndex = 0;

u589.style.cursor = 'pointer';
$axure.eventManager.click('u589', function(e) {

if ((GetGlobalVariableValue('OffCanvasHide')) == ('no')) {

	SetPanelVisibility('u640','hidden','none',500);

	MoveWidgetTo('u599', GetNum('-320'), GetNum('44'),'easeInCubic',200);

SetGlobalVariableValue('OffCanvasHide', 'yes');

}
else
if (true) {

	SetPanelVisibility('u640','hidden','none',500);

	MoveWidgetTo('u599', GetNum('0'), GetNum('44'),'easeInCubic',200);

SetGlobalVariableValue('OffCanvasHide', 'no');

}
});
u593.tabIndex = 0;

u593.style.cursor = 'pointer';
$axure.eventManager.click('u593', function(e) {

if ((GetWidgetVisibility('u595')) == (false)) {

SetGlobalVariableValue('ActionBarTitle', ' ');

	SetPanelVisibility('u595','','none',500);

SetGlobalVariableValue('MainSearchOn', 'yes');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

	MoveWidgetTo('u599', GetNum('-320'), GetNum('44'),'easeInCubic',200);

SetGlobalVariableValue('OffCanvasHide', 'yes');

	SetPanelVisibility('u640','hidden','none',500);

	var obj1 = document.getElementById("u596");
    obj1.focus();

SetWidgetFormText('u596', '');

}
else
if (true) {

	SetPanelVisibility('u595','hidden','none',500);

SetGlobalVariableValue('MainSearchOn', 'no');

SetGlobalVariableValue('ActionBarTitle', 'SmartFood');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

	var obj1 = document.getElementById("u596");
    obj1.focus();

SetWidgetFormText('u596', '');

}
});
gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u403'] = 'top';HookClick('u381', false);
gv_vAlignTable['u222'] = 'top';gv_vAlignTable['u458'] = 'center';u422.tabIndex = 0;

u422.style.cursor = 'pointer';
$axure.eventManager.click('u422', function(e) {

if (true) {

	SetPanelState('u1', 'pd8u1','none','',500,'none','',500);

SetGlobalVariableValue('ActionBarTitle', 'Add plate');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

	SetPanelVisibility('u244','hidden','none',500);

}
});
gv_vAlignTable['u572'] = 'center';gv_vAlignTable['u417'] = 'center';gv_vAlignTable['u395'] = 'center';gv_vAlignTable['u236'] = 'center';gv_vAlignTable['u155'] = 'center';gv_vAlignTable['u534'] = 'top';gv_vAlignTable['u353'] = 'top';HookClick('u272', false);
gv_vAlignTable['u651'] = 'top';gv_vAlignTable['u570'] = 'top';gv_vAlignTable['u592'] = 'top';gv_vAlignTable['u499'] = 'center';gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u259'] = 'top';gv_vAlignTable['u380'] = 'center';gv_vAlignTable['u221'] = 'center';gv_vAlignTable['u18'] = 'center';HookClick('u70', false);
HookClick('u416', false);
HookClick('u235', false);
gv_vAlignTable['u533'] = 'top';gv_vAlignTable['u269'] = 'center';gv_vAlignTable['u352'] = 'top';gv_vAlignTable['u271'] = 'center';gv_vAlignTable['u366'] = 'top';gv_vAlignTable['u103'] = 'top';HookClick('u158', false);
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u415'] = 'top';gv_vAlignTable['u393'] = 'center';gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u532'] = 'top';gv_vAlignTable['u351'] = 'center';gv_vAlignTable['u546'] = 'top';gv_vAlignTable['u199'] = 'center';u519.tabIndex = 0;

u519.style.cursor = 'pointer';
$axure.eventManager.click('u519', function(e) {

if (true) {

	SetPanelState('u1', 'pd4u1','none','',500,'none','',500);

SetGlobalVariableValue('ActionBarTitle', 'Place view');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

}
});
gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u300'] = 'center';gv_vAlignTable['u626'] = 'center';HookClick('u154', false);
gv_vAlignTable['u414'] = 'center';gv_vAlignTable['u68'] = 'center';gv_vAlignTable['u545'] = 'top';gv_vAlignTable['u518'] = 'center';u639.tabIndex = 0;

u639.style.cursor = 'pointer';
$axure.eventManager.click('u639', function(e) {

if (true) {

SetGlobalVariableValue('JumpToPage', 'home');

SetGlobalVariableValue('OffCanvasHide', 'yes');

	SetPanelVisibility('u640','hidden','none',500);

SetWidgetSelected('u608');
	MoveWidgetTo('u599', GetNum('-320'), GetNum('44'),'easeInCubic',200);

	SetPanelState('u1', 'pd0u1','none','',500,'none','',500);

	SetPanelVisibility('u595','hidden','none',500);

}
});
gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u616'] = 'top';HookClick('u264', false);
gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u468'] = 'center';gv_vAlignTable['u486'] = 'top';gv_vAlignTable['u246'] = 'center';gv_vAlignTable['u544'] = 'center';gv_vAlignTable['u219'] = 'top';gv_vAlignTable['u363'] = 'top';gv_vAlignTable['u26'] = 'center';u36.tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

SetGlobalVariableValue('ActionBarTitle', 'Edit plate');

	SetPanelState('u1', 'pd8u1','none','',500,'none','',500);

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

	SetPanelVisibility('u254','','none',500);

}
});
gv_vAlignTable['u377'] = 'center';gv_vAlignTable['u290'] = 'top';gv_vAlignTable['u610'] = 'top';gv_vAlignTable['u619'] = 'top';gv_vAlignTable['u460'] = 'center';gv_vAlignTable['u187'] = 'top';gv_vAlignTable['u507'] = 'top';gv_vAlignTable['u485'] = 'top';document.getElementById('u600_img').tabIndex = 0;

u600.style.cursor = 'pointer';
$axure.eventManager.click('u600', function(e) {

if (true) {

	MoveWidgetTo('u599', GetNum('-320'), GetNum('44'),'easeInCubic',200);

SetGlobalVariableValue('OffCanvasHide', 'yes');

}
});
HookClick('u326', false);
gv_vAlignTable['u218'] = 'center';gv_vAlignTable['u362'] = 'top';gv_vAlignTable['u557'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u349'] = 'top';gv_vAlignTable['u311'] = 'top';gv_vAlignTable['u230'] = 'center';gv_vAlignTable['u172'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u506'] = 'center';gv_vAlignTable['u484'] = 'center';gv_vAlignTable['u325'] = 'center';gv_vAlignTable['u601'] = 'center';gv_vAlignTable['u542'] = 'center';gv_vAlignTable['u361'] = 'center';gv_vAlignTable['u375'] = 'center';u88.tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

	SetPanelVisibility('u84','','none',500);

}
});
gv_vAlignTable['u348'] = 'top';gv_vAlignTable['u310'] = 'center';gv_vAlignTable['u207'] = 'top';gv_vAlignTable['u40'] = 'center';HookClick('u324', false);
u243.tabIndex = 0;

u243.style.cursor = 'pointer';
$axure.eventManager.click('u243', function(e) {

if (true) {

	SetPanelState('u244', 'pd0u244','none','',500,'none','',500);

SetGlobalVariableValue('ActionBarTitle', 'Edit plate');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

}
});
gv_vAlignTable['u479'] = 'top';u27.tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

SetGlobalVariableValue('ActionBarTitle', 'Edit plate');

	SetPanelState('u1', 'pd12u1','none','',500,'none','',500);

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

	SetPanelVisibility('u138','','none',500);

}
});
gv_vAlignTable['u441'] = 'center';gv_vAlignTable['u497'] = 'top';gv_vAlignTable['u538'] = 'center';gv_vAlignTable['u555'] = 'center';gv_vAlignTable['u289'] = 'top';gv_vAlignTable['u428'] = 'center';gv_vAlignTable['u591'] = 'center';gv_vAlignTable['u617'] = 'top';gv_vAlignTable['u206'] = 'top';gv_vAlignTable['u504'] = 'top';gv_vAlignTable['u242'] = 'center';gv_vAlignTable['u478'] = 'top';HookClick('u440', false);
gv_vAlignTable['u496'] = 'center';gv_vAlignTable['u256'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u621'] = 'top';gv_vAlignTable['u288'] = 'top';gv_vAlignTable['u373'] = 'center';gv_vAlignTable['u607'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u205'] = 'center';gv_vAlignTable['u183'] = 'center';gv_vAlignTable['u503'] = 'center';gv_vAlignTable['u481'] = 'top';gv_vAlignTable['u322'] = 'center';gv_vAlignTable['u558'] = 'top';gv_vAlignTable['u620'] = 'top';gv_vAlignTable['u197'] = 'center';HookClick('u495', false);
gv_vAlignTable['u336'] = 'center';gv_vAlignTable['u369'] = 'center';gv_vAlignTable['u453'] = 'top';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u75'] = 'center';HookClick('u204', false);
gv_vAlignTable['u359'] = 'top';gv_vAlignTable['u480'] = 'top';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u140'] = 'center';gv_vAlignTable['u516'] = 'center';gv_vAlignTable['u494'] = 'center';gv_vAlignTable['u308'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u452'] = 'top';gv_vAlignTable['u371'] = 'center';gv_vAlignTable['u612'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u466'] = 'center';gv_vAlignTable['u598'] = 'center';gv_vAlignTable['u203'] = 'center';gv_vAlignTable['u439'] = 'center';gv_vAlignTable['u501'] = 'top';gv_vAlignTable['u258'] = 'center';gv_vAlignTable['u320'] = 'center';u636.tabIndex = 0;

u636.style.cursor = 'pointer';
$axure.eventManager.click('u636', function(e) {

if (true) {

SetGlobalVariableValue('JumpToPage', 'page3');

SetGlobalVariableValue('OffCanvasHide', 'yes');

SetWidgetSelected('u604');
	MoveWidgetTo('u599', GetNum('-320'), GetNum('44'),'easeInCubic',200);

	SetPanelState('u1', 'pd9u1','none','',500,'none','',500);

SetGlobalVariableValue('ActionBarTitle', 'Near me');

SetWidgetRichText('u592', '<p style="text-align:left;"><span style="font-family:Arial;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#FFFFFF;"> ' + (GetGlobalVariableValue('ActionBarTitle')) + '</span></p>');

	SetPanelVisibility('u595','hidden','none',500);

}
});
gv_vAlignTable['u195'] = 'top';HookClick('u493', false);
gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u334'] = 'center';gv_vAlignTable['u632'] = 'center';gv_vAlignTable['u153'] = 'center';HookClick('u79', false);
gv_vAlignTable['u451'] = 'center';