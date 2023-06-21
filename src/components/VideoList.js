import Video from './Video';
import { nanoid } from 'nanoid';

const VideoList = (props) => {
  const { list } = props;
  return list.map((item) => (
    <Video key={nanoid()} url={item.url} date={item.date} />
  ));
};

export default VideoList;
