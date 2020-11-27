import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

const UserCard = (props) => {
  const { avatar_url, created_at, public_repos, name, location, bio } = props.userRecord;
  console.log(props.userRecord)
  return (

    <div className="offset-lg-2 col-4 mt-2 col-sm-12 col-md-6" >
      {props.userExist &&
      <>
        <h1>Github User</h1>
        <Card>
        <CardImg top width="100%" src={avatar_url} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5"><b>User Name :</b> {name}</CardTitle>
          <CardText tag="h6" className="mb-2 text-muted"><b>Location :  </b>{location}</CardText>
          <CardText><b>Description :</b> {bio}</CardText>
          <CardText><b>Repository :</b> {public_repos}</CardText>
          <CardText><b>Created_at :</b> {new Date(created_at).toDateString()}</CardText>
        </CardBody>
      </Card> 
      </>}    
    </div>
  ); 
};

export default UserCard;