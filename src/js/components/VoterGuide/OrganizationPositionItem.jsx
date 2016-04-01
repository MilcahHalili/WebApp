import StarAction from "../../components/StarAction";
import React, { Component, PropTypes } from "react";
import { Link } from "react-router";

export default class OrganizationPositionItem extends Component {
  static propTypes = {
    position: PropTypes.object.isRequired
  };

  render (){
    let { ballot_item_display_name,
      kind_of_ballot_item,
      vote_smart_rating,
      ballot_item_we_vote_id,
      ballot_item_image_url_https } = this.props.position;

    return (
      <li className="list-group-item">
          <StarAction we_vote_id={ballot_item_we_vote_id} type={kind_of_ballot_item} />
          <Link to="ballot_candidate_one_org_position" params={{id: 2, org_id: 27}} />
          {/*<i className="icon-icon-add-friends-2-1 icon-light icon-medium" />*/}
          {
            ballot_item_image_url_https ?
              <img
                className="img-circle"
                style={{display: "block", paddingTop: "10px", width: "100px"}}
                src={ballot_item_image_url_https}
                alt="candidate-photo"/> :
            <i className="icon-lg icon-main icon-icon-person-placeholder-6-1 icon-light"/>
          }
          &nbsp;<span> rates </span>
          {ballot_item_display_name} {vote_smart_rating} %
          <br />
          {/*Running for {office_display_name}
          <br />
            Integer ut bibendum ex. Suspendisse eleifend mi accumsan, euismod enim at, malesuada nibh.
            Duis a eros fringilla, dictum leo vitae, vulputate mi. Nunc vitae neque nec erat fermentum... (more)
          <br />*/}
        </li>
    );
  }
}