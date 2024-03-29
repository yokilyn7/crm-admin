import React from 'react'
import "../assets/css/dashboard/dash_1.css";
import '../assets/css/activity-content.css';
import '../assets/css/scrollspyNav.css';
import '../plugins/apex/apexcharts.css';
import TotalVisits from './TotalVisits';
import PaidVisits from './PaidVisits';
import UniqueVisitors from './UniqueVisits';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';


export default function ContentArea() {
    return (
       
        <div id="content" className="main-content">
            <div className="layout-px-spacing">
                
                <div className="content-container">

                    <div className="col-left layout-top-spacing">
                        <div className="col-left-content">

                            <div className="header-container">
                                <header className="header navbar navbar-expand-sm">                                    
                                    <div className="d-flex">
                                        <a href="javascript:void(0);" className="sidebarCollapse" data-placement="bottom">
                                            <div className="bt-menu-trigger">
                                                <span></span>
                                            </div>
                                        </a>
                                        <div className="page-header">
                                            <div className="page-title">
                                                <h3>Analytics</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="header-actions">
                                        <div className="nav-item dropdown language-dropdown more-dropdown">
                                            <div className="dropdown custom-dropdown-icon">
                                                <a className="dropdown-toggle btn" href="#" role="button" id="customDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="img/flag-ca2.svg" className="flag-width" alt="flag"></img><span>English</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
                        
                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="customDropdown">
                                                    <a className="dropdown-item" data-img-value="flag-de3" data-value="German" href="javascript:void(0);"><img src="img/flag-de3.svg" className="flag-width" alt="flag"></img> German</a>
                                                    <a className="dropdown-item" data-img-value="flag-sp" data-value="Spanish" href="javascript:void(0);"><img src="img/flag-sp.svg" className="flag-width" alt="flag"></img>  Spanish</a>
                                                    <a className="dropdown-item" data-img-value="flag-fr3" data-value="French" href="javascript:void(0);"><img src="img/flag-fr3.svg" className="flag-width" alt="flag"></img>  French</a>
                                                    <a className="dropdown-item" data-img-value="flag-ca2" data-value="English" href="javascript:void(0);"><img src="img/flag-ca2.svg" className="flag-width" alt="flag"></img>  English</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="toggle-notification-bar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                        </div>
                                    </div>
                                </header>
                            </div>

                            <div className="admin-data-content layout-top-spacing">

                                <div className="row">
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-one">
                                            <div className="widget-heading">
                                                <h6 className="">Statistics</h6>
                                            </div>
                                            <div className="w-chart">

                                                <div className="w-chart-section total-visits-content">
                                                    <div className="w-detail">
                                                        <p className="w-title">Total Visits</p>
                                                        <p className="w-stats">423,964</p>
                                                    </div>
                                                    <div className="w-chart-render-one">
                                                        <div id="total-users"><TotalVisits /></div>
                                                    </div>
                                                </div>
                                                
                                                
                                                <div className="w-chart-section paid-visits-content">
                                                    <div className="w-detail">
                                                        <p className="w-title">Paid Visits</p>
                                                        <p className="w-stats">7,929</p>
                                                    </div>
                                                    <div className="w-chart-render-one">
                                                        <div id="paid-visits"><PaidVisits/></div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-card-four">
                                            <div className="widget-content">
                                                <div className="w-header">
                                                    <div className="w-info">
                                                        <h6 className="value">Expenses</h6>
                                                    </div>
                                                    <div className="task-action">
                                                        <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" role="button" id="pendingTask" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                            </a>
                
                                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="pendingTask" style={{willChange: 'transform'}}>                                                            
                                                                <a className="dropdown-item" href="javascript:void(0);">This Week</a>
                                                                <a className="dropdown-item" href="javascript:void(0);">Last Week</a>
                                                                <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="w-content">

                                                    <div className="w-info">
                                                        <p className="value">$ 45,141 <span>this week</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></p>
                                                      
                                                    </div>
                                                    
                                                </div>

                                                <div className="w-progress-stats">                                            
                                                    <div className="progress">
                                                        <div className="progress-bar bg-gradient-secondary" role="progressbar" style={{width: "57%", aria_valuenow:"57", aria_valuemin:"0", aria_valuemax:"100"}}></div>                                   
                                                    </div>

                                                    <div className="">
                                                        <div className="w-icon">
                                                            <p>57%</p>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-account-invoice-two">
                                            <div className="widget-content">
                                                <div className="account-box">
                                                    <div className="info">
                                                        <div className="inv-title">
                                                            <h5 className="">Total Balance</h5>
                                                        </div>
                                                        <div className="inv-balance-info">

                                                            <p className="inv-balance">$ 41,741.42</p>
                                                            
                                                            <span className="inv-stats balance-credited">+ 2453</span>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="acc-action">
                                                        <div className="">
                                                            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></a>
                                                            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg></a>
                                                        </div>
                                                        <a href="javascript:void(0);">Upgrade</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-card-one">
                                            <div className="widget-content">
                
                                                <div className="media">
                                                    <div className="w-img">
                                                        <img src="img/90x90.jpg" alt="avatar"></img>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>Jimmy Turner</h6>
                                                        <p className="meta-date-time">Monday, Nov 18</p>
                                                    </div>
                                                </div>
                
                                                <p>"Duis aute irure dolor" in reprehenderit in voluptate velit esse cillum "dolore eu fugiat" nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                
                                                <div className="w-action">
                                                    <div className="card-like">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                                        <span>551 Likes</span>
                                                    </div>

                                                    <div className="read-more">
                                                        <a href="javascript:void(0);">Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevrons-right"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                
                                    </div>

                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-chart-three">
                                            <div className="widget-heading">
                                                <div className="">
                                                    <h5 className="">Unique Visitors</h5>
                                                </div>
                
                                                <div className="dropdown ">
                                                    <a className="dropdown-toggle" href="#" role="button" id="uniqueVisitors" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                    </a>
                
                                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="uniqueVisitors">
                                                        <a className="dropdown-item" href="javascript:void(0);">View</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Update</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Download</a>
                                                    </div>
                                                </div>
                                            </div>
                
                                            <div className="widget-content">
                                                <div id="uniqueVisits"><UniqueVisitors/></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 layout-spacing">
                                        <div className="widget-four">
                                            <div className="widget-heading">
                                                <h5 className="">Visitors by Browser</h5>
                                            </div>
                                            <div className="widget-content">
                                                <div className="vistorsBrowser">
                                                    <div className="browser-list">
                                                        <div className="w-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chrome"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>
                                                        </div>
                                                        <div className="w-browser-details">
                                                            <div className="w-browser-info">
                                                                <h6>Chrome</h6>
                                                                <p className="browser-count">65%</p>
                                                            </div>
                                                            <div className="w-browser-stats">
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-gradient-primary" role="progressbar" style={{width: "65%", aria_valuenow:"90", aria_valuemin:"0", aria_valuemax:"100"}}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="browser-list">
                                                        <div className="w-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-compass"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                                                        </div>
                                                        <div className="w-browser-details">
                                                            
                                                            <div className="w-browser-info">
                                                                <h6>Safari</h6>
                                                                <p className="browser-count">25%</p>
                                                            </div>

                                                            <div className="w-browser-stats">
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-gradient-danger" role="progressbar" style={{width: "35%", aria_valuenow:"65", aria_valuemin:"0", aria_valuemax:"100"}}></div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>

                                                    <div className="browser-list">
                                                        <div className="w-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                                        </div>
                                                        <div className="w-browser-details">
                                                            
                                                            <div className="w-browser-info">
                                                                <h6>Others</h6>
                                                                <p className="browser-count">15%</p>
                                                            </div>

                                                            <div className="w-browser-stats">
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-gradient-warning" role="progressbar" style={{width: "35%", aria_valuenow:"65", aria_valuemin:"0", aria_valuemax:"100"}}></div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-activity-five">

                                            <div className="widget-heading">
                                                <h5 className="">Activity Log</h5>

                                                <div className="task-action">
                                                    <div className="dropdown">
                                                        <a className="dropdown-toggle" href="#" role="button" id="pendingTask" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                        </a>
            
                                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="pendingTask" style={{will_change: "transform"}}>
                                                            <a className="dropdown-item" href="javascript:void(0);">View All</a>
                                                            <a className="dropdown-item" href="javascript:void(0);">Mark as Read</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="widget-content">

                                                <div className="w-shadow-top"></div>

                                                <div className="mt-container mx-auto">
                                                    <div className="timeline-line">
                                                        
                                                        <div className="item-timeline timeline-new">
                                                            <div className="t-dot">
                                                                <div className="t-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div>
                                                            </div>
                                                            <div className="t-content">
                                                                <div className="t-uppercontent">
                                                                    <h5>New project created : <a href="javscript:void(0);"><span>[Cork Admin Template]</span></a></h5>
                                                                </div>
                                                                <p>27 Feb, 2020</p>
                                                            </div>
                                                        </div>

                                                        <div className="item-timeline timeline-new">
                                                            <div className="t-dot">
                                                                <div className="t-success"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                                                            </div>
                                                            <div className="t-content">
                                                                <div className="t-uppercontent">
                                                                    <h5>Mail sent to <a href="javascript:void(0);">HR</a> and <a href="javascript:void(0);">Admin</a></h5>
                                                                </div>
                                                                <p>28 Feb, 2020</p>
                                                            </div>
                                                        </div>

                                                        <div className="item-timeline timeline-new">
                                                            <div className="t-dot">
                                                                <div className="t-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                                                            </div>
                                                            <div className="t-content">
                                                                <div className="t-uppercontent">
                                                                    <h5>Server Logs Updated</h5>
                                                                </div>
                                                                <p>27 Feb, 2020</p>
                                                            </div>
                                                        </div>

                                                        <div className="item-timeline timeline-new">
                                                            <div className="t-dot">
                                                                <div className="t-danger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                                                            </div>
                                                            <div className="t-content">
                                                                <div className="t-uppercontent">
                                                                    <h5>Task Completed : <a href="javscript:void(0);"><span>[Backup Files EOD]</span></a></h5>
                                                                </div>
                                                                <p>01 Mar, 2020</p>
                                                            </div>
                                                        </div>

                                                        <div className="item-timeline timeline-new">
                                                            <div className="t-dot">
                                                                <div className="t-warning"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg></div>
                                                            </div>
                                                            <div className="t-content">
                                                                <div className="t-uppercontent">
                                                                    <h5>Documents Submitted from <a href="javascript:void(0);">Sara</a></h5>
                                                                    <span className=""></span>
                                                                </div>
                                                                <p>10 Mar, 2020</p>
                                                            </div>
                                                        </div>

                                                        <div className="item-timeline timeline-new">
                                                            <div className="t-dot">
                                                                <div className="t-dark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg></div>
                                                            </div>
                                                            <div className="t-content">
                                                                <div className="t-uppercontent">
                                                                    <h5>Server rebooted successfully</h5>
                                                                    <span className=""></span>
                                                                </div>
                                                                <p>06 Apr, 2020</p>
                                                            </div>
                                                        </div>                                      
                                                    </div>                                    
                                                </div>

                                                <div className="w-shadow-bottom"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="row widget-statistic">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
                                                <div className="widget widget-one_hybrid widget-followers">
                                                    <div className="widget-heading">
                                                        <div className="w-title">
                                                            <div className="w-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                            </div>
                                                            <div className="">
                                                                <p className="w-value">31.6K</p>
                                                                <h5 className="">Followers</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-content">    
                                                        <div className="w-chart">
                                                            <div id="hybrid_followers"><Chart1/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
                                                <div className="widget widget-one_hybrid widget-referral">
                                                    <div className="widget-heading">
                                                        <div className="w-title">
                                                            <div className="w-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                                            </div>
                                                            <div className="">
                                                                <p className="w-value">1,900</p>
                                                                <h5 className="">Referral</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-content">    
                                                        <div className="w-chart">
                                                            <div id="hybrid_followers1"><Chart2/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
                                                <div className="widget widget-one_hybrid widget-engagement">
                                                    <div className="widget-heading">
                                                        <div className="w-title">
                                                            <div className="w-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                                            </div>
                                                            <div className="">
                                                                <p className="w-value">18.2%</p>
                                                                <h5 className="">Engagement</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-content">    
                                                        <div className="w-chart">
                                                            <div id="hybrid_followers3"><Chart3/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-card-two">
                                            <div className="widget-content">

                                                <div className="media">
                                                    <div className="w-img">
                                                        <img src="img/90x90.jpg" alt="avatar"></img>
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>Dev Summit - New York</h6>
                                                        <p className="meta-date-time">Bronx, NY</p>
                                                    </div>
                                                </div>

                                                <div className="card-bottom-section">
                                                    <h5>4 Members Going</h5>
                                                    <div className="img-group">
                                                        <img src="img/90x90.jpg" alt="avatar"></img>
                                                        <img src="img/90x90.jpg" alt="avatar"></img>
                                                        <img src="img/90x90.jpg" alt="avatar"></img>
                                                        <img src="img/90x90.jpg" alt="avatar"></img>
                                                    </div>
                                                    <a href="javascript:void(0);" className="btn">View Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-five">

                                            <div className="widget-heading">

                                                <a href="javascript:void(0)" className="task-info">

                                                    <div className="usr-avatar">
                                                        <span>FD</span>
                                                    </div>

                                                    <div className="w-title">

                                                        <h5>Figma Design</h5>
                                                        <span>Design Reset</span>
                                                        
                                                    </div>

                                                </a>

                                                <div className="task-action">
                                                    <div className="dropdown">
                                                        <a className="dropdown-toggle" href="#" role="button" id="pendingTask" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                        </a>
            
                                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="pendingTask" style={{will_change: "transform"}}>
                                                            <a className="dropdown-item" href="javascript:void(0);">View Project</a>
                                                            <a className="dropdown-item" href="javascript:void(0);">Edit Project</a>
                                                            <a className="dropdown-item" href="javascript:void(0);">Mark as Done</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                            
                                            <div className="widget-content">

                                                <p>Doloribus nisi vel suscipit modi, optio ex repudiandae voluptatibus officiis commodi. Nesciunt quas aut neque incidunt!</p>

                                                <div className="progress-data">

                                                    <div className="progress-info">
                                                        <div className="task-count"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg><p>5 Tasks</p></div>
                                                        <div className="progress-stats"><p>86.2%</p></div>
                                                    </div>
                                                    
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "65%", aria_valuenow:"90", aria_valuemin:"0", aria_valuemax:"100"}}></div>
                                                    </div>
                                                    
                                                </div>

                                                <div className="meta-info">

                                                    <div className="due-time">
                                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 3 Days Left</p>
                                                    </div>
                                                    

                                                    <div className="avatar--group">

                                                        <div className="avatar translateY-axis more-group">
                                                            <span className="avatar-title">+6</span>
                                                        </div>
                                                        <div className="avatar translateY-axis">
                                                            <img alt="avatar" src="img/90x90.jpg"/>
                                                        </div>
                                                        <div className="avatar translateY-axis">
                                                            <img alt="avatar" src="img/90x90.jpg"/>
                                                        </div>
                                                        <div className="avatar translateY-axis">
                                                            <img alt="avatar" src="img/90x90.jpg"/>
                                                        </div>
                                                        
                                                    </div>

                                                </div>
                                                
                                                
                                            </div>

                                        </div>
                
                                    </div>

                                    
                                </div>
                            </div>
                            <div className="footer-wrapper col-xl-12">
                                <div className="footer-section f-section-1">
                                    <p className="">© 2021 <a target="_blank" href="https://designreset.com">DesignReset</a></p>
                                </div>
                                <div className="footer-section f-section-2">
                                    <p className="">Coded with <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-right">
                        <div className="col-right-content">
                            <div className="navbar-item flex-row search-ul navbar-dropdown">
                                <div className="nav-item align-self-center search-animated">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search toggle-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    <form className="form-inline search-full form-inline search" role="search">
                                        <div className="search-bar">
                                            <input type="text" className="form-control search-form-control  ml-lg-auto" placeholder="Search..."></input>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-right-content-container">

                                <div className="activity-section">

                                    <div className="widget-profile">

                                        <div className="w-profile-view">
                                            <img src="img/90x90.jpg" alt="admin-profile" className="img-fluid"></img>
                                            <div className="w-profile-content">
                                                <h6>Alan Green</h6>
                                                <p>Lead Developer</p>
                                            </div>
                                        </div>

                                        <div className="w-profile-links">
                                            <a href="user_profile.html" className="w-p-link">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                <p>My Profile</p>
                                            </a>

                                            <a href="apps_mailbox.html" className="w-p-link">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                                                <p>Inbox</p>
                                            </a>
                                        </div>
                                        
                                    </div>

                                    <div className="widget-todo">
                                        <div className="todo-content">
                                            <div className="todo-title">
                                                <h6><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></span> <span className="align-self-center">Todo</span></h6>
                                            </div>
                                            <div className="todo-text">
                                                <a href="apps_todoList.html"><p>11 New Task</p></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="widget-message">
                                        <div className="widget-title">
                                            <h5>Messages</h5>
                                            <a href="apps_chat.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                            </a>
                                        </div>

                                        <div className="widget-messages">
                                            <a href="apps_chat.html" className="w-message">
                                                <img src="img/90x90.jpg" alt="" className="img-fluid"></img>
                                                <div className="msg-content">
                                                    <h5 className="w-msg-username">Andy King</h5>
                                                    <p className="w-msg-text">Work is delayed</p>
                                                </div>
                                            </a>

                                            <a href="apps_chat.html" className="w-message">
                                                <img src="img/90x90.jpg" alt="" className="img-fluid"></img>
                                                <div className="msg-content">
                                                    <h5 className="w-msg-username">Alma Clark</h5>
                                                    <p className="w-msg-text">It was a bit dramatic.</p>
                                                </div>
                                            </a>

                                            <a href="apps_chat.html" className="w-message">
                                                <img src="img/90x90.jpg" alt="" className="img-fluid"></img>
                                                <div className="msg-content">
                                                    <h5 className="w-msg-username">Vincent</h5>
                                                    <p className="w-msg-text">Coffee?</p>
                                                </div>
                                            </a>

                                            <a href="apps_chat.html" className="w-message">
                                                <img src="img/90x90.jpg" alt="" className="img-fluid"></img>
                                                <div className="msg-content">
                                                    <h5 className="w-msg-username">Iris Hofman</h5>
                                                    <p className="w-msg-text">Not comming to office today.</p>
                                                </div>
                                            </a>

                                            <a href="apps_chat.html" className="w-message">
                                                <img src="img/90x90.jpg" alt="" className="img-fluid"></img>
                                                <div className="msg-content">
                                                    <h5 className="w-msg-username">Linda Nelson</h5>
                                                    <p className="w-msg-text">Uploaded files to server.</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="widget-invoice">
                                        <div className="widget-title">
                                            <h5>New Invoice</h5>
                                            <a href="apps_invoice.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                            </a>
                                        </div>

                                        <div className="widget-invoice-lists">
                                            <div className="w-invoice">
                                                <p className="w-inv-text"><a href="apps_invoice.html"><span className="inv-number">#002658</span></a> is generated for <span className="usr-name">Laurie Fox</span></p>
                                            </div>

                                            <div className="w-invoice">
                                                <p className="w-inv-text"><a href="apps_invoice.html"><span className="inv-number">#0036489</span></a> is generated for <span className="usr-name">Ernest Reeves</span></p>
                                            </div>

                                            <div className="w-invoice">
                                                <p className="w-inv-text"><a href="apps_invoice.html"><span className="inv-number">#014778</span></a> is generated for <span className="usr-name">Sean Freeman</span></p>
                                            </div>

                                            <div className="w-invoice">
                                                <p className="w-inv-text"><a href="apps_invoice.html"><span className="inv-number">#0165987</span></a> is generated for <span className="usr-name">Nia Hillyer</span></p>
                                            </div>

                                            <div className="w-invoice">
                                                <p className="w-inv-text"><a href="apps_invoice.html"><span className="inv-number">#0265998</span></a> is generated for <span className="usr-name">Dale Butler</span></p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="widget-taskBoard">
                                        <div className="widget-title">
                                            <h5>Task Board</h5>
                                            <a href="apps_scrumboard.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                            </a>
                                        </div>

                                        <div className="widget-taskBoard-lists">
                                            <div className="w-taskBoard">
                                                <p className="w-taskBoard-text"><a href="apps_scrumboard.html"><span className="taskBoard-number">Launch New Seo Wordpress Theme</span></a> has been moved to <span className="taskBoard-name">Completed</span> Board by <span className="usr-name">Alma Clark</span></p>
                                            </div>

                                            <div className="w-taskBoard">
                                                <p className="w-taskBoard-text"><a href="apps_scrumboard.html"><span className="taskBoard-number">New Task</span></a> is added by <span className="usr-name">Ernest Reeves</span></p>
                                            </div>

                                            <div className="w-taskBoard">
                                                <p className="w-taskBoard-text"><a href="apps_scrumboard.html"><span className="taskBoard-number">Dinner with Kelly Young</span></a> has been moved to <span className="taskBoard-name">Completed</span> Board by <span className="usr-name">Dale Butler</span></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="widget-calendar">
                                        <div className="widget-title">
                                            <h5>Event Notifications</h5>

                                            <div className="task-action">
                                                <div className="dropdown">
                                                    <a className="dropdown-toggle" href="#" role="button" id="pendingTask" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                    </a>
        
                                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="pendingTask" style={{will_change: "transform"}}>
                                                        <a className="dropdown-item" href="javascript:void(0);">View All</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">Mark as Read</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="widget-calendar-lists">
                                            <div className="widget-calendar-lists-scroll">
                                                <a href="apps_calendar.html" className="w-calendar w-calendar-c6">
                                                    <div className="w-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                    </div>
                                                    <p className="w-calendar-text"><span className="calendar-number">New Event</span> has been added on <span className="calendar-name">15 Dec 2020</span></p>
                                                </a>

                                                <a href="apps_calendar.html" className="w-calendar w-calendar-c3">
                                                    <div className="w-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                    </div>
                                                    <p className="w-calendar-text">Collect <span className="calendar-number">documents</span> from <span className="calendar-number">Kelly</span> at the restaurant tommorrow.</p>
                                                </a>

                                                <a href="apps_calendar.html" className="w-calendar w-calendar-c1">
                                                    <div className="w-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                    </div>
                                                    <p className="w-calendar-text"><span className="calendar-number">Meeting Event</span> on 12 Nov has been updated to 8 PM</p>
                                                </a>

                                                <a href="apps_calendar.html" className="w-calendar w-calendar-c5">
                                                    <div className="w-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                    </div>
                                                    <p className="w-calendar-text"><span className="calendar-number">New Event</span> Seminar organised by Design Reset will be held on 25 January</p>
                                                </a>

                                                <a href="apps_calendar.html" className="w-calendar w-calendar-c2">
                                                    <div className="w-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                                    </div>
                                                    <p className="w-calendar-text">Today's <span className="calendar-number">Conference</span> is Cancelled.</p>
                                                </a>

                                                <a href="apps_calendar.html" className="w-calendar w-calendar-c4">
                                                    <div className="w-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                    </div>
                                                    <p className="w-calendar-text">Meeting with <span className="calendar-number">Project Lead</span> on 01 Jan has been updated to 15 Jan</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
            
        </div>        
       
    )
}
