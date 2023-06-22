import VideoList from './components/VideoList';

const LIST = [
  {
    url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
    date: '2023-06-21 08:05:00',
  },
  {
    url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
    date: '2023-06-20 20:10:00',
  },
  {
    url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
    date: '2023-02-03 23:16:00',
  },
  {
    url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
    date: '2023-01-03 12:10:00',
  },
  {
    url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
    date: '2023-01-01 16:17:00',
  },
  {
    url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
    date: '2022-12-02 05:24:00',
  },
];

/**
 * Основной компонент приложения, отвечающий за отображение всех элементов на странице. Дочерний компонент VideoList (блок отображения списка видео элементов)
 *
 */
const App = () => {
  return <VideoList list={LIST} />;
};

export default App;
