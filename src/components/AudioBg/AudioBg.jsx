import { VideoStyled } from './Audio.styled';
import video from './video.mp4';

export const VideoBg = () => {
    return (
        <div>
            <VideoStyled src={ video} autoPlay loop muted />
        </div>
    )
}