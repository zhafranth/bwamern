import React, { Component } from "react";
import Header from "Parts/Header";
import Hero from "Parts/Hero";
import MostPicked from "Parts/MostPicked";
import Categories from "Parts/Categories";
import Testimoni from "Parts/Testimoni";
import Footer from "Parts/Footer";
import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostRefPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero
          refMostPicked={this.refMostRefPicked}
          data={landingPage.hero}
        ></Hero>
        <MostPicked
          refMostPicked={this.refMostRefPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Testimoni data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
