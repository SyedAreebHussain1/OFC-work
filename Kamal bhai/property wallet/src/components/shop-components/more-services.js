import React, { useState } from "react";
import img1 from "../../components/images/inventory.jpg";
import img2 from "../../components/images/staff.jpg";
import img3 from "../../components/images/commision.jpg";
import img4 from "../../components/images/calculator.jpg";

const MoreServices = () => {
  const inventory = (
    <div style={{ marginTop: "2%" }}>
      <h4 style={{ color: "#27A3A3" }}>Inventory Management :</h4>
      <p>
        The inventory management option on our app enables you to:
        <ul>
          <li>
            Add a project with the specified information; including name of the
            builder and project, its location, categories, sizes, prices and,
            most importantly, if its NOC has been approved. A project can also
            be eliminated.
          </li>

          <li>
            Give staff members instructions while assigning or removing
            projects.
          </li>

          <li>
            Eliminate a property from inventory when sold out, figure out the
            commission and revenue, and choose whether to accept a full cash
            payment or a down payment.
          </li>
        </ul>
      </p>
    </div>
  );
  const staff = (
    <div style={{ marginTop: "2%" }}>
      <h4 style={{ color: "#27A3A3" }}>STAFF MANAGEMENT :</h4>
      <p>
        <ul>
          <li>
            The staff management feature has 3 kinds of accesses. The agency
            owner (super admin) will have access to everything. He/She will be
            able to add, delete, or update staff, communicate with their team,
            and monitor all commission and revenue including any leads
            generated. The manager(admin), on the other hand, has access to
            their team, monitoring their commissions and revenue generated from
            each. Additionally, they can add or distribute leads among the
            employees, and can contact the agency owner and staff. The staff has
            access to add leads, inspect inventory, and add booking requests for
            projects, but they can communicate only with the manager.
          </li>

          <li>
            New employees can be added with their names, phone numbers, emails,
            CNIC, addresses, and salaries. They can also be deleted, when
            needed.
          </li>

          <li>
            To share media or inventory, managers and admins can communicate via
            chat.
          </li>
          <li>
            Acquire monthly reports on the agency's overall sales. This includes
            sales for each project, sales by each manager and staff, total
            income brought in, and total profit earned.
          </li>
        </ul>
      </p>
    </div>
  );
  const commissionmanagement = (
    <div style={{ marginTop: "2%" }}>
      <h4 style={{ color: "#27A3A3" }}>COMISSION MANAGEMENT :</h4>
      <p>
        The commission management option on our app enables you to:
        <ul>
          <li>
            Set manager's and staff's commission rates according to each
            category's sales.
          </li>

          <li>
            Get to know your company’s overall profit. It can be sought by
            subtracting the amount of commission that is paid out to the staff
            and managers from the total amount of commission earned from each
            sale.
          </li>

          <li>
            Keep records of the commissions paid to the agents as well as the
            property they sold. This can also let you know the amount of money
            each employee brings in.
          </li>
        </ul>
      </p>
    </div>
  );
  const paymentplan = (
    <div style={{ marginTop: "2%" }}>
      <h4 style={{ color: "#27A3A3" }}>RENTAL MANAGEMENT :</h4>
      <p>
        From searching for rental property to keeping a ledger for its record,
        you can have it all with the Property Wallet app. This app will help you
        in the following ways:
        <ul>
          <li>Find the best property for rent in your preferred locality</li>
          <li>Track and manage tenants.</li>
          <li>Create a lease agreement online </li>
          <li>Respond to tenant requests for maintenance</li>
          <li>Monitor monthly payments of rent </li>
          <li>
            Find a new tenant as soon as an existing tenant requests to move out{" "}
          </li>
        </ul>
      </p>
    </div>
  );
  const digitalTools = (
    <div style={{ marginTop: "2%" }}>
      <h4 style={{ color: "#27A3A3" }}>DIGITAL TOOLS :</h4>
      <p>
        Digitize all your real estate calculations, documents and other
        essentials with the following digital tools provided to you by Property
        Wallet:
        <ul>
          <li>Payment Plan Creator</li>
          <li>ROI Calculator</li>
          <li>Commission Calculato</li>
          <li>Property Document Creator</li>
          <li>Rental Affordability Calculator</li>
        </ul>
      </p>
    </div>
  );
  const data = [
    {
      key: 1,
      img: img1,
      content: inventory,
    },
    {
      key: 2,
      img: img2,
      content: staff,
    },
    {
      key: 3,
      img: img3,
      content: commissionmanagement,
    },
    {
      key: 4,
      img: img4,
      content: paymentplan,
    },
    {
      key: 5,
      img: img3,
      content: digitalTools,
    },
  ];
  const [active, setActive] = useState(0);
  const change = (value) => {
    if (value === 0) {
      setActive(0);
    } else if (value === 1) {
      setActive(1);
    } else if (value === 2) {
      setActive(2);
    } else if (value === 3) {
      setActive(3);
    } else if (value === 4) {
      setActive(4);
    } else if (value === 5) {
      setActive(5);
    } else if (value === 6) {
      setActive(6);
    } else if (value === 7) {
      setActive(7);
    }
  };
  return (
    <>
      <div
        className="para-service"
        style={{ marginTop: "-5%", marginLeft: "5%", marginRight: "5%" }}
      >
        <p style={{ color: "#27A3A3", fontSize: "20px" }}>
          Property Wallet is pleased to offer you a platform which will
          contribute to your property business success through fostering
          collaboration between agents. All our services are free of cost and
          available at all hours so you never miss an update about your
          business. With this app, you won't need to carry along your hefty
          documents any more. Property Wallet will keep you informed about your
          business operations and team. Avail our services to manage your
          property business at your convenience.
        </p>
      </div>
      {/* Second section */}
      <div
        style={{
          marginLeft: "5%",
          marginRight: "8%",
          marginBottom: "2%",
          marginTop: "3%",
        }}
      >
        <div className="row">
          <div className="col-lg-6">
            <img
              src={data[active].img}
              style={{ width: "100%", height: "343px", objectFit: "cover" }}
            />
          </div>
          <div className="col-lg-6 services_content">
            <div
              onClick={() => change(0)}
              className="row hovservice"
              style={
                active === 0
                  ? { backgroundColor: "#27A3A3", padding: "10px" }
                  : { backgroundColor: "#a6a8ab", padding: "10px" }
              }
            >
              <div className="col-10 mt-1">
                <span style={{ color: "white", fontWeight: "800" }}>
                  INVENTORY MANAGEMENT
                </span>
              </div>
              <div className="col-2 mt-1">
                <i
                  style={{
                    float: "right",
                    color: "white",
                    fontSize: "20px",
                  }}
                  className="flaticon-hospital"
                />
              </div>
            </div>
            <div
              onClick={() => change(1)}
              className="row hovservice"
              style={
                active === 1
                  ? {
                      backgroundColor: "#27A3A3",
                      padding: "10px",
                      marginTop: "2%",
                    }
                  : {
                      backgroundColor: "#a6a8ab",
                      padding: "10px",
                      marginTop: "2%",
                    }
              }
            >
              <div className="col-10 mt-1">
                <span style={{ color: "white", fontWeight: "800" }}>
                  STAFF MANAGEMENT
                </span>
              </div>
              <div className="col-2 mt-1">
                <i
                  style={{
                    color: "white",
                    float: "right",
                    fontSize: "20px",
                  }}
                  className="flaticon-hospital"
                />
              </div>
            </div>
            <div
              onClick={() => change(2)}
              className="row hovservice"
              style={
                active === 2
                  ? {
                      backgroundColor: "#27A3A3",
                      padding: "10px",
                      marginTop: "2%",
                    }
                  : {
                      backgroundColor: "#a6a8ab",
                      padding: "10px",
                      marginTop: "2%",
                    }
              }
            >
              <div className="col-10 mt-1">
                <span style={{ color: "white", fontWeight: "800" }}>
                  COMMISSION MANAGEMENT
                </span>
              </div>
              <div className="col-2 mt-1">
                <i
                  style={{
                    color: "white",
                    float: "right",
                    fontSize: "20px",
                  }}
                  className="flaticon-hospital"
                />
              </div>
            </div>

            <div
              onClick={() => change(3)}
              className="row hovservice"
              style={
                active === 3
                  ? {
                      backgroundColor: "#27A3A3",
                      padding: "10px",
                      marginTop: "2%",
                    }
                  : {
                      backgroundColor: "#a6a8ab",
                      padding: "10px",
                      marginTop: "2%",
                    }
              }
            >
              <div className="col-10 mt-1">
                <span style={{ color: "white", fontWeight: "800" }}>
                  RENTAL MANAGEMENT
                </span>
              </div>
              <div className="col-2 mt-1">
                <i
                  style={{
                    color: "white",
                    float: "right",
                    fontSize: "20px",
                  }}
                  className="flaticon-hospital"
                />
              </div>
            </div>
            <div
              onClick={() => change(4)}
              className="row hovservice"
              style={
                active === 4
                  ? {
                      backgroundColor: "#27A3A3",
                      padding: "10px",
                      marginTop: "2%",
                    }
                  : {
                      backgroundColor: "#a6a8ab",
                      padding: "10px",
                      marginTop: "2%",
                    }
              }
            >
              <div className="col-10 mt-1">
                <span style={{ color: "white", fontWeight: "800" }}>
                  DIGITAL TOOLS
                </span>
              </div>
              <div className="col-2 mt-1">
                <i
                  style={{
                    color: "white",
                    float: "right",
                    fontSize: "20px",
                  }}
                  className="flaticon-hospital"
                />
              </div>
            </div>
          </div>
        </div>
        {/* CONTENT */}
        {data[active].content}
      </div>
    </>
  );
};

export default MoreServices;
