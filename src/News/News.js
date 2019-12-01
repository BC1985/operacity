import React from "react";
import "./News.css";

const newsItems = [
  {
    id: 1,
    heading: "Dolor sed viverra ipsum nunc aliquet.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor. Et ultrices neque ornare aenean euismod elementum. Sed libero enim sed faucibus turpis. Varius duis at consectetur lorem donec massa sapien. Habitant morbi tristique senectus et netus et malesuada fames ac. Dolor sed viverra ipsum nunc aliquet. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Urna neque viverra justo nec ultrices dui sapien eget mi. Aliquet enim tortor at auctor urna nunc.",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2byYIe7uG_3HzNxl1a0YAs4OzfYLjfIO9CKAzH47z60RJPlhB&s",
    imageDescription: "Sagittis nisl rhoncus mattis rhoncus urna neque"
  },
  {
    id: 2,
    heading: "Lobortis elementum nibh tellus molestie nunc non blandit massa.",
    content:
      "Velit ut tortor pretium viverra suspendisse. Ullamcorper sit amet risus nullam eget felis. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Ultrices vitae auctor eu augue ut lectus arcu. Nulla porttitor massa id neque aliquam vestibulum morbi. Non blandit massa enim nec dui nunc mattis enim ut. Mattis nunc sed blandit libero volutpat. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Lorem ipsum dolor sit amet consectetur adipiscing. Cursus mattis molestie a iaculis at erat.",
    img:
      "https://theinspiredclassroom.com/wp-content/uploads/2017/05/students-singing.jpg",
    imageDescription: "Eget nunc scelerisque viverra mauris"
  },
  {
    id: 3,
    heading: "Magna sit amet purus gravida quis blandit turpis cursus in",
    content:
      "In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. In cursus turpis massa tincidunt dui. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Fermentum posuere urna nec tincidunt praesent semper feugiat. In ante metus dictum at tempor. Elementum curabitur vitae nunc sed velit dignissim sodales. Duis at consectetur lorem donec massa sapien faucibus. Orci a scelerisque purus semper. Nec tincidunt praesent semper feugiat nibh sed pulvinar.",
    img:
      "https://st.depositphotos.com/1258191/5177/i/450/depositphotos_51778961-stock-photo-conductor-directing-symphony-orchestra.jpg",
    imageDescription: "Pharetra magna ac placerat vestibulum"
  }
];

const Item = props => {
  const { heading, content, img, description } = props;
  return (
    <div className="item-container">
      <h2>{heading}</h2>
      <img src={img} alt={heading} id="news-img"/>
      <p className="img-description">{description}</p>
      <p className="content">{content}</p>
    </div>
  );
};

function News() {
  return (
    <div className="news-wrapper">
      <h1>News</h1>

      {newsItems.map(item => (
        <Item
          content={item.content}
          heading={item.heading}
          key={item.id}
          img={item.img}
          description={item.imageDescription}
        />
      ))}
    </div>
  );
}

export default News;
