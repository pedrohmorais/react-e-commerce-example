import React from 'react';
import axios from 'axios';
import FieldCard from 'components/FieldCard';
import Container from 'components/Container';
import BreadCrumb from 'components/BreadCrumb';
import FieldFilter from 'components/FieldFilter';
import { connect } from 'react-redux';
import { compose } from 'redux';
import constants from '../../src/constants';

import {
  StyledCamposPage,
  StyledFieldsContainer,
  StyledMain,
  StyledFilter,
  StyledBreadCrumbContainer,
  StyledNoFieldsMessage,
  StyledInformationBlock,
} from './styleCampos';

class CamposPage extends React.Component {
  static async getInitialProps() {
    const url = `${constants.API_URL}/fields`;
    const res = await axios.get(url, {
      headers: {
        'app-request-token': constants.API_TOKEN,
      },
    });
    return { fields: res.data.data };
  }

  constructor(props) {
    super(props);


    this.state = {
      fields: props.fields,
      filters: props.filterProps,
      fieldContainerIsVisible: true,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.filterProps !== prevProps.filterProps) {
      this.setState({
        fieldContainerIsVisible: false,
        filters: this.props.filterProps,
      }, () => {
        this.setState({
          fields: this.filterFields(),
        });
      });
      setTimeout(() => {
        this.setState({
          fieldContainerIsVisible: true,
        });
      }, 300);
    }
  }

  filterFields() {
    const { filters } = this.state.filters;
    const { fields } = this.props;
    let newFields = fields;

    if (!filters) {
      return newFields;
    }

    if (filters.estado) {
      newFields = newFields.filter(field => field.estado === filters.estado.uf);
    }

    if (filters.cidade) {
      newFields = newFields.filter(field => field.cidade === filters.cidade.nome);
    }

    if (filters.fieldTypesFilter && filters.fieldTypesFilter[0] && !filters.fieldTypesFilter[6]) {
      filters.fieldTypesFilter.forEach((fieldType) => {
        newFields = newFields.filter(field => field.fieldTypes.includes(fieldType));
      });
    }

    return newFields;
  }

  render() {
    const breadCrumbProps = {
      items: [
        {
          url: '/',
          label: 'Home',
        },
        {
          label: 'Campos',
        },
      ],
    };

    const renderFieldBlock = (field, i) => (
      <div key={i}>
        <FieldCard {...field} />
      </div>
    );

    
    const renderNoFieldsMessage = () => {
      const hasFields = this.state.fields[0];

      if (hasFields) {
        return null;
      }

      return (
        <StyledNoFieldsMessage>
          Infelizmente não foram encontrados campos com este filtro.
        </StyledNoFieldsMessage>
      );
    };

    return (
      <StyledCamposPage>
        <Container>
          <StyledBreadCrumbContainer>
            <BreadCrumb {...breadCrumbProps} />
          </StyledBreadCrumbContainer>
        </Container>
        <Container>
          <StyledFilter>
            <FieldFilter />
          </StyledFilter>
          <StyledMain>
            <StyledInformationBlock>
              <h1>Campos de airsoft</h1>
              <h2>
                Veja aqui os campos de airsoft da sua região.
              </h2>
              <p>
                Caso não encontre o campo que procura,
                <a
                  href={constants.FORM_CAMPOS}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' clique aqui'}
                </a>
                {' e ajude-nos na nossa pesquisa sobre os campos de airsoft do Brasil.'}
              </p>
            </StyledInformationBlock>
            <StyledFieldsContainer visibility={this.state.fieldContainerIsVisible.toString()}>
              {this.state.fields.map((field, i) => renderFieldBlock(field, i))}              
            </StyledFieldsContainer>
            {renderNoFieldsMessage()}
          </StyledMain>
        </Container>
      </StyledCamposPage>
    );
  }
}

export const mapStateToProps = state => ({
  filterProps: state.shopCartReducer,
});

// export const mapDispatchToProps = dispatch => ({
//   loadQQuercoisa: () => dispatch(fetchQquercoisa()),
// });


export default compose(
  connect(mapStateToProps, null),
  // withJob({
  //   work: props => props.loadQQuercoisa(),
  //   LoadingComponent: () => <BlogAdSkeleton />,
  // }),
)(CamposPage);
