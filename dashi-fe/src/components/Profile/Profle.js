import React from 'react';
import './Profile.css';

const Profile = (props) => {
    const profile = props.profile
    console.log(profile);
    return (
        <>
            <button onClick={() => props.history.goBack()}>Go Back</button>

            <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="form-group">
                                    <label htmlFor="Username">Username</label>
                                    <input type="text" id="username" name="username"  onChange={props.onChange} className="form-control form-control-lg" />
                                </div>
                                <div>
                                    <label htmlFor="email-register">Email</label>
                                    <input type="email" id="email" name="email" onChange={props.onChange} className="form-control form-control-lg" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="text">Photo</label>
                                    <input type="text" id="edit-photo" name="profile_photo"  onChange={props.onChange} className="form-control form-control-lg" />
                                </div>
                            </form>
                        </div>
                        <button onClick={props.onSubmit} className="btn btn-primary" aria-pressed="true" data-toggle="modal" data-target="#editModal">Edit</button>
                    </div>
                </div>
            </div>

            
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <img src={profile.profile_photo} alt="user" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <p> {profile.username}</p>
                </div>
                <div className="col-md-4">
                <button className="btn btn-primary btn-lg active" aria-pressed="true" data-toggle="modal" data-target="#editModal">Edit profile</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
              <p>{profile.email}</p>
                </div>
                <div className="col-md-6">
                    <p>Joined {new Date(profile.join_date).toLocaleString()}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile;
