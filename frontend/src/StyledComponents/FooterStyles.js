// FooterStyles.js
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #f9f9f9;
  padding: 40px 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  min-width: 200px;

  h4 {
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: bold;
  }

  a {
    margin-bottom: 8px;
    text-decoration: none;
    color: #333;
    font-size: 14px;

    &:hover {
      color: #6200ea;
    }
  }
`;

export const AppDownloadSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 10px 0;
    width: 150px;
  }
`;

export const SocialMediaSection = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;

  a {
    color: #333;
    font-size: 20px;

    &:hover {
      color: #6200ea;
    }
  }
`;
