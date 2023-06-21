import React from "react";
import DateTime from "./DateTime";
import withDateTimePretty from "./withDateTimePretty";

const DateTimePretty = withDateTimePretty(DateTime);

const Video = (props) => {
  const { url, date } = props
  return (
    <div className="video">
      <iframe
        src={url}
        title={url}
        allow="autoplay; encrypted-media"
      ></iframe>
      <DateTimePretty date={date} />
    </div>
  );
};

export default Video;
