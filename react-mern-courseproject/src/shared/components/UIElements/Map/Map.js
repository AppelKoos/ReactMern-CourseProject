import React, { useRef, useEffect } from 'react';

import './Map.css';

const Map = props => {
    const mapRef = useRef();

    const { center, zoom } = props;

    useEffect(() => {
        console.log('#1' + center, zoom)
        const map = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom
        });
        console.log('#2' + center, zoom)
        new window.google.maps.Marker({ position: center, map: map });
        console.log('#3' + center, zoom)
    }, [center, zoom]);

    return (
        <div
            ref={mapRef}
            className={`map ${props.className}`}
            style={props.style}
        ></div>
    );
};

export default Map;
