[{"Owner":"Tomm Huth","Date":"2018-10-11T21:32:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m playing around with an infinite scroller game idea (think Temple Run) on the basis that the player stands still_co_ and the terrain moves towards the camera_co_ giving the illusion of forward motion. I added some simple random box meshes on top of the path that the user needs to navigate around (game over otherwise)_co_ and some gaps in the ground that the player can fall thru (game over). Since i need collision detection and basic player gravity I set up using CannonJS. That seems to work OK_dd_ the player would fall through the gaps_co_ but for some reason the hit detection for the obstacles would bug out_co_ sometimes letting the player mesh go halfway thru (imposter out of sync with mesh). For the motion of the path blocks i simply did\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.position.z -_eq_ .1_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tin each render loop. After reading some more on this it seems like manipulating physics objects like this is not a good idea (should use impulse/force instead)? Funny thing is_co_ if I turned down the speed to a crawl the imposter worked as it should and seemed to match up with the mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I can_t_t use this approach to moving the ground_co_ what would be a better solution? I also thought about setting a linear velocity in the ground_co_ but since its mass is set to 0 this has no effect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think my main question is this_dd_ How can I implement a simple gravity + jump functionality manually (colliding with a flat predicable/same height ground)?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kcoley","Date":"2018-10-12T15:58:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29314-tomm-huth/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29314_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29314-tomm-huth/_qt_ rel_eq__qt__qt__gt_@Tomm Huth_lt_/a_gt__co_ can you make a playground that repros the issue you are hitting?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Tomm Huth","Date":"2018-10-14T19:01:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30070_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/_qt_ rel_eq__qt__qt__gt_@kcoley_lt_/a_gt_ I_t_ve played around with this some more and decided on another approach_dd_ the player moves and the world is still_co_ with physics back. seems to work good except for some occational jerky motion of the moving player (just a simple sphere). The player (sphere) has a linearVelocity set to z _eq_ 4. You can also see this in this super basic playground_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/indexStable.html#VU94KB%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/indexStable.html#VU94KB#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBe patient tho. it does not appear immediately_co_ but you should notice the sphere quicky skipping back and forth eventually. Try restarting the playground or let it run in the background. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHas it got something to do with linearVelocity being set? angularVelocity seems to produce the same (and feels generally much more unpredictable and does not really create the permanent forward motion I_t_m looking for). \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-10-14T19:06:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi \n_lt_/p_gt_\n\n_lt_p_gt_\n\thow are you _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1QC9DP%23143_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1QC9DP#143_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Tomm Huth","Date":"2018-10-14T19:14:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_231647_qt_ data-ipsquote-contentid_eq__qt_40591_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1539543975_qt_ data-ipsquote-userid_eq__qt_13038_qt_ data-ipsquote-username_eq__qt_NasimiAsl_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 minutes ago_co_ NasimiAsl said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\thi \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\thow are you _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1QC9DP%23143_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1QC9DP#143_lt_/a_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\twhat? _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-10-14T19:25:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti try find some auto generated sample  may be you can use that \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#1V70NA%2320_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#1V70NA#20_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Tomm Huth","Date":"2018-10-14T19:28:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tauto generating seems to work fine_co_ but rather the physics stuff seems to be wonky.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-10-14T19:29:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyes i have some sample for that too\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Tomm Huth","Date":"2018-10-14T19:30:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tcheck out the playground i posted_co_ it does recreate the problem. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-10-14T19:32:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1QC9DP%2346_qt_ rel_eq__qt_external nofollow_qt__gt_o_lt_/a_gt_k look this\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1QC9DP%2346_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1QC9DP#46_lt_/a_gt_ gravity + collision is enabled\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Tomm Huth","Date":"2018-10-14T19:35:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti_t_m not really looking for terrain here_co_ and am happy with simple boxes_co_ but thanks _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe real issue here is figuring out why the sphere skips around _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-10-14T19:41:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tfor show you what happen you don_t_t need terrain \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti just have one  mesh and in any step prepare that again\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1QC9DP%23175_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1QC9DP#175_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kcoley","Date":"2018-10-15T18:04:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29314-tomm-huth/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29314_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29314-tomm-huth/_qt_ rel_eq__qt__qt__gt_@Tomm Huth_lt_/a_gt_ _co_ this seems to be related to cannon.js and collisions since it_t_s physics related.  You can probably post an issue on their GitHub page (_lt_a href_eq__qt_https_dd_//github.com/schteppe/cannon.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/schteppe/cannon.js_lt_/a_gt_) explaining what you are trying to do and someone there may be able to help with the parameters.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Tomm Huth","Date":"2018-10-15T19:01:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30070_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/_qt_ rel_eq__qt__qt__gt_@kcoley_lt_/a_gt_ i actually managed to fix it by tweaking the iterations param of the cannonjs plugin_co_ but it would be interesting to know why that seemingly solved it. thanks!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-15T22:38:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFlagging as solved then _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]