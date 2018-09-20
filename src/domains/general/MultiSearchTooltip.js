import React, { Fragment } from "react";
import { UncontrolledTooltip } from "reactstrap";
import Icon from "domains/general/Icon";

export default () => {
  return (
    <Fragment>
      <Icon icon="info-circle" id="countryCountriesTableInfo" />
      <UncontrolledTooltip target="countryCountriesTableInfo">
        You can use the ';' character to do multiple searchs at once!
      </UncontrolledTooltip>
    </Fragment>
  );
};
