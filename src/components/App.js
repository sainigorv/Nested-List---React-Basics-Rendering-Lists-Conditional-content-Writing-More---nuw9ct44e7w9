import React, { Component, useEffect, useState } from "react";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  // const [stateIndex , setStateIndex] = useState();

  useEffect(() => {
    setState(null);
  }, []);

  function stateClick(index) {
    setCity(null);
    setState((prevIndex) => {
      if (prevIndex == index) {
        return null;
      }
      return index;
    });
  }

  function cityClick(ind) {
    setCity((prevIndex) => {
      if (prevIndex == ind) {
        return null;
      }
      return ind;
    });
  }

  return (
    <div id="main">
      {states.map((element, index) => {
        return index == state ? (
          <div>
            <li
              id={"state" + (index + 1)}
              key={element.name + (index + 1)}
              onClick={() => stateClick(index)}
            >
              {element.name}
            </li>{" "}
            <ul>
              {states[state].cities.map((element, ind) => {
                return ind == city ? (
                  <div>
                    <li
                      id={"city" + (ind + 1)}
                      key={element.name + (ind + 1)}
                      onClick={() => cityClick(ind)}
                    >
                      {element.name}
                    </li>
                    <ul>
                      {states[state].cities[city].towns.map((element, i) => {
                        return (
                          <li
                            id={"town" + (i + 1)}
                            key={element.name + (i + 1)}
                          >
                            {element.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  <li
                    id={"city" + (ind + 1)}
                    key={element.name + (ind + 1)}
                    onClick={() => cityClick(ind)}
                  >
                    {element.name}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <li
            id={"state" + (index + 1)}
            key={element.name + (index + 1)}
            onClick={() => stateClick(index)}
          >
            {element.name}
          </li>
        );
      })}
    </div>
  );
}

export default App;
