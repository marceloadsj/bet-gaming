import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import omit from "omit";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { components } from "react-select";
import debounce from "debounce";
import Select from "domains/general/Select";
import { countriesOptions } from "domains/country/selectors";
import { fetchCountryByName } from "domains/country/actions/fetchCountryByName";
import Svg from "domains/general/Svg";

const ReactSelectOption = components.Option;
const ReactSelectSingleValue = components.SingleValue;

class CountrySelect extends PureComponent {
  static propTypes = {
    fetchCountryByName: PropTypes.func.isRequired,
    onError: PropTypes.func,
    options: PropTypes.array.isRequired
  };

  fetchCountryByName = debounce(async (name, callback) => {
    let data;
    try {
      data = await this.props.fetchCountryByName(name);
    } catch (error) {
      if (this.props.onError) this.props.onError(error);
      return;
    }

    callback(countriesOptions(data));
  }, 300);

  loadOptions = (inputValue, callback) => {
    if (!inputValue) return new Promise.resolve(this.props.options);
    this.fetchCountryByName(inputValue, callback);
  };

  renderData({ data: { icon, label, value } }) {
    return (
      <Fragment>
        <Svg svg={icon} name={value} /> <span className="small">{value}</span> -{" "}
        {label}
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
