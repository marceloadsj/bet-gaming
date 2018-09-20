import React, { Fragment } from "react";
import { UncontrolledTooltip } from "reactstrap";
import Icon from "domains/general/Icon";

export default () => {
  return (
    <Fragment>
      <Icon icon="info-circle" id="multiSearchInfo" />
      <UncontrolledTooltip target="multiSearchInfo">
        You can use the ';' character to do multiple searchs at once!
      </UncontrolledTooltip>
    </Fragment>
  );
};
