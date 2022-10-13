import { useState ,useEffect} from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App grid h-screen place-items-center bg-slate-400">
      <User></User>
    </div>
  );
}

function User(){
  const [notificationCount,setNotificationCount] = useState(0);
  let [userData,setUserData] = useState([{
    id: 1,
    avatar: 'avatar-mark-webber.webp',
    name: 'Mark Webber',
    activity: 'Reacted to your recent post',
    interaction:  'My first tournament today',
    time: '1m ago',
    active: true
},
{
    id: 2,
    avatar: 'avatar-angela-gray.webp',
    name: 'Angela Gray',
    activity: 'followed you',
    time: '5m ago',
    active: true
},
{
    id: 3,
    avatar: 'avatar-jacob-thompson.webp',
    name: 'Jacob Thompson',
    activity: 'has joined your group',
    interaction:  'Chess Club',
    time: '1day ago',
    active: true
},
{
    id: 4,
    avatar: 'avatar-rizky-hasanuddin.webp',
    name: 'Rizky Hasanuddin',
    activity: 'sent you a private message',
    privateMessage:  'Hello thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
    time: '5days ago'
},
{
    id: 5,
    avatar: 'avatar-kimberly-smith.webp',
    name: 'Kimberly Smith',
    activity: 'commented on your picture',
    time: '1weeks ago'
},
{
    id: 6,
    avatar: 'avatar-nathan-peterson.webp',
    name: 'Nathan Peterson',
    activity: 'Reacted to your recent post',
    interaction:  '5end-game strategies to increase you win rate',
    time: '2weeks ago'
},
{   
    id: 7,
    avatar: 'avatar-anna-kim.webp',
    name: 'Anna Kim',
    activity: 'left the group',
    interaction:  'Chess Club',
    time: '2weeks ago'
},]);

  function calculateCount() {
    let temp = 0
    for (let item of userData){
      if(item.active === true)
      {
        temp = temp + 1;
      }
    }
    setNotificationCount(temp);
  }
  
  function readNotification() {
    for (let item of userData)
    {
      if(item.active === true)
      {
        item.active = false;
      }
    }
    setUserData([...userData]);
  }

  useEffect(() => {
    calculateCount();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    
  const listItems = userData.map((userData) =>  
    <li key={userData.id} className={`font-extralight ${userData.active === true ? 'bg-red-700' : ''}`}>
      <div className="p-6 hover:bg-slate-500">
        <img className="float-left pr-4" src={userData.avatar} alt="Avatar" width="65" height="65"></img>
        <div>
          <p> <b>{userData.name}</b> {userData.activity} <i>{userData.interaction}</i></p>
          <p className="pl-16">{userData.time}</p>
          <div className="pl-16">
            {userData.privateMessage ? <p className="p-3 text-justify border-2 border-gray-400 hover:bg-blue-100">{userData.privateMessage}</p> : <></>}
          </div>
        </div>
      </div> 
    </li>
  )

  return ( 
      <ul className="place-items-center align-middle hover:bg-slate-300 p-4 border-2 rounded-lg bg-white w-5/12" >
        <li>
          <div className="p-12">
            <p className="float-left text-xl">Notification {notificationCount}</p>
            <button onClick={function(event){ readNotification(); calculateCount()}}  className="float-right flex text-xl">Mark all as read</button>
          </div>
        </li>
        {listItems}
      </ul>
  )
}


