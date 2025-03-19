import React, { useCallback } from "react";
import { WhatsAppOutlined, InstagramOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateStatusDropdown } from "../../redux/reducers/Dropdown_reducer";
function TabSections() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.dropdown?.status);
  const updateStautsDropdown = useCallback(
    (params) => {
      dispatch(updateStatusDropdown());
    },
    [state]
  );
  const datas = [
    {
      id: 1,
      name: "WhatsApp",
      image: <WhatsAppOutlined />,
    },
    {
      id: 2,
      name: "WhatsApp",
      image: <InstagramOutlined />,
    },
    {
      id: 3,
      name: "facebook",
      image: <i class="fa-brands fa-facebook-f"></i>,
    },
    {
      id: 4,
      name: "VsCode",
      image: <i class="fa-solid fa-code"></i>,
    },
  ];
  return (
    <div className="tabs">
      <div onClick={updateStautsDropdown} className="cursor fs-2">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
      {state && (
        <div className="tap-box-show">
          {datas?.map((item, index) => {
            return (
              <div className="tab-box mt-2 mb-2">
                <div className="image-tab">{item?.image}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TabSections;
