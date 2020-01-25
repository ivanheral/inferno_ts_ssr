import { render, Component } from "inferno";
import { promised } from "q";

class Home extends Component {
  constructor() {
    super();
    // set initial time:
    this.state = {
      time: Date.now()
    };
  }

  componentDidMount() {
    Promise.resolve();
    // update time every second
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render() {
    const time = new Date(this.state.time).toLocaleTimeString();
    return <span>{time}</span>;
  }
}

export default Home;
