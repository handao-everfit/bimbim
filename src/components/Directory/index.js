import React, { useState } from "react";
import MenuItem from "../MenuItem";
import "./directory.scss";

export default function Directory() {
  const [sections, setSections] = useState([
    {
      title: "BÁNH TRÁNG",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
    },
    {
      title: "KHÔ GÀ",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
    },
    {
      title: "KHÔ BÒ",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
    },
    {
      title: "CƠM CHÁY",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
    },
    {
      title: "BÁNH KẸO",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
    },
  ]);

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, size }) => (
        <MenuItem title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}
