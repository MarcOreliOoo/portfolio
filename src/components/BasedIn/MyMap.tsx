"use client";
import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import L from "leaflet";

const MapPlaceholder = () => {
	return (
		<p>
			Map of London.{" "}
			<noscript>You need to enable JavaScript to see this map.</noscript>
		</p>
	);
};

const MyMap = ({ height }: { height?: number }) => {
	const displayMap = useMemo(() => {
		const position = { lat: 48.83576965332031, lng: 2.241274356842041 };
		const customIcon = new L.Icon({
			iconUrl: "/moi.png",
			iconSize: [50, 50], // Size of the icon
			iconAnchor: [25, 25], // Point of the icon which will correspond to marker's location
			popupAnchor: [0, -25], // Point from which the popup should open relative to the iconAnchor
			className: "leaflet-div-icon rounded-full",
		});
		return (
			<MapContainer
				center={position}
				zoom={13}
				scrollWheelZoom={true}
				style={{
					height: "100%",
					width: "100%",
					borderRadius: "1.5rem",
					colorScheme: "dark",
				}}
				z-index={1}
				placeholder={<MapPlaceholder />}
				className="my-map-container"
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution=""
				/>
				<Marker position={position} icon={customIcon} />
			</MapContainer>
		);
	}, []);

	return (
		<div
			className={`h-[${
				height && height > 0 ? height : 346
			}px] w-full bg-secondary text-secondary-foreground rounded-3xl border border-secondary p-4 flex flex-col items-start justify-evenly gap-8 md:justify-start`}
		>
			<h1 className="text-3xl leading-8 font-semibold">I{"'"}m there!</h1>
			{displayMap ?? null}
		</div>
	);
};
export default MyMap;
