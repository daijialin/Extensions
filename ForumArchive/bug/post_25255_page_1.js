[{"Owner":"Densaugeo","Date":"2016-09-17T17:36:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have encountered a very strange bug.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter leaving a Babylon scene open overnight_co_ it had frozen_co_ with the following error messages in the terminal_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Error_dd_ WebGL_dd_ vertexAttribDivisorANGLE_dd_ Extension is lost.libs.pkgd.js_dd_9_dd_14884\nError_dd_ WebGL_dd_ drawElementsInstancedANGLE_dd_ Extension is lost.libs.pkgd.js_dd_9_dd_17107\nError_dd_ WebGL_dd_ vertexAttribDivisorANGLE_dd_ Extension is lost.libs.pkgd.js_dd_9_dd_15419\nError_dd_ WebGL_dd_ vertexAttribDivisorANGLE_dd_ Extension is lost.libs.pkgd.js_dd_9_dd_14884\nError_dd_ WebGL_dd_ drawElementsInstancedANGLE_dd_ Extension is lost.libs.pkgd.js_dd_9_dd_17107\nError_dd_ WebGL_dd_ vertexAttribDivisorANGLE_dd_ Extension is lost.libs.pkgd.js_dd_9_dd_15419\nError_dd_ WebGL_dd_ vertexAttribDivisorANGLE_dd_ Extension is lost.libs.pkgd.js_dd_9_dd_14884\nError_dd_ WebGL_dd_ drawElementsInstancedANGLE_dd_ Extension is lost.libs.pkgd.js_dd_9_dd_17107\nError_dd_ WebGL_dd_ vertexAttribDivisorANGLE_dd_ Extension is lost.libs.pkgd.js_dd_9_dd_15419\nError_dd_ WebGL_dd_ No further warnings will be reported for this WebGL context. (already reported 32 warnings_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWhen I refreshed the page_co_ the same errors kept appearing_co_ until I restarted my browser. Has anyone seen anything like this before?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ The scene is periodically creating and destroying instances. When the instances are destroyed_co_ .dispose() is called on them_co_ which I assume is the proper way to destroy an instance.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-19T16:08:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis looks a lot like a browser bug. Can you reproduce with a different browser?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Densaugeo","Date":"2016-09-19T23:03:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNope_co_ I haven_t_t been able to reproduce it all (even in the same browser). If I ever do see it again_co_ I_t_ll take another look at it.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]