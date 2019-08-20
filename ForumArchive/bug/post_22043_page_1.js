[{"Owner":"ajhalls","Date":"2016-04-19T22:16:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRunning Firefox 45.02 and downloaded the newest Babylon.js and the Samples last night. After unzipping into local folder_co_ I get _qt_Error_dd_ WebGL not supported_qt_ when doing any of the demos. It works great on the actual website_co_ but not on localhost from the files on Github.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI then tried uploading it to a web server_co_ and get the following errors when trying to access the demo Samples-master/Demos/AdvancedShadows/index.html_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt__qt_NetworkError_dd_ 404 Not Found - https_dd_//cdn.xxx.com/Babylon.js-master/Samples-master/css/index.css_qt_\n_qt_NetworkError_dd_ 404 Not Found - https_dd_//cdn.xxx.com/Babylon.js-master/Assets/CamTouchOff.png_qt_\n_qt_NetworkError_dd_ 404 Not Found - https_dd_//cdn.xxx.com/Babylon.js-master/Assets/CamVirtualJoy.png_qt_\n_qt_NetworkError_dd_ 404 Not Found - https_dd_//cdn.xxx.com/Assets/CamGamepadJoy.png_qt_\n_qt_NetworkError_dd_ 404 Not Found - https_dd_//cdn.xxx.com/Babylon.js-master/Assets/CamDeviceOff.png_qt_\n_qt_NetworkError_dd_ 404 Not Found - https_dd_//cdn.xxx.com/Babylon.js-master/Assets/camera.png_qt_\n_qt_NetworkError_dd_ 404 Not Found - https_dd_//cdn.xxx.com/Babylon.js-master/Assets/CamAnaGly.png_qt__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIn particular the index.css file seems to be missing from any meaningful directory as line 18 of the index.html has this line_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    &lt_sm_link href_eq__qt_../../css/index.css_qt_ rel_eq__qt_stylesheet_qt_ /&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThat doesn_t_t point anywhere as the only index.css files are in subdirectories of the Samples-master directory such as the CYOS directory.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am just experimenting with Babylon.js as a replacement to Three.js and am dissappointed that you can_t_t seem to unzip and use anything. Here is what my directory structure looks like and you can see all the PNG files listed in the errors above are indeed missing for some reason.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7350_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/Capture.PNG.3a1c02a3d789ae463b667f9ddeda6ea1.PNG_qt_ alt_eq__qt_Capture.PNG_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-20T23:31:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello this is a security restriction of Borwsers. You will have to host your files in a local web server like apache or IIS\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ajhalls","Date":"2016-04-21T17:00:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ I thought the same thing which is why I copied it to a server. 404 errors are not security errors_co_ they would seem to be either due to a sloppy commit that excluded needed resource files_co_ or poor documentation of where to download the files.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt__lt_span_gt__qt_NetworkError_dd_ 404 Not Found - https_dd_//cdn.xxx.com/Babylon.js-master/Samples-master/css/index.css_qt__lt_/span_gt_\n_lt_span_gt__qt_NetworkError_dd_ 404 Not Found - https_dd_//cdn.xxx.com/Babylon.js-master/Assets/CamTouchOff.png_qt__lt_/span_gt_\n_lt_span_gt__qt_NetworkError_dd_ 404 Not Found - https_dd_//cdn.xxx.com/Babylon.js-master/Assets/CamVirtualJoy.png_qt__lt_/span_gt_\n_lt_span_gt__qt_NetworkError_dd_ 404 Not Found - https_dd_//cdn.xxx.com/Assets/CamGamepadJoy.png_qt__lt_/span_gt_\n_lt_span_gt__qt_NetworkError_dd_ 404 Not Found - https_dd_//cdn.xxx.com/Babylon.js-master/Assets/CamDeviceOff.png_qt__lt_/span_gt_\n_lt_span_gt__qt_NetworkError_dd_ 404 Not Found - https_dd_//cdn.xxx.com/Babylon.js-master/Assets/camera.png_qt__lt_/span_gt_\n_lt_span_gt__qt_NetworkError_dd_ 404 Not Found - https_dd_//cdn.xxx.com/Babylon.js-master/Assets/CamAnaGly.png_qt__lt_/span_gt__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI downloaded the Babylon-master_co_ Samples-master_co_ Extensions-master_co_ and UserFunctions-master_co_ and yet doing a search through all those folders for _qt_index.css_qt_ shows them in a few folders_co_ but not where the demo files use it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_Capture.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7373_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/Capture.PNG.167bc46ac875bd6e98ae8e528d6bfeb3.PNG_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIn fact you can see it has an index.css under Demos\\Sponza_co_ so you would think you could run that demo_co_ but no_co_ it is looking for an index.css under _qt__lt_span_gt_BabylonJS/Samples-master/css/index.css_qt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see there is no `css` directory on the github page_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Samples_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Samples_lt_/a_gt_ though there is an `scss` directory. That doesn_t_t help at all though when the demo files_co_ such as this one_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Samples/blob/master/Demos/Actions/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Samples/blob/master/Demos/Actions/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ton line 18 refer to  ` &lt_sm__lt_span_gt_link_lt_/span_gt_ _lt_span_gt_href_lt_/span_gt__eq__lt_span_gt__lt_span_gt__qt__lt_/span_gt_../../css/index.css_lt_span_gt__qt__lt_/span_gt__lt_/span_gt_ _lt_span_gt_rel_lt_/span_gt__eq__lt_span_gt__lt_span_gt__qt__lt_/span_gt_stylesheet_lt_span_gt__qt__lt_/span_gt__lt_/span_gt_ /&gt_sm_ `\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor fun I copied it again to a different web server_co_ and running the Sponza demo_co_ yes I get the 404 on the css file_co_ but I still get ` _lt_span_gt__lt_span_gt_Error_dd_ WebGL not supported_lt_/span_gt__lt_/span_gt_ `.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is discouraging for several reasons_co_ first is why am I getting all these security errors? ThreeJS runs just fine on localhost. Sure I could solve this for myself_co_ but what about my customers? Again_co_ I have copied it to an external apache webserver and am still getting WebGL errors in Firefox_co_ but not in IE or Chrome. Missing files in the commit / documentation errors are the types of issues I would expect to have to work through with an immature application_co_ not one with the following that BabylonJS seems to have - which leaves me confused as to whether I am making a mistake somewhere by skipping a step_co_ or if these really are legitimate issues.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am sure I could go the the main site and crawl the site and download all the files manually_co_ but that seems silly when I would expect what I need to be in the Github repository.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#FF0000_sm__qt__gt__lt_strong_gt_UPDATE_dd_ _lt_/strong_gt__lt_/span_gt_for some reason WebGL on firefox stopped working in the past couple days. I had to upgrade my video drivers to get it working again. That solves the security error_co_ but doesn_t_t address missing files in the downloads.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-22T17:37:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI uploaded the missing files..Let me know if I missed some\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ajhalls","Date":"2016-04-22T18:14:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAwesome_co_ thank you so much_co_ everything seems to be working now.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]