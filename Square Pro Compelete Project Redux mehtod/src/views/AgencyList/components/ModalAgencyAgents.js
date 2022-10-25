import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Table, Avatar, Image, Button } from "antd";

import { getAgencyAgentsListAction } from "../../../store/actions/adminActions";

const ModalAgencyAgents = ({
  handleChangeReduxState,
  isModalVisible,
  agencyId,
}) => {
  const { Column } = Table;

  const dispatch = useDispatch();
  const { agencyAgentsList } = useSelector((state) => state.adminReducer);

  const handleCancel = () => {
    handleChangeReduxState();
  };

  // const handleChangeReduxState = () => {
  //   dispatch({ type: AGENCY_AGENTS_LIST_SUCCESS, payload: null });
  // };

  useEffect(() => {
    if (agencyId) {
      dispatch(getAgencyAgentsListAction(agencyId, 1, 10000));
    }
  }, [agencyId]);

  return (
    <>
      <Modal
        title="Agency Agents"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" onClick={handleCancel} className="customBtn">
            Close
          </Button>,
        ]}
        width={1000}
      >
        <Table dataSource={agencyAgentsList?.items || []} pagination={false}>
          <Column
            title="Profile"
            dataIndex="agentProfile"
            key="agentProfile"
            render={(item) => (
              <Avatar
                src={
                  <Image
                    src={
                      item.profilePictureUrl ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    }
                    style={{
                      width: 32,
                    }}
                  />
                }
              />
            )}
          />
          <Column
            title="Name"
            dataIndex="agentProfile"
            key="agentProfile"
            render={(item) => `${item.firstName} ${item.lastName}` || "-"}
          />

          <Column
            title="Email"
            dataIndex="agentProfile"
            key="agentProfile"
            render={(item) => item.user.email || "-"}
          />
          <Column
            title="Experience"
            dataIndex="agentProfile"
            key="agentProfile"
            render={(item) => item.experience || "-"}
          />
          {/* 
          <Column
            title="Country"
            dataIndex="country"
            key="country"
            render={(item) => item.title}
          />
          <Column
            title="City"
            dataIndex="city"
            key="city"
            render={(item) => item.title}
          /> */}
          <Column
            title="CNIC"
            dataIndex="agentProfile"
            key="agentProfile"
            render={(item) => item.user.cnic || "-"}
          />
          <Column
            title="Phone No."
            dataIndex="agentProfile"
            key="agentProfile"
            render={(item) => item.user.phone || "-"}
          />
        </Table>
      </Modal>
    </>
  );
};

export default ModalAgencyAgents;
