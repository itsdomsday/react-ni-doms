function Layout({children}){
    return (
        <div class="row">
      <div className="col-12">
      <div className="container p-5 border m-5 rounded shadow-lg">
        <div className="row">
          <div className="col-md-12">
            {children}
          </div>
        </div>
      </div>
      </div>
      <p className="text-center">
        <small>
          Developed by <strong>Dominic Gil Cristobal</strong>, <strong>WD29</strong>
        </small>
      </p>
    </div>
    );
}

export default Layout;