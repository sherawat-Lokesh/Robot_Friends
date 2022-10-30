import React from "react";
import Card from "./card";

const CardList = ({ robot }) => {
  return (
    <div>
      {robot.map((_, i) => {
        return (
          <Card
            key={robot[i].id}
            name={robot[i].username}
            email={robot[i].email}
          />
        );
      })}
    </div>
  );
};
export default CardList;
