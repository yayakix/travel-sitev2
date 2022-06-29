import '../Homepage.css'
function Home() {
  return (
    <div className="homepage">
      <div className="homeleftdiv">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          accumsan ex dolor, in feugiat felis dignissim id. Praesent in nulla
          quam. Suspendisse sollicitudin velit sit amet risus convallis laoreet.
          Aliquam justo velit, laoreet vel cursus vel, interdum vitae metus.
          Aenean pharetra lectus sit amet mauris egestas, eu dignissim nibh
          blandit. Mauris egestas turpis luctus interdum pharetra. Vestibulum et
          pretium nisi. Quisque mattis pharetra mattis. Nullam malesuada nulla
          condimentum nisl consectetur, id luctus nunc imperdiet. Fusce sed nisi
          finibus, auctor risus sed, bibendum quam. Aenean nec convallis ligula,
          eu interdum metus. Vivamus a congue lectus, ut porttitor arcu. Aenean
          a bibendum est, at volutpat mauris.
        </p>
        <p className="secondpara-home">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          accumsan ex dolor, in feugiat felis dignissim id. Praesent in nulla
          quam. Suspendisse sollicitudin velit sit amet risus convallis laoreet.
          Aliquam justo velit, laoreet vel cursus vel, interdum vitae metus.
        </p>
      </div>
      <div className="homerightdiv">
        <img
          src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="about page"
        />
      </div>
    </div>
  );
}

export default Home;
