import React, { Component } from 'react';
import Footer from './Footer';

class Project extends Component {
    state = {
        spreadImgList: [],
        projectHeading: '',
        projectSubheading: '',
        projectDate: '',
        projectTags: [],
        awards: []

    }
    async componentDidMount() {
        const projectId = this.props.match.params.id
        const siteDataDir = '/site-data/projects'
        const projectDir = [siteDataDir, projectId].join('/')
        const projectImgDir = [projectDir, 'img'].join('/')
        const projectSpreadImgDir = [projectImgDir, 'spread'].join('/')
        const projectDataResp = await fetch(projectDir + "/data.json");
        const projectData = await projectDataResp.json();

        let spreadImgList = projectData.spread.spreadList;
        spreadImgList = spreadImgList.map((content) => {
            if (content.type === 'img') {
                content.filename = [projectSpreadImgDir, content.filename].join('/');
            }
            return content;
        })

        let awards = projectData.spread.awards;
        awards = awards.map((award) => {
            award.thumb = [projectImgDir, 'awards', award.thumb].join('/');
            return award;
        });

        this.setState({
            spreadImgList: spreadImgList,
            projectHeading: projectData.spread.name,
            projectSubheading: projectData.spread.category,
            projectDate: projectData.spread.date,
            projectTags: projectData.spread.tags,
            awards: awards
        })
    }

    renderAward(award) {
        return (
            <div className="row award-row" key={award.thumb}>
                <div className="col-md-2 col-2 no-horizontal-padding">
                    <img src={award.thumb} className="award-thumb-img" />
                </div>
                <div className="col-md-10 col-10">
                    <p>{award.description}</p>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div>
                <div className="container-fluid bg-grey" id="spread-page">
                    <div className="container-fluid grey-spread-seperator-top">
                    </div>
                    <div className="container-fluid bg-white shadow">
                        <div className="container container-spread-heading">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="row-md-12">
                                        <p id="spread-project-heading" className="spread-project-heading">{this.state.projectHeading}</p>
                                    </div>
                                    <div className="row-md-12">
                                        <p id="spread-project-subheading" className="spread-project-subheading">{this.state.projectSubheading}</p>
                                    </div>

                                </div>
                                <div className="col-md-5">
                                    <div className="row-md-12">
                                        <p id="project-date" className="project-date">{this.state.projectDate}</p>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-7 ">
                                    <div className="row-md-12">
                                        <ul id="spread-tags" className="taglist" style={{ padding: '0px' }}>
                                            {this.state.projectTags.map((tag) => {
                                                return (
                                                    <li key={tag}>
                                                        <span className="spread-tag">{tag}</span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="container" id="awards-list-root"></div>
                                    {this.state.awards.map((award) => {
                                        return this.renderAward(award)
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container" id="spread-list-root" style={{ paddingTop: '10px' }}>
                        {this.state.spreadImgList.map((content) => {
                            if (content.type === 'img') {
                                return (<img className="spread-img shadow" alt="" src={content.filename} key={content.filename}></img>)
                            }
                            else{
                                return
                            }
                        })}
                    </div>
                    <Footer />

                </div>

            </div>
        );
    }
}




export default Project;