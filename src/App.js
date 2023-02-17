import React from 'react'
import './Style.css';
import Section from './Component/layout/Section';
import Layout from './Component/layout/Layout';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

export default function App() {
  return (
      <Layout>
      <Section>
        <Page1></Page1>
        <Page2></Page2>
        
      </Section>
    </Layout>

  )
}
