import React from "react";

function IconStrip({ Strip }) {
  return (
    <section className="bg-primary ">
      <div className="xl:container ">
        <div id="iconstrip" className=" p-3  ">
          <div className="">
            <div
              id="iconstrip-container"
              className="grid grid-cols-2 gap-3 md:grid-cols-4 "
            >
              {Strip.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center md:justify-center"
                >
                  <img
                    src={item.path}
                    alt={item.content}
                    className="w-[30px]"
                  />
                  <span className="text-sm font-semibold text-white ">
                    {item.content}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IconStrip;
