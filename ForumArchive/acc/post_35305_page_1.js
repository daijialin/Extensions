[{"Owner":"waverider","Date":"2018-01-27T00:26:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHy there! I used a heightmap displacement on the sphere_co_ i turned the scene collision on and checked collision for the displaced mesh but the camera doesn_t_t collide with it. thinking maybe it has something to do with the bounding box_co_ here_t_s a pg_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#5CT9MA_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#5CT9MA_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-01-27T13:40:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou can make parent box and use that \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthere are some other option like GPU pick or make geometry from height Map that can help too but need implemented for your sample\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-01-27T15:28:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  I did some experimenting_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#5CT9MA%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#5CT9MA#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s see... I added two functions to Mesh class... .setEllipsoidPerBoundingBox() and .showEllipsoid().. up at the top of the PG.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI made sure camera.checkCollisions _eq_ true was set in line 45.  I did the same for Polyhedron... in line 160.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI stopped at lines 161/162 and thought about them.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLines 165-168... manually set a boundingBox size that surrounded the mesh... by trial and error.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLines 171-172... called my two custom functions.  They appear to work... but are experimental and subject to bugs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLines 174-179... did a bunch of dumps to console... where I realized that camera had no ._collider_co_ so I added one.  Used code from _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.freeCamera.ts#L150_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.freeCamera.ts#L150_lt_/a_gt_ as example.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tResult_dd_  Nothing changed.  Total failure.  No sign of camera-to-Polyhedron colliding at all.  hrmf!   What the heck?!   I_t_ll keep testing and thinking. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m currently using Firefox ESR (which is a 52.6.0 non-Quantum_co_ so plugins still work.)  I advise ALL to use Firefox ESR instead of v57+.  I think ESR will be supported for at least a year_co_ and that gives the (ad blocker) plugin authors... time to convert their plugins to _qt_webExtensions API_qt_.  Trying to use almost ANY firefox plugin... with Firefox 58... will cause playground_co_ webGL scenes_co_ and the BJS forum website... to fail... and with nearly ZERO indications of WHY.  Be careful.  It made me pretty scared and aggravated... 2 days ago.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-01-27T15:57:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi wingnut _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_Moderator-inserted text_lt_/span_gt__dd_  Heya Naz...  how ya been?  I hope well.  Happy weekend!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"waverider","Date":"2018-01-27T22:53:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thow does the gpu pick work?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-01-28T06:04:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmost make it again _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ after some update that not work ( it is not work for webgl2 i think ) need make new sample  \n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed3579884944_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/22471-gpu-picking-system/?do_eq_embed_qt_ style_eq__qt_height_dd_207px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"waverider","Date":"2018-01-28T13:14:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCoool!!!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-01-28T15:51:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#JAG8B%2318_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#JAG8B#18_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29597-waverider/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29597_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29597-waverider/_qt_ rel_eq__qt__qt__gt_@waverider_lt_/a_gt_ ask any thing more about this  \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti am not optimize this pick system yet and don_t_t make it like tools for BJS\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut that have some benefits\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. you can _lt_span style_eq__qt_color_dd_#27ae60_sm__qt__gt_detect any pixel of mesh _lt_/span_gt_ no need separate or  make more\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. that is not important how much _lt_span style_eq__qt_color_dd_#27ae60_sm__qt__gt_complicated geometry _lt_/span_gt_you have or _lt_span style_eq__qt_color_dd_#27ae60_sm__qt__gt_heavy vertex_lt_/span_gt_ that is \n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. you can _lt_span style_eq__qt_color_dd_#27ae60_sm__qt__gt_use parallel camera with different directions in each frame_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(i test one time 32 x 32 camera for medium graphic card you can see how that _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_implemented  _lt_/span_gt_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed4071259949_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/33501-make-environment-map-texture-from-playground-scene/?do_eq_embed_qt_ style_eq__qt_height_dd_287px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t4. you can_lt_span style_eq__qt_color_dd_#27ae60_sm__qt__gt_ ignore some pixel of mesh _lt_/span_gt_by _t_discard_t_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t5. you can _lt_span style_eq__qt_color_dd_#27ae60_sm__qt__gt_detect back face_lt_/span_gt_ when that back face is enabled \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#JAG8B%2319_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#JAG8B#19_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand have some problem too like\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. that is _lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt__lt_strong_gt_very new technic_lt_/strong_gt__lt_/span_gt_ for pick so you don_t_t have so much tools in BJS for config that easily\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt__lt_strong_gt_2. just detect One mesh in each ray_lt_/strong_gt__lt_/span_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. we _lt_strong_gt__lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_have not  face information _lt_/span_gt__lt_/strong_gt_  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t4. _lt_span style_eq__qt_color_dd_#e74c3c_sm__qt__gt_not optimization for yet_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5. _lt_font color_eq__qt_#e74c3c_qt__gt_not have any more information like distance or 3d position  or normal or ... (maybe we can have it in in future )_lt_/font_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti recommend that for all system with good graphic card ( if you write a project for Game )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]