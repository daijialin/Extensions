[{"Owner":"ragingclaw","Date":"2016-12-12T16:32:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHey there party people. I have 5 meshes that are using physics (cloth like sims). I am wondering if there is a way to disable or pause the physics if the mesh does not meet specific criteria at a given point. So it would be possible to turn physics on or off depending on some condition. Simple test_co_ can you have a button that enables and disables physics on a per object basis? Lets say_co_ mesh A is within x distance of the camera_co_ so it can be on_co_ but meshes b-e should be off. If mesh A leaves x distance_co_ it turns off. If mesh B becomes within x distance_co_ it turns on. Make sense? _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ you have experience here_co_ what are your thoughts?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-12-12T16:38:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi! Long time. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre these the meshes that I know well?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf that_t_s the case_co_ you could stop the before render loops when not viewing the meshes. Performance will be much better. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ragingclaw","Date":"2016-12-12T16:44:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyup_co_ they are the ones. all on together crash the scene so I want to just have them on an off if the camera is right there on them. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-12-12T17:04:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOriginally they were initialized to work like that. The problem was_co_ and still is that when not zoomed in they can still be viewed. We had this discussion a while back ☺\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry also to reduce the quality of the cloth. This is an exponential factor. Will help performance_co_ especially on mobile. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]