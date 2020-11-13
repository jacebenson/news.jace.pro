const SiteLayout = ({ children }) => {
  return (<>
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 nav-column clearfix">
            <nav id="menu" className="d-none d-lg-block">
              <ul>
                <li><a href="https://jace.pro/resources">Resources</a></li>
                <li className="current-menu-item"><a href="https://news.jace.pro">News</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>

    {children}

    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 footer_widget">
              <div className="inner">
                <h4>Want to hear more from me? Say thanks? Or have a discussion?</h4>
                <p>Become a Patron and you'll get access to my posts in progress, polls, thoughts and other things I want to share.  A monthly happy hour with me and access to my PDI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-txt">
                Jace Benson © 2020 · <a href="https://jace.pro/index.xml">RSS <i className="fa fa-rss" aria-hidden="true"></i></a>
                <a href="https://twitter.com/jacebenson" className="fa fa-twitter"></a>
                <a href="https://github.com/jacebenson" className="fa fa-github"></a>
                <a href="https://linkedin.com/in/jacebenson" className="fa fa-linkedin"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>)
}

export default SiteLayout
