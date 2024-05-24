import React from 'react'
import font from '../fonts/robot.module.css'

function Start() {
  return (
    <>
      <h1 className={font.robotoBold}>Lex and Yacc </h1>
      <p className={font.robotoMedium}>Made by Andrés Medinilla</p>
      <h2 className={font.robotoBold}>What is this project about?</h2>
      <p className={font.robotoMedium}>
        This project is for the course Languages Design, it was about making a lexical
        and a syntax analyzer, it was divided in phases:
        <ul>
          <li>Constructing the automathons as the basic structure to construct everything.</li>
          <li>Making a lexical analyzer.</li>
          <li>Developing a generator of lexical analyzers.</li>
          <li>Making the syntax analyzer.</li>
          <li>Making the parsing automathon.</li>
          <li>Making the parsing table.</li>
          <li>Parsing.</li>
        </ul>
      </p>
      <h2 className={font.robotoBold}>How is this project structured?</h2>
      <h3 className={font.robotoBold}>RegexEval Page</h3>
      <p className={font.robotoMedium}>
        This page is about evaluating regex and developing automathons using different algorithms
        , also simulating the automathons.
      </p>
      <h3 className={font.robotoBold}>YalexProcessing Page</h3>
      <p className={font.robotoMedium}>
        This page is about making the lexical analyzer, generating a program that can
        create lexical analyzers and showing up the automathon that is used to analyze these texts
        and the syntax tree to generate this automathon. The lexical definition is defined passing
        a yalex file.
      </p>
      <h3 className={font.robotoBold}>YaparProcessing Page</h3>
      <p className={font.robotoMedium}>
        This page is where the parsing occurs, the syntax analysis happens here, passing
        a grammar in a yapar file and the lexical definition in a yalex file.
      </p>
      <h2 className={font.robotoBold}>Basic Concepts</h2>
      <h3 className={font.robotoBold}>D-Hell is lexic(al)?</h3>
      <p className={font.robotoMedium}>
        All the lexic part studies if the tokens or the stuff belongs an specific language,
        for example, the word
        {' '}
        <em className={font.robotoRegularItalic}>hello</em>
        {' '}
        belongs to the English Language but the
        word
        {' '}
        <em className={font.robotoRegularItalic}>años</em>
        {' '}
        belongs to Spanish Language. Even though they
        are words they belong to different language.
      </p>
      <h3 className={font.robotoBold}>D-Hell is syntax?</h3>
      <p className={font.robotoMedium}>
        In the other hand, syntax studies if a sentence is well written, based in grammar rules,
        for example, I can write:
        {' '}
        <em className={font.robotoRegularItalic}>The dog barks in that house</em>
        ,
        but what if I write the same sentence but in different
        order
        {' '}
        <em className={font.robotoRegularItalic}>house in that dog barks The</em>
        . It is lexically correct
        because all those words belong to the English Language, even though, it is
        gramatically wrong because it should have kinda
        {' '}
        <em className={font.robotoRegularItalic}>Article-Subject-Verb-Complement</em>
        {' '}
        grammar
        structure.
      </p>
      <h2 className={font.robotoBold}>Technologies Used</h2>
      <p className={font.robotoMedium}>
        It was made with react and vite, also using linting in most of the parts in the frontend,
        also it was styled with css modules, also it has storybook to try the components.
        This Frontend part is hosted on github pages while the Backend is hosted on
        render.com. The Backend was developed with express and nodejs,
        using nodemon to debug and reload, is a basic backend but it has all
        the logic to generate the automathons
        also I used Graphviz to generate svg-s to show up how does are the automathons,
        the lexical analyzer, the syntax analyzer, the parsing, and all those algorithms.
      </p>
      <h2 className={font.robotoBold}>Do you wanna contribute?</h2>
      <h3 className={font.robotoMedium}>
        Check this pages:
        <ul>
          <li>
            <a href="https://github.com/DiggsPapu/BackendCompis">
              https://github.com/DiggsPapu/BackendCompis - For the backend
            </a>
          </li>
          <li>
            <a href="https://github.com/DiggsPapu/FrontendCompis">
              https://github.com/DiggsPapu/FrontendCompis  - For the frontend
            </a>
          </li>
        </ul>
      </h3>
    </>
  )
}
export default Start
