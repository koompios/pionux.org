/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <React.Fragment>
  <div className="feature-pc">
 <div className="all-feature Container margin-top-top">
      <div className="item-letter">
      <div className="describe-top">
         {/* <h1>Pionux os</h1> */}
      <h2 className="header-name-top">Pionux OS</h2>
      <p>Pionux is an open source and free software operating system build around Linux kernel. You can customize everything on Pionux that you want.</p>
      <a href="https://repo.pionux.org/iso/x86_64/"><button className="button-downlaod">Download</button></a>
      </div>
      </div>
      <center className="koompi-banner">
      <img src="img/feature-koompi-banner1.webp"></img>
      </center>
      </div>
      </div>

<div className="feature-backgroundcolor">
      <div>
        <center className="middle-logo">
          <img src="img/Pionux (2).svg"></img>
          <h1>A Lean KDE Distribution.</h1>
          <p>Pionux OS is an independent distribution <br></br>focused on Qt and KDE.</p>
        </center>
      </div>





      <div className="background-color-secondComponent">
<div className="grid-container Container-secondComponent">
<div className="left left-wallpaper" >
           <img src="img/pionux-desktop.png"></img>
           <p>Pionux Desktop</p>
</div>
  <div className="middle middle-wallpaper" >
           <img src="https://cdn.pling.com/img/8/4/8/d/ba5a229167eebedbfa2eec822732158e25d7.png"></img>
           <p>Pionux theme</p>
  </div>  
  <div className="right right-wallpaper" >
           <img src="img/pionux-walpaper.jpg"></img>
          <p>Pionux wallpaper</p>
  </div>
</div>
<br></br>
<br></br>
  <center class="gallary-p">
    <p>Visit the Gallery page for screenshots, video showcase and instructional videos.</p>
  </center>
  <SplashContainer>    
        <div className="inner GallaryBtn">
          <PromoSection>
            <Button href="#try">Gallery</Button>
          </PromoSection>
        </div>
      </SplashContainer>  
      </div>
</div>
<br></br>
<br></br>
<div className="features">
<center>
  <h1>Feature</h1>
</center>
      <div className="grid-containerr Container-secondComponent ">
      <div class="left feature-icon">
      <center>
        <img src="img/laptopicon1.png"></img>
        <h1>Plasma by KDE</h1>
        <p>A continuously updated Plasma desktop.</p>
      </center>
      </div>
  <div class="middle feature-icon" >
  <center>
    <img src="img/starticon1.png"></img>
    <h1>Bleeding edge applications</h1>
    <p>The latest versions of your favorite applications.</p>
  </center>
  </div>  
  <div className="right  feature-icon ">
  <center  >
    <img src="img/hearticon1.png"></img>
    <h1>Stable core</h1>
    <p>A periodically updated core system provides stability.</p>
    </center>
  </div>
  <div class="den feature-icon" >
  <center>
    <img src="img/rocketicon1.png"></img>
    <h1>One-time installation</h1>
    <p>Set up your system once, and you will receive all the latest changes by keeping it updated.</p>
  </center>

  </div>
      </div>
      <div className="sponsor">
      <center>
       <h1>Sponsor</h1>
      </center>
      <div className="grid-containerrr Container-secondComponent ">
      <div class="left sponsor-koompi">
      <center>
        <a href="https://koompi.com/"><img src="img/Koompi-Black.png"/></a>
      </center>
      </div>
  {/* <div class="middle feature-icon" >
  <center>
    <img src="img/starticon1.png"></img>
    <h1>Bleeding edge applications</h1>
    <p>The latest versions of your favorite applications.</p>
  </center>
  </div>   */}
  <div className="right sponsor-smallworldVenture ">
  <center  >
   <a href="https://smallworldventure.com/"> <img src="img/smallworld.png"></img></a> 
    </center>
  </div>
  {/* <div class="den feature-icon" >
  <center>
    <img src="img/rocketicon1.png"></img>
    <h1>One-time installation</h1>
    <p>Set up your system once, and you will receive all the latest changes by keeping it updated.</p>
  </center>

  </div> */}
  </div>
      </div>
</div>
      <SplashContainer>    
        <div className="inner">
          {/* <ProjectTitle siteConfig={siteConfig} /> */}
          {/* <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection> */}
        </div>
      </SplashContainer>
      </React.Fragment>
    );
  }
}



class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          {/* <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;


