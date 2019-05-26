import React, { Component } from 'react';

class About extends Component {
    state = {
        aboutSubtitle: '',
        educationList: [],
        educationList: [],
        workList: [],
        awardList: []
    }

    async componentDidMount() {
        const aboutResponse = await fetch('site-data/about/about.json');
        const aboutData = await aboutResponse.json();

        this.setState({
            aboutSubtitle: aboutData.title.subtitle,
            educationList: aboutData.education,
            workList: aboutData.work,
            awardList: aboutData.awards
        })

    }

    renderEducation(education) {
        return ([
            <div className="col-md-4 col-4 uni-logo-div">
                <img className="uni-logo" src={education.uniLogo} />
            </div>, // <-notice the comma 
            <div className="col-md-8 col-8 div-no-left-padding div-bottom-margin-edu">
                <p className="about-red-heading">{education.heading}</p>
                <p className="about-content">{education.content}</p>
                <p className="about-gray-text">{education.date}</p>
            </div>

        ])

    }

    renderWork(work) {
        return (
            [
                <div className="col-md-4 col-4">
                </div>,
                <div className="col-md-8 col-8 div-no-left-padding div-bottom-margin-work">
                    <p className="about-red-heading">{work.heading}</p>
                    <p className="about-content">{work.content}</p>
                </div>
            ]
        )
    }

    renderAwards(award) {
        console.log(award);
        return (
            <div className="col-md-12 col-12 div-no-left-padding div-bottom-margin-awards">
                <p className="about-red-heading">{award.heading}</p>
                <p class="about-content">{award.content}</p>
                <p class="about-gray-text">{award.date}</p>
            </div>
        )
    }
    
    render() {
        return (
            <div className="container-fluid bg-white" id="about-page">
                <div className="container-fluid">
                    <div className="container about-container">
                        <div className="row">

                            <div className="col-md-4 col-12" style={{ textAlign: 'center' }}>
                                <img className="about-avatar" src="site-data/about/avatar.png" />
                            </div>
                            <div className="col-md-8 col-12">
                                <div className="row">
                                    <img src="site-data/about/hi.svg" style={{ width: '100%' }} />
                                </div>
                                <div className="row about-subtitle-spacing">
                                    <p className="about-subtitle" id="subtitle">{this.state.aboutSubtitle}</p>

                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-4 col-4">
                            </div>
                            <div className="col-md-8 col-8 dotted-border-box-upper">
                            </div>
                            <div className="col-md-4 col-4">
                            </div>
                            <div className="col-md-8 col-8 div-no-left-padding">
                                <row>
                                    <p className="about-heading">Education</p>
                                </row>
                            </div>
                        </div>

                        <div className="row" id="education-root">
                            {this.state.educationList.map((education) => {
                                return this.renderEducation(education)
                            })
                            }
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-4">
                            </div>
                            <div className="col-md-8 col-8 div-no-left-padding dotted-border-left">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-4">
                            </div>
                            <div className="col-md-8 col-8 div-no-left-padding">
                                <p className="about-heading">Work</p>
                            </div>
                        </div>
                        <div className="row" id="work-root">
                            {this.state.workList.map((work) => {
                                return this.renderWork(work)
                            })
                            }
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-4 hide-on-mobile">
                                <img src="site-data/about/curve.svg" />
                            </div>
                            <div className="col-md-8 col-4 mobile-list-sep">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <img className="award-img" src="site-data/about/img/tsidc.jpg" />
                </div>
                <div className="container-fluid">
                    <div className="container about-container-awards">
                        <div className="row">
                            <div className="col-md-12 dotted-border-left">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 div-no-left-padding">
                                <p className="about-heading">Awards and Recognition</p>
                            </div>
                        </div>
                        <div className="row" id="awards-root">
                            {this.state.awardList.map((award) => {
                                return this.renderAwards(award)
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;