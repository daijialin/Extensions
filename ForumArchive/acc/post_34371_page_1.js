[{"Owner":"lhx880619","Date":"2017-12-04T00:50:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\they guys，\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to know if there is any way to change the render canvas?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-12-04T02:58:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/27031-lhx880619/?do_eq_hovercard_qt_ data-mentionid_eq__qt_27031_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/27031-lhx880619/_qt_ rel_eq__qt__qt__gt_@lhx880619_lt_/a_gt_ do you mean after instantiating the engine ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"lhx880619","Date":"2017-12-04T03:41:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_197442_qt_ data-ipsquote-contentid_eq__qt_34371_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1512356315_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t41 minutes ago_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/27031-lhx880619/?do_eq_hovercard_qt_ data-mentionid_eq__qt_27031_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/27031-lhx880619/_qt_ rel_eq__qt__qt__gt_@lhx880619_lt_/a_gt_ do you mean after instantiating the engine ?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tyes_co_ are there any chance to change the render canvas?\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti asked this question because i have a very large 3d model to load into the scene. so i want to share the scene( or the loaded meshes).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif i can_t_t change the canvas i will new another engine and scene to load the 3d model. do you know how the share the meshes?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit means i will do something  like\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor loop the scene meshes_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tremove form old scene\n_lt_/p_gt_\n\n_lt_p_gt_\n\tadd to new scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnew engine.render \n_lt_/p_gt_\n\n_lt_p_gt_\n\tin this way i don_t_t need to load all the models form files (even indexdb)_co_ just use them in memory.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-12-04T04:04:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou could remove the mesh from the scene so it is in memory but not render after load and use clone instead this woukd be much more efficient for your case. \n_lt_/p_gt_\n\n_lt_p_gt_\n\twould that work for you ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]