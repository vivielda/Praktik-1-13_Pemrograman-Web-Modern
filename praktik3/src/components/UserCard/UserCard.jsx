import React from 'react';
import Button from '../Button/Button';
import './UserCard.css';

const UserCard = ({user, onEdit, onDelete}) => {
  // Destructuring user object
  const {
    id,
    name,
    email,
    role = 'User', // default value
    avatar,
    isActive = true
  } = user;

 return (
    <div className={`user-Card ${!isActive ? 'inactive' : ''}`}>
      {/* Avatar user */}
      <div className="user-avatar">
        <img src={avatar} alt={name} />
        {isActive && <span className="status-indicator" />}
      </div>

      {/* Informasi user */}
      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        <p className="user-email">{email}</p>
        <span className={`user-role role-${role.toLowerCase()}`}>
          {role}
        </span>
      </div>

      {/* Tombol aksi (sejajar di kanan) */}
      <div className="user-actions">
        <button className="btn-edit" onClick={() => onEdit(id)}>Edit</button>
        <button className="btn-delete" onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default UserCard;