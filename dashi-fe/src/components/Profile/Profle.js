import React from 'react';

import logo from './logo.png';

import './Profile.css';

const Profile = (props) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', time: 'numeric' };

    return (
        <>
            <div>
                <p className="profile">Profile</p>
                <hr />
            </div>

            <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button id="close" type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-img">
                            <img src={logo}></img>
                        </div>
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalLabel">Edit profile</h4>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="form-group">
                                    <input type="text" id="username" name="username" placeholder="Username" onChange={props.onChange} className="form-control form-control-lg" />
                                </div>
                                <div className="form-group">
                                    <input type="email" id="email" name="email" placeholder="Email" onChange={props.onChange} className="form-control form-control-lg" />
                                </div>
                                <div className="form-group">
                                    <input type="text" id="edit-photo" name="profile_photo" placeholder="Profile picture" onChange={props.onChange} className="form-control form-control-lg" />
                                </div>
                                <button id="profile-edit-modal" onClick={props.onSubmit} className="btn active" aria-pressed="true" data-toggle="modal" data-target="#editModal">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img className="profile-photo" src={props.profile.profile_photo} alt="profile photo" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <p className="greeting"> Welcome {props.profile.username}!</p>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>E-mail: {props.profile.email}</p>
                    </div>
                    <div className="col-md-6">
                        <p>Joined on: {new Date(props.profile.join_date).toLocaleDateString("en-US", options)}</p>
                    </div>
                </div>
                <div className="row">
                    <button id="profile-edit-btn" className="btn active" aria-pressed="true" data-toggle="modal" data-target="#editModal">Edit profile</button>
                </div>
            </div>
        </>
    )
}

export default Profile;
