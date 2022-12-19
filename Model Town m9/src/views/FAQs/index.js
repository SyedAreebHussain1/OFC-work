import React, { Component, useState } from "react";
import { Collapse, CardBody, Card, CardHeader } from "reactstrap";
// import { IntroVideo } from "components/IntroVideo";
import background from 'assets/img/1.2.jpg'
import Navbar from "components/Navbars/AuthNavbar";
import { WebNavBar } from "components/Navbars/WebNavBar";
class Faqs extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: 0,
      
      data: [
        {
          key: 1,
          title: "What’s the benefit in property investment over other investment opportunities?",
          description: "Description",
        },
        {
          key: 2,
          title: "Why should I choose to invest in rental projects over development and land projects? ",
          description: "Description",
        },
        {
          key: 3,
          title: "How is investing in development projects better than the other two options?",
          description: "Description",
        },
        {
          key: 4,
          title: "What are the benefits of investing in land?",
          description: "Description",
        },
        {
            key: 5,
            title: "What is Square Foot Exchange?",
            description: "We are a company that has developed an online portal to facilitate investment in the property sector. Our portal provides investors with multiple investment opportunities so they can choose a project of their liking and invest according to their capacity. We also provide complimentary services like exit strategies, legal consultation etc. to ease the investment process for our clients.",
          },
          {
            key: 6,
            title: "Are we registered?",
            description: "We have been registered under the Partnership Act since 13th December, 2019.",
          },
          {
            key: 7,
            title: "I already have access to the property sector, why should I choose Square Foot Exchange?",
            description: "Since we work through an online portal, it makes the process of exploring and investing in opportunities much easier for our clients. We also provide calculated figures for changes in the value of any project which reduces the risk involved in property investment. Alongside, Square Foot Exchange also provides professional guidance to its clients to help them make the best decisions.",
          },
          {
            key: 8,
            title: "Can I add funds after my initial investment?",
            description: "Yes, you can add funds to your initial investment as long as there is capacity for more investors in a certain project.",
          },
          {
            key: 9,
            title: "Can I invest if I live outside Pakistan?",
            description: "Yes, Square Foot Exchange provides a platform that allows pakistani citizens living abroad an opportunity to invest in pakistan’s property. All you need is a pakistani passport to fulfill the requirements of investing in the property.",
          },
          {
            key: 10,
            title: "What is the 70-30 split?",
            description: "Profits from any project above a given percentage (specific to each project) will be divided between the investor and client in the ratio of 70/30. The investor will receive 70% of the excess profit and Square Foot Exchange will keep 30% of the excess profit.",
          },
          {
            key: 11,
            title: "How long is the investment period?",
            description: "The investment period changes relative to each project. It is defined before an investment is made and investors can choose to opt out of an investment at any given time by availing one of the exit strategies.",
          },
          {
            key: 12,
            title: "When can I expect my initial returns?",
            description: "This depends on the investment plan you choose. If you invest in a rental project, you can expect returns quarterly and bi-annually however it will be specified at the start of your investment. If you choose to invest in the development or land projects, you should expect returns at the time of maturity of your plan.",
          },
          {
            key: 13,
            title: "What are the risks involved?",
            description: "All projected values mentioned on our portal and/ or provided by us during an agreement are estimates. We use data-analytics to calculate expected returns but we do not guarantee any.",
          },
      ],
    };
  }

  toggle(e) {
    let event = e.target.dataset.event;
    this.setState({
      collapse: this.state.collapse === Number(event) ? 0 : Number(event),
    });
  }

  render() {
    const { cards, collapse } = this.state;
    return (
      <>
      <WebNavBar/>
        <main>
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h1-screen-75 ">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url(" + background + ")"
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-75 bg-blue"
              ></span>
            </div>

            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-kgcbrown fill-current"
                  points="2560 50 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>
          <section className="pb-20 relative block bg-white ">
            <div className="container mx-auto pt-5 px-4">
              <div class="w-full md:w-3/5 mx-auto p-8">
                <h3 className="page-header text-sqblue text-4xl pb-2 font-bold">FAQS</h3>
                {this.state.data !== null &&
                  this.state.data !== undefined &&
                  this.state.data.map((record) => {
                    return (
                      <Card style={{ marginBottom: "1rem" }} key={record.key}>
                        <CardHeader
                        className="text-base rounded font-bold text-sqblue"
                          onClick={this.toggle}
                          data-event={record.key}
                        >
                          {record.title}
                        </CardHeader>
                        <Collapse isOpen={collapse === record.key}>
                          <CardBody className="text-sqblue text-sm">{record.description}</CardBody>
                        </Collapse>
                      </Card>
                    );
                  })}
                {/* {cards.map(index => {
              return (
            
              )
            })}      */}
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Faqs;
