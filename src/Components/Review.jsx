import React from "react";

function Review() {
  const reviewDatas = [
    {
      num1: "01",
      num2: "02",
      title1: "Your brief",
      title2: "Research",
      class1: "review-count mx-3 my-1 reviewColor1",
      class2: "review-count mx-3 my-1 reviewColor2",
    },
    {
      num1: "03",
      num2: "04",
      title1: "Concept Design",
      title2: "Revision #01",
      class1: "review-count mx-3 my-1 reviewColor3",
      class2: "review-count mx-3 my-1 reviewColor4",
    },
    {
      num1: "05",
      num2: "06",
      title1: "Review #01",
      title2: "Revision #02",
      class1: "review-count mx-3 my-1 reviewColor5",
      class2: "review-count mx-3 my-1 reviewColor6",
    },
    {
      num1: "07",
      num2: "08",
      title1: "Revision #02",
      title2: "Revision#03",
      class1: "review-count mx-3 my-1 reviewColor7",
      class2: "review-count mx-3 my-1 reviewColor8",
    },
  ];
  return (
    <>
      {reviewDatas.map((data, index) => {
        return (
          <>
            <div className="col my-1 d-flex align-content-center justify-content-center">
              <span className={data.class1}>{data.num1}</span>
              <div className="">
                <h6>{data.title1}</h6>
                <p>
                  I always professional <br />
                  Workflow and provide
                </p>
              </div>
            </div>

            <div className="col my-1 d-flex align-content-center justify-content-center">
              <span className={data.class2}>{data.num2}</span>
              <div className="">
                <h6>{data.title2}</h6>
                <p>
                  I always professional <br />
                  Workflow and provide
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Review;
