import travels from "../data";

function Main() {
  const data = travels.map((x) => {
    return <div className="grid-item">
    <h3>{x.name}</h3>
    <img src={x.img} alt='destination'/>
    <p>{x.desc}</p>
    </div>;
  })
  return (
    <div className="mainpage">
      <img
        src="https://images.pexels.com/photos/6439051/pexels-photo-6439051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="ice landscape"
      />
      <div className="logopage">
        <h1>Where do you want to go?</h1>
        <button className="button-30" role="button">
          Book it
        </button>
      </div>

      <div className="grid-container">
        {data}
      </div>
    </div>
  );
}

export default Main;
