[{"Owner":"DezOnlyOne","Date":"2016-08-18T15:11:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a few sprites that I am using for info panels in certain camera views. I want to hide and show different sprite panels depending on the camera angles. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI really just need to know how to hide a sprite.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAm I missing something? Shouldn_t_t this be something simple to do?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-08-18T15:15:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tnot sure_co_ i have not worked with sprites yet but id assume_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsprite.isVisible _eq_ false_sm__lt_br /_gt_\n\tor like sripte.setEnabled(false)_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2016-08-18T15:25:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_140470_qt_ data-ipsquote-contentid_eq__qt_24563_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1471533329_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 minutes ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tnot sure_co_ i have not worked with sprites yet but id assume_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tsprite.isVisible _eq_ false_sm__lt_br /_gt_\n\t\t\tor like sripte.setEnabled(false)_sm_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI tried that earlier_co_ but it doesn_t_t work. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-08-18T15:26:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tdispose it and then recreate it when needed?_lt_br /_gt__lt_br /_gt_\n\tTurn its alpha color to 0?_lt_br /_gt__lt_br /_gt_\n\tIm assuming your rotating a camera around a sprite like a character and have different sheets for if its the side vs front ect... So I would lean tword disposing.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2016-08-18T15:40:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_140477_qt_ data-ipsquote-contentid_eq__qt_24563_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1471533998_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 minutes ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tdispose it and then recreate it when needed?_lt_br /_gt__lt_br /_gt_\n\t\t\tTurn its alpha color to 0?_lt_br /_gt__lt_br /_gt_\n\t\t\tIm assuming your rotating a camera around a sprite like a character and have different sheets for if its the side vs front ect... So I would lean tword disposing.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI am not sure why turning its alpha to 0 does not work_co_ but it didn_t_t. dispose gets rid of it_co_ but for some reason when I recreate it does not come back. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-08-18T16:26:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt_t_s not ideal_co_ but you can set the size to 0.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2016-08-18T19:19:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tFor brevity_t_s sake I went ahead with size 0. Thanks everyone. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]