class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state={
      numCookies:1
    }
    
    this.handleCookieUpdate = this.handleCookieUpdate.bind(this);
  }
  handleCookieUpdate(numCookies){
    this.setState({
      numCookies
    });
  }
  render() {
    const{numCookies} = this.state;
    return(
      <div>
        <Greeting club={"Comcast"} />
        <CookieCounter numCookies={numCookies} />
        <AddRemoveCookie
          numCookies={numCookies}
          onCookieUpdate={this.handleCookieUpdate} />
        <Timer />
      </div>
    );
  }
}
class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      time:new Date()
    }
  }
  
  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  
  tick(){
    this.setState({
      time: new Date()
    })
  }
  render(){
    return(
      <h2>{this.state.time.toLocaleTimeString()}</h2>
    )
  }
}

class AddRemoveCookie extends React.Component{
  render(){
    const{onCookieUpdate, numCookies} = this.props;
    return(
      <div>
        <button onClick={() => onCookieUpdate(numCookies + 1)}>
          Add Cookie
        </button>
        <button onClick={() => onCookieUpdate(numCookies - 1)}>
          Eat Cookie
        </button>
      </div>
    )
  }
}
const CookieCounter = ({numCookies = 0}) => {
  return(
    <h3>
      We have {numCookies} {numCookies === 1 ? 'cookie' : 'cookies'}.
    </h3>
  )
}
const Greeting = (props) => {
  const {club="NBC"} = props;
  return (
    <h1>Hello {club}</h1>
  );
}

ReactDOM.render(
  <App  />,
  document.getElementById("root")
)
