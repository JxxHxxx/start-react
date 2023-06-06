import "./App.css";
import GroupList from "./component/Group";
import GoogleLoginButton from "./component/Login";


function Hello(props) {
  console.log('props', props, props.name)

  return <h1>Hello {props.title}</h1>
}

function Member(props) {
  const lis = []

  console.log(props.topics)
  props.topics.map(t => lis.push(<li key={t.id}>{t.title}</li>))

  return <ol>
    {lis}
  </ol>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  return (
    <div>
      <GoogleLoginButton />
      <GroupList />
    </div>
  );
}

export default App;
