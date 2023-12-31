import InfoCard from "@/Components/InfoCard";
import React from "react";

const InfoCards = () => {
  return (
    <div className="bg-[#00000099] backdrop-blur-md flex flex-col items-center px-28 py-10">
      <div className="flex  gap-10 ">
        <InfoCard
          subtitle_first={"No fintech experience?"}
          subtitle_second={"Don’t worry. We will take care"}
          desc={
            "Kube enables you to quickly create and launch various types of credit products, such as credit cards, Buy-Now-Pay-Later and B2B payments, by using just one API and contract. This allows for a full credit operation to be live in a matter of minutes."
          }
          title="For Fintechs"
          bgColor={"#060343"}
          gradient={"p"}
        />
        <InfoCard
          subtitle_first={"No Saas experience?"}
          subtitle_second={"We've got this covered too"}
          desc={
            "Embedded credit: Your new growth-driver Drive growth, boost your bottom-line, and delight Your customers with the capital they need to thrive. Straight from your products from your product experience."
          }
          title="For SaaS Companies"
          bgColor={"#032443"}
          gradient={"b"}
        />
        <InfoCard
          subtitle_first={"Attract more customers, "}
          subtitle_second={"lend smarter"}
          desc={
            "Utilize Kube's marketplace to access qualified small to medium-sized businesses and make quick credit decisions using Kube's credit decision-making engine. Improve your credit models by using your own customer data in combination with external sources, which will help you outcompete your competitors."
          }
          title="For Lenders"
          bgColor={"#033443"}
          gradient={"g"}
        />
      </div>
    </div>
  );
};

export default InfoCards;
