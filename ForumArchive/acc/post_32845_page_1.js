[{"Owner":"masterdon","Date":"2017-09-11T03:24:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have created a grid using GridMaterial on box mesh. the issue is_co_ the grid isn_t_t coming complete. Its broken on all the edges(see the snapshot). i.e. no boundary lines to wrap everything in rectangle. i have also tried setting uOffset and voffset on material however its not working. what am i missing here?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is my code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var gridBox _eq_ BABYLON.MeshBuilder.CreateBox(_qt_box1_qt__co_ { width_dd_ objectProperties.width-1_co_ height_dd_ 0.05_co_ depth_dd_ objectProperties.height + 1_co_ updatable_dd_ true }_co_ scene)_sm_\ngridBox.position _eq_ new BABYLON.Vector3(objectProperties.left + startFromLeftPosition + objectProperties.width / 2 - horizontalSlotHeight / 2_co_ 10.05_co_ startFromTopPosition - (objectProperties.top + (i &gt_sm_ 0 ? 8 _dd_ 7)))_sm_\n\nvar defaultGridMaterial _eq_ new BABYLON.GridMaterial(_qt_default_qt__co_ scene)_sm_\ndefaultGridMaterial.majorUnitFrequency _eq_ 0_sm_\ndefaultGridMaterial.minorUnitVisibility _eq_ 0.1_sm_\ndefaultGridMaterial.gridRatio _eq_ 1_sm_\n//defaultGridMaterial.uOffset _eq_ 0.5_sm_\n//defaultGridMaterial.vOffset _eq_ 0.5_sm_\ngridBox.material _eq_ defaultGridMaterial_sm_\ngridBox.material.alpha _eq_ 0.5_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/2017-09-11_08-47-51.png.9f0aa2f87419ecc589a7274f4a2c4591.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_14791_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/2017-09-11_08-47-51.thumb.png.0ca2a14d6dcdece06ab5c20acfcafd6d.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_2017-09-11_08-47-51.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-09-11T09:55:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26793-masterdon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26793_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26793-masterdon/_qt_ rel_eq__qt__qt__gt_@masterdon_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit would be wonderful if you could reproduce it on the playground. This way we can all experiment with it and understand how we can help _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]