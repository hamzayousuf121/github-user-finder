import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

const UserCard = (props) => {
  const { avatar_url, created_at, public_repos, name, location, bio } = props.userRecord;
  return (
      <center>
    <div className="mt-2 col-sm-12 col-md-6 col-lg-6" >
      {props.userExist &&
      <>
        <h1>Github User</h1>
        <Card>
        <CardImg top className="userImg img-fluid" src={avatar_url} alt="Card image cap" />
        <CardBody className="text-left">
          <CardTitle tag="h5"><b>User Name :</b> {name}</CardTitle>
          <CardText><b>Location :  </b>{location}</CardText>
          <CardText><b>Description :</b> {bio}</CardText>
          <CardText><b>Repository :</b> {public_repos}</CardText>
          <CardText><b>Created_at :</b> {new Date(created_at).toDateString()}</CardText>
        </CardBody>
      </Card> 
      </>
      }    
    </div>
    </center>
  ); 
};

export default UserCard;