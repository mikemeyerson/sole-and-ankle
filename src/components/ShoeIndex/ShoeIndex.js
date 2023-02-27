import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <>
      <Header>
        <LeftColumn>
          <Breadcrumbs>
            <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
          </Breadcrumbs>
        </LeftColumn>
        <Title>Running</Title>
        <SelectWrapper>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </SelectWrapper>
      </Header>
      <Wrapper>
        <MainColumn>
          <Spacer size={34} />
          <ShoeGrid />
        </MainColumn>
        <LeftColumn>
          <Spacer size={42} />
          <ShoeSidebar />
        </LeftColumn>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex: 0 0 248px;
`;

const MainColumn = styled.div`
  flex: 1 1 auto;
`;

const Header = styled.header`
  align-items: baseline;
  display: flex;
  gap: 32px;
`;

const SelectWrapper = styled.div`
  margin-left: auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
