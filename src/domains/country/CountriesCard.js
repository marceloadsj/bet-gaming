import React, { PureComponent } from "react";
import { Card, CardHeader, CardBody, CardText } from "reactstrap";
import Icon from "domains/general/Icon";
import CountriesTable from "./CountriesTable";

class CountriesCard extends PureComponent {
  render() {
    return (
      <Card className="shadow-lg">
        <CardHeader className="text-white">
          <h5 className="my-2">
            <Icon icon="globe-americas" className="mr-2" /> Countries List
          </h5>
        </CardHeader>

        <CardBody>
          <CardText>
            Here are the list of countries to check some informations about it!
          </CardText>
        </CardBody>

        <CardBody>
          <CountriesTable />
        </CardBody>
      </Card>
    );
  }
}

export default CountriesCard;
