[{"Owner":"Pryme8","Date":"2016-03-31T00:44:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk take this case and scenario._lt_br /_gt__lt_br /_gt_\n\tI have some sort of path its length and shape is irrelevant_co_ but it at last has two points_co_ a start and an end._lt_br /_gt_\n\tNow I want to take an object_co_ and with and array in the form of_lt_br /_gt_\n\tkeys _eq_ [{value_co_time_co_easing}_co_{value_co_time_co_ easing}_co_{value_co_time_co_ easing} ]_sm__lt_br /_gt_\n\tthen call it with something like_dd__lt_br /_gt_\n\tvar followPath _eq_ new Object.followPath(keys_co_ args)_sm__lt_br /_gt_\n\tfollowPath.start()_sm__lt_br /_gt__lt_br /_gt_\n\tAny takers?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-03-31T02:07:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think ive figured it out_co_ the one thing I need to solve is how would I return the position of a point on a line by percent of the line?_lt_br /_gt__lt_br /_gt_\n\tok... kinda got it structured the way I want... now I got a weird bug._lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#AGOCE%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#AGOCE#0_lt_/a_gt__lt_br /_gt_\n\twhen I set the spheres position it flattens it and makes the mesh a circle? huh?_lt_br /_gt__lt_br /_gt_\n\tNevermind it was because the y was nan._lt_br /_gt__lt_br /_gt_\n\tNow the question is why is it not starting from the start point that I am passing to it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#AGOCE%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#AGOCE#1_lt_/a_gt__lt_br /_gt_\n\tif I comment out the lerp then its where its supposed to be._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#AGOCE%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#AGOCE#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI dont quite understand why its teleporting back to 0_co_0_co_0\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-03-31T03:54:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#AGOCE%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#AGOCE#3_lt_/a_gt__lt_br /_gt_\n\tSo removing the multiplication of the percent stopped it from working i guess... gonna figure out a work around but till then_co_ yea this kinda works without the smoothness._lt_br /_gt__lt_br /_gt_\n\tIts the starts of a camera Boone system..._lt_br /_gt__lt_br /_gt_\n\tfor the time being i have _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#AGOCE%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#AGOCE#5_lt_/a_gt__lt_br /_gt_\n\twhich works but I want to get it all onto one line instead of 3 for the lerp._lt_br /_gt__lt_br /_gt_\n\tI worked out most of this_co_ and made a demo thread.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-03-31T07:21:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tJust thinking aloud - why won_t_t you use the animation system?  _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Animations_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Animations_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-03-31T08:00:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHave you seen _lt_span_gt_@Jerome_t_s rollercoaster _lt_/span_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1HH4OJ%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1HH4OJ#13?_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-03-31T12:43:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMaybe could you use these two math objects _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_Curve3#curve3-object_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_Curve3#curve3-object_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_Path3D_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_Path3D_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-03-31T16:00:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_122991_qt_ data-ipsquote-contentid_eq__qt_21591_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1459408916_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 hours ago_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tJust thinking aloud - why won_t_t you use the animation system?  _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Animations_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Animations_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHmm_co_ interesting raan.  I kinda skipped over that idea_co_ and went right to how I would do it in unity.  I think maybe I_t_ll take a look at doing the same thing but with animations and see how tha performs.  Do a bench test of my lerp loop vs animations_co_ and I_t_m gonna go from there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tjerome I think the 3D path may be my ticket_co_ I was just looking over it but it seems it automatically can construct distances between points which would be way easier to find points by percentage then.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso perhaps a combination of 3D path and animations instead of a custom lerp?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-03-31T16:26:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyep_co_ the Path3D gives you the distance of each point from the beginning (first point)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-03-31T16:36:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust looked at your roller coaster example_co_ and learned freezeWorldMatrix_co_ coolness.  Also I like how you did the car and handled it_t_s rotation to the track very intuitive. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYea I just mocked this up really fast because I needed a way to more effectively animate my camera on set rails.  With the info you guys gave me and the prototype I_t_ll be able to create what I need thank you!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can_t_t wait to see what you guys think of my surface2air middle tutorial I_t_m sure y_t_all will spawn tons of ideas.  I want to get it done though so I can move on the deploying a custom physics system for a dual blade helicopter.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]