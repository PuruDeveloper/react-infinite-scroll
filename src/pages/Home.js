import React, { useState, useContext, useEffect } from "react";
import { Usercontext } from "../App";
import "./Home.css";

function Home() {
  const [list, setList] = useState([]);
  const { dispatch } = useContext(Usercontext);
  const logOut = (e) => {
    e.preventDefault();
    dispatch({
      type: "DELETE_USER",
    });
  };

  const fetchFunction = async (count) => {
    await fetch(`https://randomuser.me/api/?results=${count}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setList([...list, ...data.results]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  window.onscroll = async function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      const myTimeout = await setTimeout(fetchFunction(10), 1000);
    }
  };

  useEffect(() => {
    fetchFunction(20);
  }, []);
  return (
    <div className="home">
      <h1>Home</h1>
      <button className="button" onClick={(e) => logOut(e)}>
        Logout
      </button>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {list.map((el, index) => {
              return (
                <tr key={index}>
                  <td>
                    {el.name.first} {el.name.last}
                  </td>
                  <td>
                    <img src={el.picture.large} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
