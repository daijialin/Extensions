[{"Owner":"ramkrishna","Date":"2018-09-22T13:10:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello All_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your help you guys are making through this forum_co_ this is my first question to this forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am new to game programming and BabylonJS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to create a program that can load 3d model_co_ allows to edit that model by moving some of meshes to another location which will remain that position. Below are the things i have achieved till now. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. I have created program that can load 3d model in _qt_.babylon_qt_ format.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. I am able to select meshes and move them around.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ i am not able drop mesh which i have selected_co_ it is keep attached to mouse pointer. How can i achieve same. Please help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAttached is the sample file generated from playground and here is the link to playground http_dd_//www.babylonjs-playground.com/ \n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_20160_qt__gt_sample.zip_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ramkrishna","Date":"2018-09-24T06:57:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease help on above question\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-09-24T07:37:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32855-ramkrishna/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32855_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32855-ramkrishna/_qt_ rel_eq__qt__qt__gt_@ramkrishna_lt_/a_gt_. Welcome on board._lt_br /_gt_\n\tHere is your playground_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#060K58_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#060K58_lt_/a_gt__lt_br /_gt_\n\tAnd here is a quick fix_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#060K58%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#060K58#1_lt_/a_gt__lt_br /_gt_\n\tThe problem was line 43 and 51 where your variable camera is undefined. Use scene.activeCamera instead._lt_br /_gt_\n\t_lt_br /_gt_\n\tps_dd_ Take a look at _lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/meshbehavior_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/meshbehavior_lt_/a_gt_._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#9UFEBE_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#9UFEBE_lt_/a_gt__lt_br /_gt_\n\tmay it help you.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ramkrishna","Date":"2018-09-24T07:56:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12295_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/_qt_ rel_eq__qt__qt__gt_@MarianG_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for reply. Provided solution exactly full fill my requirements. But i have few questions regarding it as below.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Is it mandatory to define separate ground even in loaded models? how we can use existing ground of loaded scene?_lt_br /_gt_\n\t2. How i can make sure my camera will always render my scene as it is designed. I mean in my case i should always looking at entrance of house and my scene should be look like i am actually look like i am standing in front of room.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tActually i am trying build model which will load .babylon models and render it as it is designed. Also_co_ if he want to edit he can do so.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-09-24T16:36:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ sory for late._lt_br /_gt_\n\t1. The ground is used only for moveing. See getGroundPosition functions from here _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#UZ23UH%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#UZ23UH#0_lt_/a_gt__lt_br /_gt_\n\tBecause of this ground the objects move only on x and z axis. Now if you take a look at your playground_co_ it doesn_t_t use ground_co_ (you build it but never use)_co_ so the objects can move in all the axis_co_ but a little bit random. And_lt_br /_gt_\n\tthe short answer is yes. You can remove it. _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#060K58%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#060K58#2_lt_/a_gt_ The scene will still work._lt_br /_gt_\n\tOr you can use ground from your scene. like here _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#060K58%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#060K58#3_lt_/a_gt_._lt_br /_gt_\n\t2. More about how to set camera in scene_co_ how to limit its moves and more_co_ you_t_ll find here_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/babylon101/cameras_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/babylon101/cameras_lt_/a_gt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ramkrishna","Date":"2018-09-25T04:46:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12295_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/_qt_ rel_eq__qt__qt__gt_@MarianG_lt_/a_gt__co__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Thanks for reply._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I will go through your comments and update you accordingly._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ramkrishna","Date":"2018-09-30T09:04:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12295_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/_qt_ rel_eq__qt__qt__gt_@MarianG_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry for delayed reply.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am able to move meshes around scene. Now_co_ when i export this code for local testing i get _qt_index.html_qt_ and when i try to run it i get below error at scene.render.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbabylon.js_dd_1 Uncaught Error_dd_ No camera defined_lt_br /_gt_\n\t    at E.render (babylon.js_dd_1)_lt_br /_gt_\n\t    at Edit.html_dd_139_lt_br /_gt_\n\t    at M._renderLoop (babylon.js_dd_1)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny suggestions on it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-09-30T14:54:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAuch_co_ I don_t_t know. Try to put createDefultCameraorLight outside of importMesh function. I_t_ll check in few hours.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-10-01T06:39:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32855-ramkrishna/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32855_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32855-ramkrishna/_qt_ rel_eq__qt__qt__gt_@ramkrishna_lt_/a_gt_. I just checked_co_ and yes_co_ it seems_co_ with _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#060K58%236_qt_ rel_eq__qt_external nofollow_qt__gt_CreateDefaultCameraorLight_lt_/a_gt_ at the begining_co_ it works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ramkrishna","Date":"2018-10-01T06:43:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12295_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/_qt_ rel_eq__qt__qt__gt_@MarianG_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCorrect!! it worked.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust one thought came into my mind_co_ can we save changes made by us in model while playing around so that when we re-execute HTML+ JS which refer to model will always point to updated one?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour comments please.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-10-01T08:21:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRelated to save_co_ take a look at this\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.sceneserializer_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/api/classes/babylon.sceneserializer_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/resources/save_babylon_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/resources/save_babylon_lt_/a_gt__lt_br /_gt_\n\tYou can save the entire scene or a specific mesh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ramkrishna","Date":"2018-10-01T08:48:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12295_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/_qt_ rel_eq__qt__qt__gt_@MarianG_lt_/a_gt__co__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Thank you!_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I will try this approach and let you know._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]