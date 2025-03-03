import React from "react";

function TabSections() {
  const datas = [
    {
      id: 1,
      name: "WhatsApp",
      image: <i class="fa-brands fa-whatsapp"></i>,
    },
    {
      id: 1,
      name: "WhatsApp",
      image: <i class="fa-brands fa-instagram"></i>,
    },
  ];
  return (
    <div className="tabs">
      {datas?.map((item, index) => {
        return (
          <div className="tab-box">
            <div className="image-tab">
              {item?.image}
            </div>
            {/* <div className="f-h6 cancel fw-medium">{item?.name}</div> */}
          </div>
        );
      })}
    </div>
  );
}

export default TabSections;
