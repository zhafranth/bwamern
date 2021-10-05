import React, { Component } from "react";
import ItemDetails from "json/itemDetails.json";
import { connect } from "react-redux";
import { checkoutBooking } from "store/action/checkout";
import { fetchPage } from "store/action/page";

import Header from "Parts/Header";
import PageDetailTitle from "Parts/PageDetailsTitle";
import FeturedImage from "Parts/FeaturedImage";
import PageDetailDescription from "Parts/PageDetailDescription";
import BookingForm from "Parts/BookingForm";
import Categories from "Parts/Categories";
import Testimoni from "Parts/Testimoni";
import Footer from "Parts/Footer";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
    if (!this.props.page[this.props.match.params.id]) {
      this.props.fetchPage(
        `https://admin-bwamern.herokuapp.com/api/v1/member/detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
    }
  }
  render() {
    const breadcrumb = [
      { pageTitle: "home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    const { page, match } = this.props;
    console.log(page);
    if (!this.props.page[this.props.match.params.id]) return null;
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={page[match.params.id]}
        ></PageDetailTitle>
        <FeturedImage data={page[match.params.id].imageUrls}></FeturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={page[match.params.id]} />
            </div>
            <div className="col-5">
              <BookingForm
                itemDetails={page[match.params.id]}
                startBooking={match.checkoutBooking}
              />
            </div>
          </div>
        </section>
        <Categories data={page[match.params.id].categories} />
        <Testimoni data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
