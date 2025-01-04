import '../Css/HtmlCss/HtmlSidebar.css';

function HtmlSidebar() {
  return (
    <div>
      <div className="sidebar">
        <h1>HTML Tutorial</h1>
        <ul>
        <li><a href="#" className="active">HTML Roadmap</a></li>
          <li><a href="#" className="active">HTML HOME</a></li>
          <li><a href="#">HTML Introduction</a></li>
          <li><a href="#">HTML Editors</a></li>
          <li><a href="#">HTML Basic</a></li>
          <li><a href="#">HTML Elements</a></li>
          <li><a href="#">HTML Attributes </a></li>
          <li><a href="#">HTML Headings </a></li>
          <li><a href="#">HTML Paragraphs </a></li>
          <li><a href="#">HTML Styles </a></li>
          <li><a href="#">HTML Formatting</a></li>
          <li><a href="#">HTML Quotation </a></li>
          <li><a href="#">HTML Comments </a></li>
          <li>
            <a href="#" className="dropdown-toggle">HTML Colors <span className="dropdown-icon">▾</span></a>
            <div className="dropdown">
              <a href="#">Colors</a>
              <a href="#">RGB </a>
              <a href="#">HEX </a>
              <a href="#">HSL </a>
            </div>
          </li>
          <li><a href="#">HTML CSS</a></li>
          <li>
            <a href="#" className="dropdown-toggle">HTML Links <span className="dropdown-icon">▾</span></a>
            <div className="dropdown">
              <a href="#">Links</a>
              <a href="#">Link Colors </a>
              <a href="#">Link Bookmarks</a>
           </div>
          </li>
          <li>
            <a href="#" className="dropdown-toggle">HTML Images <span className="dropdown-icon">▾</span></a>
            <div className="dropdown">
              <a href="#">Images</a>
              <a href="#">Image Maps</a>
              <a href="#">Background Images</a>
              <a href="#">The HTML Picture Element</a>
           </div>
          </li>
          <li><a href="#">HTML Favicon</a></li>
          <li><a href="#">HTML Page Title</a></li>
          <li>
            <a href="#" className="dropdown-toggle">HTML Tables <span className="dropdown-icon">▾</span></a>
            <div className="dropdown">
              <a href="#">HTML Tables</a>
              <a href="#">Table Sizes</a>
              <a href="#">Table Headers</a>
              <a href="#">Table Padding & Spacing</a>
              <a href="#">Table Colspan & Rowspan</a>
              <a href="#">Table Styling</a>
              <a href="#">Table Colgroup</a>
           </div>
          </li>
          <li>
            <a href="#" className="dropdown-toggle">HTML Lists <span className="dropdown-icon">▾</span></a>
            <div className="dropdown">
              <a href="#">HTML Lists</a>
              <a href="#">Unordered Lists</a>
              <a href="#">Ordered Lists</a>
              <a href="#">Other Lists</a>
           </div>
          </li>


          <li><a href="#">HTML Block and Inline Elements</a></li>
          <li><a href="#">HTML Div Element</a></li>
          <li><a href="#">HTML Classes </a></li>
          <li><a href="#">HTML ID </a></li>
          <li><a href="#">HTML Iframes </a></li>
          <li><a href="#">HTML JavaScript </a></li>
          <li><a href="#">HTML File Paths </a></li>
          <li><a href="#">HTML Head </a></li>
          <li><a href="#">HTML Responsive   </a></li>
          <li><a href="#">HTML ComputerCode </a></li>
          <li><a href="#">HTML Semantic </a></li>
          <li><a href="#">HTML Style Guide </a></li>
          <li><a href="#">HTML Entities </a></li>
          <li><a href="#">HTML Symbols </a></li>
          <li><a href="#">HTML Emojis  </a></li> 
           <li><a href="#">HTML Character  </a></li>
          <li><a href="#">HTML URL Encode </a></li>
          <li><a href="#">HTML Versus XHTML </a></li>

        </ul>

        <h1>HTML Forms</h1>
        <ul>
        <li><a href="#">HTML Forms</a></li>
          <li><a href="#">HTML Form Attributes</a></li>
          <li><a href="#">HTML Form Elements</a></li>
          <li><a href="#">HTML Input Types</a></li>
          <li><a href="#">HTML Input Attributes </a></li>
          <li><a href="#">HTML Input Form Attributes </a></li>
        </ul>

        <h1>HTML Graphics</h1>
        <ul>
        <li><a href="#">HTML Canvas</a></li>
        <li><a href="#">HTML SVG</a></li>
        </ul>

        <h1>HTML Media</h1>
        <ul>
        <li><a href="#">HTML Media</a></li>
        <li><a href="#">HTML Video</a></li>
        <li><a href="#">HTML Audio</a></li>
        <li><a href="#">HTML Plug-ins</a></li>
        <li><a href="#">HTML YouTube Videos</a></li>
        </ul>
      </div>
    </div>
  );
}

export default HtmlSidebar;
