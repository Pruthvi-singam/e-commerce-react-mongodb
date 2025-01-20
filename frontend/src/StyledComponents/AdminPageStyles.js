/* AdminPageStyles.js */
import styled from 'styled-components';

export const AdminContainer = styled.div`
  display: flex;

`;

/* SidebarStyles.js */
export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #1f2937;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  padding: 10px 0;
  width: 100%;
  text-align: left;
  margin-top: 10px;
  &:hover {
    background-color: #374151;
  }
`;

export const SidebarLogo = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
  color: white;
`;

/* DashboardContentStyles.js */
export const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f7f7f7;
`;

export const CardGrid = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
`;
