import React from "react";

const DayTile = ({ dayData }) => {
  let textColorStyle;
  let tileBodyStyle;
  let buttonBorderStyle;

  if (dayData.card_color) {
    const match = dayData.card_color.match(
      /rgba?\((\d+), (\d+), (\d+), (\d+(\.\d+)?)\)/
    );

    if (match) {
      const [r, g, b] = match.slice(1, 4);
      const rgbaColor = `rgba(${r}, ${g}, ${b}, 1)`;

      textColorStyle = {
        color: rgbaColor,
      };

      tileBodyStyle = {
        backgroundColor: rgbaColor,
      };

      buttonBorderStyle = {
        borderColor: "white",
        backgroundColor: rgbaColor,
      };
    }
  } else {
    textColorStyle = { color: "gray" };
    tileBodyStyle = { backgroundColor: "white" };
    buttonBorderStyle = { borderColor: "blue" };
  }

  return (
    <div className="day-tile">
      <div className="tile-header" style={textColorStyle}>
        <p className="p1">{dayData.day_of_the_week}</p>
        <p className="p2">{dayData.day_of_the_month}</p>
      </div>
      <div className="tile-body" style={tileBodyStyle}>
        <h3>{dayData.card_header}</h3>
        <p>{dayData.card_body}</p>
        <button style={buttonBorderStyle}>Schedule Post</button>
        <img src={dayData.card_image} alt={dayData.card_header} />
      </div>
    </div>
  );
};

export default DayTile;
