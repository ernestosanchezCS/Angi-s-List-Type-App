import React, { useState } from "react";
import styled from "styled-components";
import BusinessForm from "./BusinessForm";

export default function AddBusiness() {
  const [businessAdded, setBusinessAdded] = useState(false);

  return (
    <div>
      <div id="includeBusiness-wrapper">
        <label htmlFor="addBusiness">Would you like to add a business?</label>
        <input
          name="addBusiness"
          type="checkbox"
          id="addBusiness"
          onClick={(e) => setBusinessAdded(!businessAdded)}
        />
      </div>
      {businessAdded ? <BusinessForm></BusinessForm> : null}
    </div>
  );
}

const BusinessSection = styled.article``;
