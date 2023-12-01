import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div>
        <Helmet>
          <title>{`${title} | IndoThai News`}</title>
          <meta name="description" content="IndoThai News" />
        </Helmet>
        <div className="section-center">
          <h1 className="path-heading">
            <Link to="/" style={{}}>
              Home
            </Link>
            {product && <Link to="/products">/ Products</Link>}/ {title}
          </h1>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--color-blue-shade1);
  width: 100%;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  ${"" /* color: var(--color-white); */}
  color: #173658;
  a {
    color: #dae7f5;
    ${"" /* color: var(--color-white); */}
    text-decoration: none;
    padding: 0.5rem;
    font-weight: 600;
    transition: var(--transition);
  }
  a:hover {
    color: var(--color-white);
  }
  @media screen and (max-width: 420px) {
    .path-heading {
    }
  }
`;

export default PageHero;
