//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">

      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href>Logo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href>Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href>Action</a></li>
                  <li><a class="dropdown-item" href>Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a href class="dropdown-item" >Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a href class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div class="container mt-3">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">

          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://cdn.pixabay.com/photo/2023/03/27/18/06/bird-7881393_960_720.jpg" class="d-block " alt="..." style={{width: "1300px", height: "500px"}}/>
            </div>
            <div class="carousel-item">
              <img src="https://cdn.pixabay.com/photo/2023/03/05/16/20/sea-7831815_960_720.jpg" class="d-block " alt="..." style={{width: "1300px", height: "500px"}} />
            </div>
            <div class="carousel-item">
              <img src="https://cdn.pixabay.com/photo/2023/06/05/08/39/flower-8041698_960_720.jpg" class="d-block" alt="..." style={{width: "1300px", height: "500px"}} />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="container mt-5">
        <center><h2 style={{fontWeight: "800"}}>BLOG</h2></center>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="https://cdn.pixabay.com/photo/2023/03/05/16/20/sea-7831815_960_720.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://cdn.pixabay.com/photo/2023/03/27/18/06/bird-7881393_960_720.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://cdn.pixabay.com/photo/2023/03/05/16/20/sea-7831815_960_720.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://cdn.pixabay.com/photo/2023/03/27/18/06/bird-7881393_960_720.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src="https://cdn.pixabay.com/photo/2023/03/05/16/20/sea-7831815_960_720.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src="https://cdn.pixabay.com/photo/2023/03/27/18/06/bird-7881393_960_720.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
          </div>

        </div>
      </div>


      <footer class="text-center text-lg-start bg-white text-muted" >

        <div class="container">

          <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">


            <div class="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href class="me-4 link-secondary">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href class="me-4 link-secondary">
                <i class="fab fa-twitter"></i>
              </a>
              <a href class="me-4 link-secondary">
                <i class="fab fa-google"></i>
              </a>
              <a href class="me-4 link-secondary">
                <i class="fab fa-instagram"></i>
              </a>
              <a href class="me-4 link-secondary">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href class="me-4 link-secondary">
                <i class="fab fa-github"></i>
              </a>
            </div>


          </section>

        </div>


        <section class="">
          <div class="container text-center text-md-start mt-5">

            <div class="row mt-3">

              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3 text-secondary"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" class="text-reset">Angular</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">React</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Vue</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Laravel</a>
                </p>
              </div>



              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" class="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Help</a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i class="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
                <p>
                  <i class="fas fa-envelope me-3 text-secondary"></i>
                  info@example.com
                </p>
                <p><i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
                <p><i class="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
              </div>

            </div>

          </div>
        </section>



        <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.025)"}}>
          © 20213 Copyright:
          <a class="text-reset fw-bold" href>Sagar Software Eng:</a>
        </div>

      </footer>

    </div>
  );
}

export default App;
