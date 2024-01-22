document.addEventListener("DOMContentLoaded", function () {
  const headerContent = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <!-- important for compatibility charset -->
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
        <title>Blog Template</title>
    
        <meta name="author" content="Webful Creations">
        <meta name="keywords" content="">
        <meta name="description" content="">
    
        <!-- FavIcon for Website /-->
        <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png">
    
        <!-- important for responsiveness remove to make your site non responsive. -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- Theme Styles CSS File -->
        <link rel="stylesheet" type="text/css" href="style.css" media="all" />
        <script>
            window.addEventListener('scroll', function () {
                var header = document.querySelector('.header');
                var isScrolled = window.scrollY > header.offsetTop + header.offsetHeight;
    
                if (isScrolled) {
                    header.classList.add('sticky-header');
                } else {
                    header.classList.remove('sticky-header');
                }
            });
        </script>
        <style>
            .sticky-header {
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 1000;
                background-color: #ffffff;
                /* Add your desired background color */
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                /* Add a subtle shadow for separation */
            }
        </style>
    
    </head>
    
    <body class="loaded enable-rfs">
        <!----------- Header Area Starts Here ------------>
        <div class="header sticky-header">
            <div id="top-line"></div>
            <div class="top-bar">
                <div class="container">
                    <div class="row">
    
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <div class="left-side">
                                <ul class="menu">
                                    <li><i class="fas fa-map-marked-alt"></i>6th Avenue, Field NY, 54000 USA</li>
                                    <li><i class="fas fa-envelope"></i><a href="#">broxton@support.com</a></li>
                                </ul>
                            </div><!-- Left Side /-->
                        </div><!-- Columns /-->
    
                        <div class="col-sm-12 col-md-12 col-lg-6 clearfix">
                            <div class="right-side float-end">
                                <ul class="menu">
                                    <li><a href="#">Media & News</a></li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li class="list-group-flush"><a href="#">Support</a></li>
                                </ul>
                            </div>
                        </div><!-- Columns /-->
    
                    </div><!-- Row /-->
                </div><!-- Container /-->
            </div>
            <!-- Top Bar /-->
            <div class="navigation" style="position: fixed;">
                <div class="container">
                    <div class="row">
    
                        <div class="col-12 col-lg-2 col-md-3 col-sm-4 bg-yel">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="assets/images/logo.png" alt="Logo">
                                </a>
                            </div>
                        </div><!-- Columns /-->
    
                        <div class="col-12 col-lg-7 col-md-4 col-sm-4">
                            <div class="nav-container clearfix">
                                <nav class="navbar navbar-expand-lg navbar-light">
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <i class="fas fa-bars"></i>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav">
    
                                            <li class="nav-item dropdown">
                                                <a class="nav-link" href="index.html" data-bs-toggle="dropdown">Home</a>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="index.html">Home</a>
                                                </div>
                                            </li>
    
                                            <li class="nav-item">
                                                <a class="nav-link" href="about-us.html">About Us</a>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link" href="services.html"
                                                    data-bs-toggle="dropdown">Services</a>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="services.html">Services</a>
                                                    <!-- <a class="dropdown-item" href="single-service.html">
                                                            Services</a> -->
                                                    <a class="dropdown-item" href="fixes.html">Fixes</a>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link" href="our-team.html" data-bs-toggle="dropdown">Team</a>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="our-team.html">Team</a>
                                                    <!-- <a class="dropdown-item" href="single-service.html">Fixes</a> -->
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link" href="#" data-bs-toggle="dropdown">Blog</a>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="blog.html">Blog</a>
                                                    <a class="dropdown-item" href="single-blog.html">Single Post
                                                        Page</a>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a href="#" class="nav-link" data-bs-toggle="dropdown">Pages</a>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="about-us.html">About Us</a>
                                                    <a class="dropdown-item" href="testimonial.html">Testimonials</a>
                                                    <a class="dropdown-item" href="faqs.html">FAQ's</a>
                                                    <a class="dropdown-item" href="404-error-page.html">404 Error
                                                        Page</a>
                                                </div>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="contact-us.html">Contact us</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                </nav>
                            </div>
                        </div><!-- Columns /-->
                        <div class="col-12 col-lg-3 col-md-5 col-sm-4 bg-yel">
                            <div class="nav-icons d-flex">
                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <div class="dropdown">
                                            <button class="btn dropdown-toggle" type="button" id="dropdownMenu2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i class="fas fa-envelope"></i></a></li>
                                            </ul>
                                        </div>
    
                                    </li>
                                    <li class="list-inline-item"><a href="#"><i class="fas fa-cart-plus"></i></a></li>
                                    <li class="list-inline-item"><a href="#"><i class="fas fa-mobile-alt"></i> <span>06
                                                123 111 23</span> </a></li>
                                    </li>
                                </ul>
                            </div>
                        </div><!-- Columns /-->
                    </div><!-- Row /-->
                </div><!-- Container /-->
            </div>
            <!-- Navigation /-->
        </div>
        <!------------- Header End /------------->
    
    </body>
    
    </html>
    `;

  document.querySelector(".header").innerHTML = headerContent;
});
