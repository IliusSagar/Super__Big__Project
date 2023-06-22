<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>



    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" >

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"  />

    <style>
        body{
            background: #eee;
        }
        #side_nav{
            background: #000;
            min-width: 250px;
            max-width: 250px;
            transition: all 0.3s;
        }
        .content{
            min-height: 100vh;
            width: 100%;
        }
        hr.h-color{
            background: #eee;
        }
        .sidebar li.active{
            background: #eee;
            border-radius: 8px;
        }
        .sidebar li.active a, .sidebar li.active a:hover{
            color: #000;
        }
        .sidebar li a{
            color: #fff;
        }

        @media(max-width: 767px){
            #side_nav{
                margin-left: -250px;
                position: fixed;
                min-height: 100vh;
                z-index: 1;
            }
            #side_nav.active{
                margin-left: 0;
            }
        }

    </style>

  </head>
  <body>


    <div class="main-container d-flex">
        <div class="sidebar" id="side_nav">
            <div class="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
                <h1 class="fs-4"><span class="bg-white text-dark rounded shadow px-2 me-2">CL</span><span class="text-white">Admin Panel</span></h1>
                <button class="btn d-md-none d-block close-btn px-1 py-0 text-white"><i class="fa fa-stream"></i></button>
            </div>

            <ul class="list-unstyled px-2">
                <li class=""><a href="#" class="text-decoration-none px-3 py-2 d-block"><i class="fa fa-home me-2"></i>Dashboard</a></li>
                <li class=""><a href="#" class="text-decoration-none px-3 py-2 d-block"><i class="fa fa-list me-2"></i>Projects</a></li>
                <li class=""><a href="#" class="text-decoration-none px-3 py-2 d-block d-flex justify-content-between">
                    <span><i class="fa fa-comment me-2"></i>Messages</span>
                    <span class="bg-dark rounded-pill text-white py-0 px-2">02</span>
                </a></li>
                <li class=""><a href="#" class="text-decoration-none px-3 py-2 d-block"><i class="fa fa-envelope-open-text me-2"></i>Services</a></li>
                <li class=""><a href="#" class="text-decoration-none px-3 py-2 d-block"><i class="fa fa-users me-2"></i>Customers</a></li>
            </ul>

            <hr class="h-color mx-2">

            <ul class="list-unstyled px-2">
                <li class=""><a href="#" class="text-decoration-none px-3 py-2 d-block"><i class="fa fa-bars me-2"></i>Settings</a></li>
                <li class=""><a href="#" class="text-decoration-none px-3 py-2 d-block"><i class="fa fa-bell me-2"></i>Notifications</a></li>
            </ul>

        </div>



        <div class="content">
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <div class="container-fluid">

                    <div class="d-flex justify-content-between d-md-none d-block">
                        <button class="btn px-1 py-0 open-btn me-2"><i class="fa fa-stream"></i></button>

                  <a class="navbar-brand fs-4" href="#"><span class="bg-dark rounded px-2 py-0 text-white">CL</span></a>

                </div>



                  {{-- <button class="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                  </button> --}}
                  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Profile</a>
                      </li>


                    </ul>

                  </div>
                </div>
              </nav>


              <div class="container mt-4">
                <div class="card">
                    <div class="card-body">
                        <div class="dashboard-content px-3 pt-4">
                            <h2 class="fs-5">Dashboard</h2>

                            <hr>

                            <div class="row">
                                <div class="col-md-6 mt-1">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter">
                                  </div>

                                  <div class="col-md-6 mt-1">
                                    <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter">
                                  </div>

                                  <div class="col-md-6 mt-1">
                                    <label for="exampleFormControlInput1" class="form-label">Email </label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter">
                                  </div>

                                  <div class="col-md-6 mt-1">
                                    <label for="exampleFormControlInput1" class="form-label">Address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter">
                                  </div>

                                  <div class="col-md-6 mt-3">
                                    <button type="button" class="btn btn-dark">Submit</button>
                                  </div>




                            </div>
                          </div>
                    </div>
                  </div>
              </div>



        </div>

    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" ></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" ></script>

    <script>
        $(".sidebar ul li").on('click',function(){
            $(".sidebar ul li.active").removeClass('active');
            $(this).addClass('active');
        });

        $('.open-btn').on('click',function(){
            $('.sidebar').addClass('active');
        });

        $('.close-btn').on('click',function(){
            $('.sidebar').removeClass('active');
        });
    </script>
  </body>
</html>
