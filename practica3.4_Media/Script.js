function Movie_OnStart(){
StackTrace="On Start";
SoundPlay("tron",true);
VideoSetVolume("video",0);
VideoPlay("video");

}

function Frame__0_0(ID){
StackTrace="Scene 1 Frame 0";
Pause();

}

function Frame__1_0(ID){
StackTrace="Scene 2 Frame 0";
Pause();

}

function irsonido_OnClick(){
StackTrace="irsonido.On Click";
SoundPlay("clic",false);
SoundPlay("clic",false);
}

function irsonido_OnRelease(){
StackTrace="irsonido.On Release";
GotoSceneNameAndPlay("Sonido",0);
SoundPlay("clic",false);
}

function videopause_OnClick(){
StackTrace="videopause.On Click";
VideoPause("video");
SoundPlay("clic",false);

}

function videopause_OnRelease(){
StackTrace="videopause.On Release";
VideoResume("video");
SoundPlay("clic",false);

}

function sonidoonvideo_OnClick(){
StackTrace="sonidoonvideo.On Click";
VideoSetVolume("video",100);
SoundPlay("clic",false);
}

function sonidoonvideo_OnRelease(){
StackTrace="sonidoonvideo.On Release";
VideoSetVolume("video",0);
SoundPlay("clic",false);
}

function irvideo_OnRelease(){
StackTrace="irvideo.On Release";
GotoSceneIndexAndPlay("1",0);
SoundPlay("clic",false);

}

function tocadiscos_OnClick(){
StackTrace="tocadiscos.On Click";
TimelinePause("disco");
SoundPause("tron");
SoundPlay("clic",false);

}

function tocadiscos_OnRelease(){
StackTrace="tocadiscos.On Release";
TimelinePlay("disco");
SoundResume("tron");
SoundPlay("clic",false);
}

