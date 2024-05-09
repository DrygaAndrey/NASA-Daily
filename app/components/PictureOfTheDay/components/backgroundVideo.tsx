interface VideoProps {
    url: string;
}

function BackgroundVideo({ url }: VideoProps) {
    const videoId = url.split('/').pop()?.split('?').shift();
    return (
        <iframe
            width="100%"
            height="100%"
            src={`${url}&playlist=${videoId}&autoplay=1&mute=1&controls=0&modestbranding=1&frameborder=0&loop=1`}
            allowFullScreen
            allow='autoplay'
        >
        </iframe>
    );
}

export default BackgroundVideo;
