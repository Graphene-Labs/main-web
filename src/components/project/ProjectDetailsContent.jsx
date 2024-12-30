import React from 'react';
import ProjectDetailsV1List from '@/assets/jsonData/project/ProjectDetailsV1List.json'
import RelatedProjectV1 from '@/assets/jsonData/project/RelatedProjectV1.json'
import Image from 'next/image';
import Link from 'next/link';
import SingleRelatedProject from './SingleRelatedProject';

const ProjectDetailsContent = ({ PortfolioInfo }) => {
    const { title, tag, thumbFull } = PortfolioInfo

    return (
        <>
            {/* ProjectDetailsTop */}
            <div className="project-details-area project-details-style-two default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-details-thumb">
                                <Image src={`/assets/img/projects/${thumbFull}`} alt="Image Not Found" width={1500} height={700} />
                                <div className="project-single-tags">
                                    <Link href="#" scroll={false}>{tag}</Link>
                                </div>
                                <h2 className="title">{title}</h2>
                                <div className="project-author-details mt-50">
                                    <ul>
                                        <li>
                                            <div className="left-info">
                                                <h3>Client</h3>
                                            </div>
                                            <div className="right-info">
                                                <h3>ValidTheme IT</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="left-info">
                                                <h3>Desciplines Used</h3>
                                            </div>
                                            <div className="right-info">
                                                <p className="project-inner-tag">
                                                    Branding <br /> Design <br /> Technology <br /> Interior Design
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="left-info">
                                                <h3>Project Details</h3>
                                            </div>
                                            <div className="right-info">
                                                <p>
                                                    Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ProjectDetailsCenter */}
            <div className="project-details-style-two project-details default-padding bg-gray">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-7">
                            <div className="thumb-grid">
                                <Image src="/assets/img/portfolio/v1.jpg" alt="Thumb" width={800} height={1000} />
                                <Image src="/assets/img/portfolio/v2.jpg" alt="Thumb" width={800} height={1000} />
                            </div>
                        </div>

                        <div className="col-lg-5 pl-50 pl-md-15 pl-xs-15">
                            <div className="check-list">
                                <div className="single-list">
                                    <h4>Mobile Optimization</h4>
                                    <p>
                                        Tempor nonummy metus lobortis. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum potenti. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                    </p>
                                </div>
                                <div className="single-list">
                                    <h4>Marketing Automation</h4>
                                    <ul className="list-disc">
                                        {ProjectDetailsV1List.map(list =>
                                            <li key={list.id}>{list.list}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ProjectDetailsBottom */}
            <div className="project-details-style-two default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="item-grid-container">
                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3>Background</h3>
                                        </div>
                                        <div className="right-info">
                                            <p>
                                                Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence
                                            </p>
                                            <p>
                                                New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                            </p>
                                        </div>
                                    </div>
                                    <Image src="/assets/img/projects/10.jpg" alt="Image Not Found" width={1480} height={645} />
                                </div>

                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3>The Challenges</h3>
                                        </div>
                                        <div className="right-info">
                                            <p>
                                                Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence
                                            </p>
                                            <p>
                                                New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                            </p>
                                            <h4>Continue indulged speaking the was out horrible for domestic.</h4>
                                            <ul className="list-disc">
                                                {ProjectDetailsV1List.slice(0, 3).map(list =>
                                                    <li key={list.id}>{list.list}</li>
                                                )}
                                            </ul>
                                            <Image src="/assets/img/projects/11.jpg" alt="Image Not Found" width={1500} height={700} />
                                        </div>
                                    </div>
                                </div>

                                <div className="single-grid">
                                    <div className="item-grid-colum">
                                        <div className="left-info">
                                            <h3>The Solution</h3>
                                        </div>
                                        <div className="right-info">
                                            <p>
                                                Contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence
                                            </p>
                                            <p>
                                                New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RelatedProject */}
            <div className="related-projects">
                <div className="container">
                    <div className="related-project-items default-padding">
                        <div className="row mb-40 mb-md-0 mb-xs-0">
                            <div className="col-lg-6">
                                <div className="content-left">
                                    <h4 className="sub-title">Need more projects?</h4>
                                    <h2 className="title">Relate Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {RelatedProjectV1.map(related =>
                                <div className="col-lg-6 item-center" key={related.id}>
                                    <SingleRelatedProject related={related} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsContent;