/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  func,
} from 'prop-types';
import helpers from 'helpers';
import Select from 'components/Select';
import CheckBox from 'components/CheckBox';
import { SVGFilter, SVGClose } from 'components/SvgIcons';
import { resetFilters, updateFilters } from './actions';
import constants from '../../constants';
import {
  StyledFieldFilter,
  FilterField,
  StyledFieldFilterTitle,
  FilterSeparator,
  StyledFieldFilterContainer,
  StyledOpenLabel,
  StyledCloseLabel,
  StyledFieldFilterBox,
} from './style';

const {
  generateRandomHash,
} = helpers;

const defaultProps = {
};

const propTypes = {
  resetFilters: func.isRequired,
};

const fieldTypes = constants.FIELD_TYPES;

class FieldFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      estado: null,
      fieldTypes,
    };

    this.props = props;

    this.updateMountedFilter = this.updateMountedFilter.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);

    this.selectCidadeRef = React.createRef();
  }

  componentDidMount () {
    this.props.resetFilters();
  }

  mountFilterObject() {
    const estado = this.state.estado;
    const cidade = this.state.cidade;
    const fieldTypesFilter = this.state.fieldTypes;

    return {
      estado,
      cidade,
      fieldTypesFilter,
    };
  }

  updateMountedFilter() {
    const filters = this.mountFilterObject();
    this.props.updateFilters(filters);
  }

  toggleFilter() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const estados = {
      SP: {
        nome: 'São Paulo',
        uf: 'SP',
        cidades: {
          atibaia: { nome: 'Atibaia', slug: 'atibaia' },
          cajamar: { nome: 'Cajamar', slug: 'cajamar' },
          'embu-das-artes': { nome: 'Embu das Artes', slug: 'embu-das-artes' },
          guarulhos: { nome: 'Guarulhos', slug: 'guarulhos' },
          itapevi: { nome: 'Itapevi', slug: 'itapevi' },
          itatiba: { nome: 'Itatiba', slug: 'itatiba' },
          itupeva: { nome: 'Itupeva', slug: 'itupeva' },
          'santo-andre': { nome: 'Santo André', slug: 'santo-andre' },
          'sao-bernardo-do-campo': { nome: 'São Bernardo do Campo', slug: 'sao-bernardo-do-campo' },
          'sao-caetano': { nome: 'Sao caetano', slug: 'sao-caetano' },
          'sao-paulo': { nome: 'São Paulo', slug: 'sao-paulo' },
        },
      },
      RJ: {
        nome: 'Rio de Janeiro',
        uf: 'RJ',
        cidades: {
          'rio-de-janeiro': { nome: 'Rio de janeiro' },
        },
      },
    };    

    const filterTypesContainerId = `filterTypesContainer-${generateRandomHash}`;
    const getFieldTypesValues = () => {
      const els = document.querySelectorAll(`#${filterTypesContainerId} [name=fieldTypes]`);
      const fieldTypesValues = [];
      els.forEach((el) => {
        if (el.checked) {
          fieldTypesValues.push(el.value);
        }
      });
      return fieldTypesValues;
    };
    const onChangeFieldTypes = () => {
      const ftChecked = getFieldTypesValues();
      this.setState({
        fieldTypes: ftChecked,
      }, () => {
        this.updateMountedFilter();
      });
    };
    const renderFieldTypes = () => {
      const fieldTypesContent = [];
      fieldTypes.forEach((fieldType, key) => fieldTypesContent.push(
        <FilterField key={`fieldTypeFilter-${key}`}>
          <CheckBox label={fieldType} value={fieldType} name="fieldTypes" onChange={onChangeFieldTypes} />
        </FilterField>,
      ));

      return (
        <div id={filterTypesContainerId}>
          {fieldTypesContent}
        </div>
      );
    };

    const selectProps = {
      estado: {
        label: 'Por estado',
        defaultItem: {
          value: '',
          label: 'Selecione um estado...',
        },
        items: Object.keys(estados).map(uf => ({
          label: estados[uf].nome,
          value: uf,
        })),
        onChange: (event) => {
          this.setState({
            estado: estados[event.currentTarget.value],
            cidade: null,
          }, () => {
            this.updateMountedFilter();
          });
        },
      },
      cidade: {
        label: 'Por cidade',
        value: this.state.cidade ? this.state.cidade.slug : '',
        defaultItem: {
          value: '',
          label: this.state.estado === null ? 'Primeiro selecione um estado...' : 'Selecione uma cidade...',
        },
        items: this.state.estado ? 
          Object.keys(this.state.estado.cidades).map(cidade => ({
            label: this.state.estado.cidades[cidade].nome,
            value: cidade,
          }))
          : [],
        disabled: this.state.estado === null,
        onChange: (event) => {
          this.setState({
            cidade: this.state.estado.cidades[event.currentTarget.value],
          }, () => {
            this.updateMountedFilter();
          });
        }
      }
    }

    return (
      <StyledFieldFilter>
        <StyledOpenLabel htmlFor="toggleFilterCheck">
          <SVGFilter />
          Filtrar campos
        </StyledOpenLabel>
        <StyledFieldFilterBox open={this.state.open}>
          <input type="checkbox" id="toggleFilterCheck" onChange={this.toggleFilter} />
          <StyledFieldFilterContainer>
            <StyledCloseLabel htmlFor="toggleFilterCheck">
              Fechar
              <SVGClose />
            </StyledCloseLabel>
            <StyledFieldFilterTitle>Filtre os campos</StyledFieldFilterTitle>
            <FilterField>
              <Select {...selectProps.estado} />
            </FilterField>
            <FilterField>
              <Select {...selectProps.cidade} />
            </FilterField>
            <FilterSeparator />
            <StyledFieldFilterTitle>Filtre por Tipo</StyledFieldFilterTitle>
            {renderFieldTypes()}
          </StyledFieldFilterContainer>
        </StyledFieldFilterBox>
      </StyledFieldFilter>
    );
  }
};
FieldFilter.defaultProps = defaultProps;
FieldFilter.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  resetFilters: () => dispatch(resetFilters()),
  updateFilters: (filters) => dispatch(updateFilters(filters)),
});
export default connect(
  null,
  mapDispatchToProps
)(FieldFilter)


/*
export const mapStateToProps = state => ({
  ...state.blogPostReducer,
});

export const mapDispatchToProps = dispatch => ({
  loadBlogPost: () => dispatch(fetchBlogPost()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withJob({
    work: props => props.loadBlogPost(),
    LoadingComponent: () => <BlogAdSkeleton />,
  }),
)(BlogAd);
*/