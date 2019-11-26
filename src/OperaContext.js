import React, { useState } from "react";
const OperaContext = React.createContext();

function OperaContextProvider(props) {
  const programInfo = [
    {
      date: "Sunday, December 1st",
      time: "7:30",
      composer: "Ludwig Van Beethoven",
      operaName: "Fidelio",
      soloists: "Lauren Ipsum, Joe Schmoe"
    },

    {
      date: "Tuesday, December 3rd",
      time: "7:30",
      composer: "Giacomo Puccini",
      operaName: "Madame Butterfly",
      soloists: "Lauren Ipsum, Joe Schmoe"
    },
    {
      date: "Thursday, December 5th",
      time: "7:30",
      composer: "Giuseppe Verdi",
      operaName: "La Traviata",
      soloists: "Lauren Ipsum, Joe Schmoe"
    },
    {
      date: "Friday, December 6th",
      time: "7:30",
      composer: "Gioachino Rossini",
      operaName: "The Barber of Seville",
      soloists: "Lauren Ipsum, Joe Schmoe"
    },

    {
      date: "Sunday, December 8th",
      time: "7:30",
      composer: "Giacomo Puccini",
      operaName: "Tosca",
      soloists: "Lauren Ipsum, Joe Schmoe"
    },

    {
      date: "Tuesday, December 10th",
      time: "7:30",
      composer: "Giuseppe Verdi",
      operaName: "La Traviata",
      soloists: "Lauren Ipsum, Joe Schmoe"
    },

    {
      date: "Thursday, December 12th",
      time: "7:30",
      composer: "Wolfgang Amadeus Mozart",
      operaName: "Don Giovanni",
      soloists: "Lauren Ipsum, Joe Schmoe"
    },
    {
      date: "Friday, December 13th",
      time: "7:30",
      composer: "Giuseppe Verdi",
      operaName: "Rigoletto",
      soloists: "Lauren Ipsum, Joe Schmoe"
    },
    {
      date: "Sunday, December 15th",
      time: "7:30",
      composer: "Giacomo Puccini",
      operaName: "Madame Butterfly",
      soloists: "Lauren Ipsum, Joe Schmoe"
    },
    {
      date: "Tuesday, December 17th",
      time: "7:30",
      composer: "Giuseppe Verdi",
      operaName: "Aida",
      soloists: "Lauren Ipsum, Joe Schmoe"
    },
    {
      date: "Wednesday, December 18th",
      time: "7:30",
      composer: "Wolfgang Amadeus Mozart",
      operaName: "The Magic Flute",
      soloists: "Lauren Ipsum, Joe Schmoe"
    },
    {
      date: "Friday, December 20th",
      time: "7:30",
      composer: "Wolfgang Amadeus Mozart",
      operaName: "Don Giovanni",
      soloists: "Lauren Ipsum, Joe Schmoe"
    },
    {
      date: "Sunday, December 22nd",
      time: "7:30",
      composer: "Giacomo Puccini",
      operaName: "La Boheme",
      soloists: "Lauren Ipsum, Joe Schmoe"
    },
    {
      date: "Monday, December 23rd",
      time: "7:30",
      composer: "Giuseppe Verdi",
      operaName: "La Traviata",
      soloists: "Lauren Ipsum, Joe Schmoe"
    },

    {
      date: "Friday, December 27th",
      time: "7:30",
      composer: "George Bizet",
      operaName: "Carmen",
      soloists: "Lauren Ipsum, Joe Schmoe"
    },
    {
      date: "Saturday, December 31st",
      time: "7:30",
      composer: "Wolfgang Amadeus Mozart",
      operaName: "The Marriage of Figaro",
      soloists: "Lauren Ipsum, Joe Schmoe"
    }
  ];
  return (
    <OperaContext.Provider value={{ programInfo }}>
      {props.children}
    </OperaContext.Provider>
  );
}

export { OperaContextProvider, OperaContext };
