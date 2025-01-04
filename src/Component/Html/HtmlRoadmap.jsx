// import React from 'react'
import '../Css/HtmlCss/RoadMap.css';  // Corrected import path
import HtmlSidebar from './HtmlSidebar';

function HtmlRoadmap() {
  return (
    <>
       <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>

      {/* <div className="roadmap-container">
    <div className="stage">
      <div className="stage-icon">1</div>
      <div className="stage-content">
        <h3>Introduction to HTML</h3>
        <p>Learn the basic structure of an HTML document, tags, and attributes.</p>
      </div>
    </div>

    <div className="stage">
      <div className="stage-icon">2</div>
      <div className="stage-content">
        <h3>Advanced HTML</h3>
        <p>Dive into forms, semantic elements, and multimedia.</p>
      </div>
    </div>

    <div className="stage">
      <div className="stage-icon">3</div>
      <div className="stage-content">
        <h3>CSS Basics</h3>
        <p>Style your HTML with colors, layouts, and typography.</p>
      </div>
    </div>

    <div className="stage">
      <div className="stage-icon">4</div>
      <div className="stage-content">
        <h3>Advanced CSS</h3>
        <p>Learn Flexbox, Grid, and responsive design techniques.</p>
      </div>
    </div>

    <div className="stage">
      <div className="stage-icon">5</div>
      <div className="stage-content">
        <h3>Introduction to JavaScript</h3>
        <p>Understand variables, functions, and DOM manipulation.</p>
      </div>
    </div>

    <div className="stage">
      <div className="stage-icon">6</div>
      <div className="stage-content">
        <h3>JavaScript Advanced</h3>
        <p>Work with events, APIs, and build interactive web pages.</p>
      </div>
    </div>
  </div> */}
 <div style={{ display: 'flex' }}>
 <HtmlSidebar />
 <div className="roadmap">
        <h1>HTML5 Learning Roadmap</h1>

        <div className="section">
            <div className="section-title">1</div>
            <svg className="path" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200">
                <path d="M0 100 Q250 0 500 100" fill="none" stroke="#1abc9c" strokeWidth="5" />
            </svg>
            <div className="section-content">
                <h2>Fundamentals</h2>
                <ul>
                    <li>How the browser parses HTML files</li>
                    <li>Setting up an HTML document</li>
                    <li>Learning the structure of an HTML document</li>
                </ul>
            </div>
        </div>

        <div className="section">
            <div className="section-title">2</div>
            <svg className="path" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200">
                <path d="M0 100 Q250 200 500 100" fill="none" stroke="#e74c3c" strokeWidth="5" />
            </svg>
            <div className="section-content">
                <h2>Semantic HTML</h2>
                <ul>
                    <li>Learn the purpose of tags like header, article, and section</li>
                    <li>Use semantic elements for better structure</li>
                </ul>
            </div>
        </div>

        <div className="section">
            <div className="section-title">3</div>
            <svg className="path" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200">
                <path d="M0 100 Q250 0 500 100" fill="none" stroke="#3498db" strokeWidth="5" />
            </svg>
            <div className="section-content">
                <h2>Basic Form Elements</h2>
                <ul>
                    <li>Learn input types like text, checkbox, and radio</li>
                    <li>Understand form submission and validation</li>
                    <li>Using labels for accessibility</li>
                </ul>
            </div>
        </div>

        <div className="section">
            <div className="section-title">4</div>
            <svg className="path" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200">
                <path d="M0 100 Q250 200 500 100" fill="none" stroke="#f1c40f" strokeWidth="5" />
            </svg>
            <div className="section-content">
                <h2>Advanced Topics</h2>
                <ul>
                    <li>Using HTML5 APIs for storage and multimedia</li>
                    <li>Working with the canvas element</li>
                    <li>Embedding and optimizing media</li>
                </ul>
            </div>
        </div>

    </div>
    </div>

    </>
  )
}

export default HtmlRoadmap