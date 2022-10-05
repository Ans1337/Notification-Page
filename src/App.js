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
    <div>
      <User ></User>
    </div>
  );
}


function User(){
  const users = [
    {
        avatar: 'assets/images/avatar-mark-webber.webp',
        name: 'Mark Webber',
        activity: 'Reacted to your recent post',
        interaction:  'My first tournament today',
        time: '1m ago'
    },
    {
        avatar: 'assets/images/avatar-angela-gray.webp',
        name: 'Angela Gray',
        activity: 'followed you',
        time: '5m ago'
    },
    {
        avatar: 'assets/images/avatar-jacob-thompson.webp',
        name: 'Jacob Thompson',
        activity: 'has joined your group',
        interaction:  'Chess Club',
        time: '1day ago'
    },
    {
        avatar: 'assets/images/avatar-rizky-hasanuddin.webp',
        name: 'Rizky Hasanuddin',
        activity: 'sent you a private message',
        privateMessage:  'Hello thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
        time: '5days ago'
    },
    {
        avatar: 'assets/images/avatar-kimberly-smith.webp',
        name: 'Kimberly Smith',
        activity: 'commented on your picture',
        time: '1weeks ago'
    },
    {
        avatar: 'assets/images/avatar-nathan-peterson.webp',
        name: 'Nathan Peterson',
        activity: 'Reacted to your recent post',
        interaction:  '5end-game strategies to increase you win rate',
        time: '2weeks ago'
    },
    {   
        avatar: 'assets/images/avatar-anna-kim.webp',
        name: 'Anna Kim',
        activity: 'left the group',
        interaction:  'Chess Club',
        time: '2weeks ago'
    },
    {   
        avatar: 'assets/images/avatar-anna-kim.webp',
        name: 'Anna Kim',
        activity: 'left the group',
        interaction:  'Chess Club',
        time: '2weeks ago'
    },]


  let content = [];
  for (let item of users) {
    content.push(<li>
      <img src='assets/images/avatar-anna-kim.webp' alt="Avatar"></img>
      <p>{item.name} {item.activity} {item.interaction}
      </p>
    </li>);
  }
  return <ul>{content}</ul>;

}
