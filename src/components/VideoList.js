import Video from './Video';
import { nanoid } from 'nanoid';

/**
 * Компонент отвечающий за вывод блока отображения списка видео элементов. Родительский компонент App. Дочерний компонент Video
 *
 * @param {object} props.list массив объектов с данными видео файлов
 */
const VideoList = (props) => {
  const { list } = props;

  return list.map((item) => (
    <Video key={nanoid()} url={item.url} date={item.date} />
  ));
};

export default VideoList;
