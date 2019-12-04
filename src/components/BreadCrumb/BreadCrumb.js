import React from 'react';
import {
  arrayOf,
  shape,
  string,
} from 'prop-types';
import { ChevronRight } from 'components/SvgIcons';
import {
  StyledBreadCrumbContainer,
  StyledBreadCrumb,
  StyledBreadCrumbItem,
  StyledBreadCrumbItemIcon,
} from './style';


const propTypes = {
  items: arrayOf(
    shape({
      label: string.isRequired,
      url: string,
    }),
  ).isRequired,
};

const BreadCrumb = ({
  items,
}) => {
  const renderItems = () => {
    const breadCrumbItems = [];
    if (!items) {
      return [];
    }
    items.forEach((item, i) => breadCrumbItems.push(
      <StyledBreadCrumbItem key={`breadCrumbItem-${i}`}>
        {item.url && <a href={item.url}>{item.label}</a>}
        {!item.url && <span>{item.label}</span>}
        {(i < items.length - 1) && (
          <StyledBreadCrumbItemIcon>
            <ChevronRight />
          </StyledBreadCrumbItemIcon>
        )
        }
      </StyledBreadCrumbItem>,
    ));

    return breadCrumbItems;
  };

  return (
    <StyledBreadCrumbContainer>
      <StyledBreadCrumb>
        {renderItems()}
      </StyledBreadCrumb>
    </StyledBreadCrumbContainer>
  );
};

BreadCrumb.propTypes = propTypes;

export default BreadCrumb;
