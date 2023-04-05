import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
async function Home() {
  const querySnapshot = await getDocs(collection(firestore, "Memories"));
  const [info, setInfo] = useState([]);
  querySnapshot.forEach((doc) => {
    var data = doc.data();
    setInfo((prev) => {
      return [...prev, data];
    });
    console.log(info);
  });

  return (
    <div>
      <Navbar />
      {info.map((dets) => {
        return <h1>{dets.details}</h1>;
      })}

      {/* <Card date={info.values[0]} years={info.values[3]} description = {info.values[1]}/> */}
    </div>
  );
}

export default Home;
