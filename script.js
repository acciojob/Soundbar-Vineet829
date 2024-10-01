function playsound(soundfile){
	const audio_ele=document.getElementById("audio");
	while(audio_ele.firstChild){
		audio_ele.removeChild(audio_ele.firstChild);
	}
	const audio_source=document.createElement('source');
	audio_source.src=`sound/${soundfile}`;
	audio_ele.appendChild(audio_source);
	audio_ele.load();
	audio_ele.play();
	return true;
}
function stopsound() {
	const audio_ele=document.getElementById("audio");
	audio_ele.pause();
	audio_ele.currentTime=0;
}
