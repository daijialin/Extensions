[{"Owner":"Paradine","Date":"2014-10-21T15:47:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have been trying to export animated model but with no luck does not show up on web and log file gives error and warnings._lt_br_gt_It is not camera nor light issue as they are added externally._lt_br_gt__lt_br_gt_It worked before Armature was added and animation and parenting applied._lt_br_gt__lt_br_gt_Blend (2.72) file can be gotten here_dd_ tlu.ee/~paradine/hairPerm2.blend_lt_br_gt__lt_br_gt_Any help appriciated._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Found Empty Object! (why it did not rendered)  And did not like more than 4 instances._lt_br_gt__lt_br_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2014-10-21T20_dd_00_dd_32Z_t_ title_eq__t_10/21/2014 08_dd_00  PM_t_ data-short_eq__t_4 yr_t__gt_October 21_co_ 2014_lt_/time_gt_ by Paradine_lt_/strong_gt_\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Paradine","Date":"2014-10-21T20:12:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_While now it works._lt_br_gt_Wierd anomalies in animation seems to be still existing_co_ make them look tottally different in babylon compared to blender._lt_br_gt_Why?_lt_br_gt_Updated Blend (2.72) file can be gotten here_dd_ tlu.ee/~paradine/hairPerm4.blend_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Carlos R","Date":"2014-10-21T21:02:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I also have some problems trying to export my model_co_ then i update blender to version 2.72 and everything works as i expected._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What kind of anomalies your animation have? can you create an example? upload it to _lt_a href_eq__qt_http_dd_//www.babylonjs/playground/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs/playground/_lt_/a_gt_ or in dropbox. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Paradine","Date":"2014-10-21T22:12:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_They act off_co_ I used for babylon its basic loadscene and beginanimation on loadcene finish._lt_br_gt_Here is comparison_dd_ \n_lt_/p_gt__lt_div class_eq__qt_ipsEmbeddedVideo_qt_ contenteditable_eq__qt_false_qt__gt__lt_div_gt__lt_iframe width_eq__qt_480_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/ieP0JkB8O90?feature_eq_oembed_qt_ frameborder_eq__qt_0_qt_ allowfullscreen_eq__qt_true_qt__gt__lt_/iframe_gt__lt_/div_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-10-21T22:56:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_What is in the log file?  The most common issue is having some mesh vertices influenced by more than 4 bones.  There are warnings in the log file which will indicate this if so._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Paradine","Date":"2014-10-21T23:13:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_At first I thought so too so I updated blender file now as you can see on video there are only 4 bones. Only warning log gives of are about camera not being setup._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-10-22T00:55:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Paradine_co_ is there a reason you have all those tiny cuticle meshes(335 of them)  as separate objects  rather than a single mesh?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Paradine","Date":"2014-10-22T01:44:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_They should open and close like flower petals around cortex. (Animated)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-10-22T17:04:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_58633_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_9928_qt_ data-ipsquote-username_eq__qt_Paradine_qt_ data-cite_eq__qt_Paradine_qt_ data-ipsquote-timestamp_eq__qt_1413942278_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_They should open and close like flower petals around cortex. (Animated)_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well I looked at your file in blender - can_t_t see any opening or closing. Not even sure what would drive it - but that is an aside_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The problems you have seem to be stemming from your meshes and rig._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is your what I get when I export your hair4Perm file to babylon._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/paradine/index3.html_qt_ rel_eq__qt_external nofollow_qt__gt_Hair unmodified_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When I looked at the file the rig is at  x_eq_ -0.01_co_ y _eq_ -1.69_co_ z _eq_ -9.75_lt_/p_gt__lt_p_gt_The cortex mesh is at x _eq_ -0.02_co_ y_eq_ -0.006_co_ z_eq_ .25 and has a scale factor of 5 and rotation about y _eq_ -1.57_lt_/p_gt__lt_p_gt_The shaft mesh is at a similar position and similar scale and rotation values._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I moved the rig and meshes to 0_co_0_co_0_co_ set their origins to 0_co_0_co_0 and then applied the rotation and scale for the two meshes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here are the results for the rig with those meshes_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/paradine/index2.html_qt_ rel_eq__qt_external nofollow_qt__gt_Cortex only_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/paradine/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_HairShaft Only_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_They do not undergo any translation_co_ no flattening or twisting at the top - in fact seem to behave like they do in Blender._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I did not try anything with all those cuticles as there are 300+ and all with different scale and rotation values_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hope that helps._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Paradine","Date":"2014-10-23T09:08:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Cool thx._lt_br_gt_Now I know what is the problem._lt_br_gt_Deem I really hoped babylon will take location and origin into account._lt_br_gt__lt_br_gt_As for cuticle animation_co_ it is set up with babylon animation with x rotation about 0.30 rads applied in for each cuticle with loop._lt_br_gt_But I think appling parenting on cuticle has messed up those point of origins in this file._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_//On .babylon loadfor(var i _eq_ 0_sm_ i &lt_sm_ newMeshes.length_sm_ ++i){  if (newMeshes[i].name.substr(0_co_ 7).localeCompare(_qt_Cuticle_qt_) _eq__eq_ 0) {     var animateCuticleOpen _eq_ new BABYLON.Animation(_qt_ani_qt_ + newMeshes[i].name_co_ _qt_rotation.x_qt__co_ 25_co_         BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_     var keys _eq_ [{ frame_dd_ 0_co_ value_dd_ newMeshes[i].rotation.x }_co_        { frame_dd_ 50_co_ value_dd_ newMeshes[i].rotation.x + 0.30 }_co_        { frame_dd_ 100_co_ value_dd_ newMeshes[i].rotation.x }]_sm_     animateCuticleOpen.setKeys(keys)_sm_     newMeshes[i].animations.push(animateCuticleOpen)_sm_  }}_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]