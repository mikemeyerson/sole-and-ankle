import React from "react";
import styled, { css } from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  const isSale = typeof salePrice === "number";
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = isSale
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
          {variant === "new-release" && (
            <NewReleaseBanner>Just released!</NewReleaseBanner>
          )}
          {variant === "on-sale" && <SaleBanner>Sale</SaleBanner>}
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price isSale={isSale}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
          {isSale && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Banner = styled.div`
  border-radius: 2px;
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.bold};
  font-size: ${14 / 16}rem;
  /* Could vertically center this using line-height */
  padding: 8px;
  position: absolute;
  top: 12px;
  right: -4px;
`;

const NewReleaseBanner = styled(Banner)`
  background: ${COLORS.secondary};
`;

const SaleBanner = styled(Banner)`
  background: ${COLORS.primary};
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  /* Better to put this as a ShoeCardWrapper in ShoeGrid to make this more reusable */
  flex: 1 0 240px;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  ${({ isSale }) =>
    isSale &&
    css`
      color: ${COLORS.gray[700]};
      text-decoration: line-through;
    `}
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
