import React from 'react';
import Cart from '../../public/img/carrito-de-compras.png';
import Customer from '../../public/img/customer.png';
import Data from '../../public/img/data-analytics.png';
import Manager from '../../public/img/manager.png';
import IsoTypeWhite from '../../public/img/isoTipo.png';
import IsoTypeBlack from '../../public/img/isoTipo-black.png';
import LogoGoogle from '../../public/img/simbolo-de-google.png';
import NoPhoto from '../../public/img/product-no-photo.png';

const imageMap = {
    Cart,
    Customer,
    Data,
    Manager,
    IsoTypeBlack,
    IsoTypeWhite,
    LogoGoogle,
    NoPhoto
};

export const ImageComponent = (props: { image: keyof typeof imageMap, desc: string }) => {
    const { image, desc } = props;
    const imagePath = imageMap[image];

    return <img src={imagePath.src} alt={desc} />;
};




