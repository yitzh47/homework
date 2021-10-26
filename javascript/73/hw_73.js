(async function() {
    'use strict';
    async function loadVideos(){
        try {
            const r = await fetch('videos.json');
            if(!r.ok){
                throw new Error(`${r.status},${r.statusText}`);
            }
            return await r.json();
        }catch(e){
            console.error(e);
        }
    }

    const vidsSidebar = $('#vidsSidebar');
    const vidsPlayer = $('#vidsPlayer');
    const vidPlayingTitle = $('#vidPlayingTitle');

    const vids = await loadVideos();
    vids.forEach(vid=>{
        console.log(`${vid.image}`);
        if(vid.image === 'media'){
            vid.image = 'media/default.jpg';
        }
        $(`<span class="vidInSidebar"><img src="${vid.image}">${vid.title}</span>`).appendTo(vidsSidebar)
        .click(function(){
            vidsPlayer.empty();
            vidsPlayer.append(`<video class="playingVid" src="${vid.url}" autoplay controls></video>`);
            vidPlayingTitle.empty();
            vidPlayingTitle.append(vid.title);
        });
        

    });




}());