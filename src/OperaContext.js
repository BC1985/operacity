import React from "react";
const OperaContext = React.createContext();

function OperaContextProvider(props) {
  const programInfo = [
    {
      date: "Sunday, December 1st",
      time: "7:30",
      composer: "Ludwig Van Beethoven",
      operaName: "Fidelio",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image:
        "https://www.hands-free.co.uk/wp-content/uploads/2018/04/ludwig-van-beethoven.jpg"
    },

    {
      date: "Tuesday, December 3rd",
      time: "7:30",
      composer: "Giacomo Puccini",
      operaName: "Madame Butterfly",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image: "https://media.wnyc.org/i/800/0/c/85/1/puccini-6x9.jpg"
    },
    {
      date: "Thursday, December 5th",
      time: "7:30",
      composer: "Giuseppe Verdi",
      operaName: "La Traviata",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image:
        "https://www.jso.co.il/wp-content/uploads/2016/09/giuseppe-verdi-1380806884-hero-wide-0.jpg"
    },
    {
      date: "Friday, December 6th",
      time: "7:30",
      composer: "Gioachino Rossini",
      operaName: "The Barber of Seville",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image: "https://farm8.staticflickr.com/7586/16759104650_5e53141a10.jpg"
    },

    {
      date: "Sunday, December 8th",
      time: "7:30",
      composer: "Giacomo Puccini",
      operaName: "Tosca",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image: "https://media.wnyc.org/i/800/0/c/85/1/puccini-6x9.jpg"
    },

    {
      date: "Tuesday, December 10th",
      time: "7:30",
      composer: "Giuseppe Verdi",
      operaName: "La Traviata",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image:
        "https://www.jso.co.il/wp-content/uploads/2016/09/giuseppe-verdi-1380806884-hero-wide-0.jpg"
    },

    {
      date: "Thursday, December 12th",
      time: "7:30",
      composer: "Wolfgang Amadeus Mozart",
      operaName: "Don Giovanni",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image: "http://burychoral.org/wp-content/uploads/2017/04/mozart.jpg"
    },
    {
      date: "Friday, December 13th",
      time: "7:30",
      composer: "Giuseppe Verdi",
      operaName: "Rigoletto",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image:
        "https://www.jso.co.il/wp-content/uploads/2016/09/giuseppe-verdi-1380806884-hero-wide-0.jpg"
    },
    {
      date: "Sunday, December 15th",
      time: "7:30",
      composer: "Giacomo Puccini",
      operaName: "Madame Butterfly",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image: "https://media.wnyc.org/i/800/0/c/85/1/puccini-6x9.jpg"
    },
    {
      date: "Tuesday, December 17th",
      time: "7:30",
      composer: "Giuseppe Verdi",
      operaName: "Aida",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image:
        "https://www.jso.co.il/wp-content/uploads/2016/09/giuseppe-verdi-1380806884-hero-wide-0.jpg"
    },
    {
      date: "Wednesday, December 18th",
      time: "7:30",
      composer: "Wolfgang Amadeus Mozart",
      operaName: "The Magic Flute",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image: "http://burychoral.org/wp-content/uploads/2017/04/mozart.jpg"
    },
    {
      date: "Friday, December 20th",
      time: "7:30",
      composer: "Wolfgang Amadeus Mozart",
      operaName: "Don Giovanni",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image: "http://burychoral.org/wp-content/uploads/2017/04/mozart.jpg"
    },
    {
      date: "Sunday, December 22nd",
      time: "7:30",
      composer: "Giacomo Puccini",
      operaName: "La Boheme",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image: "https://media.wnyc.org/i/800/0/c/85/1/puccini-6x9.jpg"
    },
    {
      date: "Monday, December 23rd",
      time: "7:30",
      composer: "Giuseppe Verdi",
      operaName: "La Traviata",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image:
        "https://www.jso.co.il/wp-content/uploads/2016/09/giuseppe-verdi-1380806884-hero-wide-0.jpg"
    },

    {
      date: "Friday, December 27th",
      time: "7:30",
      composer: "George Bizet",
      operaName: "Carmen",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image:
        "https://cdn-03.independent.ie/entertainment/music/article34174197.ece/17037/AUTOCROP/w620/2015-11-07_ent_14304189_I1.JPG"
    },
    {
      date: "Saturday, December 31st",
      time: "7:30",
      composer: "Wolfgang Amadeus Mozart",
      operaName: "The Marriage of Figaro",
      soloists: "Lauren Ipsum, Joe Schmoe",
      image: "http://burychoral.org/wp-content/uploads/2017/04/mozart.jpg"
    }
  ];
  return (
    <OperaContext.Provider value={{ programInfo }}>
      {props.children}
    </OperaContext.Provider>
  );
}

export { OperaContextProvider, OperaContext };
