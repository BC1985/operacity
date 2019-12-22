import React from "react";
import "./SingersList.css";

function SingersList() {
  const singersData = [
    {
      row: "top",
      name: "Lauren Ipsum",
      credentials: "University of Wallamalloo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      row: "top",
      name: "Joe Schmoe",
      credentials: "Faluja Tech",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      image:
        "https://images.unsplash.com/photo-1556822256-05a527652985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
      row: "middle",
      name: "Dow Jones",
      credentials: "Wall Street",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      image:
        "https://previews.123rf.com/images/boarding1now/boarding1now1802/boarding1now180200037/95472493-portrait-young-man-face-smiling-isolated-on-a-white-background.jpg"
    },
    {
      row: "middle",
      name: "Jane Doe",
      credentials: "Kevorkian School of Medicine",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      image:
        "https://media.gettyimages.com/photos/portrait-of-a-beautiful-woman-smiling-picture-id177252247?s=612x612"
    },
    {
      row: "bottom",
      name: "Rhonda Rhodes",
      credentials: "School of Rock",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      image:
        "https://i.pinimg.com/736x/11/2f/ed/112fedf4b41094213e6624010e91207c.jpg"
    },
    {
      row: "bottom",
      name: "Johnny Bravo",
      credentials: "Bob Jones University",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      image:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    }
  ];

  const firstRow = singersData.filter(item => item.row === "top");
  const middleRow = singersData.filter(item => item.row === "middle");
  const bottomRow = singersData.filter(item => item.row === "bottom");
  const FirstRow = () => {
    return (
      <div className="row-container-1">
        {firstRow.map(singer => (
          <div key={singer.name} className="card-container">
            <img src={singer.image} alt={singer.name} className="headshot" />
            <h2 className="singer-name">{singer.name}</h2>
            <p>{singer.credentials}</p>
            <p className="description">{singer.description}</p>
          </div>
        ))}
      </div>
    );
  };
  const MiddleRow = () => {
    return (
      <div className="row-container-2">
        {middleRow.map(singer => (
          <div key={singer.name} className="card-container">
            <img src={singer.image} alt={singer.name} className="headshot" />
            <h2 className="singer-name">{singer.name}</h2>
            <p>{singer.credentials}</p>
            <p className="description">{singer.description}</p>
          </div>
        ))}
      </div>
    );
  };
  const BottomRow = () => {
    return (
      <div className="row-container-3">
        {bottomRow.map(singer => (
          <div key={singer.name} className="card-container">
            <img src={singer.image} alt={singer.name} className="headshot" />
            <h2 className="singer-name">{singer.name}</h2>
            <p>{singer.credentials}</p>
            <p className="description">{singer.description}</p>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="singers-wrapper">
      <h1 className="heading">Meet the Singers</h1>
      <FirstRow />
      <MiddleRow />
      <BottomRow />
    </div>
  );
}

export default SingersList;
