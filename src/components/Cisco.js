import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Cisco.css';
import '../style/CiscoMedia.css';
import hero_jpg from '../images/hero.webp';
import onx from '../images/onx.webp'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import AOS, { init } from 'aos';
import "aos/dist/aos.css";
import Fade from 'react-reveal/Fade';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// arrow up and down
import ExpandLessIcon from '@material-ui/icons/ExpandLess';  //// arrow up;
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';  //// arrow down;
import LanguageIcon from '@material-ui/icons/Language';      //// language

// footer icons  👇
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import InstagramIcon from '@material-ui/icons/Instagram';
// import rasm from '';


// image ul li PARTNERING WITH THE BEST
import li1 from '../images/li1.png';
import li2 from '../images/li2.webp';
import li3 from '../images/li3.webp';
import li4 from '../images/li4.png';
import li5 from '../images/li5.png';
import li6 from '../images/li6.png';
import li7 from '../images/li7.png';
import li8 from '../images/li8.png';


function Cisco() {

    // 👇 aos Animation 
    useEffect(() => {
        AOS.init();
    })
    // 👆

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src={hero_jpg} onDragStart={handleDragStart} />,
        <img src="https://www.namm.org/sites/www.namm.org/files_public/resources/summer-namm-2019-hpto-hero.jpg" onDragStart={handleDragStart} />,
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHNooTWzONeiUV4D-014b8l5FWm914w_Ehyg&usqp=CAU" onDragStart={handleDragStart} />,
    ];


    const [states, setstates] = useState(false)

    const united = (e) => {
        const united_States_111 = document.querySelector('.united_States_111');
        
        if (!states) {
            united_States_111.style.display = 'block';
            setstates(true)
        } 
        else {
            united_States_111.style.display = 'none';
            setstates(false)
        }
    }


    // copyrigth data
    // const copyRight_vaqt = document.getElementById('.copyRight_vaqt');

    // let s = new Date();
    // let vaqt = s.toLocaleString();

    // copyRight_vaqt.innerHTML = vaqt;


    return (
        <div className="cisco">

            {/* introducing */}
            <div className="introducing">
                <Fade bottom>
                    <span>Soginboyev_Oybek</span>
                </Fade>
                <Fade left>
                    <h1>All New Webex</h1>
                </Fade>
                <Fade top>
                    <p>
                        In-person or afar, Webex brings everyone <br /> together to do exceptional work.
                    </p>
                </Fade>
                <div className="hp_hero_btn">
                    <a href="#" className="hp_sign_up">Sign up free</a>
                </div>
            </div>
            <div className="cisco_img" data-aos="fade-up" data-aos-duration="1000">
                <AliceCarousel autoPlay={true} autoPlayInterval={3000} infinite={true} mouseTracking items={items} />
            </div>


            {/* cisco_section1 */}
            <section className="cisco_section1">
                <div >
                    <img data-aos="flip-left" data-aos-duration="1000" data-aos-duration="1000" className="onx" src={onx} alt="" />
                </div>
                <h2>10X better experiences <br /> than in-person interactions</h2>

                <div className="experience1">
                    <Fade left>
                        <div className="seamless">
                            <AllInclusiveIcon className="experience1_icon" />
                            <h3>Seamless Collaboration</h3>
                            <p>with anyone, from anywhere, working in-sync with the apps you love</p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="smart_hybrid">
                            <LaptopMacIcon className="experience1_icon" />
                            <h3>Smart Hybrid Work Experiences</h3>
                            <p>with integrated collaboration devices</p>
                        </div>
                    </Fade>
                </div>

                <div className="experience2">
                    <Fade right>
                        <div className="intelligent">
                            <StarOutlineOutlinedIcon className="experience1_icon" />
                            <h3>Seamless Collaboration</h3>
                            <p>with anyone, from anywhere, working in-sync with the apps you love</p>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="security">
                            <VerifiedUserOutlinedIcon className="experience1_icon" />
                            <h3>Smart Hybrid Work Experiences</h3>
                            <p>with integrated collaboration devices</p>
                        </div>
                    </Fade>
                </div>
                <button className="section1_btn">Learn More</button>
            </section>


            {/* cisco_section_2 */}
            <section className="cisco_section_2">
                <div className="caption">PARTNERING WITH THE BEST</div>

                {/* cisco_section_2_wrappper */}
                <div className="cisco_section_2_wrappper">
                    <ul className="partner_list">
                        <li><img data-aos="flip-left" src={li1} alt="" /></li>
                        <li><img data-aos="flip-left" src={li2} alt="" /></li>
                        <li><img data-aos="flip-left" src={li3} alt="" /></li>
                        <li><img data-aos="flip-left" src={li4} alt="" /></li>
                        <li><img data-aos="flip-left" src={li5} alt="" /></li>
                        <li><img data-aos="flip-left" src={li6} alt="" /></li>
                        <li><img data-aos="flip-left" src={li7} alt="" /></li>
                        <li><img data-aos="flip-left" src={li8} alt="" /></li>
                    </ul>
                </div>
                <h1 className="latest">The latest features, <br />  just announced *</h1>


                {/* f_scroll_body SECTION */}
                <div className="f_scroll_body">
                    <div className="scroll_text">
                        <ul className="scroll_ul">
                            <li>
                                <h4>Shovqinni yo'qotish va nutqni kuchaytirish</h4>
                                <p>Bolalar, itlar, klaviatura terish va boshqalar kabi chalg'ituvchi fon shovqini sukunat, shuning uchun yig'ilish qatnashchilari faqat sizni eshitadilar.</p>
                            </li>
                            <li>
                                <h4>Gestures & Reactions</h4>
                                <p>Now there’s even more ways to express yourself in meetings with on-screen emojis for clapping, thumbs up/down, smiling, laughing, and more. Choose an animated reaction or simply gesture with your hands.</p>
                            </li>
                            <li>
                                <h4>Real-Time Translation</h4>
                                <p>Webex provides real-time translation of your meetings into 100+ languages including: English, Spanish, French, German, Mandarin, Portuguese, Arabic, Russian, Dutch, Japanese.</p>
                            </li>
                            <li>
                                <h4>Immersive Share</h4>
                                <p>Create a more immersive sharing experience by turning your shared content into your meeting background with your video overlayed on top.</p>
                            </li>
                            <li>
                                <h4>Smart Status</h4>
                                <p>Webex automatically sets your status when you’re in a meeting, sharing your screen, and out of office so everyone knows when you’re really available. Or set 'do not disturb' for those times you need to focus.</p>
                            </li>
                            <li>
                                <h4>Meeting Templates</h4>
                                <p>Create more efficient meetings with pre-defined meeting invite templates, including brainstorm session, quick catch-up, and more. Includes prompts to set an agenda, attach key content, add tools, and more.</p>
                            </li>
                            <li>
                                <h4>Advanced Video Layouts</h4>
                                <p>See the meeting, your way. Use the slider to show as many or as few participants you want. Drag and drop participants on stage and stack the rest on the top or on the side.</p>
                            </li>
                            <li>
                                <h4>Important Messages</h4>
                                <p>Webex automatically elevates your most relevant conversations to the top, or you can pin important messages for quick reference later. You can also mark a message as unread to remind you to review again.</p>
                            </li>
                            <li>
                                <h4>Transition Call to Meeting</h4>
                                <p>Turn a 1:1 audio call into a video meeting and easily take advantage of AI transcriptions, recordings, notes, and action items.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="scroll_img">
                        <img src="https://www.freecodecamp.org/news/content/images/2021/03/still-using-html-start-using-react-components.png" alt="" />
                    </div>
                </div>
            </section>

            {/* cisco_section_3 */}
            <section className="cisco_section_3">
                <h1>Webex works well <br /> with others</h1>
                <div className="cisco_section_3_wrapper">
                    <div className="others">
                        <div className="others_icon">
                            <img src="https://www.webex.com/content/dam/wbx/us/images/hp/webexone/webexone-outlook-thumbnail.png" alt="" />
                        </div>
                        <div className="others_icon">
                            <img src="https://www.webex.com/content/dam/wbx/us/images/hp/webexone/webexone-googledrive-thumbnail.png" alt="" />
                        </div>
                        <div className="others_icon">
                            <img src="https://www.webex.com/content/dam/wbx/us/images/hp/webexone/webexone-box-thumbnail.png" alt="" />
                        </div>
                        <div className="others_icon">
                            <img src="https://www.webex.com/content/dam/wbx/us/images/hp/webexone/webexone-salesforce-thumbnail.png" alt="" />
                        </div>
                        <div className="others_icon">
                            <img src="https://www.webex.com/content/dam/wbx/us/images/hp/webexone/webexone-zendesk-thumbnail.png" alt="" />
                        </div>
                    </div>
                </div>
                <button className="cisco_section_3_btn">See all apps and integrations</button>
            </section>


            {/* FOOTER SECTION */}
            <footer className="footer">
                <div className="footer_wrapper">
                    <div className="footer_img">
                        <div className="footer_img_wrapper">
                            <h4><span>Cisco</span> Webex</h4>
                            <div className="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfv4Dyg1JPyQbla--gvRabVkk1cblFlVLRg&usqp=CAU" alt="" />
                                <a href="#">If you missed Episode 01, watch it here: http://cs.co/6018y839w</a>
                            </div>
                            <div className="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQPf7yNS_ChOMBGrQDrqrP9MU4seRE_88IA&usqp=CAU" alt="" />
                                <a href="#">If you missed Episode 01, watch it here: http://cs.co/6018y839w</a>
                            </div>
                            <div className="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0GAwpZvFSJH8iB16y8JPrvv6HAPGjOcR7QQ&usqp=CAU" alt="" />
                                <a href="#">If you missed Episode 01, watch it here: http://cs.co/6018y839w</a>
                            </div>
                            <div className="footer_icons">
                                <div className="twit"><TwitterIcon /></div>
                                <div className="in"><LinkedInIcon /></div>
                                <div className="face"><FacebookIcon /></div>
                                <div className="youtube"><YouTubeIcon /></div>
                                <div className="wifi"><RssFeedIcon /></div>
                                <div className="instag"><InstagramIcon /></div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_text">
                        <div className="footer_text_wrapper">
                            <div className="solutions">
                                <p>SOLUTIONS</p>
                                <a href="#">Webex</a>
                                <a href="#">Plans & Pricing</a>
                                <a href="#">Downloads</a>
                                <a href="#">Webex Devices & Rooms</a>
                                <a href="#">Contact Center</a>
                                <a href="#">Online Event Management</a>
                                <a href="#">Online Training Management</a>
                                <a href="#">Remote Support Management</a>
                                <a href="#">Hardware as a Service</a>
                            </div>
                            <div className="features">
                                <p>FEATURES</p>
                                <a href="#">Webex: Meet</a>
                                <a href="#">Webex: Call</a>
                                <a href="#">Webex: Message</a>
                                <a href="#">Screen Sharing</a>
                                <a href="#">Conference Call</a>
                                <a href="#">AI - Assistant</a>
                            </div>
                            <div className="weex_for">
                                <p>WEBEX FOR</p>
                                <a href="#">Education</a>
                                <a href="#">Healthcare</a>
                                <a href="#">Financial Services</a>
                                <a href="#">Government</a>
                                <a href="#">Start-Ups</a>
                                <a href="#">Sports & Entertainment</a>
                                <a href="#">Developers</a>
                                <a href="#">IT Buyers</a>
                                <a href="#">Partners</a>
                            </div>

                            <div className="help_learning">
                                <p>HELP/LEARNING</p>
                                <a href="#">Help Center</a>
                                <a href="#">Join a Test Meeting</a>
                                <a href="#">Online Classes</a>
                                <a href="#">Accessibility</a>
                                <a href="#">Blog</a>
                                <a href="#">Webinars & Daily Demos</a>
                                <a href="#">Integrations</a>
                                <a href="#">Webex Essentials</a>
                                <a href="#">Webex Community</a>
                                <a href="#">Business Continuity Planning</a>
                            </div>
                            <div className="company">
                                <p>COMPANY</p>
                                <a href="#">Why Webex</a>
                                <a href="#">Cisco</a>
                                <a href="#">Future of Work</a>
                                <a href="#">Contact Support</a>
                                <a href="#">Contact Sales</a>
                                <a href="#">Webex Merch Store</a>
                                <a href="#">Careers</a>
                            </div>
                        </div>

                        {/* united_states */}
                        <div className="united_states" onClick={united}>
                            <LanguageIcon /> <span>United States</span> {!states? (<ExpandMoreIcon />) : (<ExpandLessIcon />)}
                        </div>

                        {/* copy_right */}
                        <div className="copy_right">
                            <span id="datas"> © 2021 Cisco and/or its affiliates. All rights reserved. Terms & Conditions Privacy Statement Cookies Trademarks</span>
                            <div className="copyRight_vaqt"></div>
                        </div>
                    </div>
                    <div className="united_States_111">
                        <p><Link>Australia (English)</Link></p>
                        <p><Link>Brazil (Português)</Link></p>
                        <p><Link>Canada (English)</Link></p>
                        <p><Link>Canada (Français)</Link></p>
                        <p><Link>China (简体字)</Link></p>
                        <p><Link>France (Français)</Link></p>
                        <p><Link>Germany (Deutsch)</Link></p>
                        <p><Link>Hong Kong (繁體中文)</Link></p>
                        <p><Link>India (English)</Link></p>
                        <p><Link>Italy (Italiano)</Link></p>
                        <p><Link>Japan (日本語)</Link></p>
                        <p><Link>South Korea (한국어)</Link></p>
                        <p><Link>Latin America (Español)</Link></p>
                        <p><Link>Spain (Español)</Link></p>
                        <p><Link>United Kingdom (English)</Link></p>
                        <div className="united_States_111_tg"></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}


export default Cisco;
