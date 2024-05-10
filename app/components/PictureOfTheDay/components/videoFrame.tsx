interface VideoProps {
    url: string;
}

function VideoFrame({ url }: VideoProps) {
    const videoId = url.split('/').pop()?.split('?').shift();
    console.log('URL', url);
    return (
        <iframe

            src={`${url}&playlist=${videoId}&autoplay=1&mute=1&controls=0&modestbranding=1&frameborder=0&loop=1`}
            allowFullScreen
            allow='autoplay'
        >
        </iframe>
    );
}

export default VideoFrame;
