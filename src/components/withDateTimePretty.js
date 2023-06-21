import moment from 'moment/moment';

const withDateTimePretty = (Component) => (props) => {
  const { date } = props;

  const changeDateFormat = (date) => {
    const dateDifference = moment().diff(moment(date));
    if (dateDifference < 60 * 60 * 1000) {
      return '12 минут назад';
    } else if (
      dateDifference >= 60 * 60 * 1000 &&
      dateDifference < 24 * 60 * 60 * 1000
    ) {
      return '5 часов назад';
    } else {
      return `${moment().diff(moment(date), 'days')} дней назад`
    }
  };

  return <Component date={changeDateFormat(date)} />;
};

export default withDateTimePretty;
