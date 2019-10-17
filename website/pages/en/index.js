// /**
//  * Copyright (c) 2017-present, Facebook, Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */

// const React = require('react');

// const CompLibrary = require('../../core/CompLibrary.js');

// const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
// const Container = CompLibrary.Container;
// const GridBlock = CompLibrary.GridBlock;

// class HomeSplash extends React.Component {
//   render() {
//     const {siteConfig, language = ''} = this.props;
//     const {baseUrl, docsUrl} = siteConfig;
//     const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
//     const langPart = `${language ? `${language}/` : ''}`;
//     const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

//     const SplashContainer = props => (
//       <div className="homeContainer">
//         <div className="homeSplashFade">
//           <div className="wrapper homeWrapper">{props.children}</div>
//         </div>
//       </div>
//     );

//     const Logo = props => (
//       <div className="projectLogo">
//         <img src={props.img_src} alt="Project Logo" />
//       </div>
//     );

//     const ProjectTitle = () => (
//       <h2 className="projectTitle">
//         {siteConfig.title}
//         <small>{siteConfig.tagline}</small>
//       </h2>
//     );

//     const PromoSection = props => (
//       <div className="section promoSection">
//         <div className="promoRow">
//           <div className="pluginRowBlock">{props.children}</div>
//         </div>
//       </div>
//     );

//     const Button = props => (
//       <div className="pluginWrapper buttonWrapper">
//         <a className="button" href={props.href} target={props.target}>
//           {props.children}
//         </a>
//       </div>
//     );

//     return (
//       <SplashContainer>
//         <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />      
//         <div className="inner">
//           <ProjectTitle siteConfig={siteConfig} />
//           <PromoSection>
//             <Button href="#try">Try It Out</Button>
//             <Button href={docUrl('doc1.html')}>Example Link</Button>
//             <Button href={docUrl('doc2.html')}>Example Link 2</Button>
//           </PromoSection>
//         </div>
//       </SplashContainer>
//     );
//   }
// }



// class Index extends React.Component {
//   render() {
//     const {config: siteConfig, language = ''} = this.props;
//     const {baseUrl} = siteConfig;

//     const Block = props => (
//       <Container
//         padding={['bottom', 'top']}
//         id={props.id}
//         background={props.background}>
//         <GridBlock
//           align="center"
//           contents={props.children}
//           layout={props.layout}
//         />
//       </Container>
//     );

//     const FeatureCallout = () => (
//       <div
//         className="productShowcaseSection paddingBottom"
//         style={{textAlign: 'center'}}>
//         <h2>Feature Callout</h2>
//         <MarkdownBlock>These are features of this project</MarkdownBlock>
//       </div>
//     );

//     const TryOut = () => (
//       <Block id="try">
//         {[
//           {
//             content:
//               'To make your landing page more attractive, use illustrations! Check out ' +
//               '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
//               'The illustrations you see on this page are from unDraw.',
//             image: `${baseUrl}img/undraw_code_review.svg`,
//             imageAlign: 'left',
//             title: 'Wonderful SVG Illustrations',
//           },
//         ]}
//       </Block>
//     );

//     const Description = () => (
//       <Block background="dark">
//         {[
//           {
//             content:
//               'This is another description of how this project is useful',
//             image: `${baseUrl}img/undraw_note_list.svg`,
//             imageAlign: 'right',
//             title: 'Description',
//           },
//         ]}
//       </Block>
//     );

//     const LearnHow = () => (
//       <Block background="light">
//         {[
//           {
//             content:
//               'Each new Docusaurus project has **randomly-generated** theme colors.',
//             image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
//             imageAlign: 'right',
//             title: 'Randomly Generated Theme Colors',
//           },
//         ]}
//       </Block>
//     );

//     const Features = () => (
//       <Block layout="fourColumn">
//         {[
//           {
//             content: 'This is the content of my feature',
//             image: `${baseUrl}img/undraw_react.svg`,
//             imageAlign: 'top',
//             title: 'Feature One',
//           },
//           {
//             content: 'The content of my second feature',
//             image: `${baseUrl}img/undraw_operating_system.svg`,
//             imageAlign: 'top',
//             title: 'Feature Two',
//           },
//         ]}
//       </Block>
//     );

//     const Showcase = () => {
//       if ((siteConfig.users || []).length === 0) {
//         return null;
//       }

//       const showcase = siteConfig.users
//         .filter(user => user.pinned)
//         .map(user => (
//           <a href={user.infoLink} key={user.infoLink}>
//             <img src={user.image} alt={user.caption} title={user.caption} />
//           </a>
//         ));

//       const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

//       return (
//         <div className="productShowcaseSection paddingBottom">
//           <h2>Who is Using This?</h2>
//           <p>This project is used by all these people</p>
//           <div className="logos">{showcase}</div>
//           <div className="more-users">
//             <a className="button" href={pageUrl('users.html')}>
//               More {siteConfig.title} Users
//             </a>
//           </div>
//         </div>
//       );
//     };

//     return (
//       <div>
//         <HomeSplash siteConfig={siteConfig} language={language} />
//         <div className="mainContainer">
//           <Features />
//           <FeatureCallout />
//           <LearnHow />
//           <TryOut />
//           <Description />
//           <Showcase />
//         </div>
//       </div>
//     );
//   }
// }

// module.exports = Index;
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Index(props) {
  return (
    <React.Fragment>
      <div className="Banner">
        <Container className="mainContainer documentContainer postContainer">
          <div className="bannerContainer">
            <div className="bigLogo">
              <img src="img/Pionux.svg" />
            </div>
            <h1 className="bannerTitle">
              PIONUX is a fully customized and self-customizeable Cambodia based
              open-source operating system software solution for up and coming
              engineers, inventors, organizers, developers and basically free
              thinkers in a modern day post-Microsoft world.
            </h1>
          </div>
        </Container>
      </div>
      <div className="container">
      {/* section1 */}
        <div className="first-component">
          <center>
            <h1>Operating System for Every Computers</h1>
            <p>PIONUX can run on almost any computers there us. It works well on your old laptop as well.</p>
            <img src="img/Banner3.png" />
            <div className="text-container">
              <p>
                PionxOS gives you more of everything you love about KOOMPI. Experience music, TV, and podcasts in three all-new KOOMPI apps. Enjoy your favorite iPad apps now on your Mac. Extend your workspace and expand your creativity with iPad and Apple Pencil. And discover smart new features in the apps you use every day. Now you can take everything you do above and beyond.
        </p>
            </div>
          </center>
        </div>
        <div className="feature">
          <div className="text-container">
            <h1>Everything You Need
              Available Here</h1>
            <p>The KOOMPI contains a handpicked suite of software for
everyday computing, Internet browsing,
office productivity, entertainment and more.
We've compiled the KOOMPI computer software suite to offer a
user experience providing simplicity, power, privacy and freedom.
KOOMPI users can achieve more and learn more with less effort and frustration.</p>
          </div>
          <center>
            <img src="img/feature-koompi-banner1.webp" />
          </center>
        </div>
{/* section two     */}
        <div className="office-main">
          <center>
            <h1>OFFICE</h1>
          </center>
          <div className="office">
            <div>
              <center>
              <img src="img/Office.webp"/>
              </center>
                <div className="two-column">
              <h1>Apache OpenOffice</h1>
              <p>Apache OpenOffice is an office productivity software suite containing a word processor (Writer), a spreadsheet (Calc), a presentation application (Impress), a drawing application (Draw), a formula editor (Math), and a database management application (Base). It's default file format is the OpenDocument Format (ODF), and can also read and write a wide variety of other file formats, including those from Microsoft Office.</p>
              </div>
            </div>
            <div>
            <div>
              <center>
              <img src="img/Office.webp"/>
              </center>
                <div className="two-column">
              <h1>Microsoft Office</h1>
              <p>Apache OpenOffice is an office productivity software suite containing a word processor (Writer), a spreadsheet (Calc), a presentation application (Impress), a drawing application (Draw), a formula editor (Math), and a database management application (Base). It's default file format is the OpenDocument Format (ODF), and can also read and write a wide variety of other file formats, including those from Microsoft Office.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}

module.exports = Index;