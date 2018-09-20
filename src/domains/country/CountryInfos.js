import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchCountryByCode } from "domains/country/actions/fetchCountryByCode";
import Loader from "domains/general/Loader";
import Svg from "domains/general/Svg";

const countryInfosMap = {
  Name: ({ flag, name }) => (
    <Fragment>
      <Svg svg={flag} name={name} /> {name}
    </Fragment>
  ),

  "Code [alpha3Code]": "alpha3Code",

  Region: ({ region, subregion }) =>
    `${region || "Not Found"} - ${subregion || "Not Found"}`,

  Capital: "capital",
  Population: "population",

  Languages: ({ languages = ["Not Found"] }) =>
    languages.map(language => language.name).join(", "),

  Currencies: ({ currencies = ["Not Found"] }) =>
    currencies
      .map(currency => `${currency.symbol} - ${currency.name}`)
      .join(", "),

  "Top Level Domains": ({ topLevelDomain = ["Not Found"] }) =>
    topLevelDomain.join(", ")
};

class CountryInfos extends PureComponent {
  static propTypes = {
    code: PropTypes.string.isRequired,
    country: PropTypes.object,
    fetchCountryByCode: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired
  };

  state = {};

  static getDerivedStateFromProps(props, state) {
    if (state.code !== props.code) {
      props.fetchCountryByCode(props.code);
      return { code: props.code };
    }

    return null;
  }

  renderText(label, info) {
    return (
      <div className="mb-1" key={label}>
        <span className="font-weight-bold small">{label}: </span> {info}
      </div>
    );
  }

  render() {
    if (this.props.fetching) return <Loader />;

    return Object.keys(countryInfosMap).map(key => {
      const infoMap = countryInfosMap[key];
      let value;

      if (typeof infoMap === "string") {
        value = this.props.country[infoMap] || "Not Found";
      } else if (typeof infoMap === "function") {
        value = infoMap(this.props.country);
      }

      return this.renderText(key, value);
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    country: state.country.list[ownProps.code],
    fetching: state.country.fetchingCountryByCode
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCountryByCode }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryInfos);
