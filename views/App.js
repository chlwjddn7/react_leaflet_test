import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header'
import Menu from './layout/Menu'
import Footer from './layout/Footer'
import Main from './pages/main/Main'
import Map from './pages/gis/Map'

/* function App() {
  return (
    <div className='App'>
      <Header/>
      <Menu/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
} */

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentPage: '',
    }

    //this.cat = this.cat.bind(this);
  }

  cat = (param) => {
    this.setState({currentPage: this.state.currentPage + '고양이'})
  }

  render () {
    return (
      <div className='App' style={{width:'100%', height:'50vh'}}>
        {/* <Header/>
        <Menu/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main/>}></Route>
          </Routes>
        </BrowserRouter>
        <Footer/> */}

        {/* {this.state.currentPage} <button onClick={() => this.cat()}>고양이</button> */}

        <Map/>
      </div>
    )
  }
}

export default App;
