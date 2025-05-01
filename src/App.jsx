import home from "./assets/home.svg";
import whatsapp from "./assets/whatsapp.svg";
import ListUser from "./data/ListUser.js";
import CloseFriendOn from "./assets/cf.svg";
import CloseFriendOff from "./assets/cfoff.svg";

import { useState } from "react";

function UserCard({ img, name, location, number, contact, status }) {
  const [CF, setCF] = useState(status);

  return (
    <section
      className={`${
        CF ? "order-first" : "order-none"
      } flex flex-col gap-5 outline outline-[#EFEFEF] shadow-xs p-5 rounded-lg`}
    >
      <div className="flex items-center w-full  gap-5">
        <img
          className="w-[64px] h-[64px] rounded-full"
          src={img}
          alt={`Photo of ${name}`}
        />
        <h1 className="text-[1.1em]">{name}</h1>
        <img
          className={`${
            CF ? "hidden" : "block"
          } cursor-pointer justify-self-end`}
          onClick={() => setCF(!CF)}
          src={CloseFriendOff}
          alt=""
        />
        <img
          onClick={() => setCF(!CF)}
          className={`${CF ? "block" : "hidden"} cursor-pointer`}
          src={CloseFriendOn}
          alt=""
        />
      </div>
      <div className="h-[2px] bg-[#EFEFEF]"></div>
      <div className="flex gap-5">
        <div className="flex flex-1 gap-2">
          <img className="h-fit" src={home} alt="" />
          <p>{location}</p>
        </div>
        <div className="flex flex-1 gap-2">
          <img className="h-fit" src={whatsapp} alt="" />
          <p>
            <a
              className="text-[#007AFF] underline hover:no-underline"
              href={`https://wa.me/${contact}`}
            >
              {number}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  console.log;
  return (
    <main className="flex flex-col items-center h-screen font-[inter]">
      <div className="flex flex-col max-w-[600px] w-full my-5 gap-5">
        <h1 className="text-2xl">
          My Personal <br /> <span className="font-bold">Contact Book</span>
        </h1>
        <div className="Contact-List flex flex-col gap-10 mt-25">
          {ListUser.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              img={user.img}
              location={user.location}
              number={user.number}
              contact={user.contact}
              status={user.status}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
