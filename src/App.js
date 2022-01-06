import './App.css';
import Header from './components/Header'
import Item from './components/Item'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Item charcoalImage="http://mobileimages.lowes.com/productimages/28c2127e-766e-4f00-82e5-ce5f53119ef9/10375446.jpg"
      fruitPlatterImage="https://umamigirl.com/wp-content/uploads/2019/11/Fruit-Platter-Umami-Girl-780-3.jpg"
      gourmetCupCakeImage="https://images.aagiftsandbaskets.com/aagb/LF1-CCH10-BX6_lg.jpg"
      charcuterieBoardImage="https://tastesbetterfromscratch.com/wp-content/uploads/2019/12/Charcuterie-2.jpg"
      avocadosImage="https://producegeek.com/wp-content/uploads/2016/05/organic-hass-avocados-940x626.jpg"
      knifeSetImage="https://m.media-amazon.com/images/I/71bQioJsnPL._AC_SX466_.jpg"
      cabbageImage="https://www.highmowingseeds.com/media/catalog/product/cache/6cbdb003cf4aae33b9be8e6a6cf3d7ad/2/2/2298-1_1.jpg"/>
      <Footer />
    </div>
  );
}

export default App;
