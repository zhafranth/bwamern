import React, { Component } from "react";
import ItemDetails from "json/itemDetails.json";
import { connect } from "react-redux";
import { checkoutBooking } from "store/action/checkout";

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
  }
  render() {
    const breadcrumb = [
      { pageTitle: "home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
        <FeturedImage data={ItemDetails.imageUrls}></FeturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={ItemDetails} />
            </div>
            <div className="col-5">
              <BookingForm
                itemDetails={ItemDetails}
                startBooking={this.props.checkoutBooking}
              />
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories} />
        <Testimoni data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}

export default connect(null, { checkoutBooking })(DetailsPage);
