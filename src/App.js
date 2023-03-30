import logo from './logo.svg';
import './App.css';
import React from 'react';
import Layout from './components/layout';
import SnippetCard from './components/snippet-card/snippet-card.component';
import JourneyCard from './components/journey-card/journey-card.component';
import SkillsCard from './components/skills-card/skills-card.component';
import PersonalCard from './components/personal-card/personal-card.component';
import BlogCard from './components/blog-card/blog-card.component';
import Footer from './components/footer/footer.component';


const data=null;
function App() {
  return (
   <>
    <head>
      // add favicon here
    </head>
    <Layout>
        <div>
        <SnippetCard />
        <JourneyCard />
        <SkillsCard />
        <PersonalCard />
        <BlogCard data={data}/>
        <Footer />
        </div>
    </Layout>
   </>
  );
}



export default App;


