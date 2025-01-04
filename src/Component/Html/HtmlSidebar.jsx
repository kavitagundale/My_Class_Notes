import '../Css/HtmlCss/HtmlSidebar.css'


function HtmlSidebar() {
  return (
    <div>
  
       <div className="sidebar">
        <h1>HTML Tutorial</h1>
        <ul>
            <li><a href="#" className="active">HTML HOME</a></li>
            <li><a href="#">HTML Introduction</a></li>
            <li><a href="#">HTML Editors</a></li>
            <li><a href="#">HTML Basic</a></li>
            <li><a href="#">HTML Elements</a></li>
            <li>
                <a href="#">HTML Attributes</a>
                <div className="dropdown">
                    <a href="#">Global Attributes</a>
                    <a href="#">Event Attributes</a>
                </div>
            </li>
            <li><a href="#">HTML Headings</a></li>
            <li><a href="#">HTML Paragraphs</a></li>
            <li><a href="#">HTML Styles</a></li>
            <li><a href="#">HTML Formatting</a></li>
            <li><a href="#">HTML Links</a></li>
            <li><a href="#">HTML Lists</a></li>
        </ul>
    </div>
    </div>
  )
}

export default HtmlSidebar