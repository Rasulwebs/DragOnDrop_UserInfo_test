"use client";
import Image from "next/image";
import "./page.css";
import { useState } from "react";
import addFileImage from "./assets//images/AddFile_NoInfo.png";

// Add the "use client" directive at the top of the file
// to use the createContext function in a client-side component
// Rest of your code
import { createContext } from "react";
// Continue with your code using createContext
interface Card {
  id: number;
  job: string;
  department: string;
  status: string;
  related: number;
  documents: number;
  recruiter: string;
  username: string;
  imagePath: string;
}
export default function Home() {
  const [list1, setList1] = useState<Card[]>([
    {
      id: 1,
      job: "UI/UX дизайнер",
      department: "Отдел разработки мобильного приложения",
      status: "В приоритете",
      related: 3,
      documents: 255,
      recruiter: "Рекруитер",
      username: "Алексей Щербаков",
      imagePath: "/images/user1.png",
    },
    {
      id: 2,
      job: "Маркетолог",
      department: "Отдел маркетинга",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Floyd Miles",
      imagePath: "/images/user2.png",
    },
    {
      id: 3,
      job: "Менеджер по продажам",
      department: "Отдел продаж",
      status: "В приоритете",
      related: 3,
      documents: 255,
      recruiter: "Рекруитер",
      username: "Theresa Webb",
      imagePath: "/images/user3.png",
    },
    {
      id: 4,
      job: "UI/UX дизайнер",
      department: "Отдел разработки мобильного приложения",
      status: "В приоритете",
      related: 3,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Vanessa Johnson",
      imagePath: "/images/user4.png",
    },
  ]);
  const [list2, setList2] = useState<Card[]>([
    {
      id: 5,
      job: "PHP Developer",
      department: "Housekeepers",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Kristin Watson",
      imagePath: "/images/user5.png",
    },
    {
      id: 6,
      job: "Freshers",
      department: "Finance",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Floyd Miles",
      imagePath: "/images/user6.png",
    },
    {
      id: 7,
      job: "Маркетолог",
      department: "Отдел маркетинга",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Floyd Miles",
      imagePath: "/images/user7.png",
    },
    {
      id: 8,
      job: "Маркетолог",
      department: "Отдел маркетинга",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Floyd Miles",
      imagePath: "/images/user8.png",
    },
  ]);

  const [list3, setList3] = useState<Card[]>([
    {
      id: 5,
      job: "PHP Developer",
      department: "Housekeepers",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Kristin Watson",
      imagePath: "/images/user9.png",
    },
    {
      id: 6,
      job: "Freshers",
      department: "Finance",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Floyd Miles",
      imagePath: "/images/user2.png",
    },
    {
      id: 7,
      job: "Маркетолог",
      department: "Отдел маркетинга",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Floyd Miles",
      imagePath: "/images/user10.png",
    },
    {
      id: 8,
      job: "Маркетолог",
      department: "Отдел маркетинга",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Floyd Miles",
      imagePath: "/images/user3.png",
    },
  ]);
  const [list4, setList4] = useState<Card[]>([
    {
      id: 5,
      job: "PHP Developer",
      department: "Housekeepers",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Kristin Watson",
      imagePath: "/images/user4.png",
    },
    {
      id: 6,
      job: "Freshers",
      department: "Finance",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Floyd Miles",
      imagePath: "/images/user2.png",
    },
    {
      id: 7,
      job: "Маркетолог",
      department: "Отдел маркетинга",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Floyd Miles",
      imagePath: "/images/user2.png",
    },
    {
      id: 8,
      job: "Маркетолог",
      department: "Отдел маркетинга",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Floyd Miles",
      imagePath: "/images/user1.png",
    },
  ]);
  const [list5, setList5] = useState<Card[]>([
    {
      id: 5,
      job: "PHP Developer",
      department: "Housekeepers",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Kristin Watson",
      imagePath: "/images/user6.png",
    },
    {
      id: 6,
      job: "Freshers",
      department: "Finance",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Floyd Miles",
      imagePath: "/images/user7.png",
    },
    {
      id: 7,
      job: "Маркетолог",
      department: "Отдел маркетинга",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Floyd Miles",
      imagePath: "/images/user8.png",
    },
    {
      id: 8,
      job: "Маркетолог",
      department: "Отдел маркетинга",
      status: "В приоритете",
      related: 2,
      documents: 182,
      recruiter: "Рекруитер",
      username: "Floyd Miles",
      imagePath: "/images/user9.png",
    },
  ]);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    card: Card,
    listIndex: number
  ) => {
    event.dataTransfer.setData(
      "application/json",
      JSON.stringify({ card, listIndex })
    );
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    listIndex: number
  ) => {
    const data = JSON.parse(event.dataTransfer.getData("application/json")) as {
      card: Card;
      listIndex: number;
    };
    const { card, listIndex: sourceListIndex } = data;

    if (listIndex !== sourceListIndex) {
      let sourceList: Card[] = [];
      let targetList: Card[] = [];

      switch (sourceListIndex) {
        case 0:
          sourceList = [...list1];
          break;
        case 1:
          sourceList = [...list2];
          break;
        case 2:
          sourceList = [...list3];
          break;
        case 3:
          sourceList = [...list4];
          break;
        case 4:
          sourceList = [...list5];
          break;
        default:
          break;
      }

      switch (listIndex) {
        case 0:
          targetList = [...list1];
          targetList.push(card);
          setList1(targetList);
          break;
        case 1:
          targetList = [...list2];
          targetList.push(card);
          setList2(targetList);
          break;
        case 2:
          targetList = [...list3];
          targetList.push(card);
          setList3(targetList);
          break;
        case 3:
          targetList = [...list4];
          targetList.push(card);
          setList4(targetList);
          break;
        case 4:
          targetList = [...list5];
          targetList.push(card);
          setList5(targetList);
          break;
        default:
          break;
      }

      sourceList.splice(
        sourceList.findIndex((item) => item.id === card.username),
        1
      );

      switch (sourceListIndex) {
        case 0:
          setList1(sourceList);
          break;
        case 1:
          setList2(sourceList);
          break;
        case 2:
          setList3(sourceList);
          break;
        case 3:
          setList4(sourceList);
          break;
        case 4:
          setList5(sourceList);
          break;
        default:
          break;
      }
    }
  };

  return (
    <main className="main">
      <div className="allAplicationsInfoWrapp">
        <div
          className="cardsWrapp my-4"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 0)}
        >
          <h2 className="aplicatinTitle">Новые : {list1.length}</h2>
          <div className="usersCardWrapp p-2">
            {list1.length ? (
              list1.map((card) => (
                <div
                  className="card userCard my-2 px-2 py-3"
                  key={card.username}
                  draggable
                  onDragStart={(event) => handleDragStart(event, card, 0)}
                >
                  <div className="topTitlesWrapp d-flex justify-content-between">
                    <span className="topTitles">
                      <h5 className="jobTitle mb-1">{card.job}</h5>
                      <p className="text-secondary m-0 p-0">
                        {card.department.length > 28
                          ? `${card.department.slice(0, 27)}...`
                          : card.department}
                      </p>
                    </span>
                    <span>
                      <button className="btn btn-transparent shadow-1 p-0 fs-5 text-secondary">
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                    </span>
                  </div>
                  <div className="userStatusWrapp my-2 d-flex align-items-center">
                    <span className="userStatus">{card.status}</span>
                    <span className="userRelated m-0 py-0 d-inline-flex align-items-center ms-2">
                      <i className="bi bi-people text-secondary  fs-5 me-1"></i>
                      {card.related}
                    </span>
                    <span className="className m-0 py-0 d-inline-flex align-items-center ms-2">
                      <i className="bi bi-file-earmark-text text-secondary  fs-5 me-1"></i>
                      {card.related}
                    </span>
                  </div>
                  <div className="userInfoWrapp my-1 d-flex align-items-center">
                    <Image src={card.imagePath} alt="user-image" width={28} height={28}/>
                    <div className="userNmaeWrapp ms-2">
                      <p className="text-secondary userRec p-0 m-0">
                        {card.recruiter}
                      </p>
                      <h5 className="userName p-0 m-0">{card.username}</h5>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="noInfo">
                <Image src={addFileImage} alt="add-file" width={28} height={28}/>
                <p className="noInfoText">
                  Если есть подходящие заявки, перетащите их сюда 🤓
                </p>
              </div>
            )}
          </div>
        </div>

        <div
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 1)}
          className="cardsWrapp my-4"
        >
          <h2 className="aplicatinTitle">Текущие : {list2.length}</h2>
          <div className="usersCardWrapp">
            {list2.length ? (
              list2.map((card) => (
                <div
                  className="card userCard my-2 px-2 py-3"
                  key={card.username}
                  draggable
                  onDragStart={(event) => handleDragStart(event, card, 1)}
                >
                  <div className="topTitlesWrapp d-flex justify-content-between">
                    <span className="topTitles">
                      <h5 className="jobTitle mb-1">{card.job}</h5>
                      <p className="text-secondary m-0 p-0">
                        {card.department.length > 28
                          ? `${card.department.slice(0, 27)}...`
                          : card.department}
                      </p>
                    </span>
                    <span>
                      <button className="btn btn-transparent shadow-1 p-0 fs-5 text-secondary">
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                    </span>
                  </div>
                  <div className="userStatusWrapp my-2 d-flex align-items-center">
                    <span className="userStatus">{card.status}</span>
                    <span className="userRelated m-0 py-0 d-inline-flex align-items-center ms-2">
                      <i className="bi bi-people text-secondary  fs-5 me-1"></i>
                      {card.related}
                    </span>
                    <span className="className m-0 py-0 d-inline-flex align-items-center ms-2">
                      <i className="bi bi-file-earmark-text text-secondary  fs-5 me-1"></i>
                      {card.related}
                    </span>
                  </div>
                  <div className="userInfoWrapp my-1 d-flex align-items-center">
                    <Image src={card.imagePath} alt="user-image" width={28} height={28}/>
                    <div className="userNmaeWrapp ms-2">
                      <p className="text-secondary userRec p-0 m-0">
                        {card.recruiter}
                      </p>
                      <h5 className="userName p-0 m-0">{card.username}</h5>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="noInfo">
                <Image src={addFileImage} alt="add-file" width={28} height={28}/>
                <p className="noInfoText">
                  Если есть подходящие заявки, перетащите их сюда 🤓
                </p>
              </div>
            )}
          </div>
        </div>

        <div
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 2)}
          className="cardsWrapp my-4"
        >
          <h2 className="aplicatinTitle">Закрытые : {list3.length}</h2>
          <div className="usersCardWrapp">
            {list3.length ? (
              list3.map((card) => (
                <div
                  className="card userCard my-2 px-2 py-3"
                  key={card.username}
                  draggable
                  onDragStart={(event) => handleDragStart(event, card, 2)}
                >
                  <div className="topTitlesWrapp d-flex justify-content-between">
                    <span className="topTitles">
                      <h5 className="jobTitle mb-1">{card.job}</h5>
                      <p className="text-secondary m-0 p-0">
                        {card.department.length > 28
                          ? `${card.department.slice(0, 27)}...`
                          : card.department}
                      </p>
                    </span>
                    <span>
                      <button className="btn btn-transparent shadow-1 p-0 fs-5 text-secondary">
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                    </span>
                  </div>
                  <div className="userStatusWrapp my-2 d-flex align-items-center">
                    <span className="userStatus">{card.status}</span>
                    <span className="userRelated m-0 py-0 d-inline-flex align-items-center ms-2">
                      <i className="bi bi-people text-secondary  fs-5 me-1"></i>
                      {card.related}
                    </span>
                    <span className="className m-0 py-0 d-inline-flex align-items-center ms-2">
                      <i className="bi bi-file-earmark-text text-secondary  fs-5 me-1"></i>
                      {card.related}
                    </span>
                  </div>
                  <div className="userInfoWrapp my-1 d-flex align-items-center">
                    <Image src={card.imagePath} alt="user-image" width={28} height={28}/>
                    <div className="userNmaeWrapp ms-2">
                      <p className="text-secondary userRec p-0 m-0">
                        {card.recruiter}
                      </p>
                      <h5 className="userName p-0 m-0">{card.username}</h5>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="noInfo">
                <Image src={addFileImage} alt="add-file" width={28} height={28}/>
                <p className="noInfoText">
                  Если есть подходящие заявки, перетащите их сюда 🤓
                </p>
              </div>
            )}
          </div>
        </div>

        <div
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 3)}
          className="cardsWrapp my-4"
        >
          <h2 className="aplicatinTitle">Архив : {list4.length}</h2>
          <div className="usersCardWrapp">
            {list4.length ? (
              list4.map((card) => (
                <div
                  className="card userCard my-2 px-2 py-3"
                  key={card.username}
                  draggable
                  onDragStart={(event) => handleDragStart(event, card, 3)}
                >
                  <div className="topTitlesWrapp d-flex justify-content-between">
                    <span className="topTitles">
                      <h5 className="jobTitle mb-1">{card.job}</h5>
                      <p className="text-secondary m-0 p-0">
                        {card.department.length > 28
                          ? `${card.department.slice(0, 27)}...`
                          : card.department}
                      </p>
                    </span>
                    <span>
                      <button className="btn btn-transparent shadow-1 p-0 fs-5 text-secondary">
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                    </span>
                  </div>
                  <div className="userStatusWrapp my-2 d-flex align-items-center">
                    <span className="userStatus">{card.status}</span>
                    <span className="userRelated m-0 py-0 d-inline-flex align-items-center ms-2">
                      <i className="bi bi-people text-secondary  fs-5 me-1"></i>
                      {card.related}
                    </span>
                    <span className="className m-0 py-0 d-inline-flex align-items-center ms-2">
                      <i className="bi bi-file-earmark-text text-secondary  fs-5 me-1"></i>
                      {card.related}
                    </span>
                  </div>
                  <div className="userInfoWrapp my-1 d-flex align-items-center">
                    <Image src={card.imagePath} alt="user-image" width={28} height={28}/>
                    <div className="userNmaeWrapp ms-2">
                      <p className="text-secondary userRec p-0 m-0">
                        {card.recruiter}
                      </p>
                      <h5 className="userName p-0 m-0">{card.username}</h5>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="noInfo">
                <Image src={addFileImage} alt="add-file" width={28} height={28}/>
                <p className="noInfoText">
                  Если есть подходящие заявки, перетащите их сюда 🤓
                </p>
              </div>
            )}
          </div>
        </div>

        <div
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 4)}
          className="cardsWrapp my-4"
        >
          <h2 className="aplicatinTitle">Удаленные : {list5.length}</h2>
          <div className="usersCardWrapp">
            {list5.length ? (
              list5.map((card) => (
                <div
                  className="card userCard my-2 px-2 py-3"
                  key={card.username}
                  draggable
                  onDragStart={(event) => handleDragStart(event, card, 4)}
                >
                  <div className="topTitlesWrapp d-flex justify-content-between">
                    <span className="topTitles">
                      <h5 className="jobTitle mb-1">{card.job}</h5>
                      <p className="text-secondary m-0 p-0">
                        {card.department.length > 28
                          ? `${card.department.slice(0, 27)}...`
                          : card.department}
                      </p>
                    </span>
                    <span>
                      <button className="btn btn-transparent shadow-1 p-0 fs-5 text-secondary">
                        <i className="bi bi-three-dots-vertical"></i>
                      </button>
                    </span>
                  </div>
                  <div className="userStatusWrapp my-2 d-flex align-items-center">
                    <span className="userStatus">{card.status}</span>
                    <span className="userRelated m-0 py-0 d-inline-flex align-items-center ms-2">
                      <i className="bi bi-people text-secondary  fs-5 me-1"></i>
                      {card.related}
                    </span>
                    <span className="className m-0 py-0 d-inline-flex align-items-center ms-2">
                      <i className="bi bi-file-earmark-text text-secondary  fs-5 me-1"></i>
                      {card.related}
                    </span>
                  </div>
                  <div className="userInfoWrapp my-1 d-flex align-items-center">
                    <Image src={card.imagePath} alt="user-image" width={28} height={28}/>
                    <div className="userNmaeWrapp ms-2">
                      <p className="text-secondary userRec p-0 m-0">
                        {card.recruiter}
                      </p>
                      <h5 className="userName p-0 m-0">{card.username}</h5>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="noInfo">
                <Image src={addFileImage} alt="add-file" width={28} height={28}/>
                <p className="noInfoText">
                  Если есть подходящие заявки, перетащите их сюда 🤓
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
