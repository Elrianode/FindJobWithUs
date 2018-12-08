import React, { Component } from 'react';
import './infoPage.css';

export default class InfoPage extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          {/* <div className="col-md-5  toppad  pull-right col-md-offset-3 ">
            <a href="#" style={{ marginLeft: "80px" }}>Edit Profile</a>
            <br />
            <p className="text-info" style={{ marginLeft: "0px" }}>May 05,2014,03:00 pm </p><br />
            <div className="col-md-3 col-lg-3 " align="center"> <img alt="User Pic" style={{ marginLeft: "100px", maxWidth: "300px" }} src="data:image/png;base64,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" className="img-circle img-responsive" /> </div>
          </div> */}
          <div >
            <div id="wrapper">
              <div class="wrapper-top"></div>
              <div class="wrapper-mid">

                <div id="paper">
                  <div class="paper-top"></div>
                  <div id="paper-mid">
                    <div class="entry">

                      <img class="portrait" src="images/image.jpg" alt="John Smith" />

                      <div class="self">
                        <h2 class="namee">John Smith <br />
                          <span>Interactive Designer</span></h2>
                        <ul>
                          <li class="ad">111 Lorem Street, 34785, Ipsum City</li>
                          <li class="mail">johnsmith@business.com</li>
                          <li class="tel">+11 444 555 22 33</li>
                          <li class="web">www.businessweb.com</li>
                        </ul>
                      </div>

                      <div class="social">
                        <ul>
                          <li><a class='north' href="#" title="Download .pdf"><img src="images/icn-save.jpg" alt="Download the pdf version" /></a></li>
                          <li><a class='north' href="javascript:window.print()" title="Print"><img src="images/icn-print.jpg" alt="" /></a></li>
                          <li><a class='north' id="contact" href="contact/index.html" title="Contact Me"><img src="images/icn-contact.jpg" alt="" /></a></li>
                          <li><a class='north' href="#" title="Follow me on Twitter"><img src="images/icn-twitter.jpg" alt="" /></a></li>
                          <li><a class='north' href="#" title="My Facebook Profile"><img src="images/icn-facebook.jpg" alt="" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="entry">
                      <h2 >EDUCATION</h2>
                      <div class="content1">
                        <h3 >Sep 2005 - Feb 2007</h3>
                        <p>Academy of Art University, London <br />
                          <em>Master in Communication Design</em></p>
                      </div>
                      <div class="content1">
                        <h3 >Sep 2001 - Jun 2005</h3>
                        <p>University of Art &amp; Design, New York <br />
                          <em>Bachelor of Science in Graphic Design</em></p>
                      </div>
                    </div>

                    <div class="entry">
                      <h2>EXPERIENCE</h2>
                      <div class="content1">
                        <h3>May 2009 - Feb 2010</h3>
                        <p>Agency Creative, London <br />
                          <em>Senior Web Designer</em></p>
                        <ul class="info1">
                          <li>Vestibulum eu ante massa, sed rhoncus velit.</li>
                          <li>Pellentesque at lectus in <a href="#">libero dapibus</a> cursus. Sed arcu ipsum, varius at ultricies acuro, tincidunt iaculis diam.</li>
                        </ul>
                      </div>
                      <div class="content1">
                        <h3>Jun 2007 - May 2009</h3>
                        <p>Junior Web Designer <br />
                          <em>Bachelor of Science in Graphic Design</em></p>
                        <ul class="info1">
                          <li>Sed fermentum sollicitudin interdum. Etiam imperdiet sapien in dolor rhoncus a semper tortor posuere. </li>
                          <li>Pellentesque at lectus in libero dapibus cursus. Sed arcu ipsum, varius at ultricies acuro, tincidunt iaculis diam.</li>
                        </ul>
                      </div>
                    </div>

                    {/* <div class="entry">
                      <h2>SKILLS</h2>
                      <div class="content">
                        <h3>Software Knowledge</h3>
                        <ul class="skills">
                          <li>Photoshop</li>
                          <li>Illustrator</li>
                          <li>InDesign</li>
                          <li>Flash</li>
                          <li>Fireworks</li>
                          <li>Dreamweaver</li>
                          <li>After Effects</li>
                          <li>Cinema 4D</li>
                          <li>Maya</li>
                        </ul>
                      </div>
                      <div class="content">
                        <h3>Languages</h3>
                        <ul class="skills">
                          <li>CSS/XHTML</li>
                          <li>PHP</li>
                          <li>JavaScript</li>
                          <li>Ruby on Rails</li>
                          <li>ActionScript</li>
                          <li>C++</li>
                        </ul>
                      </div>
                    </div> */}

                    {/* <div class="entry">
                      <h2>WORKS</h2>
                      <ul class="works">
                        <li><a href="images/1.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                        <li><a href="images/2.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                        <li><a href="images/3.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                        <li><a href="images/1.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                        <li><a href="images/2.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                        <li><a href="images/3.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                        <li><a href="images/1.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                        <li><a href="images/1.jpg" rel="gallery" title="Lorem ipsum dolor sit amet."><img src="images/image.jpg" alt="" /></a></li>
                      </ul>
                    </div> */}

                  </div>
                  <div class="clear"></div>
                  <div class="paper-bottom"></div>
                </div>

              </div>
              <div class="wrapper-bottom"></div>
            </div>
            <div id="message"><a href="#top" id="top-link">Go to Top</a></div>




          </div>
        </div>
      </div>
    )
  }
}