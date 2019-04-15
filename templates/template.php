<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="fontawesome-free/css/all.min.css">

    <title>Hello, world!</title>
    <style>

      .container {
        border: 2px dashed pink;
      }
      .row {
        background: green;
        border: 3px solid blue;
        margin-bottom: 5px;
      }

      .row div {
        border: 1px solid red;
        background: yellow;
      }
    </style>

  </head>
  <body>
  
  <div class="jumbotron jumbotron-fluid">
    <div class="container" style="background: grey;">
      <!-- ROW 1 -->
      <div class="row">
        <header class="col-md-12">
          <h1>A simple landing page</h1>
          <h2>Sub title for support</h2>
          <a href="#" class="btn btn-primary btn-lg btn-block" role="button">Link</a>
        </header>
      </div>
    </div>
  </div>


  <div class="container">
    <div class="row">
        <div class="offset-md-3 col-md-4">
          <h3>
            Some text with <small>secondary text</small>
          </h3>
        </div>
        <div class="col-md-5">
          <h3>
            Add to your favorites
            <small>
              <kbd><kbd>ctrl</kbd> + <kbd>d</kbd></kbd>
            </small>
          </h3>
        </div>
      </div>

      <div class="row align-items-center">
        <div class="col-md-3">
          <pre>&lt;p&gt;I love programming!&lt;/p&gt;
          &lt;p&gt;This paragraph is on my landing page&lt;/p&gt;
          &lt;br/&gt;
          &lt;br/&gt;
          &lt;p&gt;Bootstrap by example&lt;/p&gt;
          </pre>
        </div>
        <div class="col-md-9">
          <img src="imgs/center.png" class="img-fluid">
        </div>
      </div>

      <div class="row">
        <div class="col-md-3 align-self-center">
          <img src="imgs/bs.png" class="img-fluid" alt="">
        </div>
        <div class="col-md-6">
          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Testimonial from someone at <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </div>
        <div class="col-md-3">
          <img src="imgs/packt.png" class="img-fluid p-auto" alt="">
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <p class="text-left"><code>&lt;Left&gt;</code></p>
        </div>
        <div class="col-md-3">
          <p class="text-center">Center</p>
        </div>
        <div class="col-md-3">
          <p class="text-justify">Justify</p>
        </div>
        <div class="col-md-3">
          <p class="text-right">Right</p>
        </div>
      </div>

    <!-- ROW 2 -->
    <div class="row">
      <div class="col-md-1">1</div>
      <div class="col-md-1">1</div>
      <div class="col-md-1">1</div>
      <div class="col-md-1">1</div>
      <div class="col-md-1">1</div>
      <div class="col-md-1">1</div>
      <div class="col-md-1">1</div>
      <div class="col-md-1">1</div>
      <div class="col-md-1">1</div>
      <div class="col-md-1">1</div>
      <div class="col-md-1">1</div>
      <div class="col-md-1">1</div>
    </div>

    <!-- ROW 3 -->
    <div class="row">
      <div class="offset-md-4 col-md-4">1/3</div>
      <div class="col-md-4">1/3</div>
    </div>

    <!-- ROW 4 -->
    <div class="row">
      <div class="col-md-4">4 columns</div>
      <div class="col-md-8">8 columns</div>
    </div>

    <!-- ROW 5 -->
    <div class="row">
      <div class="col-md-3">1/4</div>
      <div class="col-md-6">1/2</div>
      <div class="col-md-3">1/4</div>
    </div>

    <!-- ROW 6 -->
    <div class="row">
      <div class="col-md-3">1/4</div>
      <div class="col-md-3">1/4</div>
      <div class="col-md-3">1/4</div>
      <div class="col-md-3">1/4</div>
    </div>

    <!-- ROW 7 -->
    <div class="row">
      <div class="col-md-3">1/4</div>
      <div class="col-md-6">
        <!-- NESTED ROW 1 -->
        <div class="row">
          <div class="col-md-1">1</div>
          <div class="col-md-1">2</div>
          <div class="col-md-1">3</div>
          <div class="col-md-1">4</div>
          <div class="col-md-1">5</div>
          <div class="col-md-1">6</div>
          <div class="col-md-1">7</div>
          <div class="col-md-1">8</div>
          <div class="col-md-1">9</div>
          <div class="col-md-1">10</div>
          <div class="col-md-1">11</div>
          <div class="col-md-1">12</div>
        </div>
        <!-- NESTED ROW 2 -->
        <div class="row">
          <div class="col-md-6">6 nested</div>
          <div class="col-md-6">6 nested</div>
        </div>
      </div>
      <div class="col-md-3">1/4</div>
    </div>

    <!-- ROW 8 -->
    <footer class="row">
      <div class="col-md-2">2 columns</div>
      <div class="col-md-7">7 columns</div>
      <div class="col-md-3">3 columns</div>
    </footer>
  </div>


  <script src="jquery/jquery.min.js"></script>
    <!-- Bootstrap JS -->
    <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
  </body>
</html>