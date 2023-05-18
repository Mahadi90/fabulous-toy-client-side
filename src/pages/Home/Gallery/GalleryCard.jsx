import React from 'react';

const GalleryCard = ({gallery}) => {

  const { title, image_url } = gallery;

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img className='w-full h-64 rounded' src={image_url} alt="Car toys" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>   
        </div>
      </div>
    );
};

export default GalleryCard;