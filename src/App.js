import NavBar from './components/navBar';
import Hero from './components/hero';
import Card from './components/card';
// import Person from "../src/images/person.png"
// import Wedding from "../src/images/wedding.png"
// import Bike from "../src/images/bike.png"
import Data from  "../src/data"
// console.log(Data);
function App() {
  // const colors = ["red","yelow","green"];
  const cards = Data.map(item=> {
    return(
      <Card 
       key={item.id}
      //  img={item.coverImg}
      //  rating={item.stats.ratings}
      //  reviewCount={item.stats.reciewCount}
      //  location={item.location}
      //  title={item.title}
      //  price={item.price}
      //  openSpots={item.openSpots}
      // item={item}
      {...item}
      />
    )
  })  
  return (
    <div className="App">
      {/* <div><h3>{`${colors}`}</h3></div> */}
      <NavBar />
      <Hero />
      <section className='cards-row'>{cards}</section>
      
    </div>
  );
}
export default App;
