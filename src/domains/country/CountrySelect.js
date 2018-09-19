import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import omit from "omit";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { components } from "react-select";
import Select from "domains/general/Select";
import { countriesOptions } from "domains/country/selectors";
import { fetchCountryByName } from "domains/country/actions/fetchCountryByName";

const ReactSelectOption = components.Option;
const ReactSelectSingleValue = components.SingleValue;

class CountrySelect extends Component {
  static propTypes = {
    fetchCountryByName: PropTypes.func.isRequired,
    onError: PropTypes.func,
    options: PropTypes.array.isRequired
  };

  loadOptions = async (inputValue, callback) => {
    let data;
    try {
      data = await this.props.fetchCountryByName(inputValue);
    } catch (error) {
      if (this.props.onError) this.props.onError(error);
      return;
    }

    callback(countriesOptions(data));
  };

  renderData(props) {
    return (
      <Fragment>
        <img src={props.data.icon} alt={props.data.label} width="20" />{" "}
        <span className="small">{props.data.value}</span> - {props.data.label}
      </Fragment>
    );
  }

  renderSingleValue = props => (
    <ReactSelectSingleValue {...props}>
      {this.renderData(props)}
    </ReactSelectSingleValue>
  );

  renderOption = props => (
    <ReactSelectOption {...props}>{this.renderData(props)}</ReactSelectOption>
  );

  render() {
    return (
      <Select
        async
        cacheOptions
        placeholder="Search here..."
        loadOptions={this.loadOptions}
        components={{
          Option: this.renderOption,
          SingleValue: this.renderSingleValue
        }}
        {...omit(["fetchCountryByName", "onError"], this.props)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    options: countriesOptions(state.country.list)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCountryByName }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountrySelect);
