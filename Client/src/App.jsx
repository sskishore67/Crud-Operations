import './App.css'
function App() {
  return (
  <>
  <div className='container-fluid'>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    <div className='row container-fluid mt-5'>
      <div className='col-sm-4'></div>
      <div className='col-sm-4'>
      <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" />
  <label for="floatingInput" className='floating-label'>Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" />
  <label for="floatingPassword">Password</label>
</div>
</div>
<div className='col-sm-4'></div>
</div>
  </>
  );
}

export default App
