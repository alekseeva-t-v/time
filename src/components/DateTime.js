/**
 * Компонент отвечающий за вывод даты видео. Родительский компонент Video. 
 *
 * @param {string} props.date дата видео
 */
const DateTime = (props) => {
  const {date} = props;

  return <p className="date">{date}</p>;
};

export default DateTime;
