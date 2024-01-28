// TimelineCard.js
import React from "react";

interface TimelineCardProps {
  title: string;
  content: string;
}

const TimelineCard = ({ title, content }: TimelineCardProps) => {
  return (
    <div className="card">
      <div className="info">
        <h3 className="title">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
