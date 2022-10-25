import { useState } from "react";
import { Card } from "antd";
import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";

import PlotTypeSettings from "./ProjectSettings/PlotTypeSettings";
import PlotCategorySettings from "./ProjectSettings/PlotCategorySettings";
import PlotPositionSettings from "./ProjectSettings/PlotPositionSettings";
import PlotSectorSettings from "./ProjectSettings/PlotSectorSettings";
import PlotStreetSettings from "./ProjectSettings/PlotStreetSettings";
import ProjectMainFeature from "./ProjectSettings/ProjectMainFeature";
import ProjectCommunityFeature from "./ProjectSettings/ProjectCommunityFeature";
import ProjectPlotFeature from "./ProjectSettings/ProjectPlotFeature";
import ProjectOtherFeature from "./ProjectSettings/ProjectOtherFeature";
import ProjectRecreational from "./ProjectSettings/ProjectRecreational";
import ProjectNearByLocation from "./ProjectSettings/ProjectNearByLocation";
import { HEAD_STYLE_CSS } from "../../constants/headStyle";

const Settings = () => {
  let modules = JSON.parse(localStorage.getItem("assignModule"));

  const [showProjectSettings, SetShowProjectSettings] = useState(false);
  // const [showSiteSettings, SetShowSiteSettings] = useState(false);

  const handleClickProject = () => {
    SetShowProjectSettings(!showProjectSettings);
  };

  // const handleClickSite = () => {
  //   SetShowSiteSettings(!showSiteSettings);
  // };

  return (
    <>
      <Card
        bordered={false}
        title="Settings"
        className="criclebox tablespace"
        style={{ marginBottom: "2%" }}
        headStyle={HEAD_STYLE_CSS}
      >
        {modules?.map((item) => {
          let title = item.module.title;

          if (title === "project_setting") {
            return (
              <div
                style={{ marginLeft: "-0%" }}
                className="containerques question"
              >
                <div className="question-title">
                  <h2>Project Settings</h2>
                  <button
                    className="question-icons"
                    onClick={handleClickProject}
                  >
                    {showProjectSettings ? (
                      <CaretUpFilled />
                    ) : (
                      <CaretDownFilled />
                    )}
                  </button>
                </div>
                <div
                  style={{
                    marginTop: "1%",
                  }}
                  className="question-answer"
                >
                  {showProjectSettings && (
                    <>
                      <PlotTypeSettings />
                      <PlotCategorySettings />
                      <PlotPositionSettings />
                      <PlotSectorSettings />
                      <PlotStreetSettings />
                      <ProjectMainFeature />
                      <ProjectCommunityFeature />
                      <ProjectPlotFeature />
                      <ProjectOtherFeature />
                      <ProjectRecreational />
                      <ProjectNearByLocation />
                    </>
                  )}
                </div>
              </div>
            );
          }
          // if (title === "site_setting") {
          //   return (
          //     <div
          //       style={{ marginLeft: "-0%" }}
          //       className="containerques question"
          //     >
          //       <div className="question-title">
          //         <h2>Site Settings</h2>
          //         <button className="question-icons" onClick={handleClickSite}>
          //           {showSiteSettings ? <CaretUpFilled /> : <CaretDownFilled />}
          //         </button>
          //       </div>
          //       <div
          //         style={{
          //           marginTop: "1%",
          //         }}
          //         className="question-answer"
          //       >
          //         {showSiteSettings && <></>}
          //       </div>
          //     </div>
          //   );
          // }
        })}
      </Card>
    </>
  );
};

export default Settings;
