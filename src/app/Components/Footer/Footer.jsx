import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer style={{marginTop:"-50px"}} className="footer-section position-relative">
            <div style={{backgroundColor:"white" }} className="footer-widgets-wrapper marginleftsm style1 fix">
                <div className="container ">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link href="/">
                                        <Image src="/assets/images/logo/logo.png" alt="img" width={90} height={55} />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        RIDY is India’s First and Largest
                                        Women Focused EV Ride Hailing
                                        Service
                                    </p>
                                    {/* if need add the app download link */}

                                    {/* <div className="store-links">
                                        <div className="apple">
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="17"
                                                viewBox="0 0 19 17" fill="none">
                                                <path
                                                    d="M13.9741 0.148438C11.9982 0.148438 11.1631 1.09311 9.78702 1.09311C8.37612 1.09311 7.29994 0.155311 5.58766 0.155311C3.91164 0.155311 2.12437 1.1805 0.989386 2.92696C-0.604303 5.38978 -0.333787 10.0282 2.24738 13.9797C3.17066 15.3942 4.40366 16.9806 6.02087 16.9978H6.05028C7.45578 16.9978 7.87332 16.0757 9.8076 16.0649H9.837C11.7424 16.0649 12.1246 16.9924 13.5242 16.9924H13.5536C15.1709 16.9752 16.47 15.2175 17.3933 13.8083C18.0578 12.7949 18.3048 12.2863 18.8145 11.1398C15.0807 9.71985 14.4809 4.41664 18.1735 2.38344C17.0463 0.969377 15.4624 0.150401 13.9692 0.150401L13.9741 0.148438Z"
                                                    fill="white" />
                                            </svg> App Store</a>
                                        </div>
                                        <div className="play">
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="17"
                                                viewBox="0 0 26 17" fill="none">
                                                <path
                                                    d="M18.8732 5.50779L20.9775 1.64735C21.0339 1.54372 21.0493 1.42066 21.0204 1.30505C20.9914 1.18943 20.9204 1.09065 20.8229 1.03026C20.7748 1.00032 20.7215 0.980802 20.6661 0.97283C20.6108 0.964858 20.5545 0.968593 20.5005 0.983821C20.4466 0.999048 20.396 1.02546 20.3517 1.06154C20.3075 1.09761 20.2704 1.14263 20.2427 1.19398L18.1122 5.10427C16.4855 4.31717 14.6547 3.87902 12.6857 3.87902C10.7167 3.87902 8.88588 4.3177 7.25923 5.10427L5.12868 1.19398C5.07191 1.09044 4.97863 1.01502 4.86936 0.984319C4.76008 0.953616 4.64377 0.970142 4.546 1.03026C4.44823 1.09038 4.37702 1.18917 4.34803 1.3049C4.31904 1.42062 4.33464 1.54381 4.39141 1.64735L6.49075 5.50779C2.86386 7.58782 0.405796 11.4776 0 16.0313H25.3684C24.9626 11.4776 22.5046 7.58782 18.8732 5.50779ZM6.85988 12.2584C6.64958 12.2584 6.444 12.1924 6.26914 12.0687C6.09429 11.9449 5.958 11.7691 5.87752 11.5633C5.79705 11.3575 5.77599 11.1311 5.81702 10.9127C5.85804 10.6942 5.95931 10.4936 6.10802 10.3361C6.25672 10.1786 6.44618 10.0714 6.65244 10.0279C6.8587 9.98449 7.07249 10.0068 7.26678 10.092C7.46108 10.1772 7.62714 10.3216 7.74398 10.5068C7.86081 10.6919 7.92317 10.9097 7.92317 11.1324C7.92304 11.431 7.81097 11.7173 7.6116 11.9285C7.41222 12.1396 7.14184 12.2583 6.85988 12.2584ZM18.5036 12.2584C18.2935 12.2575 18.0883 12.1907 17.9141 12.0664C17.7398 11.9421 17.6042 11.7659 17.5244 11.56C17.4446 11.3542 17.4242 11.1279 17.4657 10.9098C17.5073 10.6917 17.6089 10.4915 17.7578 10.3345C17.9066 10.1775 18.0961 10.0707 18.3022 10.0276C18.5084 9.98453 18.7219 10.0071 18.916 10.0925C19.11 10.1778 19.2758 10.3222 19.3924 10.5073C19.5091 10.6923 19.5713 10.9099 19.5713 11.1324C19.5713 11.2804 19.5436 11.4271 19.49 11.5638C19.4364 11.7006 19.3579 11.8248 19.2589 11.9294C19.1599 12.034 19.0424 12.1169 18.9132 12.1733C18.7839 12.2298 18.6454 12.2587 18.5056 12.2584H18.5036Z"
                                                    fill="#242331" />
                                            </svg> Play Store</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3> Pages </h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <Link href="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            Ride
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/service">
                                            Drive
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/investwithus">
                                            Invest
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3> Utility Pages </h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <Link href="/project">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Cancellation & Refund Policy
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/pricing">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/project/project-details">
                                            Project details
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/team">
                                            Our Team
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="">
                                    <div className="widget-head"> <h3> Address </h3> </div>
                                    <div style={{ display: "flex", gap: "10px" }}  className="  "> 
                                        <div className="icon">
                                    <Image src="/assets/images/icon/location.svg" alt="phone" width={30} height={30} />
                                        </div>
                                    <div className=" mb-20 "> <a href=""> Guindy | Thoraipakkam </a></div>
                                    </div>
                                    <div style={{ display: "flex", gap: "10px", }} className="info mb-20 ">
                                        <div className="icon">
                                        <Image src="/assets/images/icon/email.svg" alt="phone" width={30} height={30} />
                                        </div>
                                        <div className="link text">
                                            <a href="mailto:contact.tech@gmail.com">ridyladycab@gmail.com </a> <br />
                                            {/* <a href="mailto:info@Niotech.com">info@Niotech.com</a> */}
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", gap: "10px" }} className="info">
                                        <div className="icon ">
                                            <Image src="/assets/images/icon/phone.svg" alt="phone" width={30} height={30} />

                                        </div>
                                        <div className="link text ">
                                            <a href="tel:21314234323543">+91 8072877622  </a> 
                                            <br />
                                            <a href="tel:35234523452345">+91 90435 88782 </a> 
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop:"30px"}} className="footer-bottom  style1">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p>©<span> {new Date().getFullYear()}</span> All rights reserved by RIDY LADY CAB PVT LIMITED </p>
                        <ul className="social-links" data-wow-delay=".5s">
                            <li> <a href="https://www.instagram.com/ridyladycab/  "><i className="bi bi-instagram"></i></a> </li>
                            <li> <a href="https://www.facebook.com/profile.php?id=61568718355276 "><i className="bi bi-facebook"></i></a> </li>
                            <li> <a href="https://x.com/ridyladycab"><i className="bi bi-twitter"></i></a> </li>
                            <li> <a href="https://www.youtube.com/@ridyladycab  "><i className="bi bi-youtube"></i></a> </li>
                            <li> <a href="https://www.linkedin.com/company/ridy-the-lady-cab/"><i className="bi bi-linkedin"></i></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;