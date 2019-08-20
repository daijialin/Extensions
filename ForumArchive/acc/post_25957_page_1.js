[{"Owner":"Gijs","Date":"2016-10-23T09:46:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi_co_ while making a 3D modeller_co_ I found that the Curve3 class has a function named _qt_continue_qt__co_ which _lt_a href_eq__qt_http_dd_//www.w3schools.com/js/js_reserved.asp_qt_ rel_eq__qt_external nofollow_qt__gt_seems_lt_/a_gt_ to be a reserved word. Apparently it hasn_t_t broken anything thus far_co_ so is it fine_co_ or should it be deprecated / renamed to _qt_concat_qt_?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-23T11:47:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmmmh... in our case _lt_em_gt_continue()_lt_/em_gt_ is just a method of a Curve3 instance_co_ so something like that _dd_ _lt_em_gt_curve1.continue(curve2)_sm__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis has nothing to do with the js statement _dd_ _lt_em_gt_continue_sm__lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gijs","Date":"2016-10-23T14:03:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_148487_qt_ data-ipsquote-contentid_eq__qt_25957_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1477223268_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tmmmh... in our case _lt_em_gt_continue()_lt_/em_gt_ is just a method of a Curve3 instance_co_ so something like that _dd_ _lt_em_gt_curve1.continue(curve2)_sm__lt_/em_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThis is nothing to do with the js statement _dd_ _lt_em_gt_continue_sm__lt_/em_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI know_co_ but the page I linked lists it as reserved_co_ and says _qt_In JavaScript_co_ some identifiers are reserved words and cannot be used as variables or function names._qt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-10-23T14:58:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_m pretty sure you need to be looking at the section where they list reserved words for objects_co_ properties_co_ and methods.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-23T15:41:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_h2 style_eq__qt_font-family_dd__t_Segoe UI_t__co_ Arial_co_ sans-serif_sm_font-size_dd_30px_sm_font-weight_dd_400_sm_margin_dd_10px 0px_sm_color_dd_rgb(0_co_0_co_0)_sm_font-style_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\tJavaScript Objects_co_ Properties_co_ and Methods\n_lt_/h2_gt_\n\n_lt_p style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd_Verdana_co_ sans-serif_sm_font-size_dd_15px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\tYou should also avoid using the name of JavaScript built-in objects_co_ properties_co_ and methods_dd_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd_Verdana_co_ sans-serif_sm_font-size_dd_15px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t_lt_table style_eq__qt_border-collapse_dd_collapse_sm_border-spacing_dd_0px_sm_width_dd_1109px_sm_border_dd_1px solid rgb(204_co_204_co_204)_sm_margin_dd_20px 0px_sm__qt__gt__lt_tbody_gt__lt_tr style_eq__qt_border-bottom_dd_1px solid rgb(221_co_221_co_221)_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt__lt_td style_eq__qt_padding_dd_8px 8px 8px 16px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tArray\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tDate\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\teval\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tfunction\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\thasOwnProperty\n\t\t\t\t_lt_/td_gt_\n\t\t\t_lt_/tr_gt__lt_tr style_eq__qt_border-bottom_dd_1px solid rgb(221_co_221_co_221)_sm_background-color_dd_rgb(241_co_241_co_241)_sm__qt__gt__lt_td style_eq__qt_padding_dd_8px 8px 8px 16px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tInfinity\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tisFinite\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tisNaN\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tisPrototypeOf\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tlength\n\t\t\t\t_lt_/td_gt_\n\t\t\t_lt_/tr_gt__lt_tr style_eq__qt_border-bottom_dd_1px solid rgb(221_co_221_co_221)_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt__lt_td style_eq__qt_padding_dd_8px 8px 8px 16px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tMath\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tNaN\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tname\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tNumber\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tObject\n\t\t\t\t_lt_/td_gt_\n\t\t\t_lt_/tr_gt__lt_tr style_eq__qt_border-bottom_dd_1px solid rgb(221_co_221_co_221)_sm_background-color_dd_rgb(241_co_241_co_241)_sm__qt__gt__lt_td style_eq__qt_padding_dd_8px 8px 8px 16px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tprototype\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tString\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\ttoString\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tundefined\n\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_td style_eq__qt_padding_dd_8px_sm_text-align_dd_left_sm_vertical-align_dd_top_sm__qt__gt_\n\t\t\t\t\tvalueOf\n\t\t\t\t_lt_/td_gt_\n\t\t\t_lt_/tr_gt__lt_/tbody_gt__lt_/table_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2016-10-23T16:08:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tReserved words in JS are only illegal to use as identifiers for local vars and functions. Object properties can be named pretty much anything.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_myobj.for _eq_ 1\nmyobj.var _eq_ 2\nmyobj.new _eq_ 3\nmyobj.break _eq_ 4\nmyobj.continue _eq_ 5_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAll perfectly fine. Even the words in Jerome_t_s post are legal variable names - it_t_s just suggesting they be avoided for clarity_t_s sake.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLong story short_co_ nothing at all to worry about here.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]