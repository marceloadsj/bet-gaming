import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Table, Form, FormGroup, Label, Input, Col } from "reactstrap";
import debounce from "debounce";
import { fetchCountries } from "domains/country/actions/fetchCountries";
import { countriesArray } from "./selectors";
import Svg from "domains/general/Svg";
import MultiSearchTooltip from "domains/general/MultiSearchTooltip";
import Loader from "domains/general/Loader";
import "./CountriesTable.css";

const countryCompare = ({ alpha3Code, name, region, subregion }, search) => {
  return (
    alpha3Code.toLowerCase().includes(search) ||
    name.toLowerCase().includes(search) ||
    region.toLowerCase().includes(search) ||
    subregion.toLowerCase().includes(search)
  );
};

const filterCountries = (countries, search, callback) => {
  const searchs = search
    .toLowerCase()
    .split(";")
    .map(search => search.trim())
    .filter(search => search);

  let filteredCountries = countries;

  if (search) {
    filteredCountries = countries.filter(country => {
      return searchs.some(search => countryCompare(country, search));
    });
  }

  if (callback) callback(filteredCountries);

  return filteredCountries;
};

const debouncedFilterCountries = debounce(filterCountries, 300);

class CountriesCard extends PureComponent {
  static propTypes = {
    countries: PropTypes.array.isRequired,
    fetchCountries: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired
  };

  state = {
    search: "",
    countries: [],
    filteredCountries: []
  };

  static getDerivedStateFromProps(props, state) {
    if (state.countries !== props.countries) {
      return {
        countries: props.countries,
        filteredCountries: filterCountries(props.countries, state.search)
      };
    }

    return null;
  }

  onChange = event => {
    const search = event.target.value;

    debouncedFilterCountries(
      this.props.countries,
      search,
      filteredCountries => {
        this.setState({ filteredCountries });
      }
    );

    this.setState({ search });
  };

  componentDidMount() {
    this.props.fetchCountries();
  }

  renderTr = country => {
    return (
      <tr key={country.alpha3Code}>
        <td>{country.alpha3Code}</td>

        <td>
          <Svg svg={country.flag} name={country.name} />
        </td>

        <td>{country.name}</td>
        <td>{country.region}</td>
        <td>{country.subregion}</td>
      </tr>
    );
  };

  renderTable() {
    if (!this.props.countries.length || this.props.fetching) return <Loader />;

    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Flag</th>
            <th>Name</th>
            <th>Region</th>
            <th>Sub Region</th>
          </tr>
        </thead>

        <tbody>{this.state.filteredCountries.map(this.renderTr)}</tbody>
      </Table>
    );
  }

  render() {
    return (
      <Fragment>
        <Form>
          <FormGroup row>
            <Label sm="auto" for="countrySearchInput">
              Filter the Countries here <MultiSearchTooltip />:
            </Label>

            <Col>
              <Input
                disabled={!this.props.countries.length || this.props.fetching}
                value={this.state.search}
                id="countrySearchInput"
                placeholder="Type here..."
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>
        </Form>

        <div className="country-countries-table">{this.renderTable()}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: countriesArray(state.country.list),
    fetching: state.country.fetchingCountries
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCountries }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesCard);
