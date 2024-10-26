import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 10px 16px rgba(0, 0, 0, 0.3);
`;

export const StyledProfileName = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const EditOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const HiddenFileInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const ProfileDetails = styled.div`
  text-align: center;
`;

export const ProfileName = styled.h2`
  font-size: 24px;
  margin: 0;
  color: #333;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const GridItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-5px);
  }
`;
