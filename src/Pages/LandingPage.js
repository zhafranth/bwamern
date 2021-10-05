import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPage } from "store/action/page";
import Header from "Parts/Header";
import Hero from "Parts/Hero";
import MostPicked from "Parts/MostPicked";
import Categories from "Parts/Categories";
import Testimoni from "Parts/Testimoni";
import Footer from "Parts/Footer";
// import landingPage from "json/landingPage.json";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostRefPicked = React.createRef();
  }
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage) {
      this.props.fetchPage(
        "http://admin-bwamern.herokuapp.com/api/v1/member/landing-page",
        "landingPage"
      );
    }
  }
  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage")) return null;
    console.log(page);
    return (
      <>
        <Header {...this.props}></Header>
        <Hero
          refMostPicked={this.refMostRefPicked}
          data={page.landingPage.hero}
        ></Hero>
        <MostPicked
          refMostPicked={this.refMostRefPicked}
          data={page.landingPage.mostPicked}
        />
        <Categories data={page.landingPage.category} />
        <Testimoni data={page.landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
