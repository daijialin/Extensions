[{"Owner":"RyanONeill1970","Date":"2018-12-02T17:43:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a particle system and some walls ( _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8PY6X5%2315_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#8PY6X5#15_lt_/a_gt_ )_co_ if you move the mouse around you can see the last mesh touched is tracked by using a red sphere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is a reason for this_co_ I_t_m trying to zoom in to the last place that the mouse was so it zooms like a slippy map (Google_co_ Bing_co_ Yahoo maps etc.). A slippy map will zoom on a 2d surface to where the cursor is (for an example_co_ see Google maps) so that it is more intuitive and the origin of the zoom is from that point.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve removed the ArcRotateCameraMouseWheelInput so I can use my own mouse wheel tracking.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe walls should remain static with only the particle system expanding.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTwo questions_sm_\n_lt_/p_gt_\n\n_lt_ol_gt_\n\t_lt_li_gt_\n\t\tI think the zoom is done_co_ but I can_t_t get my head around the next bit which is to translate the SPS mesh step by step as the zoom happens via the last mouse position (mouseSphere in code). I_t_ve left a TODO marker in the code where I think this should be handled.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tThe mouse tracking drops frames compared to the example I copied it from ( _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2FPT1A%2368_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2FPT1A#68_lt_/a_gt_ ) which was far more complex. Am I doing something dumb?\n\t_lt_/li_gt_\n_lt_/ol_gt_\n\n_lt_p_gt_\n\tIf you want to know what this is for_co_ it_t_s a data visualisation and the walls will consist of labelled axes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHopefully that makes sense.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRyan\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2018-12-02T19_dd_44_dd_49Z_t_ title_eq__t_12/02/2018 07_dd_44  PM_t_ data-short_eq__t_Dec 2_t__gt_December 2_lt_/time_gt_ by RyanONeill1970_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_Fix version of playground code.\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RyanONeill1970","Date":"2018-12-02T20:05:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve somehow stumbled onto the right code and not sure how_co_ but it works as expected except for the slowness of the mouse tracking so any thoughts on that would be helpful.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSimply using _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_SPS.mesh.setPivotPoint(mouseSphere.position)_sm_ works as I want it to._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\tNew custom zoom is at _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8PY6X5%2316_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#8PY6X5#16_lt_/a_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tTo reiterate my speed question _t__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm_text-align_dd_left_sm__qt__gt_The mouse tracking drops frames compared to the example I copied it from ( _lt_/span_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2FPT1A%2368_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#3d6594_sm_font-size_dd_14px_sm_text-align_dd_left_sm__qt__gt_https_dd_//www.babylonjs-playground.com/#2FPT1A#68_lt_/a_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm_text-align_dd_left_sm__qt__gt_ ) which was far more complex. Am I doing something dumb?_t__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RyanONeill1970","Date":"2018-12-02T20:37:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tStill not sure why the other example and mine differed so much in GPU performance but I_t_ve found the _t_go faster_t_ button so it works a lot smoother now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the call to scene.pick I set fastCheck to true which stopped at the first mesh it hit.\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_pickResult _eq_ scene.pick(scene.pointerX_co_ scene.pointerY_co__lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_null_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8PY6X5%2317_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#8PY6X5#17_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAm I doing this right? Seems OK now.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"sable","Date":"2018-12-03T00:33:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe reason it was quite slow is that spheres have a lot of faces_co_ and the pick function has to iterate over each one to find the picked point.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe fastPick version doesn_t_t behave in the same way as the original_co_ as it generally is just stopping at the ground/wall intersection_co_ so is not putting the mouse sphere on the SPS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can implement your own picking for the sps_co_ and do ray sphere tests_co_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/debug.html#8PY6X5%2318_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/debug.html#8PY6X5#18_lt_/a_gt__co_ which is much_co_ much_co_ faster.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf the particles aren_t_t spheres_co_ then you could do the above using spheres as bounding spheres_co_ and then get the actual picked point from an intersection test with just the closest particle.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not sure the zooming in is quite working as intended_co_ as if you move the mouse once already zoomed in_co_ and then zoom out or in_co_ the sps jumps to a new position. Probably need to do some sort of correction given the current pivot point.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RyanONeill1970","Date":"2018-12-03T22:49:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24742-sable/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24742_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24742-sable/_qt_ rel_eq__qt__qt__gt_@sable_lt_/a_gt_ _co_ it_t_s mostly working apart from as you say_co_ the jumping around when changing position.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can_t_t get my head around the correction that is needed. If anyone has any input it would be greatly received.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RyanONeill1970","Date":"2018-12-03T23:26:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just noticed all the extra work you did in the playground _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24742-sable/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24742_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24742-sable/_qt_ rel_eq__qt__qt__gt_@sable_lt_/a_gt__co_ did that come out of your head? That_t_s very impressive_co_ would take me quite some time to figure out what is going on there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"sable","Date":"2018-12-03T23:39:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWas mainly just copied from a project I_t_ve been working on which faced similar performance issues with picking sphere particles from a sps_co_ with corrections for the pivot point changing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t__t_ll try and take a look at sorting out the jumping in the next few days_co_ but post back if you get it sorted before then.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RyanONeill1970","Date":"2018-12-07T22:52:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve made progress but it still suffers from changing origin when zoomed in (_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8PY6X5%2322_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#8PY6X5#22_lt_/a_gt_). I think I need to watch more tutorials as I am missing something.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSeeing as I_t_ve spent all week on this I think I_t_ll move on to a different problem and give myself a break.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf anyone can see what I_t_ve done wrong_co_ I_t_d be very appreciative.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]