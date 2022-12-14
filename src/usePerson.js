import { useEffect, useState } from "react";
import { Person } from "./data";

export function usePerson(url) {
  const [userList,setUserList]=useState([ ]);
  const [personIndex, setPersonIndex] = useState(0);
  const [currentPerson, setCurrentPerson] = useState(userList[personIndex]);

  let data2;

  async function userListFun() {}

  function previous() {
    // personIndex < userList.length && personIndex > 0
    //   ? setPersonIndex(personIndex - 1)
    //   : null;
      setPersonIndex(userList.indexOf(currentPerson)-1)
      console.log(personIndex);
  }

  async function next() {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const {
      name: { first, last, title },
    } = data.results[0];
    const name1=`${title}. ${first} ${last}`;
    setCurrentPerson(name1);
    userList.push(name1);
    // console.log(userList.indexOf(currentPerson));
  }

  useEffect(()=>{
    setCurrentPerson(userList[personIndex])
  },[personIndex])
//   console.log("userlIst", userList);
  return [userList,currentPerson, previous, next];
}
