import styled from 'styled-components';
import { colors, fontFamily } from 'theme';

const StyledBreadCrumbContainer = styled.div`
  ${fontFamily}

  font-size: 18px;
  font-weight: 600;
`;

const StyledBreadCrumb = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 15px 0;
  padding: 0;
`;

const StyledBreadCrumbItem = styled.li`
  display: flex;

  a {
    color: ${colors.lightMain};
  }

  span {
    color: ${colors.greenMain};
  }
`;

const StyledBreadCrumbItemIcon = styled.div`
  width: 12px;
  margin: 0 10px;
  svg {
    fill: ${colors.lightMain};
  }
`;


export {
  StyledBreadCrumbContainer,
  StyledBreadCrumb,
  StyledBreadCrumbItem,
  StyledBreadCrumbItemIcon,
};
