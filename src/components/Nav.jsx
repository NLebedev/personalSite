var Nav = ({clickNavLink}) => (
  <nav>
    <div className="col-md-3">
      <div className="row">
        <div className="logo">Nick Lebedev</div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row">
        <ul className="nav-links">        
          <li><a href='#' onClick ={()=> clickNavLink('home')}>Home</a></li>
          <li><a href='#' onClick ={()=> clickNavLink('blog')}>Blog</a></li>
          <li><a href='#' onClick ={()=> clickNavLink('projects')}>Projects</a></li>
          <li><a href='#' onClick ={()=> clickNavLink('contacts')}>Contacts</a></li>
         
        </ul>
      </div>
    </div>
    <div className="col-md-3">
      <div className="row">
        <ul className="social-networks spin-icon">
          <li><a href="https://www.linkedin.com/" className="icon-linkedin">LinkedIn</a></li>
          <li><a href="https://github.com" className="icon-github">GitHub</a></li>
          <li><a href="https://www.facebook.com/" className="icon-facebook">Facebook</a></li>
        </ul>
      </div>
    </div>
    <div className="learn-more-btn">LEARN MORE
      <svg width="9px" height="14px" viewBox="115 10 9 14" version="1.1">
        <path d="M122.999414,16.8646629 C123.005137,17.0108885 122.955632,17.158831 122.843745,17.2710041 C122.818849,17.2956135 122.781935,17.2890319 122.754178,17.3073459 L115.931366,23.5664316 C115.718466,23.7790453 115.373362,23.7790453 115.160462,23.5664316 C114.947562,23.3535316 114.947562,23.0084278 115.160462,22.7949555 L121.628155,16.8629459 L115.15989,10.9300779 C114.946703,10.717178 114.946703,10.3717879 115.15989,10.1594603 C115.372789,9.94684656 115.717893,9.94684656 115.930793,10.1594603 L122.751889,16.4156844 C122.780791,16.435143 122.818849,16.4285614 122.844317,16.4543155 C122.957349,16.5667747 123.005995,16.7164342 122.999414,16.8646629 L122.999414,16.8646629 Z" id="Shape" stroke="none" fill="#50E3C2" fill-rule="evenodd"></path>
      </svg>
      <svg width="9px" height="14px" viewBox="115 10 9 14" version="1.1">
        <path d="M122.999414,16.8646629 C123.005137,17.0108885 122.955632,17.158831 122.843745,17.2710041 C122.818849,17.2956135 122.781935,17.2890319 122.754178,17.3073459 L115.931366,23.5664316 C115.718466,23.7790453 115.373362,23.7790453 115.160462,23.5664316 C114.947562,23.3535316 114.947562,23.0084278 115.160462,22.7949555 L121.628155,16.8629459 L115.15989,10.9300779 C114.946703,10.717178 114.946703,10.3717879 115.15989,10.1594603 C115.372789,9.94684656 115.717893,9.94684656 115.930793,10.1594603 L122.751889,16.4156844 C122.780791,16.435143 122.818849,16.4285614 122.844317,16.4543155 C122.957349,16.5667747 123.005995,16.7164342 122.999414,16.8646629 L122.999414,16.8646629 Z" id="Shape" stroke="none" fill="#50E3C2" fill-rule="evenodd"></path>
      </svg>
    </div>
  </nav>
);

window.Nav = Nav;