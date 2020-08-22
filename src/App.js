import React, {useEffect} from 'react';
import '../node_modules/aos/dist/aos.css';
import AOS from 'aos'
import Card from './components/Card.component';
import Header from './components/Header.component';
import Navbar from './components/Navbar.component';
import "./components/index"
import Faq from './components/Faq.component';
import Footer from './components/Footer.component'

class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       selected: null
    }
  }

  Card = React.createRef();
  Faq = React.createRef();
  Footer = React.createRef();
  
  changeSelection = index => {
    this.setState({
      selected: index
    })
  };

  componentDidUpdate(prevProps, prevState) {
    this.scrollToSection(this.state.selected);
  };

  scrollToSection = index => {
    let refs = [
      this.Card,
      this.Faq,
      this.Footer
    ];

    if (refs[index].current) {
      refs[index].current.scrollIntoSection({
        behavior: 'smooth',
        nearest: 'block'
      });
    }

  }

  componentDidMount () {
      AOS.init({
        duration: 2000
      });
      AOS.refresh();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header changeSelection={this.changeSelection} />
        <div id="myCard" ref={this.Card}>
          <Card />
        </div>
        <div id="myFAQ" ref={this.Faq} data-aos={"fade-left"}>
          <Faq />
        </div>
        <div id="myFooter" ref={this.Footer}>
          <Footer />
        </div>
      </div>
    ); 
  } 
}

export default App;
