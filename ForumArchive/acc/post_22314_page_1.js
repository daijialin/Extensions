[{"Owner":"ozRocker","Date":"2016-05-03T00:13:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m using preview version 2.4 to try and get animation blending happening.  I_t_ve checked the playground and also the tutorial but I still don_t_t understand how to apply it to my character animations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy character moves like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_avatar.skeleton.beginAnimation(_qt_Idle_qt__co_true_co_1)_sm_\n\n//some stuff\n\navatar.skeleton.beginAnimation(_qt_Walk_qt__co_true_co_1)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI don_t_t know where to apply _qt_enableBlending_qt_ and _qt_blendingSpeed_qt_ to this.  Does anyone know?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-03T16:52:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tto enable blending_co_ just go through skeleton_t_s animations like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_avatar.skeleton.animations.forEach(function(animation) {\n   animation.enableBlending _eq_ true_sm_\n   animation.blendingSpeed _eq_ 0.05_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-05-03T23:59:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_127196_qt_ data-ipsquote-contentid_eq__qt_22314_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1462294358_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t7 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tto enable blending_co_ just go through skeleton_t_s animations like this_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt_avatar.skeleton.animations._lt_span_gt_forEach_lt_/span_gt_(_lt_span_gt__lt_span_gt_function_lt_/span_gt__lt_span_gt_(animation)_lt_/span_gt_ {_lt_/span_gt_\n   animation.enableBlending _eq_ _lt_span_gt_true_lt_/span_gt__sm_\n   animation.blendingSpeed _eq_ _lt_span_gt_0.05_lt_/span_gt__sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tMy skeleton doesn_t_t have an _qt_animations_qt_ property.  This spits out an error saying its undefined.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is what my _qt_skeleton_qt_ object looks like_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage_qt_ src_eq__qt_http_dd_//www.punkoffice.com/downloads/babylonjs_animation.png_qt_ alt_eq__qt_babylonjs_animation.png_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-04T15:29:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry I_t_m stupid_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_avatar.skeleton.bones.forEach(function(bone) {\n   bone.animations.forEach(function(animation) {\n      animation.enableBlending _eq_ true_sm_\n      animation.blendingSpeed _eq_ 0.05_sm_\n   })_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-05-05T00:57:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_127327_qt_ data-ipsquote-contentid_eq__qt_22314_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1462375771_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t13 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tSorry I_t_m stupid_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt_avatar.skeleton.bones._lt_span_gt_forEach_lt_/span_gt_(_lt_span_gt__lt_span_gt_function_lt_/span_gt__lt_span_gt_(bone)_lt_/span_gt_ {_lt_/span_gt_\n   bone.animations._lt_span_gt_forEach_lt_/span_gt_(_lt_span_gt__lt_span_gt_function_lt_/span_gt__lt_span_gt_(animation)_lt_/span_gt_ {_lt_/span_gt_\n      animation.enableBlending _eq_ _lt_span_gt_true_lt_/span_gt__sm_\n      animation.blendingSpeed _eq_ _lt_span_gt_0.05_lt_/span_gt__sm_\n   })_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_m not able to do this _dd_/  I get _qt_Uncaught TypeError_dd_ Cannot read property _t_0_t_ of undefined_qt_ when trying to change the _qt_enableBlending_qt_ property.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn further inspection via developer tools I can see _qt_blendingSpeed_qt_ is initially 0.01 but _qt_enableBlending_qt_ is set to _qt_undefined_qt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-05-05T01:11:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere_t_s a playground where I_t_m trying out that code.  This will cycle through animations idle and running.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#GTHTR%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#GTHTR#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tranlong021988","Date":"2016-05-05T14:57:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12544_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/_qt_ rel_eq__qt__qt__gt_@ozRocker_lt_/a_gt__co_ I have a simple test and facing same problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/86585940/babylon-dance/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//dl.dropboxusercontent.com/u/86585940/babylon-dance/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did export 3d model and animation (babylon format) from 3d Max_co_ it contain two animation dance_co_ I_t_m making it turn cycle after each 5 sec_co_ til now it work_co_ but not blending (smooth change). My main code below_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_            // set blending enable for each bone animation\n            skeleton.bones.forEach(function(bone) {\n\t\t\t   bone.animations.forEach(function(animation) {\n\t\t\t\t  animation.enableBlending _eq_ true_sm_\n\t\t\t\t  animation.blendingSpeed _eq_ 0.01_sm_\n\t\t\t   })_sm_\n\t\t\t})_sm_\n\t\t\t//console.log(skeleton)_sm_\n\t\t\t\n\t\t\tskeleton.createAnimationRange(_qt_dance1_qt__co_0_co_300)_sm_ //  define dance 1 animation\n\t\t\tskeleton.createAnimationRange(_qt_dance2_qt__co_450_co_560)_sm_ //  define dance 2 animation\n\t\t\tskeleton.beginAnimation(_qt_dance1_qt__co_true_co_1)_sm_ // play the first one\n\t\t\t\n         \n            // change animation dance each 5 secs\n            window.setInterval(function(){\n\t\t\t\tif(currentDance_eq__eq__qt_dance1_qt_){\n\t\t\t\t\tcurrentDance _eq_ _qt_dance2_qt__sm_\n\t\t\t\t}else{\n\t\t\t\t\tcurrentDance _eq_ _qt_dance1_qt__sm_\n\t\t\t\t}\n\t\t\t\tgirl.skeleton.beginAnimation(currentDance_co_true_co_1)_sm_\n\t\t\t\t}_co_5000)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI used to check your Playground sample but it is just black screen_co_ so I wonder how you success. Can you point me?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSOrry for my poor English.   \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-05-05T15:03:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_127432_qt_ data-ipsquote-contentid_eq__qt_22314_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1462460269_qt_ data-ipsquote-userid_eq__qt_21019_qt_ data-ipsquote-username_eq__qt_tranlong021988_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 minutes ago_co_ tranlong021988 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI used to check your Playground sample but it is just black screen_co_ so I wonder how you success. Can you point me?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI get a black screen because this line_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_animation.enableBlending _eq_ true_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tgives me an error and breaks the code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I remove that line then the code will run_co_ but there is no animation blending.  I_t_m still stuck_co_ sorry!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tranlong021988","Date":"2016-05-05T15:11:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_127434_qt_ data-ipsquote-contentid_eq__qt_22314_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1462460609_qt_ data-ipsquote-userid_eq__qt_12544_qt_ data-ipsquote-username_eq__qt_ozRocker_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 minutes ago_co_ ozRocker said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI get a black screen because this line_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt_animation.enableBlending _eq_ _lt_span_gt_true_lt_/span_gt__sm__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\tgives me an error and breaks the code.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf I remove that line then the code will run_co_ but there is no animation blending.  I_t_m still stuck_co_ sorry!\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat so sad_co_ I dig around and see that it_t_s not too many success case_co_ this is what I find out (may be the best)_dd_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/17135-create-bone-animation-programatically/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t And _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/16758-ralphel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_16758_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/16758-ralphel/_qt_ rel_eq__qt__qt__gt_@RalphEl_lt_/a_gt_ have a create contribution here_dd_ \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/20890-my-first-contribution-smooth-animation-transition-between-two-skeletal-poses/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tBut I don_t_t know how to make it work with my case. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-05-05T15:30:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt appears that enableBlending is a function_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/86da83bc317787dd9b35c4e0a977ca71c0bdb805/src/Animations/babylon.animatable.js#L52_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/86da83bc317787dd9b35c4e0a977ca71c0bdb805/src/Animations/babylon.animatable.js#L52_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ I_t_m looking at the wrong file.  That should probably be named differently though.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tranlong021988","Date":"2016-05-05T15:48:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ it_t_s seem that  _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_enableBlending function is belong to Animatable object_lt_span_gt_  not Animation. It throw error when I try _lt_/span_gt__lt_/span_gt_ animation._lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_enableBlending_lt_/span_gt_ (0.05)._lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt__lt_span_gt_ _lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-05-05T15:51:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOz_co_ I_t_ve been keeping an eye on this thread_co_ and I have just tried your playground example above. When I disable the blending code_co_ I see _qt_Josh_qt_ cycle through the animations BUT this error_co_ at line 44_co_  is being thrown repeatedly in my FF web console_qt_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tTypeError_dd_ avatar.skeleton is null\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThere also seems to be oddities in the debug layer values (eg. Total Textures _eq_ 0_co_ when Josh  obviously has a texture)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot sure what it all means though _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-05-05T16:08:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyeh_co_ I can see its spitting out\n_lt_/p_gt_\n\n_lt_p_gt_\n\tVM118_dd_47 Uncaught TypeError_dd_ Cannot read property _t_beginAnimation_t_ of null\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor me too.  Same as the other playground in my other thread.  But the playground still runs_co_ so the mesh obviously must have a skeleton and animations.  Also_co_ I don_t_t get these errors in my production environment.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tranlong021988","Date":"2016-05-05T16:16:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI already check bone properties from log console_co_ it has range property but empty although its skeleton has.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s seem that we have to set range animation for each bone_co_ not only skeleton. I think. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-05T16:30:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk there is a bug in the Matrix Lerp code...I_t_ll fix it soon\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tranlong021988","Date":"2016-05-05T16:44:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Many thanks. I almost give up with this. T__T\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-05T17:53:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere we are (please clear your cache)_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#GTHTR%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#GTHTR#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m pushing the version on github in 10 minutes\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-05-05T18:04:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSweet!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tavatar.skeleton.enableBlending(0.05)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-05-06T00:26:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt works beautifully! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]