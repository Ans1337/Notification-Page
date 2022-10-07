import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Mentor />
    </div>
  );
}

function Mentor() {

  return (
    // <div className="grid h-screen place-items-center rounded-lg border-2 border-red-500">
      <div className="grid h-screen place-items-center">
        <User></User>
      </div>
  )
}


function User(){
  const users = [
    {
        avatar: 'avatar-mark-webber.webp',
        name: 'Mark Webber',
        activity: 'Reacted to your recent post',
        interaction:  'My first tournament today',
        time: '1m ago'
    },
    {
        avatar: 'avatar-angela-gray.webp',
        name: 'Angela Gray',
        activity: 'followed you',
        time: '5m ago'
    },
    {
        avatar: 'avatar-jacob-thompson.webp',
        name: 'Jacob Thompson',
        activity: 'has joined your group',
        interaction:  'Chess Club',
        time: '1day ago'
    },
    {
        avatar: 'avatar-rizky-hasanuddin.webp',
        name: 'Rizky Hasanuddin',
        activity: 'sent you a private message',
        privateMessage:  'Hello thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
        time: '5days ago'
    },
    {
        avatar: 'avatar-kimberly-smith.webp',
        name: 'Kimberly Smith',
        activity: 'commented on your picture',
        time: '1weeks ago'
    },
    {
        avatar: 'avatar-nathan-peterson.webp',
        name: 'Nathan Peterson',
        activity: 'Reacted to your recent post',
        interaction:  '5end-game strategies to increase you win rate',
        time: '2weeks ago'
    },
    {   
        avatar: 'avatar-anna-kim.webp',
        name: 'Anna Kim',
        activity: 'left the group',
        interaction:  'Chess Club',
        time: '2weeks ago'
    },]


  let content = [];
  for (let item of users) {
    content.push(
      <li className="ml-5 font-extralight hover:bg-slate-300">
        <div className="pb-4">
          <img className="float-left pr-4" src={item.avatar} alt="Avatar" width="65" height="65"></img>
          <p className="text-xl "><b>{item.name}</b> {item.activity} <i>{item.interaction}</i> </p>
          <p className="pl-16">{item.time}</p>
          <div className="pl-20">
            {item.privateMessage ? <p className="border-2 border-gray-400 hover:bg-blue-100">{item.privateMessage}</p> : <p></p>}
          </div>
        </div> 
      </li>
    );
  }
  return (
    <ul className="list-none hover:list-disc align-middle">{content}</ul>
  )
}
