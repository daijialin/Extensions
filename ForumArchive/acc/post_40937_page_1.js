[{"Owner":"MibuWolf","Date":"2018-10-29T12:31:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tHi_lt_span_gt_ _lt_/span_gt__lt_span_gt__lt_span_gt__dd_ _lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t       I am new beginner of Babylonjs _co_ I want to load a mesh(.obj) by typescript.    \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t     Here is my code （run in playground）：\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t     \n\t\t_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_class_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt_Playground {_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_public_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_static_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt_CreateScene(engine_dd_ BABYLON.Engine_co_ canvas_dd_ HTMLCanvasElement)_dd_ BABYLON.Scene {_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// This creates a basic Babylon Scene object (non-mesh)_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt_scene _eq__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt_BABYLON.Scene(engine)_sm__lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\t\t\t\t\t \n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// This creates and positions a free camera (non-mesh)_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt_camera _eq__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt_BABYLON.FreeCamera(_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_camera1_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt_BABYLON.Vector3(_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_5_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ -_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_10_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_co_ scene)_sm__lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\t\t\t\t\t \n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// This targets the camera to scene origin_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_camera.setTarget(BABYLON.Vector3.Zero())_sm__lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\t\t\t\t\t \n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// This attaches the camera to the canvas_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_camera.attachControl(canvas_co__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_sm__lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\t\t\t\t\t \n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// This creates a light_co_ aiming 0_co_1_co_0 - to the sky (non-mesh)_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt_light _eq__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt_BABYLON.HemisphericLight(_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_light1_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt_BABYLON.Vector3(_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_co_ scene)_sm__lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\t\t\t\t\t \n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// Default intensity is 1. Let_t_s dim the light a small amount_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_light.intensity _eq__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0.7_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__sm__lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\t\t\t\t\t \n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// BABYLON.SceneLoader.ImportMesh(_qt_Rabbit_qt__co_ _qt_scenes/_qt__co__qt_Rabbit.babylon_qt__co_ scene_co_ function (newMeshes) {_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_BABYLON.SceneLoader.ImportMesh(_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_Rabbit_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_scenes/Box/_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_Box.obj_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ scene_co__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_function_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt_(newMeshes) {_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt_rabbit _eq_ newMeshes[_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_]_sm__lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t \n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_if_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_(rabbit _eq__eq__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_null_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_{_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_console.log(_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_rabbit is null_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_}_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_else_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_{_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_rabbit.scaling _eq__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt_BABYLON.Vector3(_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0.1_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0.1_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0.1_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_sm__lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_console.log(_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_I can see the rabbit_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_sm__lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_}_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\t\t\t\t\t \n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// scene.beginAnimation(skeletons[0]_co_ 0_co_ 100_co_ true_co_ 0.8)_sm__lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_})_sm__lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\t\t\t\t\t \n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_return_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt_scene_sm__lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_}_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_}_lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\t\t\t\t_lt_/div_gt_\n\t\t\t_lt_/div_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\tWhen  I load Box.obj I got a log  _qt_rabbit is null_qt_.   but  when i load a_lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_Rabbit_lt_/span_gt_.babylon file it work good.   \n\t_lt_/div_gt_\n\n\t_lt_p_gt_\n\t\tWhat happened when I loaded.Obj?\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tWho can help me load .obj Mesh By Typescript?\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\t \n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tThank you\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\t \n\t_lt_/p_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-29T17:38:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and welcome!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou have to make sure that box.obj contains a mesh named _qt_Rabbit_qt_ or use_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#fffffe_sm_ color_dd_#000000_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt_BABYLON.SceneLoader.ImportMesh(_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_ color_dd_#a31515_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt__qt__qt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_ color_dd_#000000_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt__co__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_ color_dd_#a31515_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt__qt_scenes/Box/_qt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_ color_dd_#000000_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt__co__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_ color_dd_#a31515_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt__qt_Box.obj_qt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_ color_dd_#000000_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt__co_ scene_co__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_ color_dd_#0000ff_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt_function_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_ color_dd_#000000_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt__lt_span_gt_ _lt_/span_gt_(newMeshes)_lt_span_gt_ _lt_/span_gt__lt_span_gt_﻿_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MibuWolf","Date":"2018-10-30T03:08:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_233176_qt_ data-ipsquote-contentid_eq__qt_40937_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1540834728_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello and welcome!\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tYou have to make sure that box.obj contains a mesh named _qt_Rabbit_qt_ or use_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_BABYLON.SceneLoader.ImportMesh(_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#a31515_sm_font-size_dd_14px_sm__qt__gt__qt__qt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt__co__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#a31515_sm_font-size_dd_14px_sm__qt__gt__qt_scenes/Box/_qt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#a31515_sm_font-size_dd_14px_sm__qt__gt__qt_Box.obj_qt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt__co_ scene_co__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#0000ff_sm_font-size_dd_14px_sm__qt__gt_function_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt__lt_span_gt_ _lt_/span_gt_(newMeshes)_lt_span_gt_ _lt_/span_gt__lt_span_gt_﻿_lt_span_gt_﻿_lt_/span_gt__lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tThank you for you reply.    I misunderstood the meaning of meshName......  \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tthank you anain\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-30T15:11:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo worry. Flagging as solved\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]