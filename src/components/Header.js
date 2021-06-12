import React from 'react';
import '../style/Header.css';
import '../style/HeaderMedia.css';
import { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';  // dowm
import ExpandLessIcon from '@material-ui/icons/ExpandLess';  // up
import { Link } from 'react-router-dom';
// import solution_image from '../images/solution.png';
import devicesimg from '../images/ajoyib.jpg';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

// menu hamburger
import MenuIcon from '@material-ui/icons/Menu';

function Header() {

    const dropdown1 = (e) => {
        const header_icon_down = document.querySelector('.header_link');
        header_icon_down.classList.add('header_icon_down_hide');

    }
    



    const [dropped, setdropped] = useState(false);

    // const dropdown1 = (e) => {
    //     const solution_container = document.querySelector('.solution_container');
    //     const header_logo_link = document.querySelector('.header_logo_link');
    //     const header = document.querySelector('.header');
    //     const link = document.querySelector('.header_link');
    //     const devices_icon = document.querySelector('.devices_icon');
    //     const resources_link = document.querySelector('.resources_link');
    //     const learn_link = document.querySelector('.learn_link');
    //     const sigin_link = document.querySelector('.sigin_link');


    //     if (!dropped) {
    //         solution_container.style.display = "flex";
    //         header.style.backgroundColor = 'white';
    //         header.style.transition = '0.3s';
    //         header.style.color = 'black';
    //         link.style.color = 'black';
    //         devices_icon.style.color = 'black';
    //         resources_link.style.color = 'black';
    //         learn_link.style.color = '#000';
    //         sigin_link.style.color = '#000';
    //         header_logo_link.style.color = '#000';
    //         setdropped(true);
    //     }

    //     else {
    //         solution_container.style.display = "none";
    //         header.style.backgroundColor = 'black';
    //         header.style.color = 'white';
    //         link.style.color = 'white'
    //         header.style.transition = '0.5s';
    //         devices_icon.style.color = '#fff';
    //         resources_link.style.color = '#fff';
    //         learn_link.style.color = '#fff';
    //         sigin_link.style.color = '#fff';
    //         header_logo_link.style.color = '#fff';
    //         setdropped(false);
    //     }
    // }

    const [drop, setdrop] = useState(false);

    const devices = (e) => {
        const devices_container = document.querySelector('.devices_container');
        const header = document.querySelector('.header');
        const link = document.querySelector('.header_link');
        const devices_icon = document.querySelector('.devices_icon');
        const resources_link = document.querySelector('.resources_link');
        const learn_link = document.querySelector('.learn_link');
        const sigin_link = document.querySelector('.sigin_link');
        const header_logo_link = document.querySelector('.header_logo_link');


        if (!drop) {
            devices_container.style.display = 'flex';
            devices_container.backgroundColor = 'white';
            header.style.backgroundColor = 'white';
            header.style.color = 'black';
            link.style.color = 'black';
            devices_icon.style.color = 'black';
            resources_link.style.color = 'black';
            learn_link.style.color = '#000';
            sigin_link.style.color = '#000';
            header_logo_link.style.color = '#000';
            setdrop(true);
        }
        else {
            devices_container.style.display = 'none';
            header.style.backgroundColor = 'black';
            header.style.color = 'white';
            link.style.color = '#fff';
            devices_icon.style.color = '#fff';
            resources_link.style.color = '#fff';
            learn_link.style.color = '#fff';
            sigin_link.style.color = '#fff';
            header_logo_link.style.color = '#fff';
            setdrop(false);
        }
    }


    const [resourc, setresourc] = useState(false);

    const resources_function = (e) => {

        const resources = document.querySelector('.resources');
        const resources_link = document.querySelector('.resources_link');
        const link = document.querySelector('.header_link');
        const devices_icon = document.querySelector('.devices_icon');
        const header = document.querySelector('.header');
        const devices_container = document.querySelector('.devices_container');
        const learn_link = document.querySelector('.learn_link');
        const sigin_link = document.querySelector('.sigin_link');
        const header_logo_link = document.querySelector('.header_logo_link');

        if (!resourc) {
            resources.style.display = 'flex';
            devices_container.style.display = 'none';
            header.style.backgroundColor = 'white';
            resources_link.style.color = 'black';
            header.style.color = 'black';
            link.style.color = 'black';
            devices_icon.style.color = 'black';
            learn_link.style.color = '#000';
            sigin_link.style.color = '#000';
            header_logo_link.style.color = '#000';
            setresourc(true);
        }
        else {
            resources.style.display = 'none';
            header.style.backgroundColor = 'black';
            header.style.color = 'white';
            resources_link.style.color = '#fff';
            link.style.color = '#fff';
            devices_icon.style.color = '#fff';
            learn_link.style.color = '#fff';
            sigin_link.style.color = '#fff';
            header_logo_link.style.color = '#fff';
            setresourc(false)
        }
    }

    const [learnmore, setlearnmore] = useState(false);

    const learnfunction = (e) => {
        const header = document.querySelector('.header');
        const learn = document.querySelector('.learn');
        const learn_link = document.querySelector('.learn_link');
        const header_link = document.querySelector('.header_link');
        const devices_icon = document.querySelector('.devices_icon');
        const resources_link = document.querySelector('.resources_link');
        const sigin_link = document.querySelector('.sigin_link');
        const header_logo_link = document.querySelector('.header_logo_link');


        if (!learnmore) {
            header.style.backgroundColor = '#fff';
            header.style.color = '#000';
            learn.style.display = 'flex';
            learn_link.style.color = '#000';
            header_link.style.color = '#000';
            devices_icon.style.color = '#000';
            resources_link.style.color = '#000';
            sigin_link.style.color = '#000';
            header_logo_link.style.color = '#000';
            setlearnmore(true)
        }
        else {
            learn.style.display = 'none';
            header.style.backgroundColor = '#000';
            header.style.color = '#fff';
            learn_link.style.color = '#fff';
            header_link.style.color = '#fff';
            devices_icon.style.color = '#fff';
            resources_link.style.color = '#fff';
            sigin_link.style.color = '#fff';
            header_logo_link.style.color = '#fff';
            setlearnmore(false);
        }
    }


    const [signmore, setsignmore] = useState(false);

    const Siginfunction = (e) => {

        const sign_in = document.querySelector('.sign_in');
        const sigin_link = document.querySelector('.sigin_link');
        const header = document.querySelector('.header');
        const learn_link = document.querySelector('.learn_link');
        const header_link = document.querySelector('.header_link');
        const devices_icon = document.querySelector('.devices_icon');
        const resources_link = document.querySelector('.resources_link');
        const header_logo_link = document.querySelector('.header_logo_link');

        if (!signmore) {
            sign_in.style.display = 'block';
            sigin_link.style.color = '#000';
            header.style.backgroundColor = '#fff';
            header.style.color = '#000';
            learn_link.style.color = '#000';
            header_link.style.color = '#000';
            devices_icon.style.color = '#000';
            resources_link.style.color = '#000';
            header_logo_link.style.color = '#000';
            setsignmore(true);
        }
        else {
            sign_in.style.display = 'none';
            sigin_link.style.color = '#fff';
            header.style.backgroundColor = '#000';
            header.style.color = '#fff';
            learn_link.style.color = '#fff';
            header_link.style.color = '#fff';
            devices_icon.style.color = '#fff';
            resources_link.style.color = '#fff';
            header_logo_link.style.color = '#fff';
            setsignmore(false);
        }
    }








    return (
        <div className="header">
            <div className="header_wrapper">
                <div className="header_logo">
                    <Link to="/" className="header_logo_link"><span>S </span>Oybek</Link>
                </div>
                <ul className="header_ul1">
                    <li onClick={dropdown1}>
                        <div className="header_icon_down">
                            <Link className="header_link">Solution</Link>
                            {!dropped ? (<ExpandMoreIcon />) : (<ExpandLessIcon className="ExpandLessIcon" />)}
                        </div>
                    </li>
                    <li>
                        <div className="header_icon_down">
                            Pricing
                        </div>
                    </li>
                    <li onClick={devices}>
                        <div className="header_icon_down">
                            <Link className="devices_icon">Devices</Link>
                            {!drop ? (<ExpandMoreIcon />) : (<ExpandLessIcon />)}
                        </div>
                    </li>
                    <li onClick={resources_function}>
                        <div className="header_icon_down">
                            <Link className="resources_link">Resources</Link>
                            {!resourc ? (<ExpandMoreIcon />) : (<ExpandLessIcon />)}
                        </div>
                    </li>
                    <li onClick={learnfunction}>
                        <div className="header_icon_down">
                            <Link className="learn_link">Learn</Link>
                            {!learnmore ? (<ExpandMoreIcon />) : (<ExpandLessIcon />)}
                        </div>
                    </li>
                </ul>
                <ul className="header_ul2">
                    <li>
                        <div className="header_icon_down">
                            join a meeting
                        </div>

                    </li>
                    <li>
                        <div className="header_icon_down">
                            Download
                        </div>

                    </li>
                    <li onClick={Siginfunction}>
                        <div className="header_icon_down">
                            <Link className="sigin_link">Sig in</Link>
                            {!signmore ? (<ExpandMoreIcon />) : (<ExpandLessIcon />)}
                        </div>
                    </li>
                    <li>
                        <div className="header_number">
                            +1-888-469-3239
                        </div>
                    </li>
                    <li>
                        <div className="header_icon_down">
                            <button className="header_btn">Start for free</button>
                        </div>
                    </li>
                    <li>
                        <div className="header_icon_menu">
                            <MenuIcon />
                        </div>
                    </li>
                </ul>
            </div>

            {/* dropdown1 funcsiyasi  Solution*/}
            <div className="solution_container">
                <div className="solution_left">
                    <div className="Introducing_img">
                        <img src="https://latifundist.com/media/company/600-s/00/01/1815/recycling-solutions-122668.png" alt="" />
                    </div>
                    <div className="Introducing">
                        <h4>Introducing the all new Webex</h4>
                        <p>Webex is your one easy-to-use and secure app to call, message, meet and get work done.</p>
                        <div className="Introducing_panel">
                            <div className="meet">
                                <h4>Meet</h4>
                                <p>Host video conferences with HD video, audio and screen sharing.</p>
                            </div>
                            <div className="call">
                                <h4>Call</h4>
                                <p>Get a phone number and business calling system so you can make and receive calls on any device.</p>
                            </div>
                            <div className="message">
                                <h4>message</h4>
                                <p>Connect instantly with team messaging, secure file-sharing and whiteboarding.</p>
                            </div>
                        </div>
                        <button type="submit">Get it now, for free</button>
                    </div>
                </div>
                <div className="solution_right">
                    <div className="other_solution">
                        <h4>Other solutions</h4>
                        <h5>Contact Center</h5>
                        <h5>Online Event Management</h5>
                        <h5>Report Support Management</h5>
                        <h5>Online Training Management</h5>
                        <h5>Hardware as a service</h5>
                    </div>
                    <div className="webex_solution">
                        <h4>Webex for industries</h4>
                        <h5>Education</h5>
                        <h5>Healthcare</h5>
                        <h5>Financial Services</h5>
                        <h5>Government</h5>
                        <h5>Start-Ups</h5>
                        <h5>Sports &</h5>
                        <h5>Entertainment</h5>
                    </div>
                </div>
            </div>

            {/* devices funcsiyasi*/}
            <div className="devices_container">
                <div className="devices_panel">
                    <div className="devices1">
                        <div className="board_series">
                            <div className="devices_img">
                                <img src={devicesimg} alt="" />
                            </div>
                            <div className="devices_text">
                                <h4>Board Series</h4>
                                <p>All-in-one collaboration device for wireless presenting, digital whiteboarding, and video conferencing.</p>
                            </div>
                        </div>
                        <div className="accessories">
                            <div className="accessories_img">
                                <img src={devicesimg} alt="" />
                            </div>
                            <div className="accessories_text">
                                <h4>Accessories</h4>
                                <p>All the peripherals to enhance your Cisco Webex setup.</p>
                            </div>
                        </div>
                        <div className="cameras">
                            <div className="cameras_img">
                                <img src={devicesimg} alt="" />
                            </div>
                            <div className="cameras_text">
                                <h4>Cameras</h4>
                                <p>The Cisco camera portfolio is designed to work in any meeting space with optimized video experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="devices2">
                        <div className="deskseries">
                            <div className="deskseries_img">
                                <img src={devicesimg} alt="" />
                            </div>
                            <div className="deskseries_text">
                                <h4>Desk Series</h4>
                                <p>Keep your colleagues close when working remotely with high-quality, face-to-face collaboration.</p>
                            </div>
                        </div>
                        <div className="roomseries">
                            <div className="roomseries_img">
                                <img src={devicesimg} alt="" />
                            </div>
                            <div className="roomseries_text">
                                <h4>Room Series</h4>
                                <p>Everything you need is in one unit: screens, speakers, codec, camera, touch user interface, microphones, and mounting.</p>
                            </div>
                        </div>
                        <div className="codecs">
                            <div className="codecs_img">
                                <img src={devicesimg} alt="" />
                            </div>
                            <div className="codecs_text">
                                <h4>Codecs</h4>
                                <p>Set up your own custom solution for large to extra large rooms.</p>
                            </div>
                        </div>
                    </div>
                    <div className="devices3">
                        <div className="deskseries">
                            <div className="roomnavigator_img">
                                <img src={devicesimg} alt="" />
                            </div>
                            <div className="roomnavigator_text">
                                <h4>Room Navigator</h4>
                                <p>Easily find and book a room with this smart touch panel.</p>
                            </div>
                        </div>
                        <div className="roomkiteries">
                            <div className="roomkiteries_img">
                                <img src={devicesimg} alt="" />
                            </div>
                            <div className="roomkiteries_text">
                                <h4>Room Kit Series</h4>
                                <p>The Webex Room Kits enable high-quality video conferencing from the smallest to the largest meeting rooms.</p>
                            </div>
                        </div>
                        <div className="panoramaseries">
                            <div className="panoramaseries_img">
                                <img src={devicesimg} alt="" />
                            </div>
                            <div className="panoramaseries_text">
                                <h4>Panorama Series</h4>
                                <p>Immersive panoramic video collaboration with rich content expeirence, without losing local in-room communication.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="devices_panel_btn">See all devices →</button>
            </div>

            <div className="resources">
                <div className="resources_wrapper">
                    <div className="resources_group1">
                        <div className="Integrations">
                            <h4>Integrations</h4>
                            <p>Integrate with the apps you love to use every day, so your work stays connected.</p>
                        </div>

                        <div className="webex_blog">
                            <h4>Webex Blog</h4>
                            <p>Visit the Webex Blog to read about what’s new in Webex, current video conferencing tips and tricks, and more!</p>
                        </div>

                        <div className="security_difference">
                            <h4>Security difference</h4>
                            <p>Learn more about how we deliver uncompromised privacy and security you can trust.</p>
                        </div>
                    </div>
                    <div className="resources_group2">
                        <div className="webex_community">
                            <h4>Webex Community</h4>
                            <p>Connect with users like you on our Cisco Webex Community forum. Ask questions, share feedback, join an event, or help others!</p>
                        </div>

                        <div className="accessibility">
                            <h4>Accessibility</h4>
                            <p>Access Webex resources for deaf or hard of hearing users, and sign language interpreters</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="learn">
                <div className="learn_wrapper">
                    <div className="learn_group1">
                        <div className="learn_group_top">
                            <div className="product_help">
                                <h4>Product help</h4>
                                <p>Get quick answers to your questions with help articles, video tutorials, and training</p>
                            </div>
                            <div className="webinars_demos">
                                <h4>Webinars & daily demos</h4>
                                <p>Join live and on-demand events featuring industry insights, product walk-throughs and special guest speakers.</p>
                            </div>
                        </div>
                        <div className="learn_group_bottom">
                            <div className="online_classes">
                                <h4>Online classes</h4>
                                <p>Learn all about Webex with free online training led by our experts</p>
                            </div>

                            <div className="webex_essentials">
                                <h4>Webex essentials</h4>
                                <p>Resources to help you get the most out of Webex -- for every role, industy, and team.</p>
                            </div>
                        </div>
                    </div>
                    <div className="learn_group2">
                        <h4 className="a">Webex workspaces</h4>
                        <div className="workpaces_group">
                            <div className="learn_img">
                                <img src={devicesimg} alt="" />
                            </div>
                            <div className="learn_group_text">
                                <h4>Personal offices</h4>
                                <div className="workpaces_icon">
                                    <PermIdentityIcon />
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="workpaces_group">
                            <div className="learn_img">
                                <img src={devicesimg} alt="" />
                            </div>
                            <div className="learn_group_text">
                                <h4>Personal offices</h4>
                                <div className="workpaces_icon">
                                    <PermIdentityIcon />
                                    <span>1-5</span>
                                </div>
                            </div>
                        </div>
                        <div className="workpaces_group">
                            <div className="learn_img">
                                <img src={devicesimg} alt="" />
                            </div>
                            <div className="learn_group_text">
                                <h4>Personal offices</h4>
                                <div className="workpaces_icon">
                                    <PermIdentityIcon />
                                    <span>2-12</span>
                                </div>
                            </div>
                        </div>
                        <div className="workpaces_group">
                            <div className="learn_img">
                                <img src={devicesimg} alt="" />
                            </div>
                            <div className="learn_group_text">
                                <h4>Personal offices</h4>
                                <div className="workpaces_icon">
                                    <PermIdentityIcon />
                                    <span>4-20</span>
                                </div>
                            </div>
                        </div>
                        <div className="workpaces_group">
                            <div className="learn_img">
                                <img src={devicesimg} alt="" />
                            </div>
                            <div className="learn_group_text">
                                <h4>Personal offices</h4>
                                <div className="workpaces_icon">
                                    <PermIdentityIcon />
                                    <span>24-159</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sign_in">
                <h3>Sign in</h3>
                <p>Sign in to your Webex account.</p>
                <form action="#">
                    <label htmlFor="#">Username</label>
                    <input type="text" placeholder="Email address" />
                    <label htmlFor="#">Password</label>
                    <input type="password" placeholder="Password" />
                    <button>Sign in</button>
                    <span>Need help signing in? <Link>Contact Support</Link></span>
                </form>
            </div>

        </div>
    )
}

export default Header
